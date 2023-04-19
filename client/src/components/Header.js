import React, { useState } from 'react'


import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavbarBrand
} from 'mdb-react-ui-kit'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setLogout } from '../redux/features/authSlice'
import { Link } from 'react-router-dom'
import FaFontAwesome  from 'react-icons/fa'
const Header = () => {

    const [show, setShow] = useState(false)
    const dispatch = useDispatch()

    const { user } = useSelector((state) => ({ ...state.auth }))
    const handleLogout = () => {
        dispatch(setLogout())
    }
    return (
        <MDBNavbar expand="lg" style={{ backgroundColor: "pink" }}>
            <MDBContainer>
            <MDBNavbarBrand style={{ color:"white", fontWeight: "600", fontSize: "22px", fontFamily: "arial" }}>
                𝕮𝖔𝖓𝖋𝖊𝖗𝖊𝖓𝖈𝖊 𝕽𝖔𝖔𝖒 𝕭𝖔𝖔𝖐𝖎𝖓𝖌 𝕬𝖕𝖕
                </MDBNavbarBrand>
                {/* <MDBNavbarToggler
        type='button'
        aria-expanded="false"
        aria-label='Toogle  navigation' 
        onClick={()=> setShow(!show)}
        >
            <MDBIcon icon='bars' fas />

        </MDBNavbarToggler>
            
            style={{color:"#0606080"}} */}

                <MDBCollapse show={show} navbar>
                    <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
                        {user?.result?._id && (
                            <h6 style={{ marginRight: "30px", marginTop: "17px",color:'black' }}>𝐰𝐞𝐥𝐜𝐨𝐦𝐞🌺:{user?.result?.email}</h6>
                        )}
                        <MDBNavbarItem >
                            {/* <MDBNavbarLink href='/home'>

                                <p className='header-text'>Home</p>

                            </MDBNavbarLink> */}
                        </MDBNavbarItem>
                        {user?.result?._id && (
                            <>
                                <MDBNavbarItem >
                                    <MDBNavbarLink href='/home/Calendar'>
                                    
                                        <p className='header-text' style={{ color: "black" }}>
                                            {/* <FaFontAwesome icon="fa-regular fa-calendar-days" fade size="2xs" /> */}

                                            <i class="fa fa-calendar" aria-hidden="true"></i>
                                        </p>

                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem >
                                    <MDBNavbarLink href='/home'>
                                        <p className='header-text' style={{color:'black'}}>𝘿𝙖𝙨𝙝𝙗𝙤𝙖𝙧𝙙</p>

                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                            </>
                        )}
                        {user?.result?._id ? (
                            <MDBNavbarItem >
                                <MDBNavbarLink href='/login'>
                                    <p className='header-text' style={{color:'black'}} onClick={handleLogout}>𝐋𝐨𝐠𝐨𝐮𝐭</p>

                                </MDBNavbarLink>
                            </MDBNavbarItem>

                        ) : (
                            <MDBNavbarItem >
                                <MDBNavbarLink href='/login'>
                                    <p className='header-text' style={{color:'black'}}>𝕷𝖔𝖌𝖎𝖓</p>

                                </MDBNavbarLink>
                            </MDBNavbarItem>

                        )}






                    </MDBNavbarNav>

                </MDBCollapse>


            </MDBContainer>

        </MDBNavbar>
    )
}

export default Header
