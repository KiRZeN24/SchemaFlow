import './about.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <img src="./img_github_readme/logo.png" alt="SchemaFlow Logo" />
      </div>
      <div className="about-content">
        <p>
          This project aims to improve the existing SchemaFlow, starting from
          scratch and utilizing modern technologies such as React, TypeScript,
          Vite, and Vitest.
        </p>
        <p className="about-author">
          By <a href="https://github.com/KiRZeN24">KiRZeN24</a>
        </p>
        <p>
          <a href="https://github.com/KiRZeN24/SchemaFlow">
            View the GitHub repository
          </a>
        </p>
        <p>Thanks to all the GitHub's contributors</p>
      </div>
      <div className="about-footer">
        <span>Version: 0.1beta</span>
      </div>
    </div>
  )
}

export default About
