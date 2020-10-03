import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/img/bootstrap-logo.svg';
import { AlertContext } from '../../context/alert/AlertContext';
import { AuthContext } from '../../context/auth/AuthContext';

const Login = props => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error) {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert(' Please fill all fields', 'danger');
    } else {
      login({ email, password });
    }
  };
  return (
    <div className='form-signin mt-5'>
      <form onSubmit={onSubmit}>
        <div className='text-center mb-4'>
          <img className='mb-4' src={logo} alt='' width='72' height='57' />
          <h1 className='h3 mb-3 font-weight-normal'>Please Sign in Here</h1>
        </div>
        <div className='form-label-group'>
          <input
            type='email'
            name='email'
            className='form-control'
            placeholder='Email address'
            value={email}
            required
            onChange={onChange}
          />
          <label htmlFor='email'>Email address</label>
        </div>

        <div className='form-label-group'>
          <input
            type='password'
            name='password'
            className='form-control'
            placeholder='Password'
            required
            value={password}
            onChange={onChange}
          />
          <label htmlFor='password'>Password</label>
        </div>

        <div className='checkbox mb-3'>
          <label>
            <input type='checkbox' value='remember-me' /> Remember me
          </label>
        </div>
        <button className='btn btn-lg btn-primary btn-block' type='submit'>
          Sign in
        </button>
        <p className='mt-5 mb-3 text-muted text-center'>&copy; 2017-2020</p>
      </form>
    </div>
  );
};

export default Login;
