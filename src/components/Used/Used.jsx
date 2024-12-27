import React from "react";
import s from "./Used.module.scss";

const Used = () => {
  return (
    <>
      <section className={s.used}>
        <div className="container">
          <div className={s.box}>
            <h3>
              <b>TECHNOLOGIES & HARDWARE</b> <br /> USED BY HYDRA VR.{" "}
            </h3>

            <button>
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 25L30 37.5L42.5 25"
                  stroke="#433D60"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className={s.wrap}>
            <img src="/unreal.png" alt="" />
            <img src="/unity.png" alt="" />
            <img src="/oculus.png" alt="" />
            <img src="/vive.png" alt="" />
          </div>

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

        </div>
      </section>
    </>
  );
};

export default Used;
