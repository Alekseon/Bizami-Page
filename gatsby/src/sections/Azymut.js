import React from 'react';
import styled from 'styled-components';
import background from '../assets/images/about-us-bg.png';

const AzymutStyled = styled.section`
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  @media (max-width: 768px) {
    padding: 70px 20px 120px 20px;
    .content {
      p {
        font-size: 20px;
        font-weight: 600;
      }
    }
    .image-cont {
      display: flex;
      justify-content: flex-end;
      picture {
        width: 150px;
        height: auto;
        img {
          width: 150px;
          height: auto;
        }
      }
    }
  }
  @media (min-width: 769px) {
    padding: 120px 120px 250px 120px;
    .content {
      display: flex;
      flex-direction: column;
      justufy-content: center;
      align-items: flex-start;
      p {
        font-size: 24px;
        font-weight: 600;
      }
    }
    .image-cont {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default function Azymut({ data }) {
  return (
    <AzymutStyled id="about">
      <div className="content">
        <h2 className="title-marked accent">{data.titleT}</h2>
        <span>{data.descriptionT.split(/\r|\n/).map((item, index) => {
          return <p key={`line-${index}`}>{item}</p>;
        })}</span>
      </div>
    </AzymutStyled>
  );
}
