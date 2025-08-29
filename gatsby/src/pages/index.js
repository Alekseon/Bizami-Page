import React from 'react';
import Contact from '../sections/Contact';
import Hero from '../sections/Hero';
import AboutBizami from '../sections/AboutBizami';
import Team from '../sections/Team';
import Benefits from '../sections/Benefits';
import Azymut from '../sections/Azymut';
import Partners from '../sections/Partners';
import Advantages from '../sections/Advantages';
import Offer from '../sections/Offer';
import Footer from '../components/Footer';

import localize from '../components/localize';
import { graphql } from 'gatsby';


function HomePage({ data, pathContext }) {


  
  return (
    <>
      
      
      <Hero  data={data.sanityHero} />

     
      <AboutBizami data={data.sanityAboutBizami} dataVideo={data.sanityVideo} />
      <Benefits  data={data.sanityBenefits} />
      <Offer  data={data.sanityOffers} />
      <Advantages  data={data.sanityAdvantages} />
      <Partners data={data.sanityPartners} />
      <Azymut  data={data.sanityAzymut} />
      <Team locale={pathContext.locale} data={data.sanityTeam} />
      <Contact locale={pathContext.locale}  data={data.sanityContact} />
      <Footer locale={pathContext.locale}  data={data.sanityFooter} />
     
    </>
  );
}


export default localize(HomePage);



export const query = graphql`

  query data {
    
      sanityModalBox {
      tytul {
        _type
        pl
        en
      }
    }

    sanityHero {
      titleT {
        _type
        pl
        en
      }
      subtitleT{
        _type
        pl
        en
      }
      descriptionT {
        _type
        pl
        en
      }
      buttonTextT {
        _type
        pl
        en
      }
    }
    sanityAboutBizami {
      
      titleT {
        _type
        pl
        en
      }
      subtitleT{
        _type
        pl
        en
      }
      descriptionT {
        _type
        pl
        en
      }
      
    }
    sanityBenefits {
      titleT{
        _type
        pl
        en
      }
      benefits {
        descriptionT{
        _type
        pl
        en
      }
        brackets
          imageIcon {
              asset {
                  url
              }
          }
      }
    }
    sanityOffers {
      titleT{
        _type
        pl
        en
      }
      offers {
        icon
        titleT{
        _type
        pl
        en
      }
        descriptionT{
        _type
        pl
        en
      }
      }
    }
    sanityAdvantages {
      list {
        titleT{
        _type
        pl
        en
      }
        list {
          listItemDescT{
        _type
        pl
        en
      }
          listItemTitleT{
        _type
        pl
        en
      }
      imageIcon {
          asset {
            url
          }
      }
        }
      }
    }
    sanityPartners {
      partners {
        descriptionT{
        _type
        pl
        en
      }
        image {
          asset {
            url
          }
        }
      }
    }
    sanityAzymut {
      titleT{
        _type
        pl
        en
      }
      descriptionT{
        _type
        pl
        en
      }
    }
    sanityContact {
      subtitleT{
        _type
        pl
        en
      }
      titleT{
        _type
        pl
        en
      }
      descriptionT{
        _type
        pl
        en
      }
      addressT{
        _type
        pl
        en
      }
      googlemaps
      email{
        _type
        pl
        en
      }
      phone2{
        _type
        pl
        en
      }
      phone1{
        _type
        pl
        en
      }
    }
    sanityTeam {
      teamMembers {
        imageDesk {
          asset {
            url
          }
        }
        imageMob {
          asset {
            url
          }
        }
        name
        positionT{
        _type
        pl
        en
      }
      }
    }
    sanityFooter {
      descriptionT{
        _type
        pl
        en
      }
    }
    sanityVideo{
      title{
        _type
        pl
        en
      }
      videoTitle{
        _type
        pl
        en
      }
      description
      {
        _type
        pl
        en
      }
      imageVideo{
          asset {
            url
          }
      }
      videoSrcURL
    }
   
  }
`;
