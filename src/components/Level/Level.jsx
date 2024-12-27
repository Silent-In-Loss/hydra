import React from 'react'
import s from './Level.module.scss'

const Level = () => {
  return (
    <>
      <div className={s.level}>
        <div className="container">
          <div className={s.wrap}>

            <button><img src="/button-left.svg" alt="left" /></button>

            <div className={s.card + ' ' + s.card1}>
              <h2>01</h2>
              <p>3D Conception <br />
              & Design</p>
            </div>
            <div className={s.card}>
              <h2>02</h2>
              <p>Interaction <br />
              & Design</p>
            </div>
            <div className={s.card}>
              <h2>03</h2>
              <p>VR World <br />
              User Testing</p>
            </div>
            <div className={s.card}>
              <h2>04</h2>
              <p>Hydra VR <br />
              Deploy</p>
            </div>
            
            <button><img src="/button-right.svg" alt="right" /></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Level