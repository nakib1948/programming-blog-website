import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
const Allblog = (props) => {
    let data=props.data;
    let handleAddtoCart=props.handleAddtoCart
    console.log(data)
    return (
        <div className='mb-3'>
             <Card >
                <Card.Img variant="top" src={data.picture} />
                <Card.Body>
                    <div className='m-3 d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center'>
                            <div>
                                <img height='80px' src={data.image}  style={{borderRadius:'50%'}} alt="" />
                            </div>
                            <div style={{marginTop:'10px',marginLeft:'10px'}}>
                                <h5>{data.name}</h5>
                                <p>{data.date}</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <p>{data.time} min read</p>
                            <BookmarkBorderIcon onClick={()=>handleAddtoCart(data)} ></BookmarkBorderIcon>
                        </div>
                        
                    </div>
                    <Card.Title>{data.description}</Card.Title>
                    
                    <p className='m-2'>#begineer<span style={{marginLeft:'10px'}}>#programming</span></p>
                    <a href=''>Mark as read</a>
                </Card.Body>
             </Card>
        </div>
    );
};

export default Allblog;