import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>Welcome to QScript Coffee</h1>
            <p>We offer specialty coffee and delicious pastries.</p>
            <a href="#contact" className="btn btn-primary">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
