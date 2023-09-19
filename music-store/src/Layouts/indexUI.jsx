import React from 'react'
import './index.scss'

import wall0 from '@images/wall-00.png'
import wall1 from '@images/wall-01.png'
import wall2 from '@images/wall-02.png'
import wall3 from '@images/wall-03.png'
import wall4 from '@images/wall-04.png'
import wall5 from '@images/wall-05.png'
import wall6 from '@images/wall-06.png'
import wall7 from '@images/wall-07.png'
import wall8 from '@images/wall-08.png'
import wall9 from '@images/wall-09.png'

const LayoutUI = () => {
    return (
        <>
            <h1>
                Vivimos en una sociedad profundamente dependiente de la ciencia y la tecnología y en la que nadie sabe nada de estos temas. Ello constituye una fórmula segura para el desastre. (Carl Sagan)
            </h1>
            <img src={wall0} alt="Linux"/>
            <img src={wall1} alt="Linux"/>
            <img src={wall2} alt="Linux"/>
            <img src={wall3} alt="Linux"/>
            <img src={wall4} alt="Linux"/>
            <img src={wall5} alt="Linux"/>
            <img src={wall6} alt="Linux"/>
            <img src={wall7} alt="Linux"/>
            <img src={wall8} alt="Linux"/>
            <img src={wall9} alt="Linux"/>
        </>
    )
}

export default LayoutUI
