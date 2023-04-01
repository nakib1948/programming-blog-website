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

            <Card className='mb-3'>
            <Card.Body>
                <Card.Title>Purpose of useEffect other than fetching data.</Card.Title>
                <Card.Text>
                 Besides fetching data, useEffect can be used for various other purposes such as updating the document title based on component state, adding and removing event listeners, managing timers and intervals within a component, animating components using CSS transitions or animations, implementing scroll position management, and handling authentication and authorization.

                id bugs caused by stale data, and ensure that components behave correctly in different scenarios.
                </Card.Text>
              
            </Card.Body>
            </Card>
              
            <Card className='mb-3'>
            <Card.Body>
                <Card.Title>How Does React work?</Card.Title>
                <Card.Text>
                React works by allowing developers to create reusable components that can be rendered and   updated based on changes to their state or props.
                React uses a virtual DOM to optimize the rendering of components by only updating the parts of the DOM that have changed, rather than re-rendering the entire page.
                When a component's state or props change, React re-renders the component and updates the virtual DOM. It then calculates the difference between the new virtual DOM and the previous virtual DOM and applies the necessary changes to the real DOM.
                React also provides a unidirectional data flow architecture, where data flows from the parent component to child components through props. This architecture makes it easier to reason about how data flows through the application and can help prevent bugs caused by conflicting state. Overall, React's component-based architecture and virtual DOM make it a powerful tool for building fast, scalable, and maintainable user interfaces.
                </Card.Text>
              
            </Card.Body>
            </Card>


            </Col>
        </Row>
      </Container>
    );
};

export default Blog;