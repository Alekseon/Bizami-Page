import React from 'react';
import styled from 'styled-components';

const TeamStyled = styled.section`
  @media (max-width: 768px) {
    background-color: var(--blue-main);
    padding: 40px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      color: white;
      text-align: center;
      margin-top: 0;
      font-size: 32px;
      margin-bottom: 40px;
    }
    .boxes-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 70px;
    }
    .box {
      width: 100%;
      .team-image {
        display: block;
        width: 100%;
        img {
          display: block;
          width: 100%;
        }
      }
      .content {
        background-color: white;
        padding: 25px 25px 40px 25px;
        h3 {
          color: var(--blue-dark-1);
          font-size: 26px;
          margin-top: 0;
          margin-bottom: 15px;
        }
        h4 {
          margin: 0;
          font-size: 20px;
        }
      }
    }
  }
  @media (min-width: 769px) {
    background-color: var(--blue-main);
    padding: 20px 85px 120px 85px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      color: white;
      text-align: center;
      margin-top: 0;
      font-size: 48px;
    }
    .boxes-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 70px;
    }
    .box {
      max-width: 1220px;
      .team-image {
        display: block;
        max-width: 100%;
        img {
          display: block;
          max-width: 100%;
          height: auto;
          object-fit: cover;
        }
      }
      .content {
        background-color: white;
        padding: 45px 45px 110px 45px;
        h3 {
          color: var(--blue-dark-1);
          font-size: 32px;
          margin-top: 0;
          margin-bottom: 15px;
        }
        h4 {
          margin: 0;
          font-size: 24px;
        }
      }
    }
  }
`;

const translations = {
  en: {
    OurTeam: 'Our Team',

  },
  pl: {
    OurTeam: 'Nasz zespół',

  },
};





export default function Contact({ data, locale }) {

  function getTranslation(key) {
    return translations[locale] && translations[locale][key] ? translations[locale][key] : translations['pl'][key];
  };

  return (
    <TeamStyled id="team" style={{display: 'none'}}>
      <h2>{getTranslation('OurTeam')}</h2>
      <div className="boxes-container">
        {data.teamMembers &&
          data.teamMembers.map((member, index) => (
            <div className="box" key={index}>
              <picture className="team-image">
                <source
                  media="(max-width: 768px)"
                  srcSet={member.imageMob.asset.url}
                />
                <source
                  media="(min-width: 769px)"
                  srcSet={member.imageDesk.asset.url}
                />
                <img src={member.imageDesk.asset.url} alt="team" />
              </picture>
              <div className="content">
                <h3>{member.name}</h3>
                <h4>{member.positionT}</h4>
              </div>
            </div>
          ))}
      </div>
    </TeamStyled>
  );
}
