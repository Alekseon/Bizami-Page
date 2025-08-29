import styled from 'styled-components';

export const SectionAboutStyles = styled.div`
  padding: 100px 60px;
  width: 100%;
  position: relative;
  @media (max-width: 768px) {
    padding: 45px 20px;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 1440px;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
    &-text {
    padding-left: 120px;
      @media (min-width: 769px) {
        max-width: 580px;
        margin-right: 25px;
        padding-left: 0px;
      }
       @media (max-width: 460px) {
         padding-left: 0px;
       }
      h2 {
        width: fit-content;
        @media (min-width: 769px) {
          margin-top: 0;
        }
      }
      p {
        white-space: pre-wrap;
      }
      span {
        &.h5 {
          display: block;
          font-weight: 400;
        }
        &.title-marked {
          @media (max-width: 768px) {
            margin-top: 15px;
          }
          &::before {
            opacity: 0.6;
            left: 10px;
          }
        }
      }
    }
  }
  img {
    &.sygnet {
      width: min(10vw, 159px);
      @media (max-width: 1024px) {
        align-self: flex-start;
        height: auto;
      }
      @media (max-width: 768px) {
        position: absolute;
        top: 0;
        left: 20px;
        width: 120px;
      }
      @media (max-width: 460px) {
       display: none;
      }
    }
    &.icon {
      margin-left: auto;
      width: min(35vw, 390px);
      height: auto;
      @media (max-width: 768px) {
        margin-right: auto;
        width: min(75vw, 320px);
      }
    }
  }
`;