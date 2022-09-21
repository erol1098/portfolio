import React from 'react';

import { MdEmail, MdPhoneIphone } from 'react-icons/md';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Contact = () => {
  return (
    <>
      <h1 id='contact' className='text-center mt-5'>
        Contact
      </h1>

      <section
        className='d-flex justify-content-center align-items-center gap-5 py-5 mb-5'
        style={{
          width: '100%',
          height: '50vh',
          background:
            'url("https://firebasestorage.googleapis.com/v0/b/portfolio-erol1098.appspot.com/o/contact.jpg?alt=media&token=4e4bedc7-c8e9-4e0d-a3b6-0892e72d4c0c") fixed center  ',
        }}
      >
        <a href='mailto:erol1098@gmail.com'>
          <div
            className='bg-light shadow rounded-circle d-flex flex-column justify-content-center align-items-center gap-3'
            style={{ width: '5rem', height: '5rem', cursor: 'pointer' }}
          >
            <MdEmail size={50} color='black' />
          </div>{' '}
        </a>
        <a href='tel:+905425891098'>
          <div
            className='bg-light shadow rounded-circle d-flex justify-content-center align-items-center'
            style={{ width: '5rem', height: '5rem', cursor: 'pointer' }}
          >
            <MdPhoneIphone size={50} color='black' />
          </div>
        </a>
        <a href='https://www.linkedin.com/in/erol-mahmutoglu/'>
          <div
            className='bg-light shadow rounded-circle d-flex justify-content-center align-items-center'
            style={{ width: '5rem', height: '5rem', cursor: 'pointer' }}
          >
            <BsLinkedin size={50} color='black' />
          </div>
        </a>
        <a href='https://github.com/erol1098'>
          <div
            className='bg-light shadow rounded-circle d-flex justify-content-center align-items-center'
            style={{ width: '5rem', height: '5rem', cursor: 'pointer' }}
          >
            <BsGithub size={50} color='black' />
          </div>
        </a>
      </section>
    </>
  );
};

export default Contact;
