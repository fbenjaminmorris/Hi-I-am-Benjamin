import React from 'react';
import coverImage from '../../assets/photography/1.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Introduction</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          I currently work for Beasly Media Group as the Corporate IT Manager. 
          I am currenlty enrolled at University of Austin in the Full Stack cooding boot camp. 
          I also bake and have a degree in psychology. 
          I hope to use the skill I learn in the boot camp to start off as a Front End Developer.
        </p>
      </div>
    </section>
  );
}

export default About;