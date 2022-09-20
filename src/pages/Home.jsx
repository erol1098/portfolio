import React, { useEffect, useState } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProjectCard from '../components/ProjectCard';
import useFirebase from '../hooks/useFirebase';

function Home() {
  const [projects, setProjects] = useState([]);

  const { getEntries } = useFirebase();
  useEffect(() => {
    getEntries('projects').then((res) => setProjects(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log('first', projects);
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
