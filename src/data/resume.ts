export const resumeData = {
  name: "Daniel Vlad",
  title: "DevOps Engineer | Cloud Solutions Architect",
  email: "contact@danielvlad.com",
  phone: "+49 1517 2640867",
  location: "Munich, Germany",
  linkedin: "https://linkedin.com/in/dancvlad",
  github: "https://github.com/danielcvlad",
  summary: `DevOps Engineer & Cloud Solution Architect specializing in Azure, with a strong background in consulting and customer support. Committed to building strong customer relationships, delivering impactful solutions, and driving customer success through collaboration and innovation.`,

  status: "Available for Projects",
  locationDisplay: "Remote // Global Node",

  experience: [
    {
      title: "DevOps Engineer",
      company: "Roland Berger",
      location: "Munich, Germany",
      period: "May 2024 – Present",
      periodShort: "2024 — PRESENT",
      color: "primary",
      bullets: [
        "Leading the deployment of Microsoft Dev Box using Infrastructure as Code (IaC) for scalable, secure developer environments",
        "Migrating legacy on-premises apps to Azure-native services: ACI, App Services, and AKS",
        "Implementing CI/CD pipelines with Azure Image Builder for security-hardened Golden images",
        "Architecting IoT monitoring solutions with Azure IoT Hub and IoT Central",
        "Migrating GitLab CI/CD and Jira/Confluence to Azure DevOps",
        "Building and maintaining robust CI/CD pipelines for rapid infrastructure delivery"
      ],
      tags: ["Azure Cloud", "Terraform", "Governance", "IaC", "CI/CD"]
    },
    {
      title: "Support Escalation Engineer",
      company: "Microsoft",
      location: "Bucharest, Romania",
      period: "Jan 2022 – May 2024",
      periodShort: "2022 — 2024",
      color: "secondary",
      bullets: [
        "Providing expert guidance to S500 customers across Storage, Connectivity, Management, and Configuration domains",
        "Leading high-severity production troubleshooting: no-boot scenarios, kernel panics, network issues",
        "Earned multiple Customer Hero recognitions with consistently high CSAT scores",
        "Served as Escalation Point for Linux issues, mentoring colleagues through 1:1 coaching"
      ],
      tags: ["Azure Networking", "Identity", "App Services", "Linux"]
    },
    {
      title: "Operational Specialist",
      company: "Orange Romania",
      location: "Bucharest, Romania",
      period: "Jan 2020 – Dec 2021",
      periodShort: "2017 — 2021",
      color: "muted",
      bullets: [
        "Managed daily operational workflows and process optimization for telecom serving millions of customers",
        "Coordinated cross-functional teams for seamless service delivery and minimal downtime",
        "Monitored KPIs and system performance, improving operational efficiency by 25%",
        "Developed SOPs for incident management and escalation processes"
      ],
      tags: ["Linux", "Virtualization", "Automation"]
    }
  ],

  skills: {
    cloudPlatforms: ["Microsoft Azure", "AWS", "Google Cloud", "DigitalOcean"],
    azureServices: ["AVD", "Azure Image Builder", "Dev Box", "Azure Container Registry", "WebApps", "ACI", "AKS"],
    awsServices: ["EC2", "EKS", "ECR", "IAM", "VPC", "S3"],
    orchestration: ["Kubernetes (K8s)", "Docker", "Helm", "ArgoCD"],
    iac: ["Terraform", "Bicep", "ARM Templates", "Ansible"],
    cicd: ["Azure DevOps", "Jenkins", "GitLab", "GitHub Actions", "Nexus"],
    monitoring: ["Prometheus", "Grafana", "New Relic", "Azure Monitor"],
    programming: ["Python", "JavaScript", "bash", "PowerShell"]
  },

  certifications: [
    {
      name: "Azure DevOps Engineer Expert",
      id: "AZ-400",
      issuer: "MICROSOFT",
      level: "Expert",
      color: "primary"
    },
    {
      name: "Azure Solutions Architect Expert",
      id: "AZ-305",
      issuer: "MICROSOFT",
      level: "Expert",
      color: "secondary"
    },
    {
      name: "Azure Identity & Access Admin Associate",
      id: "AZ-500",
      issuer: "MICROSOFT",
      level: "Associate",
      color: "primary"
    },
    {
      name: "Azure Security Engineer Associate",
      id: "AZ-500",
      issuer: "MICROSOFT",
      level: "Associate",
      color: "secondary"
    },
    {
      name: "Azure Administrator Associate",
      id: "AZ-104",
      issuer: "MICROSOFT",
      level: "Associate",
      color: "primary"
    },
    {
      name: "Azure Virtual Desktop Specialty",
      id: "AZ-140",
      issuer: "MICROSOFT",
      level: "Specialty",
      color: "secondary"
    }
  ],

  projects: [
    {
      repo: "042",
      title: "Automated Enterprise Image Lifecycle",
      description: "Global image distribution system using Azure Compute Gallery and Packer, integrated with GitHub Actions.",
      tags: ["PACKER", "AZURE"],
      icon: "hub",
      iconColor: "primary"
    },
    {
      repo: "019",
      title: "Microservices with Helm",
      description: "Dynamic scaling architecture for 50+ microservices on AKS using Helm charts and ArgoCD.",
      tags: ["K8S", "HELM"],
      icon: "architecture",
      iconColor: "secondary"
    },
    {
      repo: "067",
      title: "Compliance-as-Code Framework",
      description: "Automated security auditing using Azure Policy and Terraform Sentinel for financial sector standards.",
      tags: ["POLICY", "IAC"],
      icon: "security",
      iconColor: "primary"
    },
    {
      repo: "088",
      title: "DevBox Landing Zone",
      description: "Scalable developer environment platform based on Azure DevCenter and custom Bicep templates.",
      tags: ["BICEP", "AZURE"],
      icon: "lan",
      iconColor: "secondary"
    },
    {
      repo: "031",
      title: "Secure Remote Workspace",
      description: "Hardened AVD deployment with Zero Trust network architecture and FSLogix.",
      tags: ["AVD", "ZERO_TRUST"],
      icon: "vpn_lock",
      iconColor: "primary"
    },
    {
      repo: "104",
      title: "Jenkins CI/CD Hardening",
      description: "Containerized Jenkins orchestration with dynamic agents and HashiCorp Vault for secret management.",
      tags: ["JENKINS", "VAULT"],
      icon: "rocket_launch",
      iconColor: "secondary"
    }
  ],

  ongoingDevelopment: [
    "Automated Enterprise Image Lifecycle management",
    "Developer Workstations (DevBox)",
    "Architect a Secure Remote Workspace & Browser Isolation - AVD, Edge Streamed App",
    "Build Automation & CI/CD with Jenkins",
    "Deploy MongoDB and Mongo Express into local K8s Cluster",
    "Deploy Microservices application in Kubernetes with Production & Security Best Practices",
    "Create Helm Chart for Microservices",
    "Create AWS EKS cluster with a Node Group",
    "Complete CI/CD Pipeline with Terraform",
    "Automate EC2 server instances using Python"
  ],

  languages: [
    { name: "English", level: "C2" },
    { name: "Romanian", level: "A2" }
  ],

  stats: [
    { value: "4+", label: "Years Experience" },
    { value: "6", label: "Azure Certs" },
    { value: "50+", label: "Projects Shipped" }
  ]
};
