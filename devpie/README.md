# DevPie

This front-end version of DevPie is a python flask app.

In order to run it locally you will need python3, and a working local GitHub cli API key at ~/.config/gh/hosts.yml.

To setup your local github cli follow this https://docs.github.com/en/github-cli/github-cli/quickstart.

Steps:

1. Run the flask_app.py script.

2. Open the local development server your flask app is running on.

3. Paste in a full github repo URL, such as https://github.com/Web3-Builders-Alliance/soda

The repository you use must be Public. If it is Private then you must own it, or be a collaborator of the repository to analyze it.

--- 

### Motivations

As an un-funded/bootstrapped dApp developer I needed a way to determine how to split the equity/future revenues of my dApp with the developers who helped me create it. I wanted this to be fair, in that every contributor would receive the amount of the Pie they were rightly owed. By "rightly owed" I mean that which they earned, by virtue of their contributions to the project and its success. Thus, I envisioned DevPie, designed to act as a mathematical basis for fair equity splits amongst a project's developers, based on committed code; rather than haggling over equity in a traditional sense.

It is so-far incomplete, and focuses only on committed lines of code. Non-code contributions (art, design, project management, C-Suite, marketing, etc..) are not adequately counted through DevPie, and should be considered in an alternative manner. DevPie can help with the developer side of the house, but not all of it... yet. A more extensive GitHub API that is more feature-rich in terms of project management maybe be helpful in expanding the breadth of DevPie's capabilities.

Currently, the simplest form of game theory is to give 2x points for DELETION of lines compared to 1x for ADDITION of lines. This simple mechanism incentivizes rigorous review of the project's code base. Dead code may be added, for which 1x points are awarded to the unscrupulous author; yet 2x points would be awarded to the reviewer who realized it and removed it. There is a minimum number of lines that a dApp requires to work as 100% intended. No more, no less.

Other game theory mechanisms could be added, as needed, but the simpler the rules the better. However, the project's developers should act in good faith towards each other, and maintain their own personal integrity when writing, committing, and reviewing code in order to maintain the overall integrity of the Pie.

The outcome of the Pie/equity split is meant as a guideline; it is not written in stone, and is indefinite as long as the project's development continues. A conversation can always be had by the project's members, and numbers tweaked.