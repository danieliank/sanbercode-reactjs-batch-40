import React from 'react';

const About = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">About Me</h1>
      <p className="mb-5">Daniel Ian Kurniawan is a student who interested in Web Development and Artificial Intelligence. This web is made for knowledge purpose and to develop skills in web.</p>
    </div>
  </div>
</div>
  );
};

export default About;