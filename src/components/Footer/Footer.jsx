import React from 'react'
import s from "./Footer.module.scss";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className="container">
        <div className={s.wrap}>
          <img className={s.logo} src="/logo.svg" alt="logo" />

          <div className={s.links}>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Technologies</a>
            <a href="">How to</a>
            <a href="">Join Hydra</a>
          </div>

          <div className={s.information}>
            <a href="">F.A.Q</a>
            <a href="">SITEMAP</a>
            <a href="">CONDITIONS</a>
            <a href="">LICENSES</a>
          </div>

          <div className={s.social}>
            <p>SOCIALIZE WITH HYDRA</p>

            <div className={s.img}>
              <a href="">
                <img src="/facebook.svg" alt="social" />
              </a>
              <a href="">
                <img src="/twitter.svg" alt="social" />
              </a>
              <a href="">
                <img src="/linkedin.svg" alt="social" />
              </a>
              <a href="">
                <img src="/youtube.svg" alt="social" />
              </a>
              <a href="">
                <img src="/instagram.svg" alt="social" />
              </a>
              <a href="">
                <img src="/pinterest.svg" alt="social" />
              </a>
            </div>

            <Button>BUILD YOUR WORLD</Button>
          </div>

          <div className={s.landing}>
            <p>
              2023 © HYDRA LANDING PAGE <br />
              BY ZINE. E. FALOUTI <br />
              ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
