import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  width: 100vw;
  height: 8vh;
`;

export default Layout;
