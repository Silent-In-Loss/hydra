import React from 'react'
import s from './Modal.module.scss'
import Button from '../Button/Button'


const Modal = ({ isModalOpen, onClose }) => {
  return (
    <>
      <div className={`${s.modal} ${isModalOpen ? s.active : ''}`}>
        <div className={s.box}>
          <h2>Hello</h2>
          <p>Lorem ipsum dolor sit.</p>
          <div onClick={onClose}>
          <Button>Close</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal