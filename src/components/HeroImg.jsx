import './HeroImgStyles.css';
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.JPG';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiPhone,
} from 'react-icons/fi';
import { AiFillMediumSquare } from 'react-icons/ai';

const images = [profile1, profile2];

const HeroImg = () => {
  const [current, setCurrent] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
    const timerId = setInterval(() => {
      setFadeState('fade-out');

      setTimeout(() => {
        setCurrent((c) => (c + 1) % images.length);
        setFadeState('fade-in');
      }, 1000);
    }, 7000);

    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div className='hero'>
      <div className='hero-container'>
        <div className='box left'>
          <img
            src={images[current]}
            className={`profile ${fadeState}`}
            alt={`slide ${current + 1}`}
          />
        </div>
        <div className='box right'>
          <div className='intro'>
            <h1>Hi, I'm Luck</h1>
            <p>Nichanun Pongpattarawit</p>
            <div className='intro-detail'>
              A software developer with over 7 years of experience in
              development and 3 years in project management, specializing in
              full-stack development, cloud computing, and Agile methodologies.
              Proficient in JavaScript, SQL, PHP, C#, and Python, with expertise
              in React, Laravel, and AWS.
              <div className='social-container'>
                <Link
                  to='https://github.com/nichanunpong'
                  className='social-link'
                  aria-label='GitHub'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <FiGithub />
                </Link>
                <Link
                  to='https://www.linkedin.com/in/nichanun-pong/'
                  className='social-link'
                  aria-label='LinkedIn'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <FiLinkedin />
                </Link>
                <Link
                  to='https://lucknicha.medium.com/'
                  className='social-link'
                  aria-label='Medium'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <AiFillMediumSquare />
                </Link>
                <Link
                  to='mailto:nichanun.luck@gmail.com'
                  className='social-link'
                  aria-label='Email'
                  target='_blank'>
                  <FiMail />
                </Link>
                <Link
                  to='tel:+16726991228'
                  className='social-link'
                  aria-label='Phone'>
                  <FiPhone />
                </Link>
              </div>
              <div className='download'>
                <a
                  href='./Nichanun_Pong_Resume.pdf'
                  target='_blank'
                  className='btn'>
                  <FiDownload
                    size={20}
                    style={{
                      color: '#000',
                      marginRight: '1rem',
                      marginBottom: '-0.2rem',
                    }}
                  />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
