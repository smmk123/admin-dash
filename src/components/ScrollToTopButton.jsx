import React, { useState } from 'react';
import { KeyboardArrowUp } from '@mui/icons-material';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowButton(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-6 right-6 p-4 rounded-full bg-gray-500 text-white ${
        showButton ? 'visible' : 'invisible'
      }`}
      onClick={scrollToTop}
    >
      <KeyboardArrowUp />
    </button>
  );
};

export default ScrollToTopButton;