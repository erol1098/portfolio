import React from 'react';

import Card from 'react-bootstrap/Card';

const ProjectCard = ({ data }) => {
  return (
    <Card
      as={'section'}
      className='d-flex flex-column gap-3 bg-light shadow rounded-4'
      style={{ width: '30rem', height: '35rem' }}
    >
      <Card.Img variant='top' src={data?.image} className='rounded-top' />

      <Card.Body className='d-flex flex-column align-items-center gap-3 p-3'>
        <Card.Title as={'h2'} className='fw-bold'>
          {data?.title}
        </Card.Title>
        <Card.Subtitle className='d-flex gap-2'>
          <Card.Link href={data?.demo}>Demo</Card.Link>
          <Card.Link href={data?.repo}>GitHub</Card.Link>
        </Card.Subtitle>
        <Card.Text
          className='text-center'
          style={{ height: '10rem', overflow: 'auto' }}
        >
          {data?.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
