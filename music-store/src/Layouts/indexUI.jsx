import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import './index.scss'

const LayoutUI = ({ children }) => {
    return (
        <section className='layout'>
            <Header />
            {children}
            <Footer />
        </section>
    )
}

export default LayoutUI
