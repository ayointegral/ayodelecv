import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generatePDF = () => {
  const doc = new jsPDF('p', 'pt', 'a4');
  const pageWidth = doc.internal.pageSize.width;
  let yPos = 40;

  // Helper function for spacing
  const addSpace = (space = 20) => {
    yPos += space;
  };

  // Helper function for section headers
  const addSectionHeader = (text: string) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text(text, 40, yPos);
    addSpace();
  };

  // Helper function for body text
  const addBodyText = (text: string, fontSize = 10) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(fontSize);
    doc.setTextColor(51, 51, 51);
    const splitText = doc.splitTextToSize(text, pageWidth - 80);
    doc.text(splitText, 40, yPos);
    yPos += (splitText.length * fontSize) + 10;
  };

  // Document Title and other sections
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text('Ayodele Ajayi', 40, yPos);
  addSpace();

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.text('Lead DevSecOps Engineer & Technical Team Lead', 40, yPos);
  addSpace(15);

  doc.setFontSize(10);
  doc.text('ayoinc@gmail.com | linkedin.com/in/ayoinc | github.com/ayointegral', 40, yPos);
  addSpace(30);
  // Full Professional Experience Section
addSectionHeader('Professional Experience');

const experiences = [
  {
    role: 'Freelance DevOps Consultant',
    company: 'ContainerCode Club, London',
    period: 'July 2019 - Present',
    responsibilities: [
      'Provided DevOps consultancy services for various clients, leveraging extensive experience with AWS and Azure',
      'Designed and implemented scalable, secure cloud architectures using AWS and Azure, achieving high availability and reliability',
      'Developed and optimised CI/CD pipelines using Jenkins, GitLab CI/CD, Azure DevOps, and GitHub Actions',
      'Automated infrastructure provisioning and management with Terraform and Ansible, reducing manual effort and increasing deployment speed by 50%',
      'Set up containerised environments using Kubernetes and Docker, ensuring efficient orchestration and management of microservices',
      'Integrated monitoring and logging solutions using Prometheus, Grafana, ELK stack, and Datadog to enhance visibility and troubleshooting',
      'Implemented robust security measures, including IAM policies, VPC configurations, and automated compliance checks with TFSec',
      'Collaborated with development teams to streamline workflows and improve application performance and stability',
      'Conducted training sessions and workshops to upskill client teams on best DevOps practices and tools',
      'Managed multiple projects simultaneously, ensuring timely delivery and client satisfaction'
    ]
  },
  {
    role: 'Senior DevOps Engineer',
    company: 'Vault Platform',
    period: 'July 2022 - December 2023',
    responsibilities: [
      'Designed and deployed scalable AWS solutions, achieving 99.9% uptime using Kubernetes',
      'Implemented infrastructure as code using Terraform, reducing deployment time by 40%',
      'Managed Azure Kubernetes services, ensuring 99.95% uptime and 100% security compliance',
      'Set up AWS organisation and multiple accounts for different environments',
      'Established AWS VPN client connection authenticated with SSO and implemented guardrails and CloudWatch alarms',
      'Configured no-trust setups for optimum security and managed Cloudflare DNS for emails',
      'Set up Slack notifications for anomalies and integrated Datadog for comprehensive monitoring',
      'Optimised CI/CD pipelines in CircleCI and GitHub Actions, and implemented TFSec and Terraform modularisation',
      'Deployed and managed containers in ECS, ensuring all deployments were secure and automated',
      'Mentored junior DevOps engineers, fostering professional growth and skill development'
    ]
  },
  {
    role: 'Lead DevOps Engineer',
    company: 'eConsult Health',
    period: 'October 2021 - June 2022',
    responsibilities: [
      'Led Linux-based AWS application hosting, improving system performance by 20%',
      'Automated cloud resource management using Python scripts, reducing errors by 25%',
      'Implemented automated testing pipelines with Jenkins, ensuring 100% code coverage',
      'Set up ECS using CDK and CloudFormation, managed PaaS and serverless functions',
      'Handled S3 lifecycle management, logging, and monitoring setup',
      'Integrated health solutions with third-party systems using Direct Connect',
      'Collaborated with cross-functional teams to solve complex problems and drive innovation'
    ]
  },
  {
    role: 'Senior DevOps Engineer',
    company: 'Doctor Care Anywhere',
    period: 'March 2021 - December 2021',
    responsibilities: [
      'Managed and optimised Azure Kubernetes platforms, implementing security best practices to achieve a 99.95% compliance rate',
      'Orchestrated a major platform rollout on Azure Cloud using CI/CD pipelines, boosting user engagement by 40%',
      'Developed and maintained CI/CD pipelines for Azure and AWS, reducing deployment time by 30% and improving operational reliability',
      'Set up Azure Kubernetes Service (AKS) with VNET integration and managed Azure DevOps pipelines',
      'Utilised Helm, Flux, and ArgoCD for deployment management',
      'Documented and managed release lifecycles using Jira and Confluence',
      'Provided strategic input to C-level executives on technology and process improvements'
    ]
  },
  {
    role: 'Site Reliability Engineer',
    company: 'Rank Group',
    period: 'March 2020 - March 2021',
    responsibilities: [
      'Implemented CI/CD pipelines and automated testing, boosting deployment frequency and reliability',
      'Collaborated closely with product teams to maintain platform stability and updates, contributing to a seamless user experience',
      'Set up Dynatrace for logging and monitoring',
      'Managed Jenkins pipeline deployments into Docker Swarm clusters within a secure AWS deployment environment',
      'Handled pricing and negotiations with suppliers'
    ]
  },
  {
    role: 'DevOps Engineer',
    company: 'Adjoint Inc.',
    period: 'August 2019 - March 2020',
    responsibilities: [
      'Orchestrated CI/CD processes using GKE, Docker, and GitOps, streamlining deployment workflows',
      'Containerised platforms to enhance scalability and maintainability',
      'Participated in cross-functional team meetings to align development and operational goals'
    ]
  },
  {
    role: 'Customer Support Engineer',
    company: 'OpenAsset',
    period: 'January 2018 - August 2019',
    responsibilities: [
      'Resolved complex IT and digital asset management issues, providing high-quality customer support',
      'Created technical documentation and proof of concepts, driving product improvements'
    ]
  },
  {
    role: 'System Analyst',
    company: 'Indivior PLC',
    period: 'March 2016 - January 2018',
    responsibilities: [
      'Managed Windows applications, MDM, and OS deployment, ensuring seamless operation and user support',
      'Assisted in software installations, updates, and troubleshooting',
      'Provided user training and support for IT systems',
      'Collaborated with other IT teams to ensure infrastructure stability'
    ]
  },
  {
    role: 'IT Analyst',
    company: 'SC Johnson Ltd.',
    period: 'August 2015 - February 2016',
    responsibilities: [
      'Managed Windows applications, Mobile Device Management (MDM), and OS deployment, ensuring seamless operation and user support',
      'Provided IT support for hardware and software issues, including troubleshooting, installations, and updates',
      'Assisted in the implementation of new IT projects and system upgrades',
      'Worked with internal teams to improve IT service quality and efficiency'
    ]
  }
];

// Loop to add each experience to the PDF
experiences.forEach(exp => {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text(exp.role, 40, yPos);
  addSpace(15);

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(10);
  doc.text(`${exp.company} | ${exp.period}`, 40, yPos);
  addSpace(15);

  doc.setFont('helvetica', 'normal');
  exp.responsibilities.forEach(resp => {
    doc.text(`• ${resp}`, 50, yPos);
    addSpace(12);
  });
  addSpace(10);

  // Add a new page if space runs out
  if (yPos > 750) {
    doc.addPage();
    yPos = 40;
  }
});


  // Skills Section
  addSectionHeader('Technical Skills');
  const skills = {
    'Cloud & Infrastructure': ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker'],
    'DevOps Tools': ['Jenkins', 'GitLab CI/CD', 'Terraform', 'Ansible'],
    'Leadership & Methodologies': ['Agile/Scrum', 'Team Leadership', 'Technical Mentoring'],
    'Security': ['IAM', 'Zero Trust', 'Security Compliance'],
  };

  Object.entries(skills).forEach(([category, skillList]) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(category, 40, yPos);
    addSpace(15);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(skillList.join(', '), 50, yPos);
    addSpace(20);
  });

  // Certifications
  addSectionHeader('Certifications');
  const certifications = [
    ['AWS Certified Solutions Architect', 'Amazon Web Services'],
    ['HashiCorp Certified: Terraform Associate', 'HashiCorp'],
    ['Cybersecurity: Managing Risk in the Information Age', 'Harvard University'],
    ['Python for Data Science', 'IBM']
  ];

  autoTable(doc, {
    startY: yPos,
    head: [['Certification', 'Issuer']],
    body: certifications,
    margin: { left: 40, right: 40 },
    headStyles: { fillColor: [41, 128, 185] }
  });

  // Correct way to access the final Y position after the table
  yPos = (doc.autoTable.previous.finalY || yPos) + 20;

  // Education Section
  addSectionHeader('Education');
  addBodyText('Diploma in Multimedia Technology - Dalewares Institute of Technology, Lagos, Nigeria');

  // Save the PDF
  doc.save('Ayodele_Ajayi_CV.pdf');
};