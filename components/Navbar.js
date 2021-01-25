import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo>
        <Link href="/">
          <a>
            <Image
              src="/images/black-logo.png"
              height={35}
              width={65}
              alt="logo"
            />
          </a>
        </Link>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Link href="/">
          <MenuLink>Home</MenuLink>
        </Link>

        <Link href="/about">
          <MenuLink>About</MenuLink>
        </Link>
        <Link href="/contact">
          <MenuLink>Contact</MenuLink>
        </Link>
        <Link href="/services">
          <MenuLink>Services</MenuLink>
        </Link>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const MenuLink = styled.a`
  padding: 1rem 1.6rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: var(--primaryColor);
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #7b7fda;
  }
`;

const Nav = styled.div`
  height: 8vh;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.div`
  padding: 1rem 0;
  text-decoration: none;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--secondaryColor);
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: var(--primaryColor);
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
