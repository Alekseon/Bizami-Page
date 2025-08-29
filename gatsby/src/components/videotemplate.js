import React, { useState } from 'react';
import styled from 'styled-components';
import playIcon from '../assets/images/play-button5-svgrepo-com.svg';
import playIconHover from '../assets/images/play-button6-svgrepo-com.svg';
//   export const MediaStyles = styled.div`
//   padding: 0px 60px 100px;
//   width: 100%;
//   position: relative;
//   @media (max-width: 768px) {
//     padding: 45px 20px;
//   }
//   .content {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 0 auto;
//     max-width: 1320px;
//     @media (max-width: 768px) {
//       flex-direction: column;
//       align-items: flex-start;
//     }
//     &-text {
//       @media (min-width: 769px) {
//         max-width: 580px;
//         margin-right: 25px;
//       }
//       h2 {
//         width: fit-content;
//         @media (min-width: 769px) {
//           margin-top: 0;
//         }
//       }
//       p {
//         white-space: pre-wrap;
//       }
//       span {
//         &.h5 {
//           display: block;
//           font-weight: 400;
//           @media (max-width: 768px) {
//             position: absolute;
//             top: 0;
//             left: 64px;
//             right: 20px;
//             min-height: 80px;
//             display: flex;
//             align-items: center;
//           }
//         }
//         &.title-marked {
//           @media (max-width: 768px) {
//             margin-top: 15px;
//           }
//           &::before {
//             opacity: 0.6;
//             left: 10px;
//           }
//         }
//       }
//     }
//   }
//   img {
//     &.sygnet {
//       width: min(10vw, 159px);
//       @media (max-width: 1024px) {
//         align-self: flex-start;
//         height: auto;
//       }
//       @media (max-width: 768px) {
//         position: absolute;
//         top: 0;
//         left: 20px;
//         width: 36px;
//       }
//     }
//     &.icon {
//       margin-left: auto;
//       width: min(35vw, 390px);
//       @media (max-width: 768px) {
//         margin-right: auto;
//         height: auto;
//         width: min(75vw, 320px);
//       }
//     }
//   }
// `;b

const VideoStyled = styled.div`
  
  padding: 30px 0px 100px;
  .hidden{
    display: none;
    
  }
  

  .classic {
    display: flex; /* Ustawienie kontenera jako siatki */
  
  gap: 10px;
  
  
 
  }

  .videoTitle{
    
    font-weigth: bold;
    font-size: 35px;
    margin-bottom: 5px;
    margin-top: 5px;
    
    font-weight: bolder;
     

  }
  .title{
    color:  var(--blue-dark-1); 
    font-weight: bolder;
    font-height: 40px
    
    
  }

  .videoDescription{
    

    
  }

  .videoDiv{
    display flex;
    flex-wrap: wrap;
    margin-top: 10px;
    width: 390px;
    height: 200px;

  }


  p{
   overflow-wrap: break-word;
   
  }
  
  .description{
    justify-content: center;
    display: grid;
    max-width: 1400px;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    padding: 0 60px 0 160px;
    grid-gap: 150px;
    text-wrap: wrap;
    
    @media (max-width: 1024px) {
      grid-template-columns: 1fr 1fr ;
      grid-gap: 10px;
      justify-content: center;
      padding: 0 60px 0 10vw;
      
    }
    @media (max-width: 786px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr auto auto;
      grid-column-gap: 0px;
      margin-left: 30px;
      margin-right:30px;
      padding: 0;
      width: fit-content;
    }
  
  

  }

  .playButton {
    flex-wrap: wrap;
    position: absolute;
    top: 25%;
    left: 37%;
    translate: 0px 0px;
    padding: 0px;
  }
  
  .imageContainer {
    margin: auto;
  }
  
  .imgSection {
    width: 100%;
    height: auto;
    max-width: 500px;
  }
  
  `
const VideoTemplate = ({ dataVideo }) => {
  const [isModalOpen, setModalOpen] = useState(false);




  const [icon, setIcon] = useState(playIcon);
  const handleMouseOver = () => {
    setIcon(playIconHover);

  };

  const handleMouseOut = () => {
    setIcon(playIcon);

  };
  const handleThumbnailClick = () => {
    setModalOpen(true);
  };

  const closeModal = (e) => {
    if (e.target.id === 'modal') {
      setModalOpen(false);
    }
  };

  const styles = {
    thumbnail: {
      cursor: 'pointer',
      padding: '2px',
      backgroundColor: 'rgba(0, 0, 0, 1)',


      position: 'relative',
      top: '0',
      left: '0',
      maxWidth: '390px',
      maxHeight: '200px',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: 1000,
    },
    modalContent: {
      position: 'relative',

      padding: '0px',
      borderRadius: '0px',
      maxWidth: '100%',
      maxHeight: '100%',
      overflow: 'auto',
    },
  };

  return (
    <VideoStyled >
      <div className="description">
        <div>
          <p className='title'> {dataVideo.title} </p>
          <p className='videoTitle'> {dataVideo.videoTitle}</p>
          <p className='videoDescription'> {dataVideo.description}</p>
        </div>

        {dataVideo.videoSrcURL ?
          <div className='videoDiv'>
            <button style={styles.thumbnail} onClick={handleThumbnailClick}>
              <img className='playButton' alt="" width={100} height={100} src={icon} onMouseOver={handleMouseOver}
                   onMouseOut={handleMouseOut}
              />
              <img className='imgButton' alt="" width={380} height={190}  src={dataVideo.imageVideo.asset.url} onMouseOver={handleMouseOver}
                   onMouseOut={handleMouseOut} alt={dataVideo.VideoTitle} />
            </button>
          </div>
          : <div className="imageContainer">
            <img className='imgSection' alt="" width={500} height={324}  src={dataVideo.imageVideo.asset.url} />
          </div>}

        {isModalOpen && (
          <div id="modal" style={styles.modal} onClick={closeModal}>
            <div style={styles.modalContent}>
              <iframe
                width="900"
                height="615"
                src={dataVideo.videoSrcURL}
                title={dataVideo.videoTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        )}
      </div>
    </VideoStyled>
  );
};



export default VideoTemplate;
// sanityVideo{
//   title{
//     _type
//     pl
//     en
//   }
//   videoTitle{
//     _type
//     pl
//     en
//   }
//   description
//   {
//     _type
//     pl
//     en
//   }
//   imageVideo
//   videoSrcURL
// }