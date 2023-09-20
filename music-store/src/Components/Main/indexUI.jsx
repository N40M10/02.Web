import React from "react";
import Main__Slider from '@components/Main__Slider'
import Main__SubSlider from '@components/Main__SubSlider'
import Main__NewProducts from "@components/Main__NewProducts";
import './index.scss'

const MainUI = () => {
    return (
        <>
            <Main__Slider />
            <Main__SubSlider />
            <Main__NewProducts />
        </>
    )
}

export default MainUI
