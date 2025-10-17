export const siteConfig = {
  name: "Prithvi Gowda",
  title: "Student @ Hochschule der Bayerischen Wirtschaft",
  description: "Portfolio website of Prithvi Gowda",
  accentColor: "#1d4ed8",
  social: {
    email: "prithvisrinivas2447@gmail.com",
    linkedin: "https://linkedin.com/in/prithvi-srinivas/",
    //twitter: "https://x.com",
    github: "https://github.com/BrokenWall6",
  },
  aboutMe:
    "I am a cybersecurity student with hands-on experience in analyzing and mitigating risks, driven by curiosity and a passion for safeguarding the digital world. I am dedicated to expanding my knowledge, adapting to emerging threats, and building practical skills to make a meaningful impact in the ever-evolving cybersecurity landscape. Outside of technology, I enjoy hiking, playing football, and capturing moments through photography, which keep me energized, creative, and focused.",
  skills: ["Python", "Docker","C++", "Wazuh", "Wireshark", "Linux", "Burp Suite"],
  projects: [
    {
      name: "Wazuh Security Monitoring",
      description:
        "Deployed Wazuh SIEM/XDR with Docker, creating custom MITRE ATT&CK–aligned SSH and brute-force detection rules and automating log monitoring for real-time threat detection and incident response.",
      //link: "https://github.com/BrokenWall6/TapNRoute",
      skills: ["Wazuh", "Docker", "Scripting", "SIEM"],
    },
    {
      name: "TapNRoute",
      description:
        "Developed a Flutter-Firebase application leveraging NoSQL to optimize resource allocation, boost productivity by 30%, and minimize commuter delays to enhance the travel experience.",
      link: "https://github.com/BrokenWall6/TapNRoute",
      skills: ["Android Studio", "Flutter", "Firebase"],
    },
    {
      name: "Morse Code Converter",
      description:
        "Developed a converter to encode and decode Morse Code message as basic cryptography project.",
      link: "https://github.com/BrokenWall6/Morse-Code",
      skills: ["Python"],
    },
/*    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    }, */
  ],
  experience: [
    {
      company: "Zerfox",
      title: "Platform Specialist",
      dateRange: "Jun 2023 - Jul 2024",
      bullets: [
        "Performed incident response and threat triage on 100,000+ security alerts with 98% accuracy reducing incident backlog by 95%",
        "Conducted comprehensive threat intelligence analysis using OSINT to identify and mitigate cybersecurity threats across social media platforms",
        "Implemented automated threat detection workflows using security orchestration platform decreasing false positive alerts by 40%",
      ],
    },
    {
      company: "Defence Research and Development Organisation (GTRE)",
      title: "Intern",
      dateRange: "Feb 2023 - Mar 2023",
      bullets: [
        "Acquired knowledge of networking protocols, administration tools and surveillance systems",
        "Demonstrated the understanding of Storage Area Network, identity verification and authentication",
      ],
    },
    {
      company: "Wipro Limited",
      title: "Intern",
      dateRange: "Jun 2022 - Jul 2022",
      bullets: [
        "Gained knowledge of some of the tools used in DevOps, including Terraform, Ansible and Jenkins",
        "Hosted a website on Cloudflare and shadowed the functionality of Google Cloud Platform",
      ],
    },
  ],
  education: [
    {
      school: "Hochschule der Bayerischen Wirtschaft",
      degree: "Master's in Cyber Security",
      dateRange: "2024 - Present",
      achievements: [
        "Maintaining a GPA of 2.4 while advancing skills",
        "Preparing for CompTIA Security+ Certification",
        "Building skills via CTFs and coding",
      ],
    },
    {
      school: "Visvesvaraya Technological University",
      degree: "Bachelor of Engineering in Information Science",
      dateRange: "2019 - 2023",
      achievements: [
        "Member of IEEE Student Chapter, helping organize quiz events",
        "Built 3+ projects",
        "Published research on a Passenger Demand Application for Smart City Public Transportation (IEEE TEMSCON 2023)",
      ],
    },
  ],
  publications: [
    {
      title: "Passenger Demand Application for Public Transportation System in Smart Cities",
      publisher: "IEEE TEMSCON 2023",
      dateRange: "Dec 15, 2023",
      link: "https://ieeexplore.ieee.org/document/10531473",
      description: "The paper focuses on the problem caused due to lack of efficient resource management. It introduces a system that enhances travelling experience and administers available resources efficiently by providing a platform for passengers to interact with the transit organization."
    }
  ]
};
