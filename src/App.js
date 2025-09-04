import React from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div>
      {/* HEADER */}
      <header className="hero-section d-flex align-items-center text-white text-center">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          {/* Left: Socials */}
          <div className="d-flex align-items-center gap-4">
            <a
              href="https://github.com/sonuupahyaya"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sonukumar102/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>

          {/* Profile */}
          <div className="text-center">
            <motion.img
              src="/photo.jpg"
              alt="My Photo"
              className="profile-image mb-3"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
            <h1 className="display-4 fw-bold">
              Hi, I'm <span className="text-gradient">Sonu Kumar</span>
            </h1>
            <p className="lead">Software Developer | Data Scientist | AI & ML Engineer</p>
          </div>

          {/* Right: Coding Profiles */}
          <div className="d-flex align-items-center gap-4">
            <a
              href="https://leetcode.com/u/Sonu_upadhyaya/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="bi bi-code-slash"></i>
            </a>
            <a
              href="https://www.hackerrank.com/profile/sonujack102"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="bi bi-terminal"></i>
            </a>
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section className="section-dark text-light">
        <div className="container">
          <h2 className="section-title text-gradient">✨ About Me ✨</h2>
          <p className="lead text-center mb-5 text-light">
            👋 I’m <strong className="text-gradient">Sonu Kumar</strong> — a passionate
            <span className="highlight"> Software Developer</span>,
            <span className="highlight"> Data Scientist</span>, and
            <span className="highlight"> AI/ML Engineer</span>.  
            I thrive on building <strong>intelligent applications</strong> and
            <strong> scalable solutions</strong> powered by <strong>AI/ML</strong>.
          </p>

          <div className="row g-4">
            {/* Skills */}
            <div className="col-md-6">
              <motion.div
                className="glass-card text-light"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <h5 className="fw-bold mb-3">🛠 Technical Skills</h5>
                <ul>
                  <li><strong>Programming:</strong> Python, Java, C++, Arduino</li>
                  <li><strong>Web:</strong> Django, Flask, Streamlit, React, Node.js</li>
                  <li><strong>AI/ML:</strong> Scikit-learn, XGBoost, PyTorch, NLP</li>
                  <li><strong>Data Tools:</strong> Pandas, NumPy, PySpark, Hadoop</li>
                  <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</li>
                  <li><strong>Other:</strong> Git, Docker, Leadership, Teamwork</li>
                </ul>
              </motion.div>
            </div>

            {/* Education / Certs / Exp */}
            <div className="col-md-6">
              <motion.div
                className="glass-card text-light"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <h5 className="fw-bold mb-3">📚 Education</h5>
                <ul>
                  <li>🎓 MCA, Lovely Professional University — <span className="text-info">7.06 CGPA</span></li>
                  <li>🎓 BCA, Lovely Professional University — <span className="text-info">6.50 CGPA</span></li>
                </ul>

                <h5 className="fw-bold mt-4 mb-3">📜 Certificates</h5>
                <ul>
                  <li>🏅 Python (GFG)</li>
                  <li>🏅 Java (GFG)</li>
                  <li>🏅 Django (Board Infinity)</li>
                  <li>🏅 JavaScript (Board Infinity)</li>
                </ul>

                <h5 className="fw-bold mt-4 mb-3">💼 Experience</h5>
                <ul>
                  <li>🌐 Freelance Web Developer (2024)</li>
                  <li>🤖 Freelancing AI Projects — Churn Prediction, Resume Screening</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section-gradient">
        <div className="container">
          <h2 className="section-title text-white">🚀 Featured Projects</h2>
          <div className="row">
            {[
              {
                title: "💼 Data Science Salary Predictor",
                desc: "Predicts Data Science salaries using XGBoost model. Input job details, get instant salary estimates.",
                tech: "Python, Pandas, XGBoost, Streamlit",
                live: "https://salary-predictor-vykduych8bxqrq8t69szrm.streamlit.app/",
                github: "https://github.com/sonuupahyaya/Salary-Predictor",
              },
              {
                title: "📊 Demand Forecasting Web App",
                desc: "Forecasts demand with Prophet/ARIMA & interactive dashboards for inventory optimization.",
                tech: "Streamlit, Prophet, ARIMA, Pandas",
                live: "https://demandforecastproject-thqparu4ibghczx4ooxpmc.streamlit.app/",
                github: "https://github.com/sonuupahyaya/demand_forecast_project",
              },
              {
                title: "🚢 Titanic Survival Predictor",
                desc: "Predicts passenger survival on Titanic using Logistic Regression with Streamlit interface.",
                tech: "Python, Pandas, Scikit-learn, Streamlit",
                live: "https://titanic-survival-predictor-l6szzooityaqk5jdyqn9pt.streamlit.app/",
                github: "https://github.com/sonuupahyaya/titanic-survival-predictor",
              },
              {
                title: "🍽️ Restaurant Management System",
                desc: "Django-based restaurant management app with menu, booking, and order tracking.",
                tech: "Django, Python, SQLite, HTML, CSS, Bootstrap",
                github: "https://github.com/sonuupahyaya/restaurant_management_project",
              },
              {
                title: "💳 Credit Card Fraud Detection",
                desc: "ML model for detecting fraudulent transactions with SMOTE and classifiers.",
                tech: "Python, Pandas, Scikit-learn, SMOTE",
                github: "https://github.com/sonuupahyaya/Credit-Card-Fraud-Detection-Model",
              },
              {
                title: "📈 Customer Revenue Dashboard",
                desc: "Interactive dashboard analyzing customer revenue, trends, segmentation, KPIs.",
                tech: "Python, Pandas, Matplotlib, Seaborn, Jupyter",
                github: "https://github.com/sonuupahyaya/Customer-Revenue-Dashboard",
              },
              {
                title: "🛒 Gatsby E-Commerce Theme",
                desc: "Customizable e-commerce theme built with GatsbyJS & GraphQL.",
                tech: "GatsbyJS, React, GraphQL, CSS",
                live: "https://gatsby-ecommerce-theme.netlify.app/",
                github: "https://github.com/sonuupahyaya/gatsby-ecommerce-theme",
              },
              {
                title: "📝 Note App Project",
                desc: "Full-stack note-taking app with CRUD features, deployed on Render.",
                tech: "Node.js, Express, MongoDB, EJS",
                live: "https://note-app-project-1.onrender.com",
                github: "https://github.com/sonuupahyaya/note_app_project",
              },
            ].map((proj, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <motion.div
                  className="project-card text-light"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <h5>{proj.title}</h5>
                  <p>{proj.desc}</p>
                  <p className="small text-light">Tech: {proj.tech}</p>
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-glow me-2"
                    >
                      Live
                    </a>
                  )}
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light"
                  >
                    GitHub
                  </a>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* CV */}
<section className="section-light text-center">
  <h3 className="fw-bold mb-3">📄 View / Download My CV</h3>
  
  <a
    href="https://drive.google.com/file/d/1kiMoKhL7t9U-j6wgYVJSn6-1MyqxJM3X/view?usp=sharing"
    target="_blank"
    rel="noreferrer"
    className="btn btn-gradient me-3"
  >
    AI / Data Science
  </a>
  
  <a
    href="https://drive.google.com/file/d/1GkJ-iJ_l6PLyvyWsSDn4N6t3fMWOdhMl/view?usp=sharing"
    target="_blank"
    rel="noreferrer"
    className="btn btn-gradient"
  >
    Software Development
  </a>
</section>

      {/* FOOTER */}
      <footer className="py-4 text-center text-white footer-gradient">
        <p>© 2025 Sonu Upadhyaya. Built with ❤️ using React & Framer Motion</p>
      </footer>
    </div>
  );
}

export default App;
