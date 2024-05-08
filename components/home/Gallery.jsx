import style from "@/styles/home/gallery.module.css";
import Image from "next/image";
import Heading from "@/components/Heading";

const Gallery = () => {
  return (
    <div className={style.content}>
      <div className={style.inner}>
        <div className={style.container}>
          <Heading
            subHeading={"- Restaurant De Luxe -"}
            topHeading={"Photo"}
            botHeading={"Gallery"}
            centerHeading={true}
            showSubHeading={true}
          />
          <div className={style.gallery}>
            <div className={style.row}>
              <div className={style.pic}>
                <Image
                  src={"/images/home/002.jpg"}
                  alt="pic"
                  width={700}
                  height={700}
                />
              </div>
              <div className={style.pic}>
                <Image
                  src={"/images/home/003.jpg"}
                  alt="pic"
                  width={700}
                  height={700}
                />
              </div>
              <div className={style.pic}>
                <Image
                  src={"/images/home/006.jpg"}
                  alt="pic"
                  width={700}
                  height={700}
                />
              </div>
            </div>
            <div className={style.row}>
              <div className={style.video}>
                <video
                  src="/videos/home_gallery.mp4"
                  muted={true}
                  loop={true}
                  autoPlay={true}
                ></video>
              </div>
              <div className={style.column}>
                <div className={style.pic}>
                  <Image
                    src={"/images/home/005.jpg"}
                    alt="pic"
                    width={700}
                    height={700}
                  />
                </div>
                <div className={style.pic}>
                  <Image
                    src={"/images/home/001.jpg"}
                    alt="pic"
                    width={700}
                    height={700}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
