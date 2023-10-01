
import React, { useEffect, useRef } from 'react';
import './GlassParticleAnimation.css'; // Import the CSS file for styling
import Edith from '../assets/edith_text.png'

const GlassParticleAnimation = () => {
    const logoRef = useRef(null);

    useEffect(() => {
      // Run the animation when the component mounts
      const logoElement = logoRef.current;
  
      const animation = logoElement.animate(
        [
          { transform: 'scale(0)', opacity: 0 },
          { transform: 'scale(1.1)', opacity: 1 },
          { transform: 'rotate(-10deg)', opacity: 1 },
          { transform: 'rotate(10deg)', opacity: 1 },
          { transform: 'rotate(0deg)', opacity: 1 }
        ],
        {
          duration: 2000, // Animation duration in milliseconds
          easing: 'ease-in-out', // Animation easing function
          iterations: Infinity, // Number of times the animation should repeat (infinite in this case)
          direction: 'alternate' // Animation direction (forward and backward)
        }
      );
  
      // Clean up the animation when the component unmounts
      return () => {
        animation.cancel();
      };
    }, []);
  
    return (
      <div className="logo-container">
        <img
          ref={logoRef}
          className="logo"
          src={Edith}
          alt="Logo"
        />
      </div>
    );
  };
  

export default GlassParticleAnimation;