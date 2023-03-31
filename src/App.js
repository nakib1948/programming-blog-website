import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import Allblog from './Components/Allblog';

function App() {
   const [user,setUser]=useState([])

   useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setUser(data))
   },[])
   //console.log(user)
  return (
    <>
      <Navbar className='mt-2'>
      <Container className='pb-4' style={{borderBottom:'1px solid gray'}}>
        <Navbar.Brand href="#home" > <h3>Knowledge Cafe</h3></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <img height='50px' style={{borderRadius:'50%'}} src="https://randomuser.me/api/portraits/men/35.jpg" alt="" />
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container className='mt-5'>
      <Row>
        <Col sm={8}>
         {
            user.map(user=><Allblog data={user}></Allblog>)
         }

        </Col>
        <Col sm={4}>sm=4</Col>
      </Row>
      
    </Container>
    
    </>
  );
}

export default App;
