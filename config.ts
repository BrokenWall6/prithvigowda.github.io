export const siteConfig = {
  name: "Prithvi Gowda",
  title: "Maaster Graduate @ Hochschule der Bayerischen Wirtschaft",
  description: "Portfolio website of Prithvi Gowda",
  accentColor: "#1d4ed8",
  social: {
    email: "prithvisrinivas2447@gmail.com",
    linkedin: "https://linkedin.com/in/prithvi-srinivas/",
    //twitter: "https://x.com",
    github: "https://github.com/BrokenWall6",
  },
  aboutMe:
    "Cybersecurity professional with 1+ year experience in Security Operations and threat monitoring at ZeroFox, specializing in phishing/domain abuse analysis, OSINT investigations and incident triage. Recently graduated with a Master's in Cyber Security with hands-on experience in security monitoring and adversarial ML research.",
  skills: ["Python", "Docker","C++", "Wazuh", "Wireshark", "Linux", "Burp Suite"],
  projects: [
    {
      name: "Mitigating Prompt Injection Vulnerabilities in LLMs for SOC (Master Thesis)",
      description:
        "Developed a realistic LLM-powered SOC system that analyzes multi-source security logs with automated incident reasoning, achieving a 35% reduction in adversarial attack success while outperforming OpenAI and DeepSeek models in classification accuracy and robustness.",
      link: "https://github.com/BrokenWall6/LLM_SOC",
      skills: ["Python", "SOC", "JSON", "API Integration"],
    },
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
      dateRange: "2024 - 2026",
      achievements: [
        "Graduated with a GPA of 2.0 while strengthening core cybersecurity skills",
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
