import React from 'react';
import { useLoaderData } from 'react-router-dom';

const About = () => {
    const d=useLoaderData();
    console.log(d);
    return (
    <div className='py-32 px-10'>
         <div className="about-us-container">
      <div className="about-us-header text-center">
        <h1 className='title'>Welcome to Career Hub!</h1>
        <p>Gateway to a Successful Career Journey</p>
      </div>
      <div className="about-us-content">
        <p>
          At [Your Career Hub], we believe in empowering individuals to achieve their career aspirations.
          Our platform is dedicated to providing valuable resources, expert guidance, and a supportive
          community to help you navigate the ever-evolving landscape of the professional world.
        </p>
        <p>
          Whether you are a recent graduate exploring career options, a seasoned professional looking
          for new opportunities, or someone considering a career change, [Your Career Hub] is here to
          guide you at every step of your journey.
        </p>
        <p>
          Our mission is to foster a dynamic hub that connects job seekers with employers, offers
          educational resources, and creates a space for networking and collaboration. We are committed
          to helping you build the skills, confidence, and connections necessary for a fulfilling and
          successful career.
        </p>
      </div>
      <div className="about-us-values">
        <h2>Our Core Values</h2>
        <ul>
          <li>
            <strong>Empowerment:</strong> We empower individuals to take control of their career path
            through education, mentorship, and access to valuable opportunities.
          </li>
          <li>
            <strong>Inclusivity:</strong> We embrace diversity and inclusivity, believing that a
            variety of perspectives leads to innovation and success.
          </li>
          <li>
            <strong>Community:</strong> We foster a supportive community where members can learn from
            each other, share experiences, and collaborate to achieve their goals.
          </li>
          <li>
            <strong>Excellence:</strong> We strive for excellence in all aspects of our platform,
            providing high-quality content, resources, and services to our users.
          </li>
        </ul>
      </div>
      <div className="about-us-call-to-action">
        <p>
          Join us on this exciting journey towards career excellence. Explore opportunities, connect
          with like-minded professionals, and let [Your Career Hub] be your guide to a successful and
          fulfilling career.
        </p>
        <button>Get Started</button>
      </div>
    </div>
            
        </div>
    );
};

export default About;