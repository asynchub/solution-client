import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
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
          size='lg'
          disabled={!validateForm()}
          type='submit'
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}