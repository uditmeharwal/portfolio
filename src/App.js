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
    <header className="fixed top-0 w-full z-20 bg-teal-50/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="text-2xl font-bold text-teal-600 dark:text-teal-400 hover:text-coral-500 dark:hover:text-coral-400 transition-colors duration-300 animate-pulse"
        >
          UM
        </button>
        <nav className="hidden md:flex items-center gap-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-gray-700 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300 text-sm font-medium relative group"
            >
              <span className="mr-1">{section.icon}</span>
              {section.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-600 dark:bg-teal-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-full bg-teal-100 dark:bg-gray-800 flex items-center justify-center hover:bg-coral-100 dark:hover:bg-coral-900 transition-all duration-300 transform hover:scale-110"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <FiSun className="text-yellow-500 text-lg" /> : <FiMoon className="text-teal-400 text-lg" />}
          </button>
        </nav>
        <button
          className="md:hidden text-gray-700 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400 text-2xl transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-teal-50/95 dark:bg-gray-900/95 backdrop-blur-lg px-6 py-4 animate-slide-down">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="block w-full text-left text-gray-700 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400 py-2 text-sm font-medium transition-colors duration-300"
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
          <div className="flex items-center py-2">
            <span className="text-gray-700 dark:text-gray-100 text-sm font-medium mr-2">
              {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </span>
            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 rounded-full bg-teal-100 dark:bg-gray-800 flex items-center justify-center hover:bg-coral-100 dark:hover:bg-coral-900 transition-all duration-300 transform hover:scale-110"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <FiSun className="text-yellow-500 text-lg" /> : <FiMoon className="text-teal-400 text-lg" />}
            </button>
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
    <div className="bg-gradient-to-b from-teal-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20 pb-12 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-teal-600 dark:text-teal-400 mb-4 animate-fade-in-up">{text}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-200 mb-6 animate-fade-in-up delay-200">
          DevOps Engineer & Cloud Engineer
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:uditmeharwal2@gmail.com"
            className="flex items-center text-gray-600 dark:text-gray-200 hover:text-coral-500 dark:hover:text-coral-400 transition-colors duration-300 transform hover:scale-105"
          >
            <FaEnvelope className="mr-2" /> uditmeharwal2@gmail.com
          </a>
          <a
            href="tel:+918267977123"
            className="flex items-center text-gray-600 dark:text-gray-200 hover:text-coral-500 dark:hover:text-coral-400 transition-colors duration-300 transform hover:scale-105"
          >
            <FaPhone className="mr-2" /> +91 82679 77123
          </a>
          <a
            href="https://www.linkedin.com/in/udit-meharwal/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 dark:text-gray-200 hover:text-coral-500 dark:hover:text-coral-400 transition-colors duration-300 transform hover:scale-105"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
          <a
            href="https://github.com/uditmeharwal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 dark:text-gray-200 hover:text-coral-500 dark:hover:text-coral-400 transition-colors duration-300 transform hover:scale-105"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
        </div>
        <p className="text-gray-500 dark:text-gray-300 mt-6 animate-fade-in-up delay-400 text-sm">
          Vill Chandena Koli Must, Deoband, Saharanpur, Uttar Pradesh 247554, India
        </p>
      </div>
    </div>
  );
}

function Section({ title, id, children, index = 0 }) {
  return (
    <section id={id} className="py-12">
      <div className="w-full">
        <div
          className="relative bg-white dark:bg-gray-800 border border-teal-200 dark:border-teal-700 rounded-2xl shadow-xl p-10 mx-6 mb-0 overflow-hidden w-[calc(100%-3rem)] min-h-[200px] h-auto animate-card-load hover:animate-card-hover"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-6">{title}</h2>
          <div className="text-gray-600 dark:text-gray-200 leading-relaxed">{children}</div>
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ category, skills }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-green-500 dark:text-coral-400">{category}</h3>
      <p className="text-gray-600 dark:text-gray-200 text-sm">{skills.join(' , ')}</p>
    </div>
  );
}

function ExperienceItem({ company, role, period, tasks }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-green-500 dark:text-coral-400">{company} - {role}</h3>
      <p className="text-gray-500 dark:text-gray-300 text-sm italic">{period}</p>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-200 mt-2 text-sm">
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
      <h3 className="text-lg font-semibold text-green-500 dark:text-coral-400">{title}</h3>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-200 text-sm">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-teal-50 dark:bg-gray-900 text-gray-600 dark:text-gray-200 font-sans">
      <Header />
      <ContactInfo />
      <main className="container mx-auto">
        <Section title="Professional Summary" id="professional-summary" index={0}>
          <p className="leading-relaxed text-md">
            Welcome to my portfolio! I’m Udit Meharwal, a dedicated DevOps Engineer and Cloud Engineer graduate from Graphic Era University, where I earned a stellar CGPA of 8.96. With a fervent passion for leveraging technology to drive innovation, I specialize in designing, automating, and optimizing cloud-based solutions that empower businesses to scale efficiently and operate seamlessly. My expertise spans DevOps practices, cloud infrastructure, and cutting-edge tools, complemented by a robust foundation in computer science, machine learning, and data analysis.
            As a DevOps and Cloud Engineer, I excel in building CI/CD pipelines, automating infrastructure, and deploying scalable, resilient applications. My technical toolkit includes industry-leading technologies such as Docker, Kubernetes, Jenkins, Ansible, and Terraform, which I use to streamline development workflows and ensure operational excellence. I am deeply proficient in AWS cloud services—including EC2, S3, VPC, Lambda, and IAM—enabling me to architect secure, cost-effective, and high-performance cloud environments tailored to diverse business needs.
            Beyond technical expertise, I am a lifelong learner committed to staying at the forefront of technological advancements. I actively explore emerging trends such as serverless architectures, cloud-native development, and AI-driven automation, ensuring that my solutions are future-ready. My proficiency in Python, Bash, and YAML, combined with my knowledge of machine learning and data analysis, enables me to develop intelligent, impactful solutions that bridge the gap between technology and real-world applications.
            Collaboration, problem-solving, and innovation are at the core of my work ethic. Whether I’m optimizing cloud workflows, mentoring peers, or contributing to open-source projects, I thrive in dynamic environments where I can make a meaningful impact. My goal is to create solutions that not only meet technical requirements but also drive business success and societal progress.
          </p>
        </Section>

        <Section title="Education" id="education" index={1}>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-coral-500 dark:text-coral-400">B.Tech (Honors) in Biotechnology with Computer Science Specialization</h3>
            <p className="text-gray-600 dark:text-gray-200 text-sm">Graphic Era University, Dehradun (2020-2024) | CGPA: 8.96</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-coral-500 dark:text-coral-400">12th Grade, CBSE</h3>
            <p className="text-gray-600 dark:text-gray-200 text-sm">Cambridge International School (2018-2019)</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-coral-500 dark:text-coral-400">10th Grade, CBSE</h3>
            <p className="text-gray-600 dark:text-gray-200 text-sm">Cambridge International School (2016-2017)</p>
          </div>
        </Section>

        <Section title="Technical Skills" id="technical-skills" index={2}>
          <SkillCategory category="DevOps" skills={[" Docker " , " Kubernetes " , " Jenkins " , " Ansible " , " Terraform " , " Grafana " , " Argo CD " , " Prometheus "]} />
          <SkillCategory category="Cloud Technologies" skills={[" AWS ( EC2 , EBS , S3 , CloudFront , VPC , VPN , DynamoDB , CloudWatch , Lambda , SES , SNS , IAM)"]} />
          <SkillCategory category="Programming Languages" skills={[" Java " , " Python " , " C# " , " R " , " JavaScript " , " HTML " , " CSS " ,  " React "]} />
          <SkillCategory category="Databases" skills={[" SQL " , " MongoDB "]} />
          <SkillCategory category="Data Analysis" skills={[" Microsoft Power BI " , " Statistics " , " Data Science " , " Machine Learning " , " Microsoft Office " ]} />
          <SkillCategory category="Tools" skills={[" Git " , " GitHub " , " Linux " , " Shell Scripting " , " Digital Image Processing " , " IoT "]} />
        </Section>

        <Section title="Soft Skills" id="soft-skills" index={3}>
          <p className="leading-relaxed text-sm">Analytical Thinking ,  Collaboration ,  Leadership ,  Adaptability</p>
        </Section>

        <Section title="Languages" id="languages" index={4}>
          <p className="leading-relaxed text-sm">English , Hindi</p>
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
          <ul className="list-disc list-inside leading-relaxed text-sm">
            <li>Programming in Java, IIT Kharagpur (NPTEL)</li>
            <li>Upgrading to Java Tutorials, Educa</li>
            <li>Advanced Excel Tutorial, eLearn Markets</li>
            <li>Basics of C Programming Language, Eduonax</li>
            <li>Basics of DevOps, Great Learning</li>
          </ul>
        </Section>

        <Section title="Extracurricular Activities" id="extracurricular" index={8}>
          <ul className="list-disc list-inside leading-relaxed text-sm">
            <li>Participated in AWS AWSome Day Online Conference</li>
            <li>Attended IP Awareness/Training Program and Sibeo Drug Designing Webinar</li>
            <li>Engaged in international webinar on Extremophiles: Ecological and Biotechnological Importance</li>
            <li>Attended national webinar on Pursuit of Science and Technology as a Career</li>
            <li>Served as Class Representative, 8th Semester</li>
          </ul>
        </Section>
      </main>
      <footer className="bg-teal-100 dark:bg-gray-800 py-8 text-center border-t border-teal-200 dark:border-teal-700">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-8 mb-4">
            <a
              href="mailto:uditmeharwal2@gmail.com"
              className="text-gray-600 dark:text-gray-200 hover:text-coral-500 dark:hover:text-coral-400 transition-colors duration-300 transform hover:scale-110"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/udit-meharwal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-200 hover:text-coral-500 dark:hover:text-coral-400 transition-colors duration-300 transform hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/uditmeharwal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-200 hover:text-coral-500 dark:hover:text-coral-400 transition-colors duration-300 transform hover:scale-110"
            >
              <FaGithub size={24} />
            </a>
          </div>
          <p className="text-gray-500 dark:text-gray-300 text-sm">© 2025 Udit Meharwal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;