import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import Allblog from './Components/Allblog';
import BookmarkBlog from './Components/BookmarkBlog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './Components/Blog';

function App() {
   const [user,setUser]=useState([])
   const [getData,setgetData]=useState([])
   const [timecount,settimecount]=useState(0)
  
   useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setUser(data))
   },[])
   const showToastMessage = () => {
    toast.success('You Have Already Bookmarked This Blog !', {
      position: toast.POSITION.TOP_CENTER
    });
  };
   const handleAddtoCart=(data)=>{
    const duplicate=getData.find(dt=> dt===data)
    if(duplicate){
      showToastMessage()
      setgetData([...getData,data])
    }
    else{
      setgetData([...getData,data])
    }
   
   }
  
   const totalTimecount=(totalTime)=>{
      settimecount(timecount+totalTime)
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
            user.map(user=><Allblog data={user} 
              
            handleAddtoCart={handleAddtoCart}
            totalTimecount={totalTimecount}>

            </Allblog>)
         }

        </Col>
        <Col sm={4}>
          <div className='mb-4' style={{backgroundColor:'#F2F3F5'}}>
              <p class="h4 p-3 text-primary">Spent time on read: {timecount} min</p>
          </div>
          <div className='p-3 rounded' style={{backgroundColor:'#F2F3F5'}}>
              <ToastContainer />
              <p class="h4 p-3">Bookedmarked Blogs: {getData.length}</p>
              {
                getData.map(data=><BookmarkBlog data={data.description}></BookmarkBlog>)
              }
          </div>
        </Col>
      </Row>
      
    </Container>
    
    <Blog></Blog>
    </>
  );
}

export default App;
