import style from "@/styles/menu/hero.module.css";

const Hero = () => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.text}>
          <div>Explorez l'âme de Paris à Rabat. Chez</div>
          <div>Gourmet Grove, plongez dans une</div>
          <div>expérience culinaire incomparable,</div>
          <div>imprégnée de saveurs authentiques et </div>
          <div>d'une ambiance parisienne raffinée.</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
