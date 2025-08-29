import styled from 'styled-components';

export const HeaderTag = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--white);
  box-shadow: 0px 2px 4px 0px rgba(104, 129, 164, 0.2);
  z-index: 99;
`;

export const HeaderTopInfo = styled.div`
  background: var(--blue-main);
  @media (max-width: 768px) {
    display: none;
  }

  .contact {
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: 15px 45px;

    a {
      color: var(--white);
      text-decoration: none;
      font-size: 18px;
    }
  }
`;

export const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 25px 45px;
  @media (max-width: 768px) {
    padding: 0;
  }

  .logo {
    
    display: inline-flex;
    cursor: pointer;
    img {
      @media (max-width: 1024px) {
        width: fit-content;
        max-height: 25px;
        transform: translateX(-20%);
      }
      @media (max-width: 768px) {
        max-height: 20px;
        transform: translate(20%, 12%);
      }
    }
  }
`;

export const NavStyles = styled.nav`
  @media (max-width: 768px) {
    display: flex;
  }
  ul {
    width: fit-content;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 4vw;
    
    align-items: center; /* Wycentrowanie tekstu wzdłuż osi pionowej */

    @media (max-width: 768px) {
      display: none;
    }

    li {
      
      flex: 1 1 auto;
      position: relative;
      padding-bottom: 2px;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 100%;
        height: 2px;
        background: var(--blue-main);
        transition: all 0.5s ease;
      }

      &:not(.button-link):hover {
        &::after {
          right: 0;
        }
      }

      button {
        padding: 0;
        color: var(--black);
        text-decoration: none;
        font-size: 18px;

        @media (max-width: 768px) {
          font-size: 16px;
          font-weight: 600;
        }
      }
    }
  }
  .hamburger {
    background: var(--white);
    position: relative;
    padding: 0;
    margin: 20px;
    height: 24px;
    width: 32px;
    @media (min-width: 769px) {
      display: none;
    }
    span {
      display: block;
      position: absolute;
      left: 0;
      height: 4px;
      width: 100%;
      background: var(--black);
      border-radius: 2px;
      transition: all 0.3s ease-in-out;
      &:nth-child(1) {
        top: 0px;
      }
      &:nth-child(2),
      &:nth-child(3) {
        top: 10px;
      }
      &:nth-child(4) {
        top: 20px;
      }
    }

    &.open {
      span {
        &:nth-child(1) {
          top: 10px;
          width: 0%;
          left: 50%;
        }
        &:nth-child(2) {
          transform: rotate(45deg);
        }
        &:nth-child(3) {
          transform: rotate(-45deg);
        }
        &:nth-child(4) {
          top: 20px;
          width: 0%;
          left: 50%;
        }
      }
    }
  }
`;

export const MobileMenuStyles = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 65px;
    bottom: 0;
    left: 100%;
    width: 100%;
    background: var(--white);
    transition: all 0.5s ease;
    z-index: 99;

    &.open {
      left: 0%;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 25px;
      padding: 50px 20px;
      height: 90%;

      li {
        
        width: fit-content;
        button {
          padding: 0;
          color: var(--black);
          text-decoration: none;
          font-size: 16px;
          font-weight: 400;
        }
      
      }
    }
    .contact {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: var(--blue-main);
      color: var(--white);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 25px;
      gap: 15px;

      span {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      a {
        color: var(--white);
        text-decoration: none;
      }
    }
    
  }
  .demoButton {
        
    bottom: 0;
    left: 0; /* lub right: 0, jeśli chcesz umieścić kontener na prawym skraju */
    width: 100%;
    display: flex; /* Ustawienie kontenera flex */
    justify-content: center; /* Wycentrowanie elementów wzdłuż osi poziomej */
    align-items: flex;
    margin-top: auto;
 
 
    
  

      }
  
`;