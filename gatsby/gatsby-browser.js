import React from 'react';
import Layout from './src/components/Layout';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { FormProvider } from './src/components/FormContext';
import Cookies from 'js-cookie';



export const onClientEntry = () => {
  const savedLocale = Cookies.get('language');
  if (savedLocale) {
    if (window.location.pathname === '/') {
      
      
      if(savedLocale !=='pl'){
        const redirectTo = `/${savedLocale}`;
        window.location.href = redirectTo;
      }
    
  }
}
}

export function wrapPageElement({ element, props }) {
  
  return <GoogleReCaptchaProvider reCaptchaKey={`${process.env.GATSBY_CAPTCHA_KEY}`} scriptProps={{ async: true, defer: true }} >
           <Layout {...props}>{element}</Layout>
         </GoogleReCaptchaProvider>
}

export function wrapRootElement({ element}) {
  
  return <FormProvider>{element}</FormProvider>
}
