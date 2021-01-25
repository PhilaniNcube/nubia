import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Router from 'next/router';
import styles from '../styles/Home.module.css';

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 100,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
};

const fadeInLeft = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 1,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function Home(props) {
  const [backgrounds, setBackgrounds] = useState([
    { img: '/images/bookkeeping.jpg', title: 'Bookkeeping & Payroll Services' },
    { img: '/images/financial.jpg', title: 'Financial Statement Preparations' },
    { img: '/images/tax.jpg', title: 'Corporate Tax Returns' },
  ]);

  return (
    <Header exit={{ opacity: 0 }} animate="animate" initial="initial">
      <Head>
        <title>Nubia Associates</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Welcome variants={fadeInLeft}>
        <h1>Welcome To</h1>
        <h2>Nubia Associates</h2>
      </Welcome>
      <Grid variants={stagger}>
        {backgrounds.map((item, index) => {
          return (
            <GridItem variants={fadeInUp} key={index} img={item.img}>
              <h2>{item.title}</h2>
            </GridItem>
          );
        })}
      </Grid>
    </Header>
  );
}

const Header = styled(motion.div)`
  height: 92vh;
  width: 100vw;
`;

const Welcome = styled(motion.div)`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: var(--mainTitle);
    text-align: center;
  }
  h2 {
    font-size: var(--secondaryTitle);
    text-align: center;
    font-weight: 400;
  }
`;

const Grid = styled(motion.div)`
  height: 50%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '. . .';

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      '.'
      '.'
      '.';
  }
`;

const GridItem = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--backgroundColor);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  background-image: url(${(props) => props.img});

  h2 {
    font-size: var(--articleTitle);
    text-align: center;
    color: var(--secondaryColor);
  }
`;
