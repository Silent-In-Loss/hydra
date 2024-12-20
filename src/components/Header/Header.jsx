import React from 'react'
import s from './Header.module.scss'
import Button from '../Button/Button'

const Header = () => {
  return (
    <>
    <header className={s.header}>
        <div className="container">
            <nav className={s.nav}>
                <div className={s.logo}>
                <img src="/logo.png" alt="" />
                <img src="/hydra.png" alt="" />
                </div>
            

            <div className={s.menu}>
                <a href="">ABOUT</a>
                <a href="">SERVICES</a>
                <a href="">TECHNOLOGIES</a>
                <a href="">HOW TO</a>
            </div>

            <div className={s.btns}>
                <button className={s.btn}>CONTACT US</button>
                <Button>JOIN HYDRA</Button>
            </div>
            </nav>
        </div>
        
    </header>
    </>
  )
}

export default Header
