import React from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div>
      {/* HEADER */}
      <header className="py-5 bg-primary text-white text-center">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center">
          {/* Left: GitHub and LinkedIn */}
          <div className="d-flex align-items-center me-5">
            <a
              href="https://github.com/sonuupahyaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              style={{ marginRight: "2rem" }}
            >
              <i className="bi bi-github" style={{ fontSize: "3rem" }}></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sonukumar102/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <i className="bi bi-linkedin" style={{ fontSize: "3rem" }}></i>
            </a>
          </div>

          {/* Center: Profile Photo */}
          <img src="/photo.jpg" alt="My Photo" className="profile-image me-5 ms-5" />

          {/* Text: Hi, I'm Sonu */}
          <div className="text-start">
            <h1 className="display-4">Hi, I'm Sonu Kumar</h1>
            <p className="lead">Software Developer | Data Scientist | AI &amp; ML Engineer</p>
          </div>

          {/* Right: LeetCode and HackerRank */}
          <div className="d-flex align-items-center ms-5">
            <a
              href="https://leetcode.com/u/Sonu_upadhyaya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              style={{ marginRight: "2rem" }}
            >
              <i className="bi bi-code-slash" style={{ fontSize: "3rem" }}></i>
            </a>
            <a
              href="https://www.hackerrank.com/profile/sonujack102"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <i className="bi bi-terminal" style={{ fontSize: "3rem" }}></i>
            </a>
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section className="py-5 bg-dark text-light">
        <div className="container">
          <h2 className="text-center mb-5 display-6 fw-bold text-info">✨ About Me ✨</h2>

          {/* Intro */}
          <div className="text-center mb-5">
            <p className="lead" style={{ lineHeight: "1.8" }}>
              👋 I’m <strong className="text-info">Sonu Kumar</strong> — a passionate
              <span className="text-warning"> Software Developer</span>,
              <span className="text-warning"> Data Scientist</span>, and
              <span className="text-warning"> AI/ML Engineer</span>. I thrive on solving
              real-world problems using <strong>intelligent applications, scalable web solutions</strong>, and
              advanced <strong>AI/ML technologies</strong>.
            </p>
            <p>
              🚀 With expertise in <span className="text-warning">Python, Java, C++, Django, Flask, React.js, Node.js</span>,
              and tools like <span className="text-warning">Scikit-learn, XGBoost, PyTorch, NLP models</span>, I aim to
              bridge the gap between <em>raw data and impactful business decisions</em>.
            </p>
          </div>

          <div className="row g-4">
            {/* Skills */}
            <div className="col-md-6">
              <div className="p-4 rounded shadow-lg h-100 bg-secondary text-light">
                <h5 className="fw-bold mb-3">🛠 Technical Skills</h5>
                <ul style={{ lineHeight: "1.8" }}>
                  <li><strong>Programming:</strong> Python, Java, C++, Arduino</li>
                  <li><strong>Web &amp; Frameworks:</strong> Django, Flask, Streamlit, React.js, Node.js, Express.js, Bootstrap, PHP</li>
                  <li><strong>AI/ML:</strong> Scikit-learn, XGBoost, LightGBM, CatBoost, PyTorch, NLP (BERT, TF-IDF), OpenCV</li>
                  <li><strong>Data Tools:</strong> Pandas, NumPy, PySpark, Hadoop</li>
                  <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</li>
                  <li><strong>DevOps / Tools:</strong> Git, Docker, Maven, Eclipse</li>
                  <li><strong>Soft Skills:</strong> Problem Solving, Communication, Leadership, Team Collaboration</li>
                </ul>
              </div>
            </div>

            {/* Education + Certificates + Experience */}
            <div className="col-md-6">
              <div className="p-4 rounded shadow-lg h-100 bg-secondary text-light">
                <h5 className="fw-bold mb-3">📚 Education</h5>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>🎓 MCA, Lovely Professional University — <span className="text-info">CGPA: 7.06</span> (2024–present)</li>
                  <li>🎓 BCA, Lovely Professional University — <span className="text-info">CGPA: 6.50</span> (2021–2024)</li>
                </ul>

                <h5 className="fw-bold mt-4 mb-3">📜 Certificates</h5>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>🏅 Python Programming (GFG, 2025)</li>
                  <li>🏅 Java Programming (GFG, 2025)</li>
                  <li>🏅 Django for Development (Board Infinity, 2023)</li>
                  <li>🏅 JavaScript for Web Development (Board Infinity, 2023)</li>
                </ul>

                <h5 className="fw-bold mt-4 mb-3">💼 Experience</h5>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>🌐 Freelance Web Developer — Built responsive websites &amp; apps for businesses <em>(Mar 2024 – Aug 2024)</em></li>
                  <li>🤖 Freelancing AI Projects — Churn prediction, Resume screening, AI-powered forecasting solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* PROJECTS SECTION */}
<section className="py-5" style={{ backgroundColor: "rgba(28, 44, 57, 0.95)" }}>
  <div className="container">
   <h2 className="text-center mb-4 display-6 fw-bold text-white">Projects</h2>
    <div className="row">
      {[
        {
          title: "💼 Data Science Salary Predictor",
          desc: "An interactive web app that predicts Data Science salaries using an XGBoost model. Enter job details like experience level, job title, and company size — instantly see estimated salaries.",
          tech: "Python, Pandas, NumPy, XGBoost, Streamlit",
          live: "https://salary-predictor-vykduych8bxqrq8t69szrm.streamlit.app/",
          github: "https://github.com/sonuupahyaya/Salary-Predictor",
          delay: 0.1,
        },
        {
          title: "📊 Demand Forecasting Web App",
          desc: "AI-powered web app for businesses to forecast future demand. Users upload sales data, select Prophet/ARIMA, and view interactive graphs to optimize inventory & reduce stockouts.",
          tech: "Streamlit, Prophet, ARIMA, Pandas, NumPy, Matplotlib",
          live: "https://demandforecastproject-thqparu4ibghczx4ooxpmc.streamlit.app/",
          github: "https://github.com/sonuupahyaya/demand_forecast_project",
          delay: 0.1,
        },
        {
          title: "🚢 Titanic Survival Predictor",
          desc: "Machine learning app that predicts passenger survival on Titanic using Logistic Regression. Takes user input (age, class, fare, gender) with a simple Streamlit interface.",
          tech: "Python, Pandas, Scikit-learn, Streamlit",
          live: "https://titanic-survival-predictor-l6szzooityaqk5jdyqn9pt.streamlit.app/",
          github: "https://github.com/sonuupahyaya/titanic-survival-predictor",
          delay: 0.1,
        },
        {
          title: "🍽️ Restaurant Management System",
          desc: "A Django-based web app for managing restaurant operations. Features include menu management, table booking, order tracking, and a customer-friendly interface to streamline workflows.",
          tech: "Django, Python, SQLite, HTML, CSS, Bootstrap",
          github: "https://github.com/sonuupahyaya/restaurant_management_project",
          delay: 0.1,
        },
        {
          title: "💳 Credit Card Fraud Detection",
          desc: "A machine learning model that detects fraudulent credit card transactions. Built on imbalanced data using techniques like SMOTE and robust classifiers to minimize false negatives.",
          tech: "Python, Pandas, NumPy, Scikit-learn, SMOTE",
          github: "https://github.com/sonuupahyaya/Credit-Card-Fraud-Detection-Model",
          delay: 0.2,
        },
        {
          title: "📈 Customer Revenue Dashboard",
          desc: "An interactive dashboard to analyze customer revenue patterns, sales trends, segmentation, and key business metrics with clean visualizations.",
          tech: "Python, Pandas, Matplotlib, Seaborn, Jupyter",
          github: "https://github.com/sonuupahyaya/Customer-Revenue-Dashboard",
          delay: 0.2,
        },
        {
          title: "🛒 Gatsby E-Commerce Theme",
          desc: "A customizable e-commerce theme built with GatsbyJS. Includes product pages, cart integration, and a modern UI for fast, scalable online stores.",
          tech: "GatsbyJS, React, GraphQL, CSS",
          live: "https://gatsby-ecommerce-theme.netlify.app/",   // ✅ Added live link here
          github: "https://github.com/sonuupahyaya/gatsby-ecommerce-theme",
          delay: 0.2,
        },
      ].map((proj, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <motion.div
            className="card shadow-lg h-100 bg-dark text-light"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 8px 30px rgba(0, 200, 255, 0.5)",
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: proj.delay }}
          >
            <div className="card-body">
              <h5 className="card-title">{proj.title}</h5>
              <p className="card-text">{proj.desc}</p>
              <p className="text-muted small">Tech: {proj.tech}</p>
              {proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success me-2"
                >
                  Live App
                </a>
              )}
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CV DOWNLOAD SECTION */}
      <section className="py-5" style={{ backgroundColor: "rgba(233, 153, 41, 0.2)" }}>
        <div className="text-center mt-5">
          <h3 className="display-6 fw-bold text-dark mb-3">📄 View / Download My CV</h3>
          <a
            href="https://drive.google.com/file/d/1kiMoKhL7t9U-j6wgYVJSn6-1MyqxJM3X/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg me-3"
          >
            AI / Data Science
          </a>
          <a
            href="https://drive.google.com/file/d/1GkJ-iJ_l6PLyvyWsSDn4N6t3fMWOdhMl/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-lg"
          >
            Software Development
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-4 bg-dark text-white text-center">
        <div className="container">
          <p>© 2025 Sonu Upadhyaya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
