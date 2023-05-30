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
        <div>
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
        <section id="home" className="section">
          <h1>About Us</h1>
          <Home></Home>
          <h2>Meet the Team</h2>
          <MeetTheTeam></MeetTheTeam>
        </section>
        <section id="overview" className="section">
          <h1>Overview</h1>
          <h3>
            All classes are available for participants of ages between 8 to 12
          </h3>
          <Games></Games>
        </section>
        <section id="registration" className="section">
          <h1>Schedule (All time in EST)</h1>
          <Schedule></Schedule>
        </section>
        <section id="events" className="section">
          <h1>Summer 2023 Wrap up Tournaments</h1>
          <Events></Events>
        </section>
      </main>
      <footer className="footer">
        <p>
          <b>Contact Us</b>: Smartplay24x7@gmail.com
        </p>
        <p>
          <i>Feedback / Testimonials will help us grow</i>
        </p>
      </footer>
    </div>
  );
}

export default App;
