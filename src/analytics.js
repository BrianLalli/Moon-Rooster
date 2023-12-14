/* global dataLayer */

export const initGA = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', process.env.REACT_APP_GA_ID);
  };
  
  
  