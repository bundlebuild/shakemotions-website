"use client"
import React, { useEffect, useRef, useState } from 'react';
import './fadeUp.css';
import classNames from 'classnames';

interface FadeUpProps {
  className?: string;
}

const FadeUp: React.FC<FadeUpProps> = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const fadeUpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!fadeUpRef.current) return;

      const top = fadeUpRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      setIsVisible(top < windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fadeUpClass = classNames('fade-up', className, {
    'fade-up--visible': isVisible,
  });

  return <div ref={fadeUpRef} className={fadeUpClass}>{children}</div>;
};

export default FadeUp;
