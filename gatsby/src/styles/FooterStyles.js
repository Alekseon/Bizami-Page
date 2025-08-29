import styled from 'styled-components';

export const FooterStyles = styled.div`
  @media (max-width: 768px) {
    .footer-main {
      background-color: var(--blue-dark-1);
      padding: 0 20px 40px 20px;
      color: white;
      .footer-left {
        text-align: center;
        .footer-logo-wrapper {
          display: inline-block;
          position: relative;
          .footer-logo-text {
            font-size: 16px;
            display: block;
            text-align: center;
            color: white;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 67%;
            width: 100%;
          }
        }
        p {
          text-align: left;
          white-space: pre-wrap;
        }
      }
      .footer-right {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        border-top: 1px solid white;
        margin-top: 30px;
        ul {
          list-style-type: none;
          padding-left: 0;
          margin-top: 30px;
          li {
            margin-bottom: 10px;
            button,
            a {
              background: unset;
              color: white;
              font-size: 18px;
              font-weight: 400;
              padding: 0;
              cursor: pointer;
              text-decoration: none;
            }
          }
        }
      }
    }
    .bottom-row {
      padding: 12px;
      text-align: center;
      .copyright {
        font-size: 18px;
        font-weight: 300;
      }
    }
  }
  @media (min-width: 769px) {
    .footer-main {
      background-color: var(--blue-dark-1);
      padding: 10px 45px 120px 45px;
      display: flex;
      color: white;
      .footer-left {
        width: 50%;
        .footer-logo-wrapper {
          display: inline-block;
          position: relative;
          left: -45px;
          .footer-logo-text {
            font-size: 18px;
            display: block;
            text-align: center;
            color: white;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 67%;
            width: 100%;
          }
        }
        p {
          white-space: pre-wrap;
        }
      }
      .footer-right {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        ul {
          list-style-type: none;
          padding-left: 150px;
          li {
            margin-bottom: 10px;
            button,
            a {
              background: unset;
              color: white;
              font-size: 18px;
              font-weight: 400;
              padding: 0;
              cursor: pointer;
              text-decoration: none;
            }
          }
        }
      }
    }
    .bottom-row {
      padding: 12px;
      text-align: center;
      .copyright {
        font-size: 18px;
        font-weight: 300;
      }
    }
  }
`;