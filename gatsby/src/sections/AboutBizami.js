import React from 'react';
import sygnet from '../assets/images/sygnet_color_left.svg';
import icon from '../assets/images/incography1.png';
import { SectionAboutStyles } from '../styles/SectionAboutBizamiStyles';
import VideoTemplate from '../components/videotemplate';

export default function AboutBizami({ data, dataVideo}) {

  return (

    <section id="readMoreAbout">






      <SectionAboutStyles>

        <div className="content">

          <img
            className="sygnet"
            src={sygnet}
            width="159"
            height="354"
            alt=""
          />
          <div className="content-text">
            <span className="h5">{data.subtitleT}</span>
            <h2>
              <span className="title-marked accent">{data.titleT}</span>
            </h2>
            <p>
              <span role="img" aria-label="Icon globe">
                🌐
              </span>{' '}
              {data.descriptionT.split(/\r|\n/).map((item, index) => {
                return <p key={`line-${index}`}>{item}</p>;
              })}
            </p>

          </div>

          <img className="icon" src={icon} width="500" height="390" alt="" />
        </div>

      </SectionAboutStyles>
      <VideoTemplate
        // videoSrcURL="https://youtube.com/embed/ZUSHEEhWfvs"
        dataVideo={dataVideo}
        videoTitle="p"
        title={dataVideo.title}
        // videoImg="https://img.youtube.com/vi/ZUSHEEhWfvs/mqdefault.jpg"
        videoDescription={dataVideo.description}
        videoImg={dataVideo.imageVideo.asset.URl}
        videoSrcURL={dataVideo.videoSrcURL}


      />

    </section>
  );
}

