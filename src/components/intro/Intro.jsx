import { useEffect, useRef } from 'react';
import './intro.min.css';
import { init } from 'ityped';

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        'Frontend Developer',
        'React Developer',
        'Customer Support Specialist',
        'Telemarketing Specialist',
      ],
    });
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/man.png' alt='' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There, My Name Is</h2>
          <h1>Amin Akbar</h1>
          <h3>
            And I'm A <span ref={textRef}></span>
          </h3>
          <a href='#portfolio'>
            <img src='assets/down.png' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
}
