import React from 'react';
import spinner from '../../../assets/img/loading.webp';
const Spinner = () => {
  return (
    <div>
      <img src={spinner} alt='' width='200' className='d-block m-auto' />
    </div>
  );
};

export default Spinner;
