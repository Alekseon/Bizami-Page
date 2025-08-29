import React, { useState, useEffect, useContext} from "react";

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import useDemoInfo from "../utils/useDemoInfo";
import styled from 'styled-components';

import ReactModal from 'react-modal';
import demoRequestIcon from '../assets/images/icon_demo_request.svg'
import icon from '../assets/images/incography2.png'

import { Pg1 } from "../components/FormPage1";
import { Pg2 } from "./FormPage2";
import FormContext from "./FormContext";
import "@fontsource/montserrat"; // Defaults to weight 400

import { graphql, useStaticQuery } from "gatsby";

import getLocalData from "../utils/getLocalData";


//import GlobalStyles from "../styles/GlobalStyles";



const Container = styled.div`
  display: grid; /* Ustawienie kontenera jako siatki */
  grid-template-columns: 1fr 3fr; /* Ustawienie dwóch kolumn o jednakowej szerokości */
  gap: 25px;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0;

   }
 }
  
  .container :nth-child(1) {
    align-self: start;
  }
  .content {
    display: flex;
    align-items: center; 
}
  .text {
    
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 1.2px;
    font-weight: 400;
    max-width: 95%;
    margin-top: 0px
    margin-bottom: 0px;
    @media (max-width: 768px) {
      font-family: 'Montserrat', sans-serif;
      line-height: 24px;
      letter-spacing: 0.8px;
      font-weight: 400;
      font-size: 16px;
      
     }
  }

  .container :nth-child(2) {
    
    max-width: 710px;
    height: 100%;
    
  }
  
  button {
    Padding: 15px, 25px, 15px, 25px
    margin-top: 24px;
    background: var(--blue-dark-1);
    color: white !important;
    border: 1px solid var(--blue-dark-1); /* Grubsza ramka */
    border-radius: 8px;
    font-family: system-ui,-apple-system,system-ui,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif;
    width: 100%
    height: 100%
    cursor: pointer;
    font-weight 400;
    font-size 18px;
    width: 100%;
    transform: translateY(-24px);
    
  }

  button.linkButton * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* Tutaj możesz dodać inne właściwości, które chcesz zresetować */
}
  
  .submit {
    padding: 32px 0px 16px 0px;
    gap: 20px;
    display: grid;
  }

  .submitButton {
    
    background: var(--blue-dark-1);
    color: white !important;
    border: 1px solid var(--blue-dark-1); /* Grubsza ramka */
    border-radius: 8px;
    font-family: system-ui,-apple-system,system-ui,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif;
    width: 100%
    height: 100%
    cursor: pointer;
    font-weight 400;
    font-size 18px;
    width: 100%;
    transform: translateY(-24px);
    animation: smooth-appear 1s ease forwards;
    @keyframes smooth-appear {
      from{
        opacity: 0;
      }
      to {
        bottom: 5px;
        opacity: 1;
      }
      }


  
  }
  }

  .text2 {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.8px;
    font-weight: 300;
  }

  label{
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.8px;
    margin-bottom: 2px;
  }

  .box{
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
     }
  }

  .flexContainer {
    display: flex;
    gap: 10px; 
    @media (max-width: 768px) {
      display: grid;
     }
  }

  .input1 {
    
    margin-bottom: 20px;
    border: 1px solid #B3B3B3;
    border-radius: 8px;
    height: 40px;
    width: 100%;
    letter-spacing: 1.2px;
    transition: border-color 0.3s; 
}

.input1:hover {
  border: 1px solid #257CB6; 
}

  .input2 {
    margin-bottom: 20px;
    border: 1px solid #B3B3B3;
    border-radius: 8px;
    height: 40px;
    width: 100%;
    letter-spacing: 1.2px;
    transition: border-color 0.3s; 
}

.input2:hover {
  border: 1px solid #257CB6; 
}

  span {
    position: absolute;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0.8px;
    max-width: 539px;
    margin-bottom: 0px;
    margin-top: 0px;
    transform: translateY(-20px);
  }

  img {
    @media (max-width: 768px) {
     display: none;
    }
  }
  
  .mobileHidden{
    @media (max-width: 768px) {
      display: none;
     }
  }

  .formButton {
    
    background: white;
    color: #257CB6!important;
    
    font-family: system-ui,-apple-system,system-ui,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif;
    margin-top: 24px;
    float: right;
    font-weight: 400;
    width: 96px;
    height: 58px;
    cursor: pointer;
    
    
    @media (max-width: 768px) {
      transform: translateY(0px);
      margin-top: 24px;
      float: right;
     }
    
  
    &:hover {
      
    }
  }

  .mobileContent{
      @media (max-width: 768px) {
      p { 
        font-size: 14px;
        letter-spacing: 0.4px;
      }
      label { 
        font-size: 12px;
      }
    } 
  }
  
  .fadeIn {
    animation: fadeIn 0.3s ease forwards;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      
    }
  }
.
  .fadeInPg2 {
    animation: fadeIn 0.3s ease forwards;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      
    }
  }

  
    
  }

  .hidden{
    display: none;
  }

  .show{
    display:flex;
  }

  .fadeOut {
    animation: fadeOutPg 0.3s ease forwards;
    
  }
  
  @keyframes fadeOutPg {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      
    }
  }
  


`;


const ModalStyles = styled.div`
  
@media (max-width: 768px) {
  padding: 16px 24px 16px 24px;
 gap: 10px;
 }

.title-marked {
  position: relative;
  display: inline-block;
  max-width: 650px;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    width: 85%;
    height: 90%;
    left: 5px;
    top: 30%;
    opacity: 0.4;
    background-color: #27AAFF;
    z-index: -1;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
    
   }
  
}

.fadeOut2 {
  animation: fadeOutPg2 3s ease forwards;
  
}

@keyframes fadeOutPg2 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    
  }
}

.fadeOut3 {
  animation: fadeOutPg3 1.5s ease forwards;
  
}

@keyframes fadeOutPg3 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    
  }
}


`;

const Times = styled.span`
  
position: absolute;
top: 0;
right: 24px;
top: 24px;
cursor: default;
transform: scale(2.5);
@media (max-width: 768px) {
  right: 24px;
  top: 8px;
  transform: scale(3);
  
 }
`;

const ModalButton = styled.button`
  background: var(--blue-dark-1);
  color: white !important;
  border: 12px solid var(--blue-dark-1); /* Grubsza ramka */
  border-radius: 8px;
  font-family: system-ui,-apple-system,system-ui,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif;
  width: 254px;
  cursor: pointer;
   
  @media (max-width: 768px) {
    width: 100%;
    padding: 122px 240px; /* Zwiększ padding, aby zwiększyć wysokość ramki */
    border: 24px solid var(--blue-dark-1); /* Grubsza ramka */
    
   }
 
   }
`;



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%) scale(1)',
    overflow: 'hidden',
    opacity: '1',



  },
  overlay: {zIndex: 1000,
    backgroundColor: 'rgba(200, 200, 200, 0.95)',
  }

};

const translations = {
  en: {
    demoRequest: 'Ask for an offer',
    privacyPolicyPart1: 'Your data is stored for business communication purposes. Please review our',
    privacyPolicyPart2: 'Privacy Policy',
    next: 'Next',
    href: '/en/polityka-prywatnosci/',
  },
  pl: {
    demoRequest: 'Zapytaj o cenę',
    privacyPolicyPart1: 'Twoje dane są przechowywane w celach komunikacji biznesowej. Zapoznaj się z naszą',
    privacyPolicyPart2: 'Polityką Prywatności',
    next: 'Dalej',
    href: '/polityka-prywatnosci/',
  },
};

function getTranslation(key, locale) {
  return translations[locale] && translations[locale][key] ? translations[locale][key] : translations['pl'][key];
};



export default function ModalBox({locale}) {



  const  data  = useStaticQuery(graphql`
      query {
          sanityModalBox {
              description1T{
                  _type
                  pl
                  en
              }
              description2T{
                  _type
                  pl
                  en
              }


              buttonTextT{
                  _type
                  pl
                  en
              }
              tytul{
                  _type
                  pl
                  en
              }
              PrivacyPolicyText{
                  _type
                  pl
                  en
              }
              PrivacyPolicyLink{
                  _type
                  pl
                  en
              }

          }
      }  `);

  // Wydobycie zmiennych z state

  const [pgNo, setPgNo] = useState(1);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [modalOpen, setModalOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [isHiddenPg1, setIsHiddenPg1] = useState(false);
  const [isHiddenPg2, setIsHiddenPg2] = useState(true);
  const [width, setWidth] = useState();
  const  state  = useContext(FormContext) || {}; // Obsługa przypadku, w którym FormContext nie jest zdefiniowany



  const { submitDemoRequest, loading, message, error } = useDemoInfo({ values: state.state});

  const openModal = () => {
    setModalOpen(true);
    setFormSent(false);


  };

  const closeModal = () => {
    setModalOpen(false);
    setFormSent(true);


  };

  const resetForm = () => {
    for (let key in state.state) {
      state.state[key] = '';
    }
  };


  const handleDemoRequest = async (event) => {

    event.preventDefault();
    const token = await executeRecaptcha('homepage');

    try {
      await submitDemoRequest(event,token).then(resetForm());
    } catch (error) {
      console.error('Wystąpił błąd podczas wysyłania żądania:', error);
    }

    setFormSent(true);
    setPgNo(1);
    setIsHiddenPg1(false);
    setIsHiddenPg2(true);
  };

  const checkPage1 = () => {

    let companyInput = document.getElementById('company');

    if((companyInput.value !== '') ){

      let pg = pgNo;



      setPgNo(pg + 1);
      setTimeout(() => {
        setIsHiddenPg1(true);
        setIsHiddenPg2(false);


      }, 300);








    } else{
      document.getElementById('required').style.color = 'red';
      document.getElementById('company').style.borderColor = 'red';
      document.getElementById('companyWarning').style.display = 'block';
    }
  }
  const checkPage2 = async (event) => {
    let usernameInput = document.getElementById('requiredInput1');
    let phoneInput = document.getElementById('requiredInput2');
    let emailInput = document.getElementById('requiredInput3');
    let usernameLabel = document.getElementById('requiredLabel1');
    let phoneLabel = document.getElementById('requiredLabel2');
    let emailLabel = document.getElementById('requiredLabel3');
    let usernameWarning = document.getElementById('requiredWarning1');
    let phoneWarning = document.getElementById('requiredWarning2');
    let emailWarning = document.getElementById('requiredWarning3');

    let inputs = [usernameInput, phoneInput, emailInput];
    let labels = [usernameLabel, phoneLabel, emailLabel ]
    let warnings = [usernameWarning, phoneWarning, emailWarning];


    let firstEmptyInputFound = false;
    for (let i = 0; i < inputs.length; i++) {

      warnings[i].style.display = 'none';
      let input = inputs[i];

      if (input.value.trim() === '') {
        if (!firstEmptyInputFound) {
          input.style.borderColor = 'red'; // Zmiana koloru krawędzi pola wejściowego na czerwony
          labels[i].style.color ='red';
          warnings[i].style.display = 'block';

          firstEmptyInputFound = true;


        }
      }
    }

    if (!firstEmptyInputFound) {
      setPgNo(pgNo+1);
      await handleDemoRequest(event);
    }
  }



  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      ReactModal.setAppElement('body');
    }
  }, []);

  useEffect(() => {
    if (width <= 768) {
      customStyles.content.width = '100%';
      customStyles.content.height = '100%';
    }else if (width <= 1600 && width >=768 ) {
      customStyles.content.width = '80%';
      customStyles.content.height = 'auto%';
    }
    else {
      customStyles.content.width = '50%';
      customStyles.content.height = 'auto';
    }
  }, [width]);




  return (

    <>

      {!modalOpen && <ModalButton id="demo" onClick={openModal}>{getTranslation('demoRequest', locale)}</ModalButton>}
      {modalOpen && (
        <ReactModal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          appElement={typeof window !== 'undefined' ? document.getElementById("root") : null}
          style={customStyles}
        >

          <Times className="close" onClick={closeModal}>&times;</Times>
          <ModalStyles>
            {!formSent &&  (   <div>

              <h2 className={`${pgNo === 3 ? 'fadeOut2' : ''}`}>{getLocalData('tytul',data.sanityModalBox, locale)
              }</h2>
              <Container>
                <div>
                  <img className={`demoRequestIcon ${pgNo === 3 ? 'fadeOut3' : ''}`} src={icon} width="284" height="281" alt="" />
                </div>
                <div>
                  <div className="mobileHidden">
                    <p className={pgNo === 3 ? 'fadeOut' : 'text'}>
                      {getLocalData('description1T',data.sanityModalBox, locale)}
                    </p>
                  </div>
                  <div className="mobileContent">
                    <p className={pgNo === 3 ? 'fadeOut' : 'text'}>
                      {getLocalData('description2T',data.sanityModalBox, locale)}
                    </p>

                    <div className={isHiddenPg1 ? 'hidden' : pgNo === 1 ? '' : 'fadeOut'}>
                      <Pg1 locale={locale}  />
                    </div>
                    <div className={isHiddenPg2 ? 'hidden' : pgNo === 2 ? 'fadeIn' : 'fadeOut'}>
                      <Pg2 locale={locale} />
                    </div>
                  </div>

                  <div className={isHiddenPg1 ? 'hidden' : pgNo === 1 ? '' : 'fadeOut'}>
                    <button
                      className="formButton"
                      type="button"
                      onClick={checkPage1}
                    >
                      {getTranslation('next', locale)}
                    </button>

                  </div>
                  <div className={isHiddenPg2 ? 'hidden' : pgNo === 2 ? 'fadeIn' : 'fadeOut'}>
                    <div className="submit " >
                      <p className="text2">{getLocalData('PrivacyPolicyText',data.sanityModalBox, locale)}&nbsp;
                        <a href={getTranslation('href',locale)} target="_blank" rel="noopener noreferrer">
                          {getLocalData('PrivacyPolicyLink',data.sanityModalBox, locale)}</a></p>
                      <button
                        className="submitButton"
                        onClick={checkPage2}>
                        {getLocalData('buttonTextT',data.sanityModalBox, locale)}
                      </button>
                    </div>
                  </div>

                </div>

              </Container>
            </div>)}
            {!error && formSent && message && (<div className="fadeIn" id="contact-modal-success"><h4 className="fadeIn">Potwierdzenie otrzymania zgłoszenia</h4><p className="fadeIn">{message}</p></div>)}
            {error && formSent && message && (<div className="fadeIn"><h4>Wystąpił problem</h4><p>{message}</p></div>)}
          </ModalStyles>
        </ReactModal>
      )}
    </>
  );
};

       
