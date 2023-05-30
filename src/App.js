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
          <h2>About Us</h2>
          <Home></Home>
        </section>
        <section id="overview" className="section">
          <h2>Meet the Team</h2>
          <MeetTheTeam></MeetTheTeam>
          <h2>Overview</h2>
          <Games></Games>
        </section>
        <section id="registration" className="section">
          <h2>Schedule</h2>
          <Schedule></Schedule>
        </section>
        <section id="events" className="section">
          <h2>Events</h2>
          <Events></Events>
        </section>
      </main>
      <footer className="footer">
        <p>
          Only Text / Whatsapp messages - 703.865.1830 Email:
          Smartplay24x7@gmail.com
        </p>
      </footer>
    </div>
  );
}

export default App;
