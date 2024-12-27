import React from 'react'
import s from './Contacts.module.scss'

const Contacts = () => {
  return (
    <>
        <section className={s.contacts}>
            <div className="container">
                <div className={s.wrap}>

                    <div className={s.location}>
                        <img src="/location.svg" alt="location" />
                        <div className={s.title}>
                            <h3>Pay Us a Visit</h3>
                            <p>Union St, Seattle, WA 98101, United States</p>
                        </div>
                    </div>

                    <div className={s.call}>
                        <img src="/call.svg" alt="call" />
                        <div className={s.title}>
                            <h3>Give Us a Call</h3>
                            <p>(110) 1111-1010</p>
                        </div>
                    </div>
                    
                    <div className={s.mail}>
                        <img src="/mail.svg" alt="mail" />
                        <div className={s.title}>
                            <h3>Send Us a Message</h3>
                            <p>Contact@HydraVTech.com</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default Contacts