import React from 'react';
import styled from 'styled-components';
import mission from '../assets/images/offer_1.svg';
import forWho from '../assets/images/offer_2.svg';

const OfferStyled = styled.section`
  @media (max-width: 768px) {
    padding: 95px 20px 10px 20px;
    background-color: var(--blue-dark-1);
    z-index: -2;
    h2 {
    background: white;
      position: relative;
      display: inline-block;
      padding: 12px 25px;
      margin-top: 0;
      margin-bottom: 60px;
      z-index: 1;
    }
    .content {
      .box {
        border: 3px solid white;
        border-radius: 5px;
        margin-bottom: 40px;
        padding: 10px 20px 40px 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .icon {
          margin-bottom: 10px;
        }
        h3 {
          margin-top: 0;
          color: white;
          font-size: 26px;
        }
        p {
          color: white;
          margin: 0;
          line-height: 28px;
        }
      }
    }
  }
  @media (min-width: 769px) {
    padding: 80px 60px 80px 60px;
    background-color: var(--blue-dark-1);
    z-index: -2;
    h2 {
      background-color: white;
      position: relative;
      display: inline-block;
      padding: 12px 25px;
      margin-top: 0;
      margin-bottom: 60px;
      z-index: 1;
    }
    .content {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 100px;
      .box {
        border: 3px solid white;
        border-radius: 5px;
        padding: 10px 20px 40px 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .icon {
          margin-bottom: 10px;
        }
        h3 {
          margin-top: 0;
          color: white;
          font-size: 32px;
        }
        p {
          color: white;
          margin: 0;
          line-height: 28px;
        }
      }
    }
  }
`;

export default function Offer({ data }) {
  return (
    <OfferStyled id="offer">
      <h2>{data.titleT}</h2>
      <div className="content">
        {data.offers &&
          data.offers.map((offer, index) => (
            <div className="box" key={`offer-${index}`}>
              <picture className="icon">
                <img
                  src={offer.icon === 'arrow' ? mission : forWho}
                  alt="mission icon"
                />
              </picture>
              <h3 className="title-marked accent">{offer.titleT}</h3>
              <span>{offer.descriptionT.split(/\r|\n/).map((item, index) => {
                return <p key={`line-${index}`}>{item}</p>;
              })}</span>
            </div>
          ))}
      </div>
    </OfferStyled>
  );
}
