import React, { useState, useEffect, useContext } from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import { ThemeConsumer } from 'styled-components';
import styled, { ThemeContext } from 'styled-components';

const styles = {
  nameStyle: {
    fontSize: '5em',
  },
  inlineChild: {
    display: 'inline-block',
    color: ''
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh', // full viewport height
    margin: '0 auto', // center horizontally
    marginTop: '20vh'
  },
  typeWriter: {
    color: 'white'
  }
};

function Home() {
  const [data, setData] = useState(null);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <div>
    {data ? (
    <Fade>
      <div style={styles.mainContainer}>
        <h1 style={styles.nameStyle}>{data?.name}</h1>
        <div className="secondaryColor" style={{ flexDirection: 'row' }}>
          <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: data?.roles,
            }}
          />
        </div>
        <Social />
      </div>
    </Fade>
  ) : <FallbackSpinner />}
  <About />
  <Skills />
  <Education style={{border: '1px solid red'}}/>
  </div>
  );
}

export default Home;
