import requests # type: ignore
import csv
import matplotlib.pyplot as plt # type: ignore
from typing import Dict, Set
import os
import yaml # type: ignore
from flask import Flask, request, render_template, redirect, url_for, send_from_directory
from urllib.parse import urlparse

app = Flask(__name__)

# Path to the user's local GitHub CLI configuration file
config_path = os.path.expanduser('~/.config/gh/hosts.yml')

# Read the GitHub API token from the configuration file
with open(config_path, 'r') as file:
    config = yaml.safe_load(file)
    token = config['github.com']['oauth_token']

# Keywords to check in commit messages for boilerplate
keywords = ["boilerplate", "scaffolding", "scaffold", "scaff", "initial", "setup"]

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        repo_url = request.form['repo_url']
        parsed_url = urlparse(repo_url)
        path_parts = parsed_url.path.strip('/').split('/')
        if len(path_parts) == 2:
            owner, repo = path_parts
            process_repository(owner, repo)
            return redirect(url_for('results', owner=owner, repo=repo))
        else:
            return "Invalid GitHub URL", 400
    return render_template('index.html')

@app.route('/results')
def results():
    owner = request.args.get('owner')
    repo = request.args.get('repo')
    output_dir = f'{owner}_{repo}'
    return render_template('results.html', owner=owner, repo=repo, output_dir=output_dir)

@app.route('/images/<owner_repo>/<filename>')
def serve_image(owner_repo, filename):
    return send_from_directory(owner_repo, filename)

def process_repository(owner, repo):
    base_url = f'https://api.github.com/repos/{owner}/{repo}'
    headers = {
        'Authorization': f'token {token}'
    }
    script_dir = os.path.dirname(__file__)
    output_dir = os.path.join(script_dir, f'{owner}_{repo}')
    os.makedirs(output_dir, exist_ok=True)

    # Fetch commit data and write to CSV
    csv_file_name = fetch_and_write_commits(owner, repo, base_url, headers, output_dir)

    # Process the generated CSV file
    process_csv(csv_file_name, output_dir)

    # Fetch contributors data and write to CSV
    contributors_csv_file_name = fetch_and_write_contributors(owner, repo, base_url, headers, output_dir)

    # Process the contributors CSV file
    process_contributors_csv(contributors_csv_file_name, output_dir, owner, repo)

def fetch_and_write_commits(owner, repo, base_url, headers, output_dir):
    commits_url = f'{base_url}/commits'
    response = requests.get(commits_url, headers=headers)
    commits = response.json()

    csv_file_name = os.path.join(output_dir, f'{owner}_{repo}_commits.csv')
    with open(csv_file_name, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["SHA", "Author", "Author ID", "Committer", "Committer ID", "Date", "Message", "Lines Added", "Lines Deleted", "Verified", "Points"])

        for commit in commits:
            sha = commit['sha']
            author = commit['commit']['author']['name']
            author_id = commit['author']['id'] if commit['author'] else None
            committer = commit['commit']['committer']['name']
            committer_id = commit['committer']['id'] if commit['committer'] else None
            date = commit['commit']['author']['date']
            message = commit['commit']['message']

            commit_url = f'{base_url}/commits/{sha}'
            commit_response = requests.get(commit_url, headers=headers)
            commit_details = commit_response.json()

            stats = commit_details.get('stats', {})
            lines_added = stats.get('additions', 0)
            lines_deleted = stats.get('deletions', 0)

            verification = commit_details['commit'].get('verification', {})
            verified = verification.get('verified', False)

            if any(keyword in message.lower() for keyword in keywords):
                points = 5
            else:
                points = 100 + (25 * lines_added) + (50 * lines_deleted)

            if verified:
                points += 25

            if "github" in author.lower() or "bot" in author.lower():
                author_id = None
            if "github" in committer.lower() or "bot" in committer.lower():
                committer_id = None

            if author_id:
                writer.writerow([sha, author, author_id, committer, committer_id, date, message, lines_added, lines_deleted, verified, points])

    return csv_file_name

def fetch_and_write_contributors(owner, repo, base_url, headers, output_dir):
    contributors_url = f'{base_url}/contributors'
    response = requests.get(contributors_url, headers=headers)
    contributors = response.json()

    csv_file_name = os.path.join(output_dir, f'{owner}_{repo}_contributors.csv')
    with open(csv_file_name, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["Login", "ID", "Contributions"])

        for contributor in contributors:
            if contributor['type'] == 'Bot':
                continue
            login = contributor['login']
            user_id = contributor['id']
            contributions = contributor['contributions']
            writer.writerow([login, user_id, contributions])

    return csv_file_name

def process_csv(file_path: str, output_dir: str):
    points: Dict[str, int] = {}
    user_id_to_names: Dict[str, Set[str]] = {}

    with open(file_path, mode='r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            author_id = row['Author ID']
            author_name = row['Author']
            committer_id = row['Committer ID']
            committer_name = row['Committer']

            if "github" in author_name.lower() or "bot" in author_name.lower():
                author_id = None
            if "github" in committer_name.lower() or "bot" in committer_name.lower():
                committer_id = None

            if author_id:
                points[author_id] = points.get(author_id, 0) + int(row['Points'])
                if author_id not in user_id_to_names:
                    user_id_to_names[author_id] = set()
                user_id_to_names[author_id].add(author_name)

            if committer_id:
                points[committer_id] = points.get(committer_id, 0) + int(row['Points'])
                if committer_id not in user_id_to_names:
                    user_id_to_names[committer_id] = set()
                user_id_to_names[committer_id].add(committer_name)

    labels = [f"{', '.join(user_id_to_names[user_id])} ({user_id})" for user_id in points.keys()]
    scores = list(points.values())

    plt.figure(figsize=(10, 5))
    plt.pie(scores, labels=labels, autopct='%1.1f%%', startangle=140)
    plt.title('Contribution Points Distribution', loc='left')
    plt.axis('equal')

    output_file = os.path.join(output_dir, os.path.splitext(os.path.basename(file_path))[0] + '.png')
    plt.savefig(output_file)
    plt.close()

def process_contributors_csv(file_path: str, output_dir: str, owner, repo):
    contributors = []
    contributions = []

    with open(file_path, mode='r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            contributors.append(f"{row['Login']}")
            contributions.append(int(row['Contributions']))

    plt.figure(figsize=(10, 5))
    bars = plt.bar(contributors, contributions)
    plt.ylabel('Number of Contributions')
    plt.title(f'{repo} Contributors')
    plt.xticks(rotation=0)

    # Label the bars with the number of contributions
    for bar, contribution in zip(bars, contributions):
        plt.text(bar.get_x() + bar.get_width() / 2, bar.get_height(), str(contribution), ha='center', va='bottom')

    output_file = os.path.join(output_dir, f'{owner}_{repo}_contributors.png')
    plt.savefig(output_file)
    plt.close()

if __name__ == '__main__':
    app.run(debug=True)