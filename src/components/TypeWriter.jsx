import React, { useState, useEffect } from 'react';
import './Typewriter.css';

const Typewriter = ({ text, delay }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let tex = text
    let replacedText = tex.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < replacedText.length) {
        setDisplayedText(displayedText => displayedText + replacedText.charAt(i));
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, delay);
    
    return () => {
      clearInterval(intervalId);
    }
  }, [text, delay]);

  return <span className="Typewriter" dangerouslySetInnerHTML={{ __html: displayedText }}></span>
};

export default Typewriter;
