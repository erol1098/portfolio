import Table from 'react-bootstrap/Table';

function Skills() {
  return (
    <>
      <h3 className='mt-4 mb-2 text-center w-100 fw-bold'>Skills</h3>
      <Table striped hover size='sm'>
        <thead className='text-primary'>
          <tr>
            <th>Languages</th>
            <th>Styling</th>
            <th>Libraries</th>
            <th>Frameworks</th>
            <th>Other Tools</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HTML5</td>
            <td>CSS3</td>
            <td>React</td>
            <td>Django REST</td>
            <td>Postman</td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td>Styled Components</td>
            <td>Redux</td>
            <td></td>
            <td>Firebase</td>
          </tr>
          <tr>
            <td>Python</td>
            <td>SASS/SCSS</td>
            <td>Axios</td>
            <td></td>
            <td>REST APIs</td>
          </tr>
          <tr>
            <td>SQL</td>
            <td>Bootstrap</td>
            <td>Formik</td>
            <td></td>
            <td>Git</td>
          </tr>
          <tr>
            <td></td>
            <td>Material UI</td>
            <td>Yup</td>
            <td></td>
            <td>Linux</td>
          </tr>
          <tr>
            <td></td>
            <td>SASS/SCSS</td>
            <td>Axios</td>
            <td></td>
            <td>Webpack</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Skills;
