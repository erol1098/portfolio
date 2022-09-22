import React, { useEffect, useState } from 'react';

import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Projects from '../components/Projects';

import useFirebase from '../hooks/useFirebase';
// import p from '../utils/projects';

function Homepage() {
  const [projects, setProjects] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const { getEntries, addNewEntry } = useFirebase();

  // const saveProjects = () =>
  //   p.map((project) => addNewEntry('projects', project));

  useEffect(() => {
    getEntries('projects').then((res) => setProjects(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Home />

      <About />
      <Projects projects={projects} />
      {/* <button className='btn btn-success w-100' onClick={saveProjects}>
        Add
      </button> */}
      <Contact />
    </>
  );
}

export default Homepage;
