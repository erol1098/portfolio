import React, { useEffect, useState } from 'react';

import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Projects from '../components/Projects';

import useFirebase from '../hooks/useFirebase';

function Homepage() {
  const [projects, setProjects] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const { getEntries, addNewEntry } = useFirebase();

  // const saveProjects = () => {
  //   addNewEntry('projects', {});
  // };

  useEffect(() => {
    getEntries('projects').then((res) => setProjects(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Home />
      <About />
      <Projects projects={projects} />
      {/* <button onClick={saveProjects}>Add</button> */}
      <Contact />
    </>
  );
}

export default Homepage;
