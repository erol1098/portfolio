import React from 'react';

import Card from 'react-bootstrap/Card';

const ProjectCard = ({ data }) => {
  return (
    <Card
      as={'section'}
      className='d-flex flex-column gap-3 bg-light shadow justify-content-between rounded-4'
      style={{ width: '30rem', height: '25rem' }}
    >
      <Card.Img
        variant='top'
        src={data?.image}
        className='rounded-top  img-fluid'
        style={{ height: '15rem' }}
      />

      <Card.Body
        className='d-flex flex-column align-items-center gap-3 p-3 '
        style={{ height: '9rem' }}
      >
        <Card.Title as={'h2'} className='fw-bold'>
          {data?.title}
        </Card.Title>
        <Card.Subtitle className='d-flex gap-2 fw-bold'>
          <Card.Link href={data?.demo}>Demo</Card.Link>
          <Card.Link href={data?.repo}>GitHub</Card.Link>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
