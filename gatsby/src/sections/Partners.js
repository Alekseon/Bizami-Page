import React from 'react';
import styled from 'styled-components';
const PartnersStyled = styled.section`
  @media (max-width: 768px) {
    padding: 120px 20px 50px 20px;
    text-align: center;
    position: relative;
    .partners-top-decor {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      img {
        width: 100%;
      }
    }
    p {
      font-size: 20px;
      font-weight: 600;
      margin-top: 0;
      margin-bottom: 25px;
    }
    .logo-image {
      max-width: 100%;
      margin-bottom: 25px;
      display: block;
      img {
        max-width: 100%;
      }
    }
  }
  @media (min-width: 769px) {
    padding: 100px 60px 150px 60px;
    text-align: center;
    position: relative;
    .partners-top-decor {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      img {
        width: 100%;
      }
    }
    p {
      font-size: 24px;
      font-weight: 600;
      margin-top: 0;
      margin-bottom: 50px;
    }
    .logo-image {
      max-width: 100%;
      margin-bottom: 50px;
      display: block;
      img {
        max-width: 100%;
      }
    }
  }
`;

export default function Partners({ data }) {
  return (
    <PartnersStyled>
      {data.partners &&
        data.partners.map((partner, index) => (
          <div key={`partner-${index}`}>
            <span>{partner.descriptionT.split(/\r|\n/).map((item, index) => {
              return <p key={`line-${index}`}>{item}</p>;
            })}</span>
            <picture className="logo-image">
              <img src={partner.image.asset.url} alt="partner-logo" />
            </picture>
          </div>
        ))}
    </PartnersStyled>
  );
}
