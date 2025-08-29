import React from 'react';
import { NavStyles } from '../styles/HeaderStyles';
import scrollToId from '../utils/scrollToId';

import ModalBox from './ModalBox';

import localize from './localize';
import LanguageButton from './LanguageButton';





const translations = {
  en: {
    whyBizami: 'Why Bizami?',
    Offer: 'Offer',
    About: 'About us',
    Contact: 'Contact',
  },
  pl: {
    whyBizami: 'Dlaczego Bizami?',
    Offer: 'Oferta',
    About: 'O nas',
    Contact: 'Kontakt',
  },
};

 function getTranslation(key, locale) {
  return translations[locale] && translations[locale][key] ? translations[locale][key] : translations['pl'][key];
};




function Nav({ menuState, setMenuState, pageContext, locale }) {
  
  

  return (
    <NavStyles>
      <ul>
      
        <li>
          <button
            type="button"
            onClick={() => scrollToId('readMoreAbout', -150)}
          >
            {getTranslation('whyBizami', locale)}
          </button>
        </li>
        <li>
          <button type="button" onClick={() => scrollToId('offer', -150)}>
            {getTranslation('Offer', locale)}
          </button>
        </li>
        <li>
          <button type="button" onClick={() => scrollToId('about', -150)}>
          {getTranslation('About', locale)}
          </button>
        </li>
        <li>
          <button type="button" onClick={() => scrollToId('contact')}>
          {getTranslation('Contact', locale)}
          </button>
        </li>
        <li className="button-link">
        
          <ModalBox locale = {locale}  type="button"/>
          
        </li>
        <li>
          <LanguageButton locale = {locale}/>
        </li>
      </ul>
    
      <button
        type="button"
        aria-label={`Click to ${menuState ? 'close' : 'open'} mobile menu`}
        onClick={() => setMenuState(!menuState)}
        className={`hamburger ${menuState ? 'open' : ''}`}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        
      </button>
    </NavStyles>
  );
}

export default localize(Nav);