import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello There</h1>
      <p className="py-6">Welcome to JobV where we prove more than 10.000 jobs available.</p>
      <Link to="/dashboard"><button className="btn btn-primary">Get Started</button></Link>
    </div>
  </div>
</div>
    </>
  );
};

export default Hero;
