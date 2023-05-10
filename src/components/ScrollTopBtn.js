import React from 'react'
import PropTypes from 'prop-types';
import { Box, Fade, useScrollTrigger } from '@mui/material';

const ScrollTopBtn = ({ children }) => {

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
      });

      const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
          '#home',
        );
    
        if (anchor) {
          anchor.scrollIntoView({
            block: 'center',
          });
        }
      };
  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  )
}

ScrollTopBtn.propTypes = {
    children: PropTypes.element.isRequired,
  };

export default ScrollTopBtn