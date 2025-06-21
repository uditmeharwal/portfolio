import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
import './index.css';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const sections = [
    { id: 'professional-summary', label: 'Summary', icon: '👤' },
    { id: 'education', label: 'Education', icon: '📚' },
    { id: 'technical-skills', label: 'Skills', icon: '💻' },
    { id: 'soft-skills', label: 'Soft Skills', icon: '🤝' },
    { id: 'languages', label: 'Languages', icon: '🌐' },
    { id: 'professional-experience', label: 'Experience', icon: '💼' },
    { id: 'academic-projects', label: 'Projects', icon: '🔬' },
    { id: 'certifications', label: 'Certifications', icon: '🏆' },
    { id: 'extracurricular', label: 'Activities', icon: '🎭' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="fixed top-0 w-full z-20 bg-blue-900/50 dark:bg-grey-900/50 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="text-3xl font-bold text-blue-400 dark:text-cyan-400 hover:text-red-300 dark:hover:text-red-300 transition-colors duration-300 neon-glow"
        >
          UM
        </button>
        <nav className="hidden md:flex items-center gap-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-cyan-400 transition-colors duration-300 text-base font-medium relative group"
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 dark:bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
          <div className="toggle-button">
            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center hover:bg-blue-400 dark:hover:bg-cyan-400 transition-colors duration-300"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <FiSun className="text-yellow-400 text-xl" /> : <FiMoon className="text-cyan-400 text-xl" />}
            </button>
          </div>
        </nav>
        <button
          className="md:hidden text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-cyan-400 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-blue-50/90 dark:bg-gray-900/90 backdrop-blur-md px-4 py-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-cyan-400 py-2 text-sm font-medium"
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
          <div className="flex items-center py-2">
            <span className="text-gray-600 dark:text-gray-300 text-sm font-medium mr-2">
              {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </span>
            <div className="toggle-button">
              <button
                onClick={toggleDarkMode}
                className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center hover:bg-blue-400 dark:hover:bg-cyan-400 transition-colors duration-300"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <FiSun className="text-yellow-400 text-xl" /> : <FiMoon className="text-cyan-400 text-xl" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function ContactInfo() {
  const [text, setText] = useState('');
  const fullText = 'Udit Meharwal';

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="bg-blue-50 dark:bg-gray-900 pt-24 pb-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-blue-600 dark:text-cyan-400 mb-4 animate-fade-in neon-glow">{text}</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 animate-fade-in delay-200">
          DevOps Engineer & Biotechnology Graduate
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:uditmeharwal2@gmail.com"
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-pink-500 transition-colors duration-300"
          >
            <FaEnvelope className="mr-2" /> uditmeharwal2@gmail.com
          </a>
          <a
            href="tel:+918267977123"
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-pink-500 transition-colors duration-300"
          >
            <FaPhone className="mr-2" /> +91 82679 77123
          </a>
          <a
            href="https://www.linkedin.com/in/uditmeharwal-b3250120a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-pink-500 transition-colors duration-300"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
          <a
            href="https://github.com/uditmeharwal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-pink-500 transition-colors duration-300"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-4 animate-fade-in delay-400">
          Vill Chandena Koli Must, Deoband, Saharanpur, Uttar Pradesh 247554, India
        </p>
      </div>
    </div>
  );
}

function Section({ title, id, children, index = 0 }) {
  return (
    <section id={id} className="py-12">
      <div className="px-4 sm:px-6 w-full">
        <div
          className="relative bg-white/90 dark:bg-gray-800/30 backdrop-blur-xl border border-blue-200 dark:border-cyan-400/20 rounded-2xl shadow-xl dark:shadow-neon p-12 sm:p-12 mb-0 overflow-hidden transform hover:scale-[1.02] transition-all duration-500 animate-fade-in w-full min-h-[200px] h-auto"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <h2 className="text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-6">{title}</h2>
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed">{children}</div>
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ category, skills }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-blue-500 dark:text-pink-500">{category}</h3>
      <p className="text-gray-700 dark:text-gray-300">{skills.join(', ')}</p>
    </div>
  );
}

function ExperienceItem({ company, role, period, tasks }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-blue-500 dark:text-pink-500">{company} - {role}</h3>
      <p className="text-gray-500 dark:text-gray-400 italic">{period}</p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectItem({ title, description }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-blue-500 dark:text-pink-500">{title}</h3>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <Header />
      <ContactInfo />
      <main>
        <Section title="Professional Summary" id="professional-summary" index={0}>
          <p className="leading-relaxed">
            Hello, I'm Udit Meharwal, a passionate DevOps engineer and Biotechnology graduate from Graphic Era University with a CGPA of 8.96. I specialize in Docker, Kubernetes, Jenkins, Ansible, and Terraform, with expertise in AWS cloud services (EC2, S3, VPC, Lambda, IAM). My hands-on experience includes building and automating CI/CD pipelines and deploying scalable applications, ensuring efficient cloud infrastructure management. With a strong foundation in computer science, machine learning, and data analysis, I thrive on creating innovative, impactful solutions at the intersection of technology and healthcare.
          </p>
        </Section>

        <Section title="Education" id="education" index={1}>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-500 dark:text-pink-500">B.Tech (Honors) in Biotechnology with Computer Science Specialization</h3>
            <p className="text-gray-700 dark:text-gray-300">Graphic Era University, Dehradun (2020-2024) | CGPA: 8.96</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-500 dark:text-pink-500">12th Grade, CBSE</h3>
            <p className="text-gray-700 dark:text-gray-300">Cambridge International School (2018-2019)</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-500 dark:text-pink-500">10th Grade, CBSE</h3>
            <p className="text-gray-700 dark:text-gray-300">Cambridge International School (2016-2017)</p>
          </div>
        </Section>

        <Section title="Technical Skills" id="technical-skills" index={2}>
          <SkillCategory category="DevOps" skills={["Docker", "Kubernetes", "Jenkins", "Ansible", "Terraform", "Grafana", "Argo CD", "Prometheus"]} />
          <SkillCategory category="Cloud Technologies" skills={["AWS (EC2, EBS, S3, CloudFront, VPC, VPN, DynamoDB, CloudWatch, Lambda, SES, SNS, IAM)"]} />
          <SkillCategory category="Programming Languages" skills={["Java", "Python", "C#", "R", "JavaScript", "HTML", "CSS", "React"]} />
          <SkillCategory category="Databases" skills={["SQL", "MongoDB"]} />
          <SkillCategory category="Data Analysis" skills={["Microsoft Power BI", "Statistics", "Data Science", "Machine Learning", "Microsoft Office"]} />
          <SkillCategory category="Tools" skills={["Git", "GitHub", "Linux", "Shell Scripting", "Digital Image Processing", "IoT"]} />
        </Section>

        <Section title="Soft Skills" id="soft-skills" index={3}>
          <p className="leading-relaxed">Analytical Thinking, Collaboration, Leadership, Adaptability</p>
        </Section>

        <Section title="Languages" id="languages" index={4}>
          <p className="leading-relaxed">English, Hindi</p>
        </Section>

        <Section title="Professional Experience" id="professional-experience" index={5}>
          <ExperienceItem
            company="Knowledge Cube Private Limited"
            role="Intern"
            period="Jul 2022 - Sep 2022"
            tasks={[
              "Analyzed large datasets using Python and Power BI, improving data-driven insights by 15%.",
              "Developed and optimized SQL queries on sample datasets for business analytics.",
              "Streamlined data extraction processes, enhancing reporting efficiency by 20%.",
              "Applied mathematical modeling to improve business analysis accuracy."
            ]}
          />
          <ExperienceItem
            company="Internshala Pvt Ltd"
            role="Intern"
            period="June 2023 - Aug 2023"
            tasks={[
              "Developed 5+ Java applications using OOP principles, improving code modularity.",
              "Designed scalable, efficient code for real-world business applications."
            ]}
          />
        </Section>

        <Section title="Academic Projects" id="academic-projects" index={6}>
          <ProjectItem
            title="Blood Bank and Hospital Data Management Software"
            description={[
              "Developed a Java-based application using SQL, JDBC, and NetBeans to manage over 1,000 blood bank records.",
              "Implemented features for efficient data storage, retrieval, and management."
            ]}
          />
          <ProjectItem
            title="Heart Disease Prediction Using Machine Learning"
            description={[
              "Built a predictive model using Python and ML on Kaggle datasets, achieving 85% accuracy in heart disease detection.",
              "Ensured model scalability and reliability for real-world deployment."
            ]}
          />
          <ProjectItem
            title="Web Notes Application Deployment"
            description={[
              "Deployed a web application for 100+ users using Docker and Kubernetes.",
              "Reduced deployment time by 30% with Jenkins CI/CD pipelines.",
              "Managed source code and collaboration via GitHub."
            ]}
          />
        </Section>

        <Section title="Certifications" id="certifications" index={7}>
          <ul className="list-disc list-inside leading-relaxed">
            <li>Programming in Java, IIT Kharagpur (NPTEL)</li>
            <li>Upgrading to Java Tutorials, Educa</li>
            <li>Advanced Excel Tutorial, eLearn Markets</li>
            <li>Basics of C Programming Language, Eduonax</li>
            <li>Basics of DevOps, Great Learning</li>
          </ul>
        </Section>

        <Section title="Extracurricular Activities" id="extracurricular" index={8}>
          <ul className="list-disc list-inside leading-relaxed">
            <li>Participated in AWS AWSome Day Online Conference</li>
            <li>Attended IP Awareness/Training Program and Sibeo Drug Designing Webinar</li>
            <li>Engaged in international webinar on Extremophiles: Ecological and Biotechnological Importance</li>
            <li>Attended national webinar on Pursuit of Science and Technology as a Career</li>
            <li>Served as Class Representative, 8th Semester</li>
          </ul>
        </Section>
      </main>
      <footer className="bg-blue-100 dark:bg-gray-900 py-6 text-center border-t border-blue-200 dark:border-cyan-400/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="mailto:uditmeharwal2@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-pink-500 transition-colors duration-300"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/uditmeharwal-b3250120a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-pink-500 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/uditmeharwal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-pink-500 transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
          </div>
          <p className="text-gray-500 dark:text-gray-400">© 2025 Udit Meharwal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;