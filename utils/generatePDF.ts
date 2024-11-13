import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generatePDF = () => {
  const doc = new jsPDF('p', 'pt', 'a4');
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  let yPos = 40;

  // Helper function for spacing
  const addSpace = (space = 20) => {
    yPos += space;
  };

  // Helper function to handle page overflow
  const checkPageOverflow = (additionalHeight = 0) => {
    if (yPos + additionalHeight > pageHeight - 40) {
      doc.addPage();
      yPos = 40;
    }
  };

  // Helper function for section headers
  const addSectionHeader = (text, fontSize = 14, underline = true) => {
    checkPageOverflow(40);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(fontSize);
    doc.setTextColor(0, 0, 0);
    doc.text(text, 60, yPos);
    if (underline) {
      doc.setLineWidth(0.5);
      doc.line(60, yPos + 3, pageWidth - 60, yPos + 3);
    }
    addSpace(30);
  };

  // Helper function for body text
  const addBodyText = (text, fontSize = 10) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(fontSize);
    doc.setTextColor(51, 51, 51);
    const splitText = doc.splitTextToSize(text, pageWidth - 120);
    checkPageOverflow(splitText.length * fontSize + 10);
    doc.text(splitText, 60, yPos);
    yPos += (splitText.length * fontSize) + 10;
  };

  // Contact Information at the Top
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text('Ayodele Ajayi', 60, yPos);
  addSpace();

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.text('Lead DevSecOps Engineer & Technical Team Lead', 60, yPos);
  addSpace(15);

  doc.setFontSize(10);
  doc.text('ayoinc@gmail.com | linkedin.com/in/ayoinc | github.com/ayointegral', 60, yPos);
  addSpace(30);

  // Reordering Sections for Better Flow

  // Technical Skills Section
  addSectionHeader('Technical Skills', 16);
  const skills = {
    'Cloud & Infrastructure': ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker'],
    'DevOps Tools': ['Jenkins', 'GitLab CI/CD', 'Terraform', 'Ansible'],
    'Leadership & Methodologies': ['Agile/Scrum', 'Team Leadership', 'Technical Mentoring'],
    'Security': ['IAM', 'Zero Trust', 'Security Compliance'],
    'CI/CD Tools': ['Jenkins', 'GitLab CI/CD', 'Azure DevOps', 'GitHub Actions'],
    'Scripting Languages': ['Python', 'Bash'],
    'Monitoring and Logging': ['Prometheus', 'Grafana', 'ELK stack', 'Datadog'],
  };

  Object.entries(skills).forEach(([category, skillList]) => {
    checkPageOverflow(40);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(category, 60, yPos);
    addSpace(15);

    checkPageOverflow(20);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(skillList.join(', '), 70, yPos);
    addSpace(20);
  });

  // Certifications Section - Moved Up
  addSectionHeader('Certifications', 16);
  const certifications = [
    ['AWS Certified Solutions Architect – Professional', 'Amazon Web Services'],
    ['Microsoft Certified: Azure Solutions Architect Expert', 'Microsoft'],
    ['Certified Kubernetes Administrator (CKA)', 'Cloud Native Computing Foundation'],
    ['Certified DevOps Leader (DOL)', 'DevOps Institute']
  ];

  autoTable(doc, {
    startY: yPos,
    head: [['Certification', 'Issuer']],
    body: certifications,
    margin: { left: 60, right: 60 },
    headStyles: { fillColor: [41, 128, 185] }
  });

  yPos = (doc.lastAutoTable?.finalY || yPos) + 20;

  // Profile Section
  addSectionHeader('Profile');
  addBodyText(`A seasoned DevSecOps Engineer and Technical Leader with a proven track record in building and scaling cloud infrastructure while fostering high-performing engineering teams. Expertise spans cloud architecture, security implementation, and agile team leadership, with a particular focus on AWS and Azure environments. Excels at bridging technical excellence with business objectives through:

- Leading Agile engineering teams and implementing effective DevOps practices
- Architecting secure, scalable cloud solutions and implementing robust CI/CD pipelines
- Facilitating technical growth through mentoring, documentation, and knowledge sharing
- Driving innovation while maintaining operational excellence and security compliance`);
  addSpace(20);

  // Key Achievements Section
  addSectionHeader('Key Achievements');
  addBodyText(`- Team Leadership: Successfully led and mentored multiple engineering teams, implementing Agile methodologies and fostering a culture of continuous improvement and innovation.
- Technical Excellence: Architected and implemented robust cloud solutions, achieving 99.9% uptime and significant improvements in deployment efficiency and security compliance.`);
  addSpace(20);

  // Professional Experience Section
  addSectionHeader('Professional Experience', 16);
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
    // Additional experiences...
  ];

  experiences.forEach(exp => {
    checkPageOverflow(60);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text(exp.role, 60, yPos);
    addSpace(15);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(10);
    doc.text(`${exp.company} | ${exp.period}`, 60, yPos);
    addSpace(15);

    exp.responsibilities.forEach(resp => {
      checkPageOverflow(20);
      doc.setFont('helvetica', 'normal');
      doc.text(`• ${resp}`, 70, yPos);
      addSpace(12);
    });
    addSpace(10);
  });

  // Education Section
  addSectionHeader('Education', 16);
  addBodyText('Master of Science in Computer Science - University of London');
  addBodyText('Bachelor of Science in Information Technology - University of Lagos');

  // More Information Section
  addSectionHeader('More Information', 16);
  addBodyText('For more details, visit: https://ayodele.dev');

  // Professional Affiliations Section
  addSectionHeader('Professional Affiliations', 16);
  addBodyText('Member, DevOps Institute');
  addBodyText('Member, Cloud Native Computing Foundation (CNCF)');

  // Publications Section
  addSectionHeader('Publications and Contributions', 16);
  addBodyText('Authored articles on DevSecOps best practices and cloud security in industry journals.');
  addBodyText('Speaker at DevOps and cloud computing conferences, sharing insights on cloud architecture and security.');

  // Save the PDF
  doc.save('Ayodele_Ajayi_CV.pdf');
};
