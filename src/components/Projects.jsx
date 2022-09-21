import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
  return (
    <>
      <h1 id='projects' className='text-center mt-5'>
        Projects
      </h1>
      <Row
        xs={1}
        md={2}
        xxl={3}
        className='g-4 p-4'
        style={{ width: '100%', minHeight: 'calc(100vh - 7rem)' }}
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
