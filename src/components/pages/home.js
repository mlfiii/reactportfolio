// import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react'
import { Parallax } from 'react-parallax';
// import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../assets/css/style.css'
import '../../assets/css/parallax.css'
import mlfiii from '../../assets/images/mlfiii.jpeg'
import newsstand from '../../assets/images/TheNewsStand.png'
import tracksnax from '../../assets/images/TrackSnax.png'
import passwordgenerator from '../../assets/images/PasswordGenerator.png'
import codingquiz from '../../assets/images/CodeQuiz.png'
import weatherdashboard from '../../assets/images/WeatherDashboard.png'

let styles = {
  margin: 'auto',
  width: '400px'
};

const Home = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top clearfix d-flex justify-content-center"
        id="main-menu-bar">
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav align-middle">
            <a className="nav-item nav-link" href="#about">About</a>
            <a className="nav-item nav-link" href="#portfolio">Portfolio</a>
            <a className="nav-item nav-link" href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <Parallax
        blur={0}
        bgImage={require('../../assets/images/fabrizio-conti-kXVogATbFgA-unsplash.jpg')}
        bgImageAlt="the cat"
        strength={200}
      >

        <div style={{ height: '100px' }} />
      </Parallax>
      <div className="about-section" id="about">
        <h1>About Me</h1>
        <hr />

        <div className="row">

          <div className="col-md-1"></div>
          <div className="col-md-5 index-picture-1-section">
            <a href="https://www.funches.org" target="_blank"
              rel="noopener noreferrer"> <img src={mlfiii} className="img-fluid" alt="Place Holder" /> </a>
            <p className="text-justify">
              Hello and welcome! Thank you for visiting my portfolio.
                </p>
            <p className="text-justify">
              Native to California, I grew up in Altadena. While in high school, I
              started working at the school library and participated in summer
              programs that led me to work for the Jet Propulsion Laboratory. It
              was at this program I started learning about working on computers
              firstly in Lotus 123. From there it was only natural to learn more!
                </p>
          </div>
          <div className="col-md-5">





            <p className="text-justify">
              Over the years, I have enjoyed travel to various countries including
              Mexico, Canada, Spain, Germany, Switzerland, The Dominican Republic,
              the Bahamas, Italy, France and Austria. International travel has
              been an important part of expanding my life experiences as many
              cultures offer varied perspectives that have helped me to enjoy
              diversity.
                </p>

            <p className="text-justify">
              I have had the honor of attending and at the same time working at
              UCLA since 1987. For 5 years, I worked at UCLA in various positions
              putting myself through school in Spanish and Linguistics. To this
              day, I still enjoy speaking Spanish as well as working for UCLA;
              currently as the Manager of Life Sciences Application Development.
              My focus over the past years has been as an SQL programmer while my
              staff work as full stack programmers utilizing Visual Studio.
                </p>

            <p className="text-justify">
              I look forward to continued learning every day through books, apps
              such as Duolingo and yes, classes I take including Coding Bootcamp.
              2020 promises to be a spectacular year of learning and meeting new
              people. I hope you’re as enthused as I am!
                </p>




          </div>
          <div className="col-md-1"></div>


        </div>
        <div className="row" id="tech-row">
          <div className="row" >

            <table>
              <tbody>
                <tr>
                  <td>
                    <h4>Languages:</h4>
                  </td>
                  <td>
                    SQL, HTML, CSS, JavaScript, jQuery, JSON, API, AJAX, Handlebars, React.js,
                    Node.js,Express, MongoDB, Mongoose.js</td>
                </tr>
                <tr>
                  <td><h4>Applications:</h4></td>
                  <td>Visual Studio Code, Slack, Word, Excel, PowerPoint, Adobe, Git, Heroku</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

      <Parallax
        blur={0}
        bgImage={require('../../assets/images/fabrizio-conti-kXVogATbFgA-unsplash.jpg')}
        bgImageAlt="the cat"
        strength={200}>
        <div style={{ height: '200px' }} />
      </Parallax>

      <div className="portfolio-section" id="portfolio">
        <h1>Portfolio</h1>
        <hr />
        <div style={styles}>
          <Carousel>
            <div>
              <img className="d-block w-100" src={newsstand}
                alt="First slide" />
              <div id="portfolio-picture-label1" className="centered"><a className="iris-text"
                href="https://mlfiii.github.io/Week7Project1/" target="_blank"
                rel="noopener noreferrer">The News Stand</a><a
                  href="https://github.com/mlfiii/Week7Project1" target="_blank"
                  rel="noopener noreferrer"> <i className="fa fa-github"
                  ></i></a>
              </div>
            </div>
            <div>
              <img className="d-block w-100" src={tracksnax}
                alt="First slide" />
              <div id="portfolio-picture-label1" className="centered"><a className="iris-text"
                href="https://tracksnax.herokuapp.com/inventory" target="_blank" rel="noopener noreferrer">TrackSnax</a><a
                  href="https://github.com/VartanyanE/project-2" target="_blank" rel="noopener noreferrer"> <i className="fa fa-github"
                  ></i></a>
              </div>
            </div>
            <div>
              <img className="d-block w-100" src={passwordgenerator}
                alt="First slide" />
              <div id="portfolio-picture-label1" className="centered"><a className="iris-text"
                href="https://mlfiii.github.io/password-generator/" target="_blank"
                rel="noopener noreferrer">Password Generator</a><a href="https://github.com/mlfiii/password-generator"> <i
                  className="fa fa-github"></i></a>
              </div>
            </div>
            <div>
              <img className="d-block w-100" src={codingquiz}
                alt="First slide" />
              <div id="portfolio-picture-label1" className="centered"><a className="iris-text"
                href="https://mlfiii.github.io/CodeQuiz/" target="_blank"
                rel="noopener noreferrer">Code Quiz</a> <a
                  href="https://github.com/mlfiii/CodeQuiz" target="_blank"
                  rel="noopener noreferrer"> <i className="fa fa-github"
                  ></i></a>
              </div>
            </div>
            <div>
              <img className="d-block w-100" src={weatherdashboard}
                alt="First slide" />
              <div id="portfolio-picture-label1" className="centered"><a className="iris-text"
                href="https://mlfiii.github.io/WeatherDashboard/" target="_blank"
                rel="noopener noreferrer">
                Weather Dashboard</a><a href="https://github.com/mlfiii/WeatherDashboard" target="_blank"
                  rel="noopener noreferrer"> <i
                    className="fa fa-github"></i></a>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      <Parallax
        blur={0}
        bgImage={require('../../assets/images/fabrizio-conti-kXVogATbFgA-unsplash.jpg')}
        bgImageAlt="the cat"
        strength={200}
      >

        <div style={{ height: '400px' }} />
      </Parallax>



      <div className="contact-section" id="contact">
        <h1>Contact</h1>
        <div className="row index-picture-1-section">
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <div className="card">
              <img src={mlfiii} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" >Martin L. Funches III</h5>
                <hr />
                <p className=" card-text">I'd like to hear from you! Please feel free to call me at 909-747-2272 or
                        click the button below to send me an email.
                            </p>
                <hr />

              </div> <div id="card-links" className="text-center">
                <a href="tel:1-909-747-2272"
                  className="text-darkgray"><i className="fa fa-mobile-phone"
                  ></i></a> <span className="text-darkgray"></span>
                <a href="mailto:martin@funches.org?Subject=Resume" className="email"><i
                  className="fa fa-envelope" ></i></a>

                <a href="https://mlfiii.github.io/MyPortfolio/assets/downloads/MLFResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"><i className="fa fa-download" ></i>
                </a>
                <a href="https://www.linkedin.com/in/mlfiii/" target="_blank"
                  rel="noopener noreferrer"><i className="fa fa-linkedin"
                  ></i>
                </a>
                <a href="https://github.com/mlfiii" target="_blank"
                  rel="noopener noreferrer"><i className="fa fa-github"
                  ></i></a>
              </div></div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>

  )
}


export default Home