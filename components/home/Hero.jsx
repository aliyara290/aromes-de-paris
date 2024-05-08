import styled from "styled-components";

const StyledHomeHero = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--dark-green);
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #000,#00000040) ;
  }
`;

const StyledHeroVideo = styled.div`
    width: 100%;
    height: 100%;
    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const HomeHero = () => {
  return (
    <StyledHomeHero>
      <StyledHeroVideo>
        <video
          playsInline={true}
          autoPlay={true}
          muted={true}
          loop={true}
          src="/videos/hero_video.mp4"
        ></video>
      </StyledHeroVideo>
    </StyledHomeHero>
  );
};

export default HomeHero;
