import styled from 'styled-components';
import icon from '../assets/images/main-sectiom-bg.png';

export const HeroSectionStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  padding: 152px 60px 25px;
  background-image: url(${icon});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    padding: 65px 20px 20px;
    flex-direction: column;
  }
  h1 span {
    display: block;
    width: fit-content;
  }

  .content {
    color: white;
    max-width: 1440px;
    @media (max-width: 1024px) {
      grid-template-columns: minmax(auto, 780px) minmax(35vw, auto);
    }
    @media (max-width: 786px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr auto auto;
      grid-column-gap: 0px;
    }

    h1 {
      grid-area: 1 / 1 / 2 / 2;
      @media (max-width: 768px) {
        grid-area: 1 / 1 / 2 / 2;
      }
    }
    p {
      grid-area: 2 / 1 / 3 / 2;
      @media (max-width: 768px) {
        grid-area: 2 / 1 / 3 / 2;
      }
    }
    button {
      grid-area: 3 / 1 / 4 / 2;
      width: fit-content;
      margin-top: 25px;
      @media (max-width: 768px) {
        grid-area: 4 / 1 / 5 / 2;
        width: 100%;
        margin-top: 45px;
      }
    }
    img {
      grid-area: 1 / 2 / 4 / 3;
      width: 100%;
      @media (max-width: 768px) {
        grid-area: 3 / 1 / 4 / 2;
        opacity: 0.6;
        width: auto;
        height: 132px;
        margin-left: auto;
      }
    }
  }
`;