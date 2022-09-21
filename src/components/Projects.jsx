import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
  return (
    <>
      <h1 id='projects' className='text-center my-5'>
        Projects
      </h1>
      <Row
        xs={1}
        md={2}
        xxl={3}
        className='g-4 p-4 m-0'
        style={{
          width: '100%',
          background:
            'url("https://firebasestorage.googleapis.com/v0/b/portfolio-erol1098.appspot.com/o/projects.jpg?alt=media&token=0dbd7374-7ca0-4837-bf0b-ca64426af918") fixed center ',
        }}
      >
        {projects.map((project) => (
          <Col className='d-flex justify-content-center' key={project?.id}>
            <ProjectCard data={project?.data} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Projects;
