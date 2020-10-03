import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/img/bootstrap-logo.svg';
import { AlertContext } from '../../context/alert/AlertContext';
import { AuthContext } from '../../context/auth/AuthContext';
const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Password do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };
  return (
    <div className='form-signin mt-5'>
      <form onSubmit={onSubmit}>
        <div className='text-center mb-4'>
          <img className='mb-4' src={logo} alt='' width='72' height='57' />
          <h1 className='h3 mb-3 font-weight-normal'>Please SignUp Here</h1>
        </div>

        <div className='form-label-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Name'
            name='name'
            value={name}
            required
            onChange={onChange}
          />
          <label htmlFor='name'>Name</label>
        </div>
        <div className='form-label-group'>
          <input
            type='email'
            name='email'
            className='form-control'
            placeholder='Email address'
            required
            value={email}
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
        <div className='form-label-group'>
          <input
            type='password'
            name='password2'
            className='form-control'
            placeholder='Confirm password'
            required
            value={password2}
            onChange={onChange}
          />
          <label htmlFor='password2'>Confirm password</label>
        </div>

        <div className='checkbox mb-3'>
          <label>
            <input type='checkbox' value='remember-me' /> Remember me
          </label>
        </div>
        <button className='btn btn-lg btn-primary btn-block' type='submit'>
          Sign up
        </button>
        <p className='mt-5 mb-3 text-muted text-center'>&copy; 2017-2020</p>
      </form>
    </div>
  );
};

export default Register;
