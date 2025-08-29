import styled from 'styled-components';
import sygnetLeft from '../assets/images/sygnet_color_left.svg';
import sygnetRight from '../assets/images/sygnet_color_right.svg';

export const BenefitsStyles = styled.div`
  width: 100%;
  .content {
    margin: 0 auto;
    max-width: 1440px;
    padding: 50px 60px 150px;
    @media (max-width: 768px) {
      padding: 30px 20px 75px;
    }

    h2 {
      color: white;
      background: var(--blue-dark-1);
      padding: 25px 10px;
      margin: 25px 0;
      width: fit-content;
      position: relative;
      @media (max-width: 768px) {
        text-align: center;
      }
      span {s
        position: relative;
        margin: 0 25px;
        display: block;
        z-index: 2;
      }
    }
  }

  ul {
    width: fit-content;
    list-style: none;
    margin: 75px 0px 25px;
    gap: 25px;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 768px) {
      margin: 45px 0px 25px;
      padding-top: 25px;
    }

    li {
      width: calc(50% - 25px);
      padding: 25px;
      text-align: center;
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #c8c8c8;
      background-color: FBFBFB;
      border-radius: 10px;
      @media (max-width: 1280px) {
        width: 100%;
      }
      @media (max-width: 768px) {
        width: 100%;
        padding: 0 0 15px;
       flex-direction: column-reverse;
      }
      
      img {
        object-fit: contain;
      }

      h3 {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        &::before,
        &::after {
          content: '';
          display: block;
          width: 39px;
          height: 64px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }

        &::before {
          background-image: url(${sygnetLeft});
          margin-right: 20px;
        }
        &::after {
          background-image: url(${sygnetRight});
          margin-left: 20px;
        }
      }
    }
  }
`;
