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
          'url("https://firebasestorage.googleapis.com/v0/b/portfolio-erol1098.appspot.com/o/home.jpg?alt=media&token=cf3a355f-1a50-4e4d-a21a-01cd5a89f003") fixed center  ',
      }}
    >
      <h1 className='text-center my-5 text-primary text-uppercase'>
        Erol Mahmutoglu
      </h1>
      <h2 className='text-success'>I'm a Frontend Developer</h2>
    </section>
  );
};

export default Home;
