import React from 'react';
import Skills from './Skills';

const About = () => {
  return (
    <>
      <h1 id='about' className='text-center my-5'>
        About Me
      </h1>
      <section
        className='d-flex flex-wrap justify-content-center align-items-center gap-3 p-3'
        style={{
          width: '100%',
          minHeight: 'calc(100vh - 7rem)',
          background:
            'url("https://firebasestorage.googleapis.com/v0/b/portfolio-erol1098.appspot.com/o/about.jpg?alt=media&token=ac258a68-8bdb-4c10-bbc9-0b50b796f8b0") fixed center  ',
        }}
      >
        {/* <div className='d-flex align-items-center'>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/portfolio-erol1098.appspot.com/o/avatar.jpg?alt=media&token=67f957c2-5bf4-458d-a5f8-37e514194f45'
            alt='author'
            width={300}
            className='d-block mx-auto rounded-circle'
          />
        </div> */}
        <div className='text-dark text-center d-flex flex-column justify-content-between align-items-end p-5 m-5 bg-light'>
          <h3>
            I'm a Frontend Developer based in Izmir, Turkey. I strives to build
            immersive and beautiful web applications through carefully crafted
            code and user-centric design.
          </h3>
          <Skills />
          <button className='btn btn-primary p-3 rounded-pill'>
            <a
              className='text-white text-decoration-none'
              href='https://firebasestorage.googleapis.com/v0/b/portfolio-erol1098.appspot.com/o/erol-mahmutoglu-resume.pdf?alt=media&token=8595ab64-e72c-411b-b6a4-e2685cec4ce8'
              rel='noreferrer'
              target='_blank'
            >
              Download My CV
            </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
