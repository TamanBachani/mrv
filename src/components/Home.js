import React from 'react'
import '../stylesheets/home.css'
import phone from '../images/screen.png'
import Form from './Form'
import { Link } from "react-router-dom";
import PDFCarousel from './PDFCarousel';


const Home = () => {
  
  const pdfs = require.context('../reports', false, /\.pdf$/).keys();

  return (
    <div>
      <main className="hero padding"> 
        <nav className="navbar-mrv">
          <p className="nav-items-text sans-text"><a href="#form-section">Visualise</a></p>
          <p className="nav-items-text sans-text"><a href="#about-section">About</a></p>
        </nav>
        <div className="hero-text-img">
          <div className="hero-txt">
            <h1 className="hero-heading serif-text">
              Medical Report Visualiser
            </h1>
            <p className="sans-text superhero">
              Medical Reports with Superhero Costumes
            </p>
            <a href="#samples-section">
            <button
              className="samples-btn"
            >
              Samples
            </button>
            </a>
          </div>
          <div className="phone-config">
            <img className="phone-img" src={phone} alt="" />
          </div>
        </div>
      </main>
      <section className="report-form padding" id="form-section">
        <div className="form-intro">
          <p className="before-form serif-text heading">
            Let's get you started
            <br />
            Please upload your report below
          </p>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <Form />
      </section>
      <section className="step-info" id="about-section">
        <p className="before-step serif-text heading">
          3-Step Approach
        </p>
        <div className="step-cards">
          <div className="step-card">
            <i className="fab fa-2x fahome fa-medrt"></i>
            <p className="step-text">Upload the Report</p>
            <p className="step-text2">
              Upload the report in the PDF format, fill a few additional
              details, and we're good to go!
            </p>
          </div>
          <div className="step-card">
            <i className="fas fa-2x fahome fa-file-alt"></i>
            <p className="step-text">Intricate extraction</p>
            <p className="step-text2">
              Relevant data from your report is automatically extracted.
              Thereby, medical lingo is demystified.
            </p>
          </div>
          <div className="step-card">
            <i className="fas fa-2x fahome fa-chart-line"></i>
            <p className="step-text">Intuitive visualisation</p>
            <p className="step-text2">
              Your health ranges, parameters, and values are visualised, using
              easy-to-understand graphs, charts, and more and prettier
              representations!
            </p>
          </div>
        </div>
      </section>
      <section className="report-form padding" id="samples-section">
        <div className="form-intro">
          <p className="before-form serif-text heading">
            Samples
          </p>
          <PDFCarousel pdfs={pdfs} />

        </div>

      </section>
    </div>
  );
}

export default Home;
