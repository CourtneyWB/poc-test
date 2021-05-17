import React, { Component,useState } from 'react';
import Modal from "react-modal";
import styled from 'styled-components';
import '../FormFolder/Form.css';
import { Button,Form,Col } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// const Form = () => 
// {return 
// <h1>Form  page</h1>
// };
// export default function Form(){
const Aform = () => {
  
    Modal.setAppElement("#root");
const [isOpen,setIsOpen] = useState(false)
function toggleModal(){setIsOpen(!isOpen)};

  return(
    <CONTAINER>
   
    <Formik
      initialValues={{ Firstname:"", Lastname:"", email:"", FavouriteColor:""}}
      validationSchema={validationSchema}
      onSubmit={(values, {setSubmitting, resetForm}) => {
         
          setSubmitting(true);

          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 500);
      }}
    >
      {( {values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting }) => (
        <MYFORM onSubmit={handleSubmit} className="mx-auto">

          <Form.Group controlId="firstName">
            <Form.Label>First name:</Form.Label><br></br>
            <Form.Control
              type="text"
              name="Firstname"
              placeholder="First name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Firstname}
              className={touched.name && errors.Firstname ? "has-error" : null}
              />
              {touched.Firstname && errors.Firstname ? (
                <div className="error-message">{errors.Firstname}</div>
              ): null}
          </Form.Group>

          {/* <Form.Group controlId="Last name">
    <Form.Label>Last Name </Form.Label>
    <Form.Control placeholder="Last Name" />
  </Form.Group> */}
          <Form.Group controlId="lastName">
            <Form.Label>Last name:</Form.Label><br></br>
            <Form.Control
              type="text"
              name="Lastname"
              placeholder="Last name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Lastname}
              className={touched.name && errors.Lastname ? "has-error" : null}
              />
              {touched.Lastname && errors.Lastname ? (
                <div className="error-message">{errors.Lastname}</div>
              ): null}
          </Form.Group>
          <Form.Group controlId ="form Email">
            <Form.Label>Email:</Form.Label><br></br>
            <Form.Control
            
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={touched.email && errors.email ? "has-error" : null}
               />
               {touched.email && errors.email ? (
                 <div className="error-message">{errors.email}</div>
               ): null}
               </Form.Group>

<Form.Group as={Col} controlId="Favourite Color">
      <Form.Label column sm="50">Favourite Colour</Form.Label>
      <Form.Control as="select" defaultValue="Choose">
        <option>Choose</option>
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </Form.Control>
    </Form.Group>

          {/* </Form.Group>
          
          <Form.Group controlId="formFavouriteColor"> 
            <Form.Label>Favourite Color:</Form.Label><br></br>
            <Form.Control as = "select" size="lg" 
          
              type="text"
              name="FavouriteColor"
              placeholder="Favourite Color"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.blog}
              className={touched.favouritecolor && errors.blog ? "has-error" : null}
              />
            
            {touched.favouritecolor && errors.blog ? (
                <div className="error-message">{errors.favouritecolor}</div>
              ): null}

          </Form.Group>
       */}
          {/* <BUTTON variant="primary" type="submit" disabled={isSubmitting}>
            Submit form
          </BUTTON> */}
          
          (
    <div className="App">
      <BUTTON onClick={toggleModal}>Submit form</BUTTON><br></br>

      {/* <div><Modal style ={{overlay:{position:'absolute',top:'1em',bottom:'35em',left:'36em',right:'52em'
      }}} */}
      <div><Modal style ={{overlay:{position:'fixed',
      top:'1em',
      bottom:'4em',
      left:'-3em',
      right:'5em',
      margin: '15% auto',
      padding: '1px',
      width: '30%', 
    }}}
      
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My  Modal"
      >
        <div><h6>Typically this would go to a server but here is good enough</h6>
<h6>Fancy colored email address below</h6></div>

<div className="App">
        <button style={{position:'absolute',
  background: '#0096FF',
  border: '#67C8FF',
  color:'white',
  margin:'1.9rem',
  padding: '6px 15px',
  display: 'inline'}}onClick={toggleModal}>Close </button></div>
      </Modal>
      </div>
    </div>
  );

        </MYFORM>
      )}
    </Formik>
    </CONTAINER>
  );
}
const CONTAINER = styled.div`
  background: #ffffff;
  height: auto;
  width: 100%;
  margin: 5em auto;
  color: #ffffff;
  @media(min-width: 786px) {
    width: 60%;
  }
  label {
    color: #000000;
    font-size: 12px;
    font-weight: 100;
  }
  .error {
    border: 2px solid #FF6565; 
  }
  .error-message {
    color: #FF6565;
    padding: .5em .2em;
    height: 1em;
    position: absolute;
    font-size: .8em;
  }
  h1 {
    color: #ffffff;
    padding-top: .5em;
  }
  .form-group {
    margin-bottom: 2.5em;
  }
`;

const MYFORM = styled(Form)`
  width: 50%;
  text-align: left;
  padding-top: 5em;
  padding-bottom: 5em;
  @media(min-width: 786px) {
    width: 10%;
  }
`;

const BUTTON = styled(Button)`
position:absolute;
  background: #0096FF;
  border: #67C8FF;
  color:white;
  margin:-2.5rem;
  padding: 10px 20px;
  font-weight: 400;
  text-align: center;
  font-size: 12px;
  text-decoration: none;
  display: inline;
   &:hover {
   background: #67C8FF;
   }
`;

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const validationSchema = Yup.object().shape({
  name: Yup.string()
  .min(2, "*Names must have at least 2 characters")
  .max(100, "*Names can't be longer than 10 characters")
  .required("*Name is required"),
  email: Yup.string()
  .email("*Must be a valid email address")
  .max(100, "*Email must be less than 30 characters")
  .required("*Email is required"),
  phone: Yup.string()
  .matches(phoneRegExp, "*Phone number is not valid")
  .required("*Phone number required"),
  favouriteColor: Yup.string()
  .url("*Must enter URL in http://www.example.com format")
  .required("*URL required")
});

export default Aform;
