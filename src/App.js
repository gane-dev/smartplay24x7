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
          <h1>Welcome to Smart Play 24x7!!!</h1>
          <h3>Free Virtual Indoor Sports club for kids by kids</h3>
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
              <li>
                <a href="#events">Events</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="content">
        <div className="registration">
          <p>Registration is now open!!!</p>
        </div>
        <section id="home" className="section">
          <h1>About Us</h1>
          <Home></Home>
          <h2>Meet the Team</h2>
          <MeetTheTeam></MeetTheTeam>
        </section>
        <section id="overview" className="section">
          <h1>Overview</h1>
          <h3>
            Workshops are available for participants of ages between 8 to 12
          </h3>
          <Games></Games>
        </section>
        <section id="registration" className="section">
          <h1>Schedule (All time in EST)</h1>
          <h3>
            All Workshops will be run in a virtual format using zoom. Class
            logistics will be emailed post registration completion
          </h3>
          <Schedule></Schedule>
        </section>
        <section id="events" className="section">
          <h1>Events</h1>
          <h1 className="registration">Summer 2023 Wrap up Tournaments</h1>
          <Events></Events>
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
