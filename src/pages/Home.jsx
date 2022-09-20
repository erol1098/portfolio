import React, { useEffect, useState } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import About from '../components/About';
import Contact from '../components/Contact';

import ProjectCard from '../components/ProjectCard';
import useFirebase from '../hooks/useFirebase';

function Home() {
  const [projects, setProjects] = useState([]);

  const { getEntries, addNewEntry } = useFirebase();

  const saveProjects = () => {
    addNewEntry('projects', {});
  };

  useEffect(() => {
    getEntries('projects').then((res) => setProjects(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <About />
      <hr />

      <h1 id='projects' className='text-center mt-5'>
        Projects
      </h1>
      <Row xs={1} md={2} xxl={3} className='g-4 p-4'>
        {projects.map((project) => (
          <Col className='d-flex justify-content-center' key={project?.id}>
            <ProjectCard data={project?.data} />
          </Col>
        ))}
        <button onClick={saveProjects}>Add</button>
      </Row>

      <hr />
      <Contact />
    </>
  );
}

export default Home;
