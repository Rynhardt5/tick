import React from 'react';
import Sidebar from './Sidebar';

export const Main = ({ children }) => {
  return <main className="main"> I am the main{children}</main>;
};
