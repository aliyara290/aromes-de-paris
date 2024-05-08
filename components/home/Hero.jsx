import style from '@/styles/home/hero.module.css';


const HomeHero = () => {
  return (
    <div className={style.content}>
      <div className={style.video}>
        <video
          playsInline={true}
          autoPlay={true}
          muted={true}
          loop={true}
          src="/videos/hero_video.mp4"
        ></video>
      </div>
      <div className={style.bold}>
        <div>Arômes De Paris</div>
      </div>
    </div>
  );
};

export default HomeHero;
