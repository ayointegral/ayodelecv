import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Download } from 'lucide-react';
import { generatePDF } from '../utils/generatePDF';
import { 
  Github, 
  Linkedin, 
  Briefcase, 
  Award, 
  GraduationCap, 
  Code 
} from 'lucide-react';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Head>
        <title>Ayodele Ajayi - Lead DevSecOps Engineer & Technical Team Lead - Cloud Architecture, Platform Engineering & Agile Leadership</title>
        <meta name="description" content="Senior technology leader with expertise in DevSecOps, Cloud Architecture, and Agile Leadership. Specializing in AWS, Azure, Platform Engineering, and building high-performing engineering teams." />
        <meta name="keywords" content="DevSecOps,Cloud Architecture,Technical Leadership,Agile,Platform Engineering,AWS,Azure,Team Leadership" />
        <meta name="robots" content="index,follow" />
        <meta name="keywords" content="DevSecOps,DevOps,SRE,Platform Engineering" />
        <meta property="og:title" content="Ayodele Ajayi - Lead DevSecOps Engineer" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Ayodele Ajayi - Lead DevSecOps Engineer with expertise in cloud infrastructure, security, DevOps, SRE, and Platform Engineering." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ayodele Ajayi",
            "jobTitle": "Lead DevSecOps Engineer",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "UK"
            },
            "sameAs": [
              "https://linkedin.com/in/ayoinc",
              "https://github.com/ayointegral"
            ]
          }`}
        </script>
      </Head>

      <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white flex flex-col">
      <Navigation />
        
      <main className="max-w-7xl mx-auto px-6 py-12 md:flex md:space-x-12 flex-grow">
{/* Profile Section - Left */}
<div className="flex flex-col items-center md:items-start md:w-1/3 mb-16 md:mb-0 animate-fade-in">
  <div className="relative">
    {/* Glow effect wrapper */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
    
    {/* Image container */}
    <div className="relative w-48 h-48 rounded-full overflow-hidden ring-2 ring-white/20 dark:ring-slate-800">
      <Image 
        src="/images/profile.jpg"
        alt="Ayodele Ajayi"
        width={192}
        height={192}
        priority
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  <h1 className="text-2xl font-bold mb-2">Ayodele Ajayi</h1>
<p className="text-gray-600 dark:text-gray-400 mb-4">
  Lead DevSecOps Engineer & Technical Team Lead
</p>

            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/ayoinc"
                className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/ayointegral"
                className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

            {/* Add near social links */}
            <button
            onClick={() => generatePDF()}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
            <Download className="w-4 h-4" />
            Download CV
            </button>
            </div>
          </div>
          {/* Main Content - Right */}
          <div className="md:w-2/3">
            {/* Introduction */}
            <div className="text-left mb-16">
  <h2 className="text-4xl font-bold mb-6">
    Hey There <span className="wave">👋</span>
  </h2>
  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
    I&#39;m a seasoned DevSecOps Engineer and Technical Leader with a proven track record in building and 
    scaling cloud infrastructure while fostering high-performing engineering teams. My expertise spans 
    cloud architecture, security implementation, and agile team leadership, with a particular focus on 
    AWS and Azure environments. I excel at bridging technical excellence with business objectives through:
  </p>
  <ul className="list-none space-y-3 text-gray-600 dark:text-gray-300">
    <li className="flex items-center gap-2">
      <span className="text-blue-500">•</span>
      Leading Agile engineering teams and implementing effective DevOps practices
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-500">•</span>
      Architecting secure, scalable cloud solutions and implementing robust CI/CD pipelines
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-500">•</span>
      Facilitating technical growth through mentoring, documentation, and knowledge sharing
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-500">•</span>
      Driving innovation while maintaining operational excellence and security compliance
    </li>
  </ul>
</div>

<div className="mb-16">
  <h3 className="text-2xl font-bold mb-8">Key Achievements</h3>
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg">
      <h4 className="font-bold mb-2">Team Leadership</h4>
      <p className="text-gray-600 dark:text-gray-300">
        Successfully led and mentored multiple engineering teams, implementing Agile methodologies and 
        fostering a culture of continuous improvement and innovation.
      </p>
    </div>
    <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg">
      <h4 className="font-bold mb-2">Technical Excellence</h4>
      <p className="text-gray-600 dark:text-gray-300">
        Architected and implemented robust cloud solutions, achieving 99.9% uptime and significant 
        improvements in deployment efficiency and security compliance.
      </p>
    </div>
  </div>
</div>

            {/* Experience Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-blue-500" />
                Professional Experience
              </h3>
              
{/* Experience Timeline */}
<div className="space-y-12">
  {/* Current Role - ContainerCode */}
  <div className="relative pl-6 border-l-2 border-blue-500">
    <div className="flex items-center mb-2">
      <h4 className="text-xl font-bold">Freelance DevOps Consultant</h4>
    </div>
    <div className="flex items-center gap-4 mb-4">
      <span className="text-gray-600 dark:text-gray-400">ContainerCode Club, London • July 2019 - Present</span>
      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
        Current
      </span>
    </div>
    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
      <li>• Provided DevOps consultancy services for various clients, leveraging extensive experience with AWS and Azure</li>
      <li>• Designed and implemented scalable, secure cloud architectures using AWS and Azure, achieving high availability and reliability</li>
      <li>• Developed and optimised CI/CD pipelines using Jenkins, GitLab CI/CD, Azure DevOps, and GitHub Actions</li>
      <li>• Automated infrastructure provisioning and management with Terraform and Ansible, reducing manual effort and increasing deployment speed by 50%</li>
      <li>• Set up containerised environments using Kubernetes and Docker, ensuring efficient orchestration and management of microservices</li>
      <li>• Integrated monitoring and logging solutions using Prometheus, Grafana, ELK stack, and Datadog to enhance visibility and troubleshooting</li>
      <li>• Implemented robust security measures, including IAM policies, VPC configurations, and automated compliance checks with TFSec</li>
      <li>• Collaborated with development teams to streamline workflows and improve application performance and stability</li>
      <li>• Conducted training sessions and workshops to upskill client teams on best DevOps practices and tools</li>
      <li>• Managed multiple projects simultaneously, ensuring timely delivery and client satisfaction</li>
    </ul>
  </div>

  {/* Vault Platform Role */}
  <div className="relative pl-6 border-l-2 border-gray-300 dark:border-gray-700">
    <div className="flex items-center mb-2">
      <h4 className="text-xl font-bold">Senior DevOps Engineer</h4>
    </div>
    <div className="mb-4">
      <span className="text-gray-600 dark:text-gray-400">Vault Platform • July 2022 - December 2023</span>
    </div>
    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
      <li>• Designed and deployed scalable AWS solutions, achieving 99.9% uptime using Kubernetes</li>
      <li>• Implemented infrastructure as code using Terraform, reducing deployment time by 40%</li>
      <li>• Managed Azure Kubernetes services, ensuring 99.95% uptime and 100% security compliance</li>
      <li>• Set up AWS organisation and multiple accounts for different environments</li>
      <li>• Established AWS VPN client connection authenticated with SSO and implemented guardrails and CloudWatch alarms</li>
      <li>• Configured no-trust setups for optimum security and managed Cloudflare DNS for emails</li>
      <li>• Set up Slack notifications for anomalies and integrated Datadog for comprehensive monitoring</li>
      <li>• Optimised CI/CD pipelines in CircleCI and GitHub Actions, and implemented TFSec and Terraform modularisation</li>
      <li>• Deployed and managed containers in ECS, ensuring all deployments were secure and automated</li>
      <li>• Mentored junior DevOps engineers, fostering professional growth and skill development</li>
    </ul>
  </div>



                {/* Previous Role 1 */}
                <div className="relative pl-6 border-l-2 border-gray-300 dark:border-gray-700">
                  <div className="flex items-center mb-2">
                    <h4 className="text-xl font-bold">Lead DevOps Engineer</h4>
                  </div>
                  <div className="mb-4">
                    <span className="text-gray-600 dark:text-gray-400">eConsult Health • October 2021 - June 2022</span>
                  </div>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Led Linux-based AWS application hosting, improving system performance by 20%</li>
                    <li>• Automated cloud resource management using Python scripts, reducing errors by 25%</li>
                    <li>• Implemented automated testing pipelines with Jenkins, ensuring 100% code coverage</li>
                    <li>• Set up ECS using CDK and CloudFormation, managed PaaS and serverless functions</li>
                    <li>• Handled S3 lifecycle management, logging, and monitoring setup</li>
                    <li>• Integrated health solutions with third-party systems using Direct Connect</li>
                    <li>• Collaborated with cross-functional teams to solve complex problems and drive innovation</li>
                  </ul>
                </div>

                {/* Previous Role 2 */}
                <div className="relative pl-6 border-l-2 border-gray-300 dark:border-gray-700">
                  <div className="flex items-center mb-2">
                    <h4 className="text-xl font-bold">Senior DevOps Engineer</h4>
                  </div>
                  <div className="mb-4">
                    <span className="text-gray-600 dark:text-gray-400">Doctor Care Anywhere • March 2021 - December 2021</span>
                  </div>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Managed and optimised Azure Kubernetes platforms, implementing security best practices to achieve a 99.95% compliance rate</li>
                    <li>• Orchestrated a major platform rollout on Azure Cloud using CI/CD pipelines, boosting user engagement by 40%</li>
                    <li>• Developed and maintained CI/CD pipelines for Azure and AWS, reducing deployment time by 30% and improving operational reliability</li>
                    <li>• Set up Azure Kubernetes Service (AKS) with VNET integration and managed Azure DevOps pipelines</li>
                    <li>• Utilised Helm, Flux, and ArgoCD for deployment management</li>
                    <li>• Documented and managed release lifecycles using Jira and Confluence</li>
                    <li>• Provided strategic input to C-level executives on technology and process improvements</li>
                  </ul>
                </div>

                {/* Previous Role 3 */}
                <div className="relative pl-6 border-l-2 border-gray-300 dark:border-gray-700">
                  <div className="flex items-center mb-2">
                    <h4 className="text-xl font-bold">Site Reliability Engineer</h4>
                  </div>
                  <div className="mb-4">
                    <span className="text-gray-600 dark:text-gray-400">Rank Group • March 2020 - March 2021</span>
                  </div>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Implemented CI/CD pipelines and automated testing, boosting deployment frequency and reliability</li>
                    <li>• Collaborated closely with product teams to maintain platform stability and updates, contributing to a seamless user experience</li>
                    <li>• Set up Dynatrace for logging and monitoring</li>
                    <li>• Managed Jenkins pipeline deployments into Docker Swarm clusters within a secure AWS deployment environment</li>
                    <li>• Handled pricing and negotiations with suppliers</li>
                  </ul>
                </div>

                {/* Previous Role 4 */}
                <div className="relative pl-6 border-l-2 border-gray-300 dark:border-gray-700">
                  <div className="flex items-center mb-2">
                    <h4 className="text-xl font-bold">DevOps Engineer</h4>
                  </div>
                  <div className="mb-4">
                    <span className="text-gray-600 dark:text-gray-400">Adjoint Inc. • August 2019 - March 2020</span>
                  </div>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Orchestrated CI/CD processes using GKE, Docker, and GitOps, streamlining deployment workflows</li>
                    <li>• Containerised platforms to enhance scalability and maintainability</li>
                    <li>• Participated in cross-functional team meetings to align development and operational goals</li>
                  </ul>
                </div>

                {/* Previous Role 5 */}
                <div className="relative pl-6 border-l-2 border-gray-300 dark:border-gray-700">
                  <div className="flex items-center mb-2">
                    <h4 className="text-xl font-bold">Customer Support Engineer</h4>
                  </div>
                  <div className="mb-4">
                    <span className="text-gray-600 dark:text-gray-400">OpenAsset • January 2018 - August 2019</span>
                  </div>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Resolved complex IT and digital asset management issues, providing high-quality customer support</li>
                    <li>• Created technical documentation and proof of concepts, driving product improvements</li>
                  </ul>
                </div>

                {/* Previous Role 6 */}
                <div className="relative pl-6 border-l-2 border-gray-300 dark:border-gray-700">
                  <div className="flex items-center mb-2">
                    <h4 className="text-xl font-bold">System Analyst</h4>
                  </div>
                  <div className="mb-4">
                    <span className="text-gray-600 dark:text-gray-400">Indivior PLC • March 2016 - January 2018</span>
                  </div>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Managed Windows applications, MDM, and OS deployment, ensuring seamless operation and user support</li>
                    <li>• Assisted in software installations, updates, and troubleshooting</li>
                    <li>• Provided user training and support for IT systems</li>
                    <li>• Collaborated with other IT teams to ensure infrastructure stability</li>
                  </ul>
                </div>

                {/* Previous Role 7 */}
                <div className="relative pl-6 border-l-2 border-gray-300 dark:border-gray-700">
                  <div className="flex items-center mb-2">
                    <h4 className="text-xl font-bold">IT Analyst</h4>
                  </div>
                  <div className="mb-4">
                    <span className="text-gray-600 dark:text-gray-400">SC Johnson Ltd. • August 2015 - February 2016</span>
                  </div>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Managed Windows applications, Mobile Device Management (MDM), and OS deployment, ensuring seamless operation and user support</li>
                    <li>• Provided IT support for hardware and software issues, including troubleshooting, installations, and updates</li>
                    <li>• Assisted in the implementation of new IT projects and system upgrades</li>
                    <li>• Worked with internal teams to improve IT service quality and efficiency</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
    <Code className="w-6 h-6 text-blue-500" />
    Areas of Expertise
  </h3>


              <div className="space-y-8">
                {/* Cloud Platforms */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Cloud Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {["AWS", "Azure", "GCP", "Kubernetes", "Docker"].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-slate-800 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

{/* Skills Section */}
<div className="mb-16">
  <div className="space-y-8">
    {/* Leadership & Strategy */}
    <div>
      <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Leadership & Strategy</h4>
      <div className="flex flex-wrap gap-2">
        {[
          "Technical Team Leadership",
          "Agile/Scrum Implementation",
          "Engineering Culture Development",
          "Stakeholder Management",
          "Strategic Planning",
          "Process Optimization",
          "Cross-functional Collaboration",
          "Technical Mentorship",
          "Team Building",
          "Change Management"
        ].map((skill) => (
          <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-slate-800 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Agile & DevOps Practices */}
    <div>
      <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Agile & DevOps Practices</h4>
      <div className="flex flex-wrap gap-2">
        {[
          "Sprint Planning & Facilitation",
          "Continuous Integration/Delivery",
          "Infrastructure as Code",
          "GitOps Methodology",
          "Incident Management",
          "Post-mortem Analysis",
          "Documentation Strategy",
          "Knowledge Transfer",
          "Show & Tell Sessions",
          "Technical Documentation",
          "Release Management",
          "Service Level Objectives"
        ].map((skill) => (
          <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-slate-800 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Your existing technical skills sections... */}
  </div>
</div>
                {/* DevOps Tools */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">DevOps Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Jenkins", "GitLab CI/CD", "Azure DevOps", 
                      "GitHub Actions", "ArgoCD", "Terraform",
                      "Ansible", "CircleCI", "Vagrant", "Packer"
                    ].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-slate-800 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Security Tools */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Security & Monitoring</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "IAM", "Zero Trust", "CloudWatch", 
                      "Prometheus", "Grafana", "ELK Stack",
                      "Datadog", "Splunk", "Dynatrace"
                    ].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-slate-800 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Programming & Scripting Languages */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Programming & Scripting Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "JavaScript", "Bash", "PowerShell"].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-slate-800 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Development Frameworks */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Development Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {["MERN Stack (MongoDB, Express.js, React, Node.js)"].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-slate-800 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
                
                {/* Education Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-500" />
                Education
              </h3>
              
              <div className="space-y-8">
                <div className="pl-6 border-l-2 border-gray-300 dark:border-gray-700">
                  <h4 className="text-xl font-bold">Diploma in Multimedia Technology</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Dalewares Institute of Technology, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Award className="w-6 h-6 text-blue-500" />
                Certifications
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Current Certifications */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Current</h4>
                  <ul className="space-y-4">
                  <li className="pl-6 border-l-2 border-blue-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors rounded-r-lg p-3">
                      <h5 className="font-bold">AWS Certified Solutions Architect</h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Amazon Web Services</p>
                    </li>
                    <li className="pl-6 border-l-2 border-blue-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors rounded-r-lg p-3">
                      <h5 className="font-bold">HashiCorp Certified: Terraform Associate</h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">HashiCorp</p>
                    </li>
                    <li className="pl-6 border-l-2 border-blue-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors rounded-r-lg p-3">
                      <h5 className="font-bold">Cybersecurity: Managing Risk in the Information Age</h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Harvard University</p>
                    </li>
                    <li className="pl-6 border-l-2 border-blue-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors rounded-r-lg p-3">
                      <h5 className="font-bold">Python for Data Science</h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">IBM</p>
                    </li>
                  </ul>
                </div>

                {/* In Progress Certifications */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">In Progress</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• AWS Certified Security - Specialty </li>
                    <li>• Certified Information Systems Security Professional (CISSP)</li>
                    <li>• Certified Cloud Security Professional (CCSP)</li>
                    <li>• CompTIA Security+</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="text-left w-full">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Throughout my career, I&#39;ve been passionate about pushing the boundaries of what&#39;s possible in DevSecOps and cloud engineering. Whether it&#39;s designing scalable systems, optimising performance, or navigating complex security requirements, I thrive on tackling tough challenges and delivering innovative solutions. Currently pursuing advanced security certifications to further enhance my expertise in cloud security and DevSecOps practices.
            </p>

            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
