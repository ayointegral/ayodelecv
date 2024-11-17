// utils/generateDoc.ts
import {
  Document,
  Paragraph,
  TextRun,
  HeadingLevel,
Packer,
} from "docx";

export const generateDoc = async () => {
  // Create document
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          // Header
          new Paragraph({
            children: [
              new TextRun({
                text: "Ayodele Ajayi",
                bold: true,
                size: 32,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Lead DevSecOps Engineer & Technical Team Lead",
                size: 24,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "ayoinc@gmail.com | linkedin.com/in/ayoinc | github.com/ayointegral",
                size: 20,
              }),
            ],
            spacing: {
              after: 400,
            },
          }),
          // About Me
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [new TextRun({ text: "About Me", bold: true })],
          }),
          new Paragraph({
            children: [
              new TextRun(
                "I'm a seasoned DevSecOps Engineer and Technical Leader with a proven track record in building and scaling cloud infrastructure while fostering high-performing engineering teams. My expertise spans cloud architecture, security implementation, and agile team leadership, with a particular focus on AWS and Azure environments.",
              ),
            ],
          }),

          // Key Achievements
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [new TextRun({ text: "Key Achievements", bold: true })],
          }),
          ...[
            "Successfully led and mentored multiple engineering teams, implementing Agile methodologies and fostering a culture of continuous improvement and innovation.",
            "Architected and implemented robust cloud solutions, achieving 99.9% uptime and significant improvements in deployment efficiency and security compliance.",
          ].map(
            (text) =>
              new Paragraph({
                bullet: {
                  level: 0,
                },
                children: [new TextRun(text)],
              }),
          ),
          // Professional Experience
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [
              new TextRun({ text: "Professional Experience", bold: true }),
            ],
          }),

          // Freelance DevOps Consultant
          new Paragraph({
            children: [
              new TextRun({ text: "Freelance DevOps Consultant", bold: true }),
              new TextRun({
                text: "\nContainerCode Club, London | July 2019 - Present",
                italics: true,
              }),
            ],
          }),
          ...[
            "Provided DevOps consultancy services for various clients, leveraging extensive experience with AWS and Azure",
            "Designed and implemented scalable, secure cloud architectures using AWS and Azure, achieving high availability and reliability",
            "Developed and optimised CI/CD pipelines using Jenkins, GitLab CI/CD, Azure DevOps, and GitHub Actions",
            "Automated infrastructure provisioning and management with Terraform and Ansible, reducing manual effort and increasing deployment speed by 50%",
            "Set up containerised environments using Kubernetes and Docker, ensuring efficient orchestration and management of microservices",
            "Integrated monitoring and logging solutions using Prometheus, Grafana, ELK stack, and Datadog to enhance visibility and troubleshooting",
            "Implemented robust security measures, including IAM policies, VPC configurations, and automated compliance checks with TFSec",
            "Collaborated with development teams to streamline workflows and improve application performance and stability",
            "Conducted training sessions and workshops to upskill client teams on best DevOps practices and tools",
            "Managed multiple projects simultaneously, ensuring timely delivery and client satisfaction",
          ].map(
            (text) =>
              new Paragraph({
                bullet: {
                  level: 0,
                },
                children: [new TextRun(text)],
              }),
          ),

          // Senior DevOps Engineer - Vault Platform
          new Paragraph({
            children: [
              new TextRun({ text: "\nSenior DevOps Engineer", bold: true }),
              new TextRun({
                text: "\nVault Platform | July 2022 - December 2023",
                italics: true,
              }),
            ],
          }),
          ...[
            "Designed and deployed scalable AWS solutions, achieving 99.9% uptime using Kubernetes",
            "Implemented infrastructure as code using Terraform, reducing deployment time by 40%",
            "Managed Azure Kubernetes services, ensuring 99.95% uptime and 100% security compliance",
            "Set up an AWS organisation and multiple accounts for different environments",
            "Established AWS VPN client connection authenticated with SSO and implemented guardrails and CloudWatch alarms",
            "Configured no-trust setups for optimum security and managed Cloudflare DNS for emails",
            "Set up Slack notifications for anomalies and integrated Datadog for comprehensive monitoring",
            "Optimised CI/CD pipelines in CircleCI and GitHub Actions, and implemented TFSec and Terraform modularisation",
            "Deployed and managed containers in ECS, ensuring all deployments were secure and automated",
            "Mentored junior DevOps engineers, fostering professional growth and skill development",
          ].map(
            (text) =>
              new Paragraph({
                bullet: {
                  level: 0,
                },
                children: [new TextRun(text)],
              }),
          ),
          // Lead DevOps Engineer - eConsult Health
          new Paragraph({
            children: [
              new TextRun({ text: "\nLead DevOps Engineer", bold: true }),
              new TextRun({
                text: "\neConsult Health | October 2021 - June 2022",
                italics: true,
              }),
            ],
          }),
          ...[
            "Led Linux-based AWS application hosting, implementing optimisation techniques to improve system performance by 20%",
            "Automated cloud resource management using Python scripts, reducing errors by 25%",
            "Initiated and completed automated testing pipelines with Jenkins, ensuring 100% code coverage",
            "Set up ECS using CDK and CloudFormation, managed PaaS and serverless functions",
            "Handled S3 lifecycle management, logging, and monitoring setup",
            "Integrated health solutions with third-party systems using Direct Connect",
            "Collaborated with cross-functional teams to solve complex problems and drive innovation",
          ].map(
            (text) =>
              new Paragraph({
                bullet: {
                  level: 0,
                },
                children: [new TextRun(text)],
              }),
          ),

          // Senior DevOps Engineer - Doctor Care Anywhere
          new Paragraph({
            children: [
              new TextRun({ text: "\nSenior DevOps Engineer", bold: true }),
              new TextRun({
                text: "\nDoctor Care Anywhere | March 2021 - December 2021",
                italics: true,
              }),
            ],
          }),
          ...[
            "Managed and optimised Azure Kubernetes platforms, implementing security best practices to achieve a 99.95% compliance rate",
            "Orchestrated a major platform rollout on Azure Cloud using CI/CD pipelines, boosting user engagement by 40%",
            "Developed and maintained CI/CD pipelines for Azure and AWS, reducing deployment time by 30% and improving operational reliability",
            "Set up Azure Kubernetes Service (AKS) with VNET integration and managed Azure DevOps pipelines",
            "Utilised Helm, Flux, and ArgoCD for deployment management",
            "Documented and managed release lifecycles using Jira and Confluence",
            "Provided strategic input to C-level executives on technology and process improvements",
          ].map(
            (text) =>
              new Paragraph({
                bullet: {
                  level: 0,
                },
                children: [new TextRun(text)],
              }),
          ),

          // Site Reliability Engineer - Rank Group
          new Paragraph({
            children: [
              new TextRun({ text: "\nSite Reliability Engineer", bold: true }),
              new TextRun({
                text: "\nRank Group | March 2020 - March 2021",
                italics: true,
              }),
            ],
          }),
          ...[
            "Implemented CI/CD pipelines and automated testing, boosting deployment frequency and reliability",
            "Collaborated closely with product teams to maintain platform stability and updates, contributing to a seamless user experience",
            "Set up Dynatrace for logging and monitoring",
            "Managed Jenkins pipeline deployments into Docker Swarm clusters within a secure AWS deployment environment",
            "Handled pricing and negotiations with suppliers",
          ].map(
            (text) =>
              new Paragraph({
                bullet: {
                  level: 0,
                },
                children: [new TextRun(text)],
              }),
          ),
          // DevOps Engineer - Adjoint Inc.
          new Paragraph({
            children: [
              new TextRun({ text: "\nDevOps Engineer", bold: true }),
              new TextRun({
                text: "\nAdjoint Inc. | August 2019 - March 2020",
                italics: true,
              }),
            ],
          }),
          ...[
            "Orchestrated CI/CD processes using GKE, Docker, and GitOps, streamlining deployment workflows",
            "Containerised platforms to enhance scalability and maintainability",
            "Participated in cross-functional team meetings to align development and operational goals",
          ].map(
            (text) =>
              new Paragraph({
                bullet: {
                  level: 0,
                },
                children: [new TextRun(text)],
              }),
          ),

          // Customer Support Engineer - OpenAsset
          new Paragraph({
            children: [
              new TextRun({ text: "\nCustomer Support Engineer", bold: true }),
              new TextRun({
                text: "\nOpenAsset | January 2018 - August 2019",
                italics: true,
              }),
            ],
          }),
          ...[
            "Resolved complex IT and digital asset management issues, providing high-quality customer support",
            "Created technical documentation and proof of concepts, driving product improvements",
          ].map(
            (text) =>
              new Paragraph({
                bullet: {
                  level: 0,
                },
                children: [new TextRun(text)],
              }),
          ),

          // System Analyst - Indivior PLC
          new Paragraph({
            children: [
              new TextRun({ text: "\nSystem Analyst", bold: true }),
              new TextRun({
                text: "\nIndivior PLC | March 2016 - January 2018",
                italics: true,
              }),
            ],
          }),
          ...[
            "Managed Windows applications, MDM, and OS deployment, ensuring seamless operation and user support",
            "Assisted in software installations, updates, and troubleshooting",
            "Provided user training and support for IT systems",
            "Collaborated with other IT teams to ensure infrastructure stability",
          ].map(
            (text) =>
              new Paragraph({
                bullet: {
                  level: 0,
                },
                children: [new TextRun(text)],
              }),
          ),

          // IT Analyst - SC Johnson Ltd.
          new Paragraph({
            children: [
              new TextRun({ text: "\nIT Analyst", bold: true }),
              new TextRun({
                text: "\nSC Johnson Ltd. | August 2015 - February 2016",
                italics: true,
              }),
            ],
          }),
          ...[
            "Managed Windows applications, Mobile Device Management (MDM), and OS deployment, ensuring seamless operation and user support",
            "Provided IT support for hardware and software issues, including troubleshooting, installations, and updates",
            "Assisted in the implementation of new IT projects and system upgrades",
            "Worked with internal teams to improve IT service quality and efficiency",
          ].map(
            (text) =>
              new Paragraph({
                bullet: {
                  level: 0,
                },
                children: [new TextRun(text)],
              }),
          ),
          // Technical Skills
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [new TextRun({ text: "Technical Skills", bold: true })],
            spacing: {
              before: 400,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Cloud & Infrastructure", bold: true }),
            ],
          }),
          new Paragraph({
            children: [new TextRun("AWS, Azure, GCP, Kubernetes, Docker")],
          }),
          new Paragraph({
            children: [new TextRun({ text: "\nDevOps Tools", bold: true })],
          }),
          new Paragraph({
            children: [
              new TextRun(
                "Jenkins, GitLab CI/CD, Azure DevOps, GitHub Actions, ArgoCD, Terraform, Ansible, CircleCI, Vagrant, Packer",
              ),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "\nSecurity & Monitoring", bold: true }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun(
                "IAM, Zero Trust, CloudWatch, Prometheus, Grafana, ELK Stack, Datadog, Splunk, Dynatrace",
              ),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "\nProgramming & Scripting Languages",
                bold: true,
              }),
            ],
          }),
          new Paragraph({
            children: [new TextRun("Python, JavaScript, Bash, PowerShell")],
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "\nDevelopment Frameworks", bold: true }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun("MERN Stack (MongoDB, Express.js, React, Node.js)"),
            ],
          }),

          // Certifications
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [new TextRun({ text: "Certifications", bold: true })],
            spacing: {
              before: 400,
            },
          }),
          ...[
            "AWS Certified Solutions Architect - Amazon Web Services",
            "HashiCorp Certified: Terraform Associate - HashiCorp",
            "Cybersecurity: Managing Risk in the Information Age - Harvard University",
            "Python for Data Science - IBM",
          ].map(
            (text) =>
              new Paragraph({
                bullet: {
                  level: 0,
                },
                children: [new TextRun(text)],
              }),
          ),

          // Education
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [new TextRun({ text: "Education", bold: true })],
            spacing: {
              before: 400,
            },
          }),
          new Paragraph({
            children: [
              new TextRun(
                "Diploma in Multimedia Technology - Dalewares Institute of Technology, Lagos, Nigeria",
              ),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun(
                "Cybersecurity: Managing Risk in the Information Age - Harvard University (November 2017 - July 2018)",
              ),
            ],
          }),
          // Generate and save document
          new Paragraph({
            children: [
              new TextRun({
                text: "\nReference will be provided upon request.",
                bold: true,
              }),
            ],
          }),
        ],
      },
    ],
  });

  // Generate and save document
  const blob = await Packer.toBlob(doc);
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Ayodele_Ajayi_CV.docx");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};
