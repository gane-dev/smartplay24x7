import React from "react";
import "./App.css";
import Home from "./Home";
import MeetTheTeam from "./MeetTheTeam";
import Games from "./Games";
import Schedule from "./Schedule";
import Events from "./Events";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo-right">
          <img
            src={process.env.PUBLIC_URL + "/freeofcharge-removebg-preview.png"}
            alt="Sample"
            className="image-logo"
          />
        </div>
        <div className="logo">
          <img
            src={process.env.PUBLIC_URL + "/logo-transparent-png.png"}
            alt="Sample"
            className="image-logo"
          />
        </div>

        <div className="header-div">
          <h1>Welcome to SmartPlay 24x7!</h1>
          <h3>A Free Virtual Summer Camp for Kids by Kids</h3>
          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#overview">Overview</a>
              </li>
              <li>
                <a href="#registration">Registration</a>
              </li>
             
                          </ul>
          </nav>
        </div>
      </header>
      <main className="content">
        <div className="registration">
          <p>Registration is now open!</p>
        </div>
        <section id="home" className="section">
          <h1>About Us</h1>
          <Home></Home>
          <h2>Meet the Team</h2>
          <MeetTheTeam></MeetTheTeam>
        </section>
        <section id="overview" className="section">
          <h1>Overview</h1>
          <Games></Games>
        </section>
        <section id="registration" className="section">
          <h1>Schedule & Registration</h1>
          <h2>All times are in Eastern Standard Time (EST)</h2>
          <h3>
           
We will meet virtually via Zoom.
Upon completing your registration, lookout for an email from us in June with details about the Zoom link and other important information.
          </h3>
          <Schedule></Schedule>
        </section>
      </main>
      <footer className="footer">
        <a
          href="https://forms.gle/ya4oswgeMACfh7wH8"
          target="_blank"
          rel="noreferrer"
        >
          <b>Contact Us / Feedback</b>
        </a>
      </footer>
    </div>
  );
}

export default App;
