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

  // Document Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text('Ayodele Ajayi', 40, yPos);
  addSpace();

  // Subtitle
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(51, 51, 51);
  doc.text('Lead DevSecOps Engineer & Technical Team Lead', 40, yPos);
  addSpace(15);

  // Contact Info
  doc.setFontSize(10);
  doc.text('ayoinc@gmail.com | linkedin.com/in/ayoinc | github.com/ayointegral', 40, yPos);
  addSpace(30);

  // Professional Summary
  addSectionHeader('Professional Experience');
  // Add your experience details here...

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

  // AutoTable call
  autoTable(doc, {
    startY: yPos,
    head: [['Certification', 'Issuer']],
    body: certifications,
    margin: { left: 40, right: 40 },
    headStyles: { fillColor: [41, 128, 185] }
  });

  // Retrieve the last Y position of the autoTable
  yPos = doc.lastAutoTable ? doc.lastAutoTable.finalY + 20 : yPos + 20;

  // Education Section
  addSectionHeader('Education');
  addBodyText('Diploma in Multimedia Technology - Dalewares Institute of Technology, Lagos, Nigeria');

  // Save the PDF
  doc.save('Ayodele_Ajayi_CV.pdf');
};
