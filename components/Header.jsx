"use client";
import { useEffect } from "react";
import Link from "next/link";
import style from "@/styles/header.module.css";

const Header = () => {
  useEffect(() => {
    const pagesLinks = document.querySelectorAll(".link");
    pagesLinks.forEach((link) => {
      link.setAttribute("data-text", link.textContent);
    });
  }, []);

  const handleClick = () => {
    const navigation = document.querySelector("#navigation");
    const hamburger = document.querySelector("#hamburger");
    navigation.classList.toggle(`${style.active}`);
    hamburger.classList.toggle(`${style.active}`);
  };
  const handleCloseMenu = () => {
    const navigation = document.querySelector("#navigation");
    const hamburger = document.querySelector("#hamburger");
    navigation.classList.remove(`${style.active}`);
    hamburger.classList.remove(`${style.active}`);
  };

  return (
    <div className={style.content}>
      <div className={style.logo} onClick={() => handleCloseMenu()}>
        <Link href={"/"}>
         
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 344.65 344.65"
            width={65}
            height={65}
          >
            <rect
              class="cls-1"
              x="162.27"
              y="161.51"
              width="235.29"
              height="235.29"
              transform="translate(-223 172.86) rotate(-45)"
              fill="var(--dark-green)"
            />
            <path
              class="cls-2"
              d="M279.91,106.83,107.59,279.16,279.91,451.49,452.24,279.16Zm-164,172.33,164-164,164,164-164,164Z"
              transform="translate(-107.59 -106.83)"
              fill="var(--gold)"
            />
            <path
              class="cls-2"
              fill="var(--gold)"
              d="M279.91,127.82,128.58,279.16,279.91,430.5,431.25,279.16Zm0,277.66-15.72-15.73,1-9.33,1.36-12.54.57-5.19h23.58l.83,4.93,2,11.89,1.77,10.56Zm-6-108.11c2,8.54-5.55,15.05-5.39,23.27C263.48,311.31,270.75,304.86,273.88,297.37Zm9.72-6.81c8.33,14.67-8.39,26.32-5.14,40.47C267,315.82,284.25,304.43,283.6,290.56Zm3.11,38.89c-4.63-10,2.77-16.69,5.78-24.57C294.91,314.15,286.05,320.73,286.71,329.45ZM296.62,234H263.21l-24,106.6-60.42-60.42L280.9,178.08,381,278.18l-61.06,61.06Zm25.82,116.66,72.45-72.44-114-114-116,116,71.75,71.76-1.9,8.45L153.6,279.16,279.91,152.84,406.23,279.16l-81.54,81.55Z"
              transform="translate(-107.59 -106.83)"
            />
          </svg>
        </Link>
      </div>
      <div className={style.navigation} id="navigation">
        <ul className={style.pages}>
          <li className="overflow-hidden" onClick={() => handleCloseMenu()}>
            <Link href={"/about"}>
              <div className="link">About</div>
            </Link>
          </li>
          <li className="overflow-hidden" onClick={() => handleCloseMenu()}>
            <Link href={"/menu"}>
              <div className="link">Menu</div>
            </Link>
          </li>
          <li className="overflow-hidden" onClick={() => handleCloseMenu()}>
            <Link href={"/#gallery"}>
              <div className="link">Gallery</div>
            </Link>
          </li>
          <li className="overflow-hidden" onClick={() => handleCloseMenu()}>
            <a href="#contact">
              <div className="link">Contact</div>
            </a>
          </li>
        </ul>
        <div className={style.social}>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/aromes_de_paris"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://web.facebook.com/p/Ar%C3%B4mes-de-Paris-100067833978879/?_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={style.hamburger}
        id="hamburger"
        onClick={() => handleClick()}
      >
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15 10"
          width={30}
          height={30}
          fill="var(--dark-green)"
        >
          <rect width="15" height="2" className={style.bar} />
          <rect y="4" width="15" height="2" className={style.bar_two} />
          <rect y="8" width="15" height="2" className={style.bar_three} />
        </svg>
      </div>
    </div>
  );
};

export default Header;
