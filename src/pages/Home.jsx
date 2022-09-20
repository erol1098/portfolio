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
  return (
    <>
      <h1 id='projects' className='text-center my-3'>
        Projects
      </h1>
      <Row xs={1} md={2} xxl={3} className='g-4 p-4'>
        {projects.map((project) => (
          <Col className='d-flex justify-content-center' key={project?.id}>
            <ProjectCard data={project?.data} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Home;
