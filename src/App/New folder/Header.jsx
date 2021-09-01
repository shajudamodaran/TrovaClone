import React,{useState} from 'react'
import trova from '../Images/trova-icon-black.png'
import { CloseBtn, MenuIcon, SearchIcon, Facebook, Linkedin, Youtube, TrovaGlobeIcon, CreateIcon, PlayIcon, JobIcon, InvoiceIcon } from './../Images/MyIcons';
import userRound from '../Images/userround.svg'

export default function Header() {

    let [drawer,serDrawer]=useState(false)

    return (
        <div className="container-fluid">
            <div className="row" style={{ position: "relative", zIndex: "25" }}>
                <div className="col-md-12 col-sm-12 col-12 m-0 ps-4 pe-4 pt-3 pb-3  overflow-hidden shadow">

                    <duv className="row">
                        <div className="col-md-2 col-sm-3 col-6 d-flex align-items-center">
                            <img src={trova} alt="" className="header-logo" />
                        </div>
                        <div className="col-md-10 col-sm-9 col-6 d-flex flex-row align-items-center justify-content-end">

                            <div className=" search-box-container d-none d-sm-flex">
                                <SearchIcon />
                                <input className='text-input-search ms-1' type="text" name="" id="" />

                            </div>

                            <span className="header-menu-item d-none d-lg-flex">DISCOVER</span>
                            <span className="header-menu-item d-none d-lg-flex">COMMUNITY</span>
                            <span className="header-menu-item d-none d-lg-flex">JOB BOARD</span>
                            <span className="header-menu-item d-none d-lg-flex">BECOME A SELLER</span>

                            <button className="header-login-btn d-none d-sm-none d-lg-flex">Login/Sign Up</button>


                            <div onClick={()=>{serDrawer(!drawer)}} className="nav-button d-sm-flex d-md-flex d-lg-none align-items-center">

                                <MenuIcon />

                                <img src={userRound} alt="" style={{ width: "15px", marginTop: "3px", marginLeft: "5px" }} />


                            </div>


                        </div>
                    </duv>

                    <div className="d-sm-flex d-md-none w-100 bg-light mt-2">

                        <div className=" search-box-container-small d-flex">
                                <SearchIcon />
                                <input className='text-input-search-small ms-1' type="text" name="" id="" />

                               
                            </div>
                         </div>

                </div>
            </div>

            <div className={drawer?'nav-drawer-active':'nav-drawer-hidden'}>

                <div  onClick={()=>{serDrawer(!drawer)}} style={{cursor:"pointer"}} className="close-container d-flex w-100 justify-content-end p-3 h-10" style={{ maxHeight: "40px" }}>
                    <CloseBtn />
                </div>

                <ul className="nav-ul">
                    <li className="nav-li">
                        <button className="nav-login-btn mb-2">Login / Sign Up</button>
                    </li>
                    <li className="nav-li"><div className="nav-li-row"><span>Discover</span> <TrovaGlobeIcon/> </div></li>
                    <li className="nav-li">COMMUNITY</li>
                    <li className="nav-li">JOB BOARD</li>
                    <li className="nav-li"><div className="nav-li-row"><span>BECOME A SELLER</span> <CreateIcon/> </div></li>
                    <li className="nav-li"><div className="nav-li-row"><span>ADD LIVE EVENT </span> <PlayIcon/> </div></li>
                    <li className="nav-li"><div className="nav-li-row"><span>POST A JOB </span> <JobIcon/> </div></li>
                    <li className="nav-li"><div className="nav-li-row"><span>INSTANT INVOICE </span> <InvoiceIcon/> </div></li>

                </ul>

                <div className="nav-footer mt-4 ">
                    <div className="social-Icons d-flex flex-row justify-content-center">
                        <Facebook />
                        <Linkedin />
                        <Youtube />
                    </div>

                    <div className="d-flex flex-row justify-content-between ps-2 pe-2 mt-4">

                    <span className="nav-footer-menu text-primary">About</span>
                    <span className="nav-footer-menu text-primary">Help</span>
                    <span className="nav-footer-menu text-primary">Articles</span>
                    <span className="nav-footer-menu text-primary">Resources</span>


                    </div>

                    <div className="d-flex flex-row justify-content-between ps-2 pe-2 mt-2">

                    <span className="nav-footer-menu text-primary">News Room</span>
                    <span className="nav-footer-menu text-primary">Career</span>
                    <span className="nav-footer-menu text-primary">Terms</span>
                    <span className="nav-footer-menu text-primary">Privacy</span>

                    </div>

                    <p className="footer-copyright-text mt-4">© 2021 Trova Technologies, Inc. All rights reserved.</p>

                   
                </div>



            </div>


        </div>
    )
}
