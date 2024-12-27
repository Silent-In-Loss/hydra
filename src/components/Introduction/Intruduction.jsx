import React from "react";
import s from "./Intruduction.module.scss";
import Button from "../Button/Button";

const Intruduction = () => {
  return (
    <section className={s.introduction}>
      <div className="container">
        <div className={s.wrap}>
          <div className={s.first}>
            <div className={s.left}>
              <h2>Introduction</h2>
              <div className={s.title}>
                <h2>To Hydra VR</h2>
                <img src="/arrow.png" alt="arrow" />
              </div>
            </div>

            <div className={s.text}>
              <p>
                Vitae sapien pellentesque habitant morbi tristique senectus et
                netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
                lectus. Mi sit amet mauris commodo quis imperdiet massa
                tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                lectus sit amet est placerat in. Lectus magna fringilla urna
                porttitor rhoncus vitae.
              </p>
            </div>
          </div>

          <div className={s.second}>
            <img src="/hero.png" alt="" />

            <div className={s.title}>
              <div className={s.about}>
                <h2>ABOUT</h2>
                <h2 className={s.hydra}>HYDRA VR</h2>
              </div>

              <p>
                Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
                mattis rhoncus urna neque viverra justo. Vivamus at augue eget
                arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
                Aenean et tortor at risus viverra adipiscing at in. Mattis
                aliquam faucibus purus in massa. Est placerat in egestas erat
                imperdiet sed. Consequat semper viverra nam libero justo laoreet
                sit amet. Aliquam etiam erat velit scelerisque in dictum non
                consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec
                ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet
                nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n
                tempor.
              </p>

              <Button>LET'S GET IN TOUCH</Button>
            </div>
          </div>

          <div className={s.first}>
            <div className={s.left}>
              <h2>WHY BUILD</h2>
              <div className={s.title}>
                <h2>WITH HYDRA?</h2>
                <img src="/arrow.png" alt="arrow" />
              </div>
            </div>

            <div className={s.text}>
              <p>
                Vitae sapien pellentesque habitant morbi tristique senectus et
                netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
                lectus. Mi sit amet mauris commodo quis imperdiet massa
                tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                lectus sit amet est placerat in. Lectus magna fringilla urna
                porttitor rhoncus vitae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intruduction;
