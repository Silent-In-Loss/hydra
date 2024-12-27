import React from "react";
import s from "./Join.module.scss";

const Join = () => {
  return (
    <section className={s.join}>
      <div className="container">
        <div className={s.wrap}>
          <h2>JOIN HYDRA</h2>

          <h3>Let's Build Your VR Experience</h3>

          <form className={s.form_container}>
            <input className={s.first_name} type="text" placeholder="First Name" />
            <input className={s.last_name} type="text" placeholder="Last Name" />
            <input className={s.email} type="email" placeholder="Email" />
            <input className={s.phone} type="text" placeholder="Phone Number" />
            <input className={s.subject} type="text" placeholder="Subject" />
            <textarea className={s.Tell} placeholder="Tell Us Something..."></textarea>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Join;
