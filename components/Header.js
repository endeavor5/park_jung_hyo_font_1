import React, { Component } from 'react';
import Router from 'next/router';
import App from 'next/app'
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import moment from 'moment';
import store from "../common/store";

import Backdrop from './Backdrop';


@observer
class Header extends App {
    constructor(props) {
        super(props);
        //사용자가 입력한 props 처리
        this.state = {
            layoutMode: 'desktop',
        }
        this.onResize = this.onResize.bind(this);
    }
    
    static async getInitialProps(props) {
        const { query } = props;
        // const { token, refreshToken } = query;
        
    }

    componentDidMount() {

        var stored_token = ''

        window.addEventListener('resize', this.onResize);
        const wrapper = document.getElementById("wrapper");
        const mobile_drawer_menu = document.getElementById("mobile_drawer_menu");
        const mobile_drawer_menu_left = document.getElementById("mobile_drawer_menu_left");
        const icon = document.getElementsByClassName("icon");
        wrapper.addEventListener('click',  () => {
            icon[0].classList.toggle('close');
            mobile_drawer_menu.classList.toggle('open');
        });
        mobile_drawer_menu_left.addEventListener('click',  () => {
            icon[0].classList.toggle('close');
            mobile_drawer_menu.classList.toggle('open');
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    onResize() {
        this.setState({
            layoutMode: this.getLayoutMode(),
        });
        const mobile_drawer_menu = document.getElementById("mobile_drawer_menu");
        const icon = document.getElementsByClassName("icon");
    }

    getLayoutMode() {
        return window.innerWidth > 1200 ?
            'desktop'
            : 'non-desktop';
    }


    _goPage = (paramRouterName, paramQuery) => {
        // import Router from 'next/router';
        // import { withRouter } from 'next/router' //  retrieve the query via the router props, which needs to be injected to Component by using withRouter.
        Router.push({
        pathname: paramRouterName,
        // query: { tab : paramQuery }
        });
    };

    render() {
        
        const { path } = this.props;
        const { genrecategory} = this.state;
        const stored_token = store.token

        return (
            <>
            <style 
                jsx="true"
                global="true" 
                suppressHydrationWarning>{`

                a:link {color: black;}      /* unvisited link */
                a:visited {color: black;}   /* visited link */
                a:hover {color: black;}     /* mouse over link */
                a:active {color: black;}    /* selected link */

                #wrapper {
                    display:inline-block;
                    border-radius:50px;
                    margin:10px;
                    position: relative;
                    padding:4px;
                    cursor:pointer;
                    z-index: 9999;
                }
                .circle {
                    width:30px;
                    height:30px;
                    position:relative;
                    z-index: 9999;
                }
                .line {
                    position: absolute;
                    height: 3px;
                    width:100%;
                    background: #000;
                    border-radius:2px;
                    transition: all cubic-bezier(0.26, 0.1, 0.27, 1.55) 0.35s;
                }
                .top {
                    top:18%;
                }
                .middle {
                    top:48%;
                }
                .bottom {
                    top:78%;
                }
                .icon.close .top {
                    transform:rotate(45deg);
                    top:48%;
                }
                .icon.close .middle, .icon.close .bottom {
                    transform:rotate(-45deg);
                    top:48%;
                }
                .mobile_drawer_menu {
                    position : fixed;
                    display: none;
                    flex-direction : row;
                    width: 100%;
                    height: 100%;
                    left: 0%;
                    top: 0;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0, 0, 0, 0.3);
                    z-index: 9998;
                }

                .mobile_drawer_menu_inner {
                    width: 80%;
                    height: 100%;
                    min-width: 200px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    background-color: #fff;
                    z-index: 9999;
                }
                

                .mobile_drawer_menu.open {
                    display: flex;
                }
                .cs-drawer-item {

                    width: auto;
                    height: 24px;
                    font-size: 16px;
                    font-style: normal;
                    line-height: 1.5;
                    letter-spacing: -0.64px;
                    text-align: left;
                    color: rgba(0, 0, 0, 0.6);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    margin-left: 24px;  
                    margin-top: 16px;   
                }


                /* Extra small devices (phones, 400px and down) */
                @media only screen and (min-width: 400px) {
                    /* ... */
                    .mobile_drawer_menu.open {
                        display: flex;
                    }
                  }
                /* Extra small devices (phones, 600px and down) */
                @media only screen and (max-width: 400px) {
                  /* ... */
                  .mobile_drawer_menu.open {
                      display: flex;
                  }
                }
                /* Small devices (portrait tablets and large phones, 600px and up) */
                @media only screen and (min-width: 600px) {
                  /* ... */
                  .mobile_drawer_menu.open {
                      display: flex;
                  }
                }
                /* Medium devices (landscape tablets, 768px and up) */
                @media only screen and (min-width: 768px) {
                  /* ... */
                  .mobile_drawer_menu.open {
                      display: flex;
                  }
                }
                /* Large devices (laptops/desktops, 992px and up) */
                @media only screen and (min-width: 992px) {
                  /* ... */
                  .mobile_drawer_menu.open {
                      display: flex;
                  }
                }
                /* Extra large devices (large laptops and desktops, 1200px and up) */
                @media only screen and (min-width: 1200px) {
                  /* ... */
                  .mobile_drawer_menu.open {
                    display: flex;
                  }
                }
            `}</style>
            <div id="header">
                <div className="header-wrapper is_desktop_laptop_tablet_phone_xsmall_xxsmall  max-width-wrapper">
                    <div className="header-left">
                        
                    </div>
                    <div 
                    style={{
                        position: 'absolute',
                        width: 'auto',
                        display: 'flex',
                        alignSelf: 'center',
                        left: '50%',
                        transform: 'translate(-50%, 0%)',
                    }}>
                        <a href="/" style={{ 
                                fontFamily: "Earth_FinalGX",}} >
                            PARK JUNG HYO.
                        </a>
                    </div>
                    <div className="header-right">
                        <div id="wrapper">
                            <div className="circle icon">
                                <span className="line top"></span>
                                <span className="line middle"></span>
                                <span className="line bottom"></span>
                            </div>
                        </div>
                        {/* Drawer 메뉴 */}
                        <div id="mobile_drawer_menu" className="mobile_drawer_menu" >
                            <div id="mobile_drawer_menu_left" style={{ width: '20%',  height: '100%'}}></div>
                            <div  className="mobile_drawer_menu_inner">

                            <div id="menu-item-1" 
                            className="menu-item cursor_pointer not_draggable" 
                            style={{ 
                                fontFamily: "Earth_FinalGX",
                                color : path === '/' ? '#f84300' : 'rgba(0, 0, 0, 0.6)',
                                fontWeight: path === '/' ? '600' : '500',
                                textDecoration: path === '/' ? 'underline' : 'none',
                                marginTop : 80,
                                marginLeft : 24,
                                }}
                                onClick={()=> {
                                    this._goPage('/');
                                }}
                            >
                                    PARK JUNG HYO's 1st Planet : Earth
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style 
            jsx="true"
            global="true"
            suppressHydrationWarning>
                {`
                        @font-face {
                            font-family: "Earth_FinalGX";
                            src: url(/static/fonts/Earth_FinalGX.ttf) format("truetype");
                          }
                          `}
                          </style>
            </>
        );
    }
}

export default Header;