import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './Login.css';
import { Auth } from 'aws-amplify';
import { useAppContext } from '../libs/contextLib';

export default function Login() {
  const history = useHistory();
  const { setIsAuthenticated } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await Auth.signIn(email, password);
      setIsAuthenticated(true);
      history.push('/');
    } catch (error) {
      alert(error.message);
    };
  }

  return (
    <div className='Login'>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group>
          <Form.Label>
            Email
          </Form.Label>
          <Form.Control
            type='email'
            placeholder='Email'
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Password
          </Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        <Button
          block
          disabled={!validateForm()}
          type='submit'
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}