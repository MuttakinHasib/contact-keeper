import React, { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { AlertContext } from '../../../context/alert/AlertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <TransitionGroup key={alert.id}>
        <CSSTransition timeout='500' classNames='item'>
          <div className={`alert mt-5 alert-${alert.type}`}>
            <i className='fas fa-info-circle' /> {alert.msg}
          </div>
        </CSSTransition>
      </TransitionGroup>
    ))
  );
};

export default Alerts;
