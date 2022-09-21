import React from 'react';
import Card from 'react-bootstrap/Card';

const About = () => {
  return (
    <>
      <h1 id='about' className='text-center my-5'>
        About
      </h1>
      <section
        className='d-flex gap-5'
        style={{ width: '100%', height: 'calc(100vh - 7rem)' }}
      >
        <div className='w-50'>
          <Card.Img
            variant='top'
            src='https://firebasestorage.googleapis.com/v0/b/portfolio-erol1098.appspot.com/o/Meteoweather.png?alt=media&token=5e73aef9-2a38-4675-bac8-58054e2b6351'
          />
        </div>

        <Card.Body className='w-50 text-center'>
          <Card.Title>Hey, I am Erol</Card.Title>
          <Card.Title>I am a Frontend Developer</Card.Title>
          <Card.Text>
            HTML5, CSS3, JavaScript, ES6+, Python, Styled Components, Bootstrap,
            Axios, SASS/SCSS, Material UI, Firebase, Postman, Formik, Yup,
            Linux, SQL, REST APIs, OOP. Technologies: React, Redux, Django REST,
            Git.
          </Card.Text>
        </Card.Body>
      </section>
    </>
  );
};

export default About;
