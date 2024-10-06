import type { FlickData } from "./Flick";

export const flicks: FlickData[] = [
  {
    id: "1",
    displayName: "Alice Wonderland",
    username: "@alice_w",
    data: "Excited to start a new project on Solana today! 🚀 I've been diving deep into the technical docs and learning a lot about smart contracts. The potential for decentralized applications is incredible. Can't wait to share more updates with everyone!",
    responses: [
      {
        id: "1-1",
        displayName: "Bob Builder",
        username: "@bob_builder",
        data: "That's awesome, Alice! I'd love to hear more about your project. What kind of dApp are you building?",
      },
      {
        id: "1-2",
        displayName: "Charlie Chaplin",
        username: "@charlie_c",
        data: "Solana's docs are great, aren't they? Let me know if you need any help or want to collaborate!",
      },
      {
        id: "1-3",
        displayName: "Dana Scully",
        username: "@dana_s",
        data: "Welcome to the Solana ecosystem! It's an exciting journey ahead.",
      },
    ],
  },
  {
    id: "2",
    displayName: "Bob Builder",
    username: "@bob_builder",
    data: "Just finished deploying my first smart contract! 🔥 The journey was challenging but rewarding. Solana's speed and scalability are game-changers in the blockchain space. Looking forward to seeing how it performs under different conditions and with real users!",
    responses: [
      {
        id: "2-1",
        displayName: "Dana Scully",
        username: "@dana_s",
        data: "Congratulations, Bob! That's a huge milestone. What was the most challenging part of the process for you?",
      },
    ],
  },
  {
    id: "3",
    displayName: "Charlie Chaplin",
    username: "@charlie_c",
    data: "Debugging can be so frustrating, but it's worth it when you finally crack the code! 💻 Been working on a tricky bug for hours, but the sense of accomplishment when it finally works is unbeatable. Remember, persistence is key in development!",
    responses: [
      {
        id: "3-1",
        displayName: "Evan Richards",
        username: "@evan_r",
        data: "I feel you, Charlie! What debugging tools do you find most helpful for Solana development?",
      },
      {
        id: "3-2",
        displayName: "Fiona Apple",
        username: "@fiona_a",
        data: "Persistence is indeed key! Have you tried rubber duck debugging? Sometimes explaining the problem out loud helps me spot the issue.",
      },
      {
        id: "3-3",
        displayName: "George Orwell",
        username: "@george_o",
        data: "Debugging is an art form. What was the bug you were tackling?",
      },
      {
        id: "3-4",
        displayName: "Hannah Baker",
        username: "@hannah_b",
        data: "The joy of solving a tricky bug is unmatched! Celebrate those wins, Charlie!",
      },
    ],
  },
  {
    id: "4",
    displayName: "Dana Scully",
    username: "@dana_s",
    data: "The Solana community is so welcoming! 🙌 Just had an amazing discussion with other developers about the future of DeFi and how we can contribute to it. There's so much innovation happening, and I'm thrilled to be a part of this movement.",
    responses: [],
  },
  {
    id: "5",
    displayName: "Evan Richards",
    username: "@evan_r",
    data: "Finally mastered cross-chain interoperability! 🌐 It's fascinating to see how different blockchains can interact and complement each other. This opens up so many possibilities for decentralized applications. Excited to experiment more with these technologies.",
    responses: [
      {
        id: "5-1",
        displayName: "George Orwell",
        username: "@george_o",
        data: "That's impressive, Evan! I'd love to learn more about your approach. Any resources you'd recommend for getting started with cross-chain development?",
      },
      {
        id: "5-2",
        displayName: "Hannah Baker",
        username: "@hannah_b",
        data: "Wow, that's cutting-edge stuff! Have you considered how this could be applied to NFTs across different chains?",
      },
      {
        id: "5-3",
        displayName: "Ian Fleming",
        username: "@ian_f",
        data: "Interoperability is the future. How do you handle security concerns when bridging different chains?",
      },
    ],
  },
  {
    id: "6",
    displayName: "Fiona Apple",
    username: "@fiona_a",
    data: "I've been thinking a lot about the importance of security in smart contracts. 🛡️ With great power comes great responsibility, and as developers, we must ensure that our code is secure and robust. The last thing we want is to introduce vulnerabilities.",
    responses: [
      {
        id: "6-1",
        displayName: "Ian Fleming",
        username: "@ian_f",
        data: "Absolutely crucial topic, Fiona. Have you looked into formal verification for smart contracts? It's a game-changer for security.",
      },
      {
        id: "6-2",
        displayName: "Jane Doe",
        username: "@jane_d",
        data: "Security is so important! What are your thoughts on bug bounty programs for smart contracts?",
      },
    ],
  },
  {
    id: "7",
    displayName: "George Orwell",
    username: "@george_o",
    data: "Participating in a hackathon this weekend! 🏆 It's a great way to test out new ideas and push the limits of what we can do with blockchain technology. Plus, it's always fun to collaborate with other passionate developers and learn from each other.",
    responses: [
      {
        id: "7-1",
        displayName: "Alice Wonderland",
        username: "@alice_w",
        data: "Good luck, George! Hackathons are such a great learning experience. What kind of project are you planning to work on?",
      },
      {
        id: "7-2",
        displayName: "Bob Builder",
        username: "@bob_builder",
        data: "Awesome! I love the energy at hackathons. Remember to take breaks and stay hydrated!",
      },
    ],
  },
  {
    id: "8",
    displayName: "Hannah Baker",
    username: "@hannah_b",
    data: "Just started experimenting with NFTs on Solana. 🎨 The possibilities for artists and creators are endless. I'm working on a project that integrates NFTs into a larger ecosystem, and I can't wait to see how it evolves. Exciting times ahead!",
    responses: [
      {
        id: "8-1",
        displayName: "Charlie Chaplin",
        username: "@charlie_c",
        data: "That sounds fascinating, Hannah! How are you addressing the environmental concerns often associated with NFTs?",
      },
      {
        id: "8-2",
        displayName: "Dana Scully",
        username: "@dana_s",
        data: "NFTs on Solana are so exciting! Have you looked into integrating them with DeFi protocols?",
      },
    ],
  },
  {
    id: "9",
    displayName: "Ian Fleming",
    username: "@ian_f",
    data: "Researching the environmental impact of blockchain technology. 🌍 It's crucial that we find ways to make these systems more sustainable. I'm exploring different consensus mechanisms and their energy consumption, looking for ways to reduce our footprint.",
    responses: [
      {
        id: "9-1",
        displayName: "Evan Richards",
        username: "@evan_r",
        data: "This is such important work, Ian. Have you looked into Solana's Proof of History approach and how it compares to other consensus mechanisms?",
      },
      {
        id: "9-2",
        displayName: "Fiona Apple",
        username: "@fiona_a",
        data: "Sustainability is key for the long-term success of blockchain tech. Are you considering the hardware aspects as well, like the lifespan of mining equipment?",
      },
    ],
  },
  {
    id: "10",
    displayName: "Jane Doe",
    username: "@jane_d",
    data: "Got featured in a developer spotlight! 🌟 It's an honor to be recognized by the community. I'm passionate about bringing more diversity into the tech space, and I hope to inspire others to start their own journey in blockchain development.",
    responses: [
      {
        id: "10-1",
        displayName: "George Orwell",
        username: "@george_o",
        data: "Congratulations, Jane! Your work is truly inspiring. How do you think we can make the blockchain space more inclusive?",
      },
      {
        id: "10-2",
        displayName: "Hannah Baker",
        username: "@hannah_b",
        data: "That's awesome, Jane! You're a great role model for aspiring developers. Any advice for newcomers to the field?",
      },
      {
        id: "10-3",
        displayName: "Ian Fleming",
        username: "@ian_f",
        data: "Diversity is crucial for innovation. How do you suggest we encourage more diverse voices in tech?",
      },
    ],
  },
];
