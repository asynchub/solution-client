import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import './Login.css';
import { Auth } from 'aws-amplify';
import { useAppContext } from '../libs/contextLib';
import LoadingButton from './LoadingButton';
import { onError } from '../libs/errorLib';

export default function Login() {
  const history = useHistory();
  const { setIsAuthenticated } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      await Auth.signIn(email, password);
      setIsAuthenticated(true);
      history.push('/');
    } catch (error) {
      onError(error);
      setIsLoading(false);
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
        <LoadingButton
          block
          disabled={!validateForm()}
          type='submit'
          isLoading={isLoading}
        >
          Login
        </LoadingButton>
      </Form>
    </div>
  )
}