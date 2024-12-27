import React, { useState } from 'react'
import s from './Header.module.scss'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'

const Header = () => {

   const [isModalOpen, setIsModalOpen] = useState(false)

   const toggleModal = () => {
      setIsModalOpen(!isModalOpen)
   }

   const closeModal = () =>{
      setIsModalOpen(false)
   }

  return (
    <>
      <header className={s.header}>
         <div className="container">
            <nav className={s.nav}>

               <div className={s.logo}>
                  <img src="/logo.svg" alt="" />
                  <img src="/hydra.svg" alt="" />
               </div>

               <div className={s.menu}>
                  <a href="">ABOUT</a>
                  <a href="">SERVICES</a>
                  <a href="">TECHNOLOGIES</a>
                  <a href="">HOW TO</a>
               </div>

               <img className={s.burger} src="/burger.svg" alt="" />

               <div className={s.btns}>
                  <button onClick={toggleModal} className={s.btn}>CONTACT US</button>
                  <Button>JOIN HYDRA</Button>
               </div>
            </nav>
         </div>
      </header>

      <Modal isModalOpen={isModalOpen} onClose={closeModal}/>
    </>
  )
}

export default Header