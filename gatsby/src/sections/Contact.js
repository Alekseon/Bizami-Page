import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import locationIcon from '../assets/images/Pin_Icon.svg';
import mailIcon from '../assets/images/Mail_Icon.svg';
import phoneIcon from '../assets/images/Phone_Icon.svg';

const ContactStyled = styled.section`
  padding-top: 80px;
  @media (max-width: 768px) {
    position: relative;
    .contact-top-decor {
      display: block;
      width: 100%;
      height: auto;
      min-height: 200px;
      object-fit: cover;
    }
    .container {
      padding: 0 20px 20px 20px;
    }
    .title-marked {
      margin-top: -5px;
      margin-bottom: 15px;
    }
    .content {
      .text-cont {
        margin-bottom: 35px;
      }
      .contact-data {
        list-style-type: none;
        margin-bottom: 70px;
        li {
          position: relative;
          &::before {
            content: '';
            position: absolute;
            left: -35px;
            top: 0;
            width: 24px;
            height: 24px;
          }
          &.location {
            &::before {
              content: url(${locationIcon});
            }
          }
          &.mail {
            &::before {
              content: url(${mailIcon});
            }
          }
          &.phone {
            &::before {
              content: url(${phoneIcon});
            }
          }
          a {
            color: black;
          }
        }
      }
      iframe {
        border: 0;
        width: 100%;
        height: 235px;
      }
    }
  }
  @media (min-width: 769px) {
    position: relative;
    .contact-top-decor {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    .container {
      padding: 0 60px 150px 60px;
    }
    .title-marked {
      margin-top: -5px;
    }
    .content {
      display: grid;
      grid-template-columns: 1fr 55%;
      gap: 40px;
      .text-cont {
        margin-bottom: 55px;
      }
      .contact-data {
        list-style-type: none;
        li {
          position: relative;
          &::before {
            content: '';
            position: absolute;
            left: -35px;
            top: 0;
            width: 24px;
            height: 24px;
          }
          &.location {
            &::before {
              content: url(${locationIcon});
            }
          }
          &.mail {
            &::before {
              content: url(${mailIcon});
            }
          }
          &.phone {
            &::before {
              content: url(${phoneIcon});
            }
          }
          a {
            color: black;
          }
        }
      }
      iframe {
        border: 0;
        width: 100%;
      }
    }
  }
`;

function pushDataLayer(id) {
  window.dataLayer?.push({
    event: id
  });
}

export default function Contact({ data }) {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          pushDataLayer('contact-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (

    <ContactStyled id="contact" ref={contactRef}>
      <div className="container">
        <h3 className="subtitle">{data.subtitleT}</h3>
        <h2 className="title-marked">{data.titleT}</h2>
        <div className="content">
          <div>
            <div className="text-cont">
              <span>{data.descriptionT.split(/\r|\n/).map((item, index) => {
                return <p key={`line-${index}`}>{item}</p>;
              })}</span>

            </div>
            <ul className="contact-data">
              <li className="location">
                {data.addressT.split(/\r|\n/).map((item, index) => {
                  return <p key={`line-${index}`}>{item}</p>;
                })}
              </li>
              <li className="mail">
                <p>
                  <a href={`mailto:${data.email}`} onClick={() => pushDataLayer('click-email')}>{data.email}</a>
                </p>
              </li>
              <li className="phone">
                <p>
                  <a href={`tel:${data.phone2}`} onClick={() => pushDataLayer('bottom-click-phone')}>{data.phone2}</a>
                </p>
              </li>
            </ul>
          </div>
          <div>
            <iframe
              title="map"
              src={`${data.googlemaps}`}
              width="600"
              height="500"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </ContactStyled>
  );
}
