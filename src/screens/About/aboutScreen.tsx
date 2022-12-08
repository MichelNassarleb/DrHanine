import './aboutScreenStyles.css'
import React, { useState } from 'react'
import { Navbar } from '../../components/navbar/navBar'
import { navData } from '../../data'
import image from '../../assets/Images/front.jpeg'

export const AboutScreen = () => {
    const [windowDimension, setWindowDimension] = useState()
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const onMenuClick = () => {
        setIsOpened(prev => !prev)
    }
    const dropdownlist = windowDimension ? 'dropdownlist smalldropdownlist' : 'dropdownlist'
    const dropClass = isOpened ? dropdownlist : `${dropdownlist} zeroHeight`
    return (<div className='main-container'>
        <div className="nav-bar">
            <Navbar data={navData} windowDimension={windowDimension} onChangeDimension={setWindowDimension} isOpened={isOpened} onPress={onMenuClick} />
            <div className={dropClass}>
                <ul className="homescreen-li-container">
                    {navData?.map((item, index) => <li key={index}><a href={item?.href} children={item?.name} /></li>)}
                </ul>
            </div>
        </div>
        <div className='about-container'>
        <div className='about-square'>
        <div className='about-img-container'>
            <img src={image} alt='Dr Hanine'/>
        </div>
        <div className='about-text-container'>
        <h3>WHAT WE DO</h3>
        <h1>TRUE HEALTH CARE FOR YOUR FAMILY</h1>
        <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick</p>
        </div>
        </div>
        </div>


    </div>)
}