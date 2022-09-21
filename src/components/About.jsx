import React from 'react';

const About = () => {
  return (
    <>
      <h1 id='about' className='text-center my-5'>
        About Me
      </h1>
      <section
        className='d-flex justify-content-center gap-3'
        style={{
          width: '100%',
          height: 'calc(100vh - 7rem)',
          background:
            'url("https://firebasestorage.googleapis.com/v0/b/portfolio-erol1098.appspot.com/o/about.jpg?alt=media&token=ac258a68-8bdb-4c10-bbc9-0b50b796f8b0") fixed center  ',
        }}
      >
        <div className=' w-50 d-flex align-items-center'>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/portfolio-erol1098.appspot.com/o/avatar.jpg?alt=media&token=67f957c2-5bf4-458d-a5f8-37e514194f45'
            alt='author'
            width={512}
            className='d-block mx-auto rounded-circle'
          />
        </div>
        <div className='text-success text-center d-flex  flex-column justify-content-between align-items-end w-50 p-5 bg-light bg-opacity-75'>
          <h3>
            I'm a Frontend Developer based in Izmir, Turkey. I strives to build
            immersive and beautiful web applications through carefully crafted
            code and user-centric design.
          </h3>
          <div>
            {' '}
            <h4>Skills</h4>
            <p>
              HTML5, CSS3, JavaScript, ES6+, React, Redux, Django REST, Python,
              Styled Components, Bootstrap, SASS/SCSS, Material UI, Axios,
              Firebase, Postman, Formik, Yup, REST APIs, Linux, SQL, Git.
            </p>
          </div>

          <button className='btn btn-primary rounded-pill'>
            Download My CV
          </button>
        </div>
        {/* <div>
          <p>
            HTML5, CSS3, JavaScript, ES6+, Python, Styled Components, Bootstrap,
            Axios, SASS/SCSS, Material UI, Firebase, Postman, Formik, Yup,
            Linux, SQL, REST APIs, OOP. Technologies: React, Redux, Django REST,
            Git.
          </p>
        </div> */}
      </section>
    </>
  );
};

export default About;
