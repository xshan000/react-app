import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'


export default function Layout(props) {
    return (
        <div>
            <Navbar/>
            <section>
                {props.children}
            </section>
            <Footer/>
        </div>
    )
}
