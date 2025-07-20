import React, { useState, useEffect } from 'react';
import './App.css';
import { FaMoon, FaSun, FaBars, FaTimes, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCode, FaDownload } from 'react-icons/fa';


import ProfileImage from './assets/Your-Image.png';
import WomenSafetyAppImage from './assets/Women-Safety-App-Image.png';
import PasswordManagerImage from './assets/Password-Manager-Image.png';
import MentalWellnessAppImage from './assets/Mental-Wellness-App-Image.png';
import GrowthFlow from './assets/growthflow.png';
import ResumePDF from './assets/Soundarapandiyan-RESUME-SDE_.pdf';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    // Simulate a loading delay for the typing effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds for typing effect + slight delay
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const navigateToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileNavOpen(false); // Close mobile nav on item click

    // Use a slight delay to allow section to become active and rendered
    // Then scroll to the top of the section, accounting for fixed header
    setTimeout(() => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // Small delay
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-text">Loading Portfolio...</div>
      </div>
    );
  }

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="app-header">
        <div className="app-logo">MyPortfolio</div>
        <nav className={`main-nav ${isMobileNavOpen ? 'open' : ''}`}>
          <button className={`nav-item ${activeSection === 'home' ? 'active' : ''}`} onClick={() => navigateToSection('home')}>Home</button>
          <button className={`nav-item ${activeSection === 'about' ? 'active' : ''}`} onClick={() => navigateToSection('about')}>About</button>
          <button className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => navigateToSection('skills')}>Skills</button>
          <button className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => navigateToSection('projects')}>Projects</button>
          <button className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => navigateToSection('contact')}>Contact</button>
          <button className={`nav-item ${activeSection === 'hire-us' ? 'active' : ''}`} onClick={() => navigateToSection('hire-us')}>Hire Us</button>
        </nav>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button className="hamburger-menu" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
          {isMobileNavOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      <main className="main-content-area">
        {/* Home Section */}
        <section id="home" className={`content-section home-section ${activeSection === 'home' ? 'active' : ''}`} key="home-section">
          <div className="hero-content">
            <h1 className="hero-title">Hello, I'm Soundarapandiyan S.</h1>
            <p className="hero-subtitle">
              Security-driven engineer building intelligent Android applications that blend AI precision with user-centric privacy.
              Experienced in Kotlin, biometric authentication, offline-first architecture, and multi-layered security design.
              Skilled in deploying hybrid AI pipelines, encrypted storage, and real-time risk detection systems with measurable impact.
            </p>
            <button className="cta-button" onClick={() => navigateToSection('projects')}>View My Work</button>
          </div>
          <div className="hero-image-container">
            <img src={ProfileImage} alt="Soundarapandiyan S" className="hero-image" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`content-section about-section ${activeSection === 'about' ? 'active' : ''}`} key="about-section">
          <h2 className="section-heading">About Me</h2>
          <div className="about-grid">
            <div className="info-card full-width">
              <h3 className="card-title">Professional Summary</h3>
              <p className="card-text">
                Security-driven engineer building intelligent Android applications that blend AI precision with user-centric privacy.
                Experienced in Kotlin, biometric authentication, offline-first architecture, and multi-layered security design.
                Skilled in deploying hybrid AI pipelines, encrypted storage, and real-time risk detection systems with measurable impact.
              </p>
              <a href={ResumePDF} download="Soundarapandiyan_S_Resume.pdf" className="download-resume-button">
                <FaDownload /> Download Resume
              </a>
            </div>

            <div className="info-card">
              <h3 className="card-title">Education</h3>
              <div className="education-entry">
                <p className="edu-degree">B.Tech in Information Technology</p>
                <p className="edu-university">Anna University, Tiruchirappalli</p>
                <p className="edu-duration">October 2021 – March 2025</p>
                <p className="edu-cgpa">CGPA: <span>7.8 / 10</span></p>
                <p className="edu-courses">Relevant Courses: DSA, OOPS, DBMS, OS, CN, System Design, Agile, SDLC, AI/ML</p>
              </div>
            </div>

            <div className="info-card">
              <h3 className="card-title">Experience</h3>
              <div className="experience-entry">
                <p className="exp-title">Software Development Engineer Intern</p>
                <p className="exp-company">Bluestock Fintech Pvt Ltd, Remote</p>
                <p className="exp-duration">Feb 2025 – Mar 2025</p>
                <ul className="exp-details-list">
                  <li>Built modular UI components using Spring Boot, increasing engagement by 25%.</li>
                  <li>Deployed microservices with MySQL backend, reducing API latency by 30%.</li>
                  <li>Optimized SQL queries, improving data retrieval speed by 40%.</li>
                  <li>Worked in Agile sprints, enhancing delivery cycles and collaboration.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`content-section skills-section ${activeSection === 'skills' ? 'active' : ''}`} key="skills-section">
          <h2 className="section-heading">My Skills</h2>
          <div className="skills-grid">
            <div className="info-card skill-category-card">
              <h3 className="card-title">Languages & Frameworks</h3>
              <div className="skill-tags">
                <span className="skill-tag primary-tag">Python</span>
                <span className="skill-tag secondary-tag">Kotlin</span>
                <span className="skill-tag primary-tag">Java</span>
                <span className="skill-tag secondary-tag">JavaScript</span>
                <span className="skill-tag primary-tag">Django</span>
                <span className="skill-tag secondary-tag">React.js</span>
                <span className="skill-tag primary-tag">TensorFlow</span>
                <span className="skill-tag secondary-tag">Py Torch</span>
              </div>
            </div>
            <div className="info-card skill-category-card">
              <h3 className="card-title">AI/ML & Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag tertiary-tag">Sentiment Analysis</span>
                <span className="skill-tag quaternary-tag">Model Distillation</span>
                <span className="skill-tag tertiary-tag">Synthetic Datasets</span>
                <span className="skill-tag quaternary-tag">OpenCV</span>
              </div>
            </div>
            <div className="info-card skill-category-card">
              <h3 className="card-title">Databases & APIs</h3>
              <div className="skill-tags">
                <span className="skill-tag primary-tag">PostgreSQL</span>
                <span className="skill-tag secondary-tag">MySQL</span>
                <span className="skill-tag primary-tag">Firebase</span>
                <span className="tech-tag tertiary-tag">REST</span>
                <span className="tech-tag quaternary-tag">HTML5</span>
                <span className="tech-tag tertiary-tag">CSS3</span>
                <span className="tech-tag quaternary-tag">JSON</span>
              </div>
            </div>
            <div className="info-card skill-category-card">
              <h3 className="card-title">Tools & DevOps</h3>
              <div className="skill-tags">
                <span className="skill-tag primary-tag">Git</span>
                <span className="skill-tag secondary-tag">Postman</span>
                <span className="skill-tag primary-tag">IntelliJ</span>
                <span className="skill-tag secondary-tag">VS Code</span>
                <span className="skill-tag primary-tag">Android Studio</span>
                <span className="skill-tag tertiary-tag">Docker</span>
                <span className="skill-tag quaternary-tag">CI/CD</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`content-section projects-section ${activeSection === 'projects' ? 'active' : ''}`} key="projects-section">
          <h2 className="section-heading">My Projects</h2>
          <div className="projects-grid">
            <div className="project-card info-card">
              <img src={WomenSafetyAppImage} alt="AI-Powered Women's Safety" className="project-image" />
              <h3 className="project-title">AI-Powered Women's Safety (Android Application)</h3>
              <p className="project-description">
                Developed a real-time mobile application for women's safety featuring live SOS alerts and location tracking.
                Trained and integrated a machine learning model to detect anomalies and predict emergencies with 90% accuracy.
                Connected heart-rate sensors from smartwatches to enable automatic SOS triggers via biometric signals.
              </p>
              <div className="project-tech-tags">
                <span className="tech-tag primary-tag">Kotlin</span>
                <span className="tech-tag secondary-tag">Firebase</span>
                <span className="tech-tag primary-tag">Python</span>
                <span className="tech-tag secondary-tag">TensorFlow</span>
                <span className="tech-tag primary-tag">OpenCV</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Mspanti/Girly1" target="_blank" rel="noopener noreferrer" className="github-link">
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </div>

            <div className="project-card info-card">
              <img src={PasswordManagerImage} alt="AegisPass – Secure Password Manager" className="project-image" />
              <h3 className="project-title">AegisPass – Secure Password Manager (Android Application)</h3>
              <p className="project-description">
                Secured password vaults using AES-256 with unique salts for encrypted data at rest.
                Applied jBCrypt for master password hashing with password strength, reuse, and age; integrated with HaveIBeenPwned API to flag breaches.
              </p>
              <div className="project-tech-tags">
                <span className="tech-tag primary-tag">Kotlin</span>
                <span className="tech-tag secondary-tag">SQLite</span>
                <span className="tech-tag primary-tag">jBCrypt</span>
                <span className="tech-tag secondary-tag">AndroidX Crypto</span>
                <span className="tech-tag primary-tag">AI</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Mspanti/AegisPass" target="_blank" rel="noopener noreferrer" className="github-link">
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </div>

            <div className="project-card info-card">
              <img src={MentalWellnessAppImage} alt="Nous Guard – Offline AI Mental Wellness Companion" className="project-image" />
              <h3 className="project-title">Nous Guard – Offline AI Mental Wellness Companion (Android Application)</h3>
              <p className="project-description">
                Reduced app launch time by 35% via UI thread optimization and primitive data tuning.
                Integrated hybrid AI pipeline (TFLite + ONNX) for offline intent detection with 28% improvement in responsiveness.
                Built secure journaling system with AES-256 encryption and biometric access, protecting mental health records.
                Included root/jailbreak detection and tamper-proof architecture to enhance data integrity.
              </p>
              <div className="project-tech-tags">
                <span className="tech-tag primary-tag">TensorFlow Lite</span>
                <span className="tech-tag secondary-tag">ONNX</span>
                <span className="tech-tag primary-tag">AES-256 encryption</span>
                <span className="tech-tag secondary-tag">Kotlin</span>
                <span className="tech-tag primary-tag">Room DB</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Mspanti/NousGuard" target="_blank" rel="noopener noreferrer" className="github-link">
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </div>

            <div className="project-card info-card">
              <img src={GrowthFlow} alt="Lightweight Internal Manager & Employee Feedback System" className="project-image" />
              <h3 className="project-title">Lightweight Internal Manager & Employee Feedback System</h3>
              <p className="project-description">
                  Built a beginner-friendly internal tool for managers to collect employee feedback and monitor performance. Designed scalable RESTful APIs with Django and PostgreSQL to manage employee records and feedback logs. Implemented a responsive and intuitive UI using React for better user experience across devices. Containerized the app using Docker for seamless deployment and testing across environments.
              </p>
              <div className="project-tech-tags">
                  <span className="tech-tag primary-tag">React</span>
                  <span className="tech-tag secondary-tag">Django</span>
                  <span className="tech-tag primary-tag">Python</span>
                  <span className="tech-tag secondary-tag">PostgreSQL</span>
                  <span className="tech-tag primary-tag">Docker</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Mspanti/growthflow-frontend" target="_blank" rel="noopener noreferrer" className="github-link">
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </div>

            {/* Certifications & Achievements card within Projects section as requested by the user, but will also have a dedicated section */}
            <div className="info-card certifications-card full-width">
              <h3 className="card-title">Certifications & Achievements</h3>
              <ul className="cert-achieve-list">
                <li>
                    <strong>Programming with DSA</strong> - Great Learning
                </li>
                <li>
                    <strong>SQL Database</strong> - Infosys Spring Board
                </li>
                <li>
                    <strong>Spring Boot API Development</strong> - HackerRank
                </li>
                <li>
                    <strong>Docker Fundamentals & Cloud Essentials</strong> - Infosys/Coursera
                </li>
                <li>
                    <strong>Agile & Scrum Principles</strong> - Coursera
                </li>
                <li>
                    <strong>LeetCode Problem Solving</strong> - 350+ Solved Problems
                </li>
                <li>
                    <strong>HackerRank Problem Solving</strong> – 150+ Solved Problems
                </li>
                <li>
                    <strong>Software Engineer</strong> – HackerRank
                </li>
                <li>
                    <strong>Increased operational efficiency by 15%</strong> during Java Programming Internship at Fantasy Solution Pvt Ltd.
                </li>
                <li>
                    <strong>Solved 550+ complex coding challenges</strong> on LeetCode, HackerRank demonstrating strong problem-solving skills.
                </li>
                <li>
                    <strong>Developed AI-based real-time safety alerts</strong>, improving emergency response efficiency by 45%.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`content-section contact-section ${activeSection === 'contact' ? 'active' : ''}`} key="contact-section">
          <h2 className="section-heading">Contact Me</h2>
          <div className="contact-grid">
            <div className="info-card contact-details-card">
              <h3 className="card-title">Get in Touch</h3>
              <p className="contact-info-item"><FaEnvelope className="contact-icon" /> mspandiyan3337@gmail.com</p>
              <p className="contact-info-item"><FaPhone className="contact-icon" /> +91 6369912779</p>
              <p className="contact-info-item"><FaMapMarkerAlt className="contact-icon" /> Tiruchirappalli, India</p>
              <div className="social-links-contact">
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon-contact"><FaLinkedin /> LinkedIn</a>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon-contact"><FaGithub /> GitHub</a>
                <a href="https://leetcode.com/u/Ft_pant/" target="_blank" rel="noopener noreferrer" className="social-icon-contact">
                  <FaCode /> LeetCode
                </a>
                <a href="https://www.hackerrank.com/mspandiyan3337" target="_blank" rel="noopener noreferrer" className="social-icon-contact">
                  <FaCode /> HackerRank
                </a>
              </div>
            </div>
            <div className="info-card contact-form-card">
              <h3 className="card-title">Send a Message</h3>
              <form className="contact-form">
                <input type="text" placeholder="Your Name" className="form-input" required />
                <input type="email" placeholder="Your Email" className="form-input" required />
                <input type="text" placeholder="Subject" className="form-input" required />
                <textarea placeholder="Your Message" className="form-input textarea-input" required></textarea>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </section>

        {/* Hire Us Section */}
        <section id="hire-us" className={`content-section hire-us-section ${activeSection === 'hire-us' ? 'active' : ''}`} key="hire-us-section">
          <h2 className="section-heading">Hire Me</h2>
          <div className="info-card hire-us-form-card">
            <p className="card-text" style={{textAlign: 'center', marginBottom: '1.5rem'}}>
              Looking for a dedicated and skilled engineer? Let's discuss your project!
            </p>
            <form className="hire-us-form">
              <input type="text" placeholder="Your Name / Company Name" className="form-input" required />
              <input type="email" placeholder="Your Email" className="form-input" required />
              <input type="text" placeholder="Project Type (e.g., Android App, Web Dev)" className="form-input" />
              <textarea placeholder="Tell me more about your project requirements..." className="form-input textarea-input" required></textarea>
              <button type="submit" className="submit-button">Submit Inquiry</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
