import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProjectCard from '../components/ProjectCard';

function Home() {
  return (
    <Row xs={1} md={2} lg={3} className='g-3'>
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <ProjectCard />
        </Col>
      ))}
    </Row>
  );
}

export default Home;
