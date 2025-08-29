import React from 'react';
import { HeroSectionStyles } from '../styles/SectionHeroStyles';
import scrollToId from '../utils/scrollToId';
function scrollToNextSection() {
  const headeHeight = document.querySelector('header').offsetHeight * -1;
  scrollToId('readMoreAbout', headeHeight);
}

export default function Hero({ data }) {
  return (
    <section id="hero">
      <HeroSectionStyles>

        <div className="content">
          <h1>
            <span className="h3">{data.subtitleT}</span>
            <span className="title-marked">{data.titleT}</span>

          </h1>
          <span className="h4">{data.descriptionT.split(/\r|\n/).map((item, index) => {
            return <p key={`line-${index}`}>{item}</p>;
          })}</span>

          <button
            type="button"
            className="button primary"
            onClick={() => scrollToNextSection()}
          >
            {data.buttonTextT}
          </button>

        </div>

      </HeroSectionStyles>

    </section>
  );
}
