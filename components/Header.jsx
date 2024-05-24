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
          {/* <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 344.65 344.65"
            width={150}
            height={150}
            fill="var(--gold)"
          >
            <path
              class="cls-1"
              d="M294.79,92.8c.32,1.38.67,2.8.88,4.24l.16,2.18.07,1.11c0,.37,0,.74,0,1.11a26.52,26.52,0,0,1-.53,4.43c-.16.74-.27,1.5-.47,2.22l-.7,2.15c-2,5.76-5.62,10.75-9.58,15.09-8.06,8.67-17.49,15.19-26.33,22S240.89,161,234.09,169.42a68.26,68.26,0,0,0-8.59,13.81,78,78,0,0,0-5.19,15.91A54,54,0,0,1,222.07,182a57.44,57.44,0,0,1,7.13-16.06c6.36-10,15.15-18,24.07-25.08s18.32-13.32,26.43-20.47a50,50,0,0,0,10.42-12A34.69,34.69,0,0,0,294.79,92.8Zm-4.67,33.39a49.77,49.77,0,0,1-10.42,12c-8.11,7.15-17.5,13.33-26.43,20.47s-17.71,15.08-24.07,25.08a57.44,57.44,0,0,0-7.13,16.06A54,54,0,0,0,220.31,217a77.71,77.71,0,0,1,5.19-15.9,68.33,68.33,0,0,1,8.59-13.82c6.8-8.46,15.32-15.39,24.17-22.14s18.27-13.28,26.33-22c4-4.34,7.59-9.33,9.58-15.09l.7-2.15c.2-.72.31-1.48.47-2.21a26.64,26.64,0,0,0,.53-4.44c0-.37.05-.74,0-1.1l-.07-1.11-.16-2.19c-.21-1.44-.56-2.86-.88-4.24A34.65,34.65,0,0,1,290.12,126.19Zm0,18.17a50,50,0,0,1-10.42,12c-8.11,7.15-17.5,13.33-26.43,20.47s-17.71,15.08-24.07,25.08A57.44,57.44,0,0,0,222.07,218a54,54,0,0,0-1.76,17.14,78,78,0,0,1,5.19-15.91,68.54,68.54,0,0,1,8.59-13.81c6.8-8.46,15.32-15.39,24.17-22.14s18.27-13.28,26.33-21.95c4-4.34,7.59-9.33,9.58-15.09l.7-2.15c.2-.72.31-1.48.47-2.21a26.77,26.77,0,0,0,.53-4.44c0-.37.05-.74,0-1.11l-.07-1.1-.16-2.19c-.21-1.44-.56-2.86-.88-4.24A34.65,34.65,0,0,1,290.12,144.36Zm-39.4-30.43c1.75,3.75,2.62,2.88,2.87,10.63.06,2,.12,5.78.15,10.47,2.45-1.89,4.91-3.74,7.33-5.54,0-2.1.06-3.8.1-4.93.25-7.75,1.13-6.88,2.87-10.63s6.51-6.25,7.63-14.26-1.12-26.52-2.75-44.52S267.17,40.51,267.17,43s.25,46.78-.12,49.16-3.76,1.87-4,0-.38-3.38-1-13S261,40.88,260.5,41s-1.27,49.1-1.34,51.42c-.05,2.08-1.38,1.79-1.74,1.79h-.05c-.36,0-1.72.29-1.78-1.79-.06-2.32-.75-51.29-1.25-51.41s-1,28.52-1.62,38.15-.75,11.13-1,13-3.62,2.37-4,0-.12-46.66-.12-49.16-.13-5.88-1.75,12.14S242,91.67,243.09,99.67,249,110.18,250.72,113.93Zm11.85,71.49-1.68,1.27c-3.14,2.39-6.46,5-9.74,7.75-1.15,9.21-2.49,18.34-3.44,23.3-1.5,7.88-4.25,19.52-.37,24.27a16.89,16.89,0,0,0,10,5.72h.18a16.84,16.84,0,0,0,9.95-5.72c3.88-4.75,1.13-16.39-.37-24.27C265.79,211.14,263.83,197.15,262.57,185.42Z"
              transform="translate(-220.22 -41)"
            />
          </svg> */}
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 344.65 344.65"
            width={90}
            height={90}
            fill="var(--gold)"
          >
            <title>Untitled-1 [Recovered]</title>
            <path
              d="M365.35,215.07l-.12,6.12c-.59,29.29-10.14,54.14-28.38,73.86A110.25,110.25,0,0,1,256.61,330a106.4,106.4,0,0,1-38.83-7.46,109,109,0,0,1-33.85-20.89A106.37,106.37,0,0,1,155.84,260a111.06,111.06,0,0,1-7.14-38.47c0-23.6,7.38-45.31,21.94-64.52a108,108,0,0,1,85.83-43c29.19,0,54.67,10.18,75.75,30.27,7.26,7,11.69,12.3,13.79,16.75l-16.39,13.84a22.84,22.84,0,0,1-4.93-5.05c-17.81-23.69-40-35.21-67.81-35.21q-2.41,0-4.89.15l-.79,94.63.67,79.77c1.58.14,3.16.22,4.74.22a84.92,84.92,0,0,0,28.79-5c23.8-8.44,40.4-23.51,50.77-46.05a86,86,0,0,0,7-22.22H276V215l2,0Z"
              transform="translate(-148.7 -114)"
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
