import React from 'react';
import AlertComponent from './AlertStructure';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const Alert = () => {
  const { message, isVisible } = useSelector((state: RootState) => state.alert);

  const componentProps = {
    message,
    isVisible,
  };

  return (
    <div style={{ display: isVisible ? 'block' : 'none' }}>
      <AlertComponent {...componentProps} />
    </div>
  );
};

export default Alert;
