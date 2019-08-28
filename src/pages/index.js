import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

import pic1 from '../assets/images/welder.jpg';
import pic2 from '../assets/images/excavators.jpg';
import pic3 from '../assets/images/pic03.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <div id="main">
      <header className="major container medium">
        <h2>
          We excel in work ethic
          <br />
          and prioritize client satisfaction
        </h2>
      </header>

      <div className="box alt container">
        <section className="feature left">
          <a href="/#" className="image icon fa-cube">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h3>About Us</h3>
            <p>
              Working in the greater Los Angeles Metropolitan area for over 30
              years
            </p>
          </div>
        </section>
        <section className="feature right">
          <a href="/#" className="image icon fa-picture-o">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h3>Photos</h3>
            <p>See what type of work we can do for you</p>
          </div>
        </section>
        <section className="feature left">
          <a href="/#" className="image icon fa-envelope-o">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h3>Contact Us</h3>
            <p>Get in touch with us to see what we can offer you today</p>
          </div>
        </section>
      </div>

      <footer className="major container medium">
        <h3>Interested in a Quote?</h3>
        <p>Contact us for an immediate estimate</p>
        <ul className="actions special">
          <li>
            <Link to="/Elements" className="button">
              Contact Us
            </Link>
          </li>
        </ul>
      </footer>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
