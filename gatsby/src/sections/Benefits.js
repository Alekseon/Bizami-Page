import React from 'react';
import { BenefitsStyles } from '../styles/BenefitsStyles';

export default function Benefits({ data }) {
  return (
    <section id="benefits">
      <BenefitsStyles>
        <div className="content">
          <h2>
            <span>{data.titleT}</span>
          </h2>
          {data.benefits && (
            <ul>
              {data.benefits.map((benefit, index) => (
                <li key={`benefit-${index}`}>
                  <div>
                    <h3>{benefit.brackets}</h3>
                    <h4>{benefit.descriptionT.split(/\r|\n/).map((item, index) => {
                      return <span key={`line-${index}`}>{item}</span>;
                    })}</h4>
                  </div>
                  {benefit.imageIcon && (
                    <img src={benefit.imageIcon.asset.url} alt="" width={250} height={250} />
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </BenefitsStyles>
    </section>
  );
}
