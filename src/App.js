import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import Allblog from './Components/Allblog';
import BookmarkBlog from './Components/BookmarkBlog';

function App() {
   const [user,setUser]=useState([])
   const [getData,setgetData]=useState([])

   let count=0
  
   useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setUser(data))
   },[])
   
   const handleAddtoCart=(data)=>{
    setgetData([...getData,data])
   }
  
   for(let i of getData)
   {
     count+=i.time
   }
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
            user.map(user=><Allblog data={user} handleAddtoCart={handleAddtoCart}></Allblog>)
         }

        </Col>
        <Col sm={4}>
          <div className='mb-4' style={{backgroundColor:'#F2F3F5'}}>
              <p class="h4 p-3 text-primary">Spent time on read: {count} min</p>
          </div>
          <div className='p-3 rounded' style={{backgroundColor:'#F2F3F5'}}>
              <p class="h4 p-3">Bookedmarked Blogs: {getData.length}</p>
              {
                getData.map(data=><BookmarkBlog data={data.description}></BookmarkBlog>)
              }
          </div>
        </Col>
      </Row>
      
    </Container>
    
    </>
  );
}

export default App;
