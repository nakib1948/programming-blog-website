import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
      <Container fluid className='mt-5'>
        <h1 className='text-center mb-3'>Blog</h1>
        <Row style={{marginLeft:'10%',marginRight:'10%'}}>
          <Col> 
          <Card className='mb-3'>
            <Card.Body>
                <Card.Title>Props vs state</Card.Title>
                <Card.Text>
                Props are used to pass data from a parent component down to its child component. Props are read-only and should not be modified within the child component. A parent component can pass any data to its child component through props, including functions, objects, and primitive values. Props allow for the creation of reusable components that can be easily customized by passing in different props. <br />
                State, on the other hand, is used to manage data that can change within a component. State is mutable and should only be modified using the setState method provided by React. Changes to state trigger a re-render of the component, updating the UI to reflect the new state. State is local to a component and cannot be accessed or modified by its parent or child components.
                </Card.Text>
              
            </Card.Body>
            </Card>

            <Card className='mb-3'>
            <Card.Body>
                <Card.Title>How does useState work?</Card.Title>
                <Card.Text>
                useState is a hook in React that allows functional components to have state. It takes an initial value as its argument and returns an array with the current state value and a function to update it. By calling the update function, the component can change the state, causing a re-render of the component and updating the UI to reflect the new state.
                </Card.Text>
              
            </Card.Body>
            </Card>

            

            </Col>
        </Row>
      </Container>
    );
};

export default Blog;