import React from "react";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <small className="text-muted fs-6 fw-medium mb-3 d-inline-block meeting-text">
              - NICE TO MEET YOU!
            </small>
            <h1 className="title">Wahab Ansari</h1>
            <h6 className="role">Web designer & Developer</h6>
            <button className="btn-idea mt-4">Got a Project!</button>
          </div>
          <div className="col-xl-7">
            <p className="lh-lg">
              Hello there! My name is
              <span className="text-yellow"> Muhammad Wahab Ansari</span>. I am
              a web designer & developer, and I'm very passionate and dedicated
              to my work.
            </p>
            <p className="lh-lg">
              With 3+ years experience as a professional a web developer &
              designer, I have acquired the skills and knowledge necessary to
              make your project a success. I enjoy every step of the design
              process, from discussion and collaboration.
            </p>
            <ul className="list-inline mt-4">
              <li className="list-inline-item pe-5">
                <span className="d-block text-muted text-uppercase">Age</span>
                <strong>25</strong>
              </li>
              <li className="list-inline-item pe-5">
                <span className="d-block text-muted text-uppercase">
                  Born In
                </span>
                <strong>
                  <a href="#">Lahore, PK</a>
                </strong>
              </li>
              <li className="list-inline-item pe-5">
                <span className="d-block text-muted text-uppercase">Mail</span>
                <strong>
                  <a href="mailto:support@elisc.com">wahab0421690@gmail.com</a>
                </strong>
              </li>
              <li className="list-inline-item">
                <span className="d-block text-muted text-uppercase">Phone</span>
                <strong>
                  <a href="tel:+92 3191664641">+92 3191664641</a>
                </strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-xl-4">
            <div class="card">
              <div class="card-body">
                <h3>3+</h3>
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div class="card">
              <div class="card-body">
                <h3>50</h3>
                <p>Projecs Completed</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div class="card">
              <div class="card-body">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;