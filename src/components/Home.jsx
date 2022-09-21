import React from 'react';

const Home = () => {
  return (
    <section
      id='home'
      className='text-center p-5'
      style={{
        width: '100%',
        height: 'calc(100vh - 7rem)',
        background:
          'url("https://firebasestorage.googleapis.com/v0/b/portfolio-erol1098.appspot.com/o/home.jpg?alt=media&token=770c3543-e64c-4aac-b8fe-35c6d5207087") fixed center  ',
      }}
    >
      <h1 className='text-center mt-5 text-primary text-uppercase'>
        Erol Mahmutoglu
      </h1>
      <h3 className='text-success'>
        I'm a Frontend Developer based in Izmir, Turkey. I strives to build
        immersive and beautiful web applications through carefully crafted code
        and user-centric design.
      </h3>
    </section>
  );
};

export default Home;
