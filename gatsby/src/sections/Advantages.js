import React from 'react';
import styled from 'styled-components';
import listDot from '../assets/images/list_dot.svg';
import sygnetRight from '../assets/images/sygnet_color_right.svg';

const AdvantagesStyled = styled.section`

  @media (max-width: 768px) {
    position: relative;
    .advantages-top-decor {
      width: 100%;
      height: auto;
      object-fit: cover;

      img {
        width: 100%;
      }
    }
    .content {
      padding: 0px 20px;
    }
    .advantages-list {
      list-style-type: none;
      margin-bottom: 100px;
      padding-left: 0px;
      margin-top: 0;
      ul {
        list-style-type: none;
        padding-left: 0;
      }
      li {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        margin-bottom: 30px;
        img {
          height: fit-content;
          object-fit: contain;
        }
        .title-marked {
          display: inline-block;
          margin-right: 7px;
          &::before {
            top: 15px;
            left: 10px;
          }
        }
        p {
          margin-top: 0;
          margin-bottom: 0px;
          font-size: 20px;
        }
      }
    }
  }
  @media (min-width: 769px) {
    position: relative;
    .advantages-top-decor {
      width: 100%;
      height: auto;
      object-fit: cover;
      img {
        width: 100%;
      }
    }
    .content {
      padding: 0 60px 50px;
    }
    .advantages-list{
      position: relative;
      &:before {
        content: '';
        background-image: url(${sygnetRight});
        background-repeat: no-repeat;
        background-position: right center;
        background-size: contain;
        position: absolute;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0.3;
      }
    }
    .advantages-list {
      margin-top: 0;
      list-style-type: none;
      margin-bottom: 100px;
      ul {
        list-style-type: none;
        padding-left: 0;
      }
      li {
        position: relative;
        display: flex;
        gap: 20px;
        align-items: center;
        margin-bottom: 30px;
        img {
          height: fit-content;
          object-fit: contain;
        }
        .title-marked {
          display: inline-block;
          margin-right: 7px;
          &::before {
            left: 10px;
          }
        }
        p {
          margin-top: 0;
          margin-bottom: 0px;
          font-size: 24px;
        }
      }
    }
  }
`;

export default function Advantages({ data }) {
  return (

    <AdvantagesStyled id="advantages">

      <div className="content">
        {data.list &&
          data.list.map((list, index) => (
            <div key={`advantage-${index}`}>
              <h2 className="title-marked">{list.titleT}</h2>
              <ul className={`advantages-list advantages-list-${index}`}>
                {list.list &&
                  list.list.map((item, index) => (
                    <li key={`advantage-item-${index}`}>
                      {item.imageIcon ? (
                        <img src={item.imageIcon?.asset.url} alt="" width="80" height="80"/>
                      ) : (<img src={listDot} alt="" width="80" height="80"/>)}
                      <p>
                        <span className="title-marked accent">
                            {item.listItemTitleT}
                          </span>{' '}
                        {item.listItemDescT}
                      </p>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
      </div>
    </AdvantagesStyled>
  );
}
