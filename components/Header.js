import React, { Component } from 'react';
import Router from 'next/router';
import App from 'next/app'
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import Slider from 'react-rangeslider'
import VerticalSlider from "../components/VerticalSlider";
import HorizontalSlider from "../components/HorizontalSlider";
import SVG from '../components/SVG';


import { ChromePicker } from 'react-color'; 
import moment from 'moment';
import store from "../common/store";

import Backdrop from './Backdrop';


@observer
class Header extends App {
    
    constructor(props) {
        super(props);
        this.state = {
            layoutMode: 'desktop',
            input_content : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqestuvwxyz  ',

            footerGap : 200, 

            fontSizeState : 50,
            fontWeightState: 300,
            fontLetterSpacingState : 0,
            fontLineSpacingState: 0.85,
            fontColorState : '#000',
            fontState : null,

            isFontSizeAuto : false,
            isFontWeightAuto : false,
            isFontLetterSpacingAuto : false,
            isFontLineSpacingAuto : false,
        };

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
            // const icon = document.getElementsByClassName("icon");
            icon[0].classList.toggle('close');
            mobile_drawer_menu.classList.toggle('open');
        });

        if (this.fontSizeTimer) {
            clearInterval(this.fontSizeTimer);
        }
        if (this.fontWeightTimer) {
            clearInterval(this.fontWeightTimer);
        }
        if (this.fontLetterTimer) {
            clearInterval(this.fontLetterTimer);
        }
        if (this.fontLineTimer) {
            clearInterval(this.fontLineTimer);
        }
    }

    componentWillUnmount () {
        if (this.fontSizeTimer) {
            clearInterval(this.fontSizeTimer);
        }
        if (this.fontWeightTimer) {
            clearInterval(this.fontWeightTimer);
        }
        if (this.fontLetterTimer) {
            clearInterval(this.fontLetterTimer);
        }
        if (this.fontLineTimer) {
            clearInterval(this.fontLineTimer);
        }
    }

    __registerAutoFontSize = () => {

        this.fontSizeTimer = setInterval( () => { 
            if (store.directionFontSize == 'positive') {
                store.fontSizeState = store.fontSizeState + store.unitFontSize
            } else {
                store.fontSizeState = store.fontSizeState - store.unitFontSize
            }
    
            if (store.fontSizeState >= store.maxFontSize) {
                store.directionFontSize = 'negative'
            } 
            
            if (store.fontSizeState <= store.minFontSize) {
                store.directionFontSize = 'positive'
            } 
            
        },   200 * ( 100 /  store.secondFontSize));
    }


    __registerAutoFontWeight = () => {
        this.fontWeightTimer = setInterval( () => { 
            if (store.directionFontWeight == 'positive') {
                store.fontWeightState = store.fontWeightState + store.unitFontWeight
            } else {
                store.fontWeightState = store.fontWeightState - store.unitFontWeight
            }

            if (store.fontWeightState >= store.maxFontWeight) {
                store.directionFontWeight = 'negative'
            } 
            
            if (store.fontWeightState <= store.minFontWeight) {
                store.directionFontWeight = 'positive'
            } 
            
        },   200 * ( 100 /  store.secondFontWeight));
    }

    __registerAutoFontLetter = () => {
        this.fontLetterTimer = setInterval( () => { 
            if (store.directionFontLetterSpacing == 'positive') {
                store.fontLetterSpacingState = store.fontLetterSpacingState + store.unitFontLetterSpacing
            } else {
                store.fontLetterSpacingState = store.fontLetterSpacingState - store.unitFontLetterSpacing
            }
    
            if (store.fontLetterSpacingState >= store.maxFontLetterSpacing) {
                store.directionFontLetterSpacing = 'negative'
            } 
            
            if (store.fontLetterSpacingState <= store.minFontLetterSpacing) {
                store.directionFontLetterSpacing = 'positive'
            } 
            
        },  200 * ( 100 /  store.secondFontLetterSpacing) );
    }

    __registerAutoFontLine = () => {

        this.fontLineTimer = setInterval( () => { 
            if (store.directionFontLineSpacing == 'positive') {
                store.fontLineSpacingState = store.fontLineSpacingState + store.unitFontLineSpacing
            } else {
                store.fontLineSpacingState = store.fontLineSpacingState - store.unitFontLineSpacing
            }
    
            if (store.fontLineSpacingState >= store.maxFontLineSpacing) {
                store.directionFontLineSpacing = 'negative'
            } 
            
            if (store.fontLineSpacingState <= store.minFontLineSpacing) {
                store.directionFontLineSpacing = 'positive'
            } 
            
        }, 200 * ( 100 /  store.secondFontLineSpacing) );
    }




    handleChangeComplete = (color) => {
        // this.setState({ fontColorState: color.hex });
        store.fontColorState = color.hex;
      };
    

      handleFontSizeChange = event => {
        //   console.log(event.target.value);
        // this.setState({ fontSizeState: event  })
        store.fontSizeState = event;
      };
      handleFontWeightChange = event => {
        // this.setState({  fontWeightState: value  })
        store.fontWeightState = event;
      };


      handleFontLetterSpacingChange = event => {
        //   console.log(event.target.value);
        // this.setState({  fontLetterSpacingState: event  })
        store.fontLetterSpacingState = event;
      };


      handleFontLineSpacingChange = event => {
        //   console.log(event.target.value);
        // this.setState({ fontLineSpacingState: event  })
        store.fontLineSpacingState = event;
      };

      _toggleFontSizeAuto  = event => {
        if (event == null || event === undefined) {
            // this.setState({ isFontSizeAuto: !this.state.isFontSizeAuto }) 
            if (store.isFontSizeAuto == true) {
                clearInterval(this.fontSizeTimer);
            } else {
                clearInterval(this.fontSizeTimer);
                this.__registerAutoFontSize();
            }
            store.isFontSizeAuto = !store.isFontSizeAuto;
        } else {
            if (event == true) {
                // this.setState({ isFontSizeAuto: true }) 
                store.isFontSizeAuto = true;
            } else {
                // this.setState({ isFontSizeAuto: false  }) 
                store.isFontSizeAuto = false;

            }
        } 
      }


      _toggleFontWeightAuto  = event => {

        if (event == null || event === undefined) {
            // this.setState({  isFontWeightAuto: !this.state.isFontWeightAuto }) 
            if (store.isFontWeightAuto == true) {
                clearInterval(this.fontWeightTimer);
            } else {
                clearInterval(this.fontWeightTimer);
                this.__registerAutoFontWeight();
            }
            store.isFontWeightAuto = !store.isFontWeightAuto
        } else {
            if (event == true) {
                // this.setState({ isFontWeightAuto: true }) 
                store.isFontWeightAuto = true
            } else {
                // this.setState({   isFontWeightAuto: false }) 
                store.isFontWeightAuto = false
            }
        } 
      }

      _toggleFontLetterSpacingAuto  = event => {

        if (event == null || event === undefined) {
            // this.setState({ isFontLetterSpacingAuto: !this.state.isFontLetterSpacingAuto }) 
            if (store.isFontLetterSpacingAuto == true) {
                clearInterval(this.fontLetterTimer);
            } else {
                clearInterval(this.fontLetterTimer);
                this.__registerAutoFontLetter();
            }
            store.isFontLetterSpacingAuto = !store.isFontLetterSpacingAuto
        } else {
            if (event == true) {
                // this.setState({ isFontLetterSpacingAuto: true }) 
                store.isFontLetterSpacingAuto = true;
            } else {
                // this.setState({  isFontLetterSpacingAuto: false }) 
                store.isFontLetterSpacingAuto = false;
            }
        } 
      }

      _toggleFontLineSpacingAuto  = event => {

        if (event == null || event === undefined) {
            // this.setState({  isFontLineSpacingAuto: !this.state.isFontLineSpacingAuto }) 
            if (store.isFontLineSpacingAuto == true) {
                clearInterval(this.fontLineTimer);
            } else {
                clearInterval(this.fontLineTimer);
                this.__registerAutoFontLine();
            }
            store.isFontLineSpacingAuto = !store.isFontLineSpacingAuto;
        } else {
            if (event == true) {
                // this.setState({ isFontLineSpacingAuto: true  }) 
                store.isFontLineSpacingAuto = true;
            } else { 
                // this.setState({ isFontLineSpacingAuto: false  }) 
                store.isFontLineSpacingAuto = false;
            }
        } 
      }



    _bannerGoItem = (index) => {
        this.setState({
            index_banner_content: index
        });
        this.startCount();
    }

      startCount() {
        // this.setState({
        //   isOn: true,
        //   count: 0
        // });
        clearInterval(this.timer);
        this.timer = setInterval( () => { 
            this._bannerChange();
        }, 5000);
      }
      
  toogleSwitchState = (param_onoff) => {
    clearInterval(this.timer);

    if (param_onoff == true) {

        this.startCount();
        this.setState({ is_banner_animation: true })
        return;
    } 

    
    if (param_onoff == false) {

        this.setState({ is_banner_animation: false })
        return;
    } 

    

    if (this.state.is_banner_animation == false) {
        this.startCount();
        this.setState({ is_banner_animation: true })
    } else {
        this.setState({ is_banner_animation: false })
        //geolocation.stopObserving();
    }
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

    __togglePlayAll = () => {
        if ( store.isPlayAll == true ) {
            store.isPlayAll = false
            store.isFontSizeAuto = false;
            store.isFontWeightAuto = false;
            store.isFontLineSpacingAuto = false;
            store.isFontLetterSpacingAuto = false;

            if (this.fontSizeTimer) {
                clearInterval(this.fontSizeTimer);
            }
            if (this.fontWeightTimer) {
                clearInterval(this.fontWeightTimer);
            }
            if (this.fontLetterTimer) {
                clearInterval(this.fontLetterTimer);
            }
            if (this.fontLineTimer) {
                clearInterval(this.fontLineTimer);
            }
            
        } else {
            store.isPlayAll = true
            store.isFontSizeAuto = true;
            store.isFontWeightAuto = true;
            store.isFontLineSpacingAuto = true;
            store.isFontLetterSpacingAuto = true;
            if (store.isFontSizeAuto == false) {
                clearInterval(this.fontSizeTimer);
            } else {
                clearInterval(this.fontSizeTimer);
                this.__registerAutoFontSize();
            }
            if (store.isFontWeightAuto == false) {
                clearInterval(this.fontWeightTimer);
            } else {
                clearInterval(this.fontWeightTimer);
                this.__registerAutoFontWeight();
            }
            if (store.isFontLetterSpacingAuto == false) {
                clearInterval(this.fontLetterTimer);
            } else {
                clearInterval(this.fontLetterTimer);
                setInterval(this.fontLetterTimer);
                this.__registerAutoFontLetter();
            }
            if (store.isFontLineSpacingAuto == false) {
                clearInterval(this.fontLineTimer);
            } else {
                clearInterval(this.fontLineTimer);
                this.__registerAutoFontLine();
            }

        }
    }
    __toggleResetAll  = () => {


        store.isPlayAll = false;
        store.fontSizeState = store.defaultFontSizeState;
        store.fontWeightState = store.defaultFontWeightState;
        store.fontLetterSpacingState = store.defaultFontLetterSpacingState;
        store.fontLineSpacingState = store.defaultFontLineSpacingState;
        store.fontColorState = store.defaultFontColorState;
        store.fontState = store.defaultFontState;

        store.isPlayAll = false
        store.isFontSizeAuto = false;
        store.isFontWeightAuto = false;
        store.isFontLineSpacingAuto = false;
        store.isFontLetterSpacingAuto = false;


        store.directionFontSize = 'positive'; // negative;
        store.secondFontSize = 100;
        store.directionFontWeight = 'positive'; // negative;
        store.secondFontWeight = 100;
        store.directionFontLetterSpacing = 'positive'; // negative;
        store.secondFontLetterSpacing  = 100;
        store.directionFontLineSpacing = 'positive'; // negative;
        store.secondFontLineSpacing  = 100;
        
        if (this.fontSizeTimer) {
            clearInterval(this.fontSizeTimer);
        }
        if (this.fontWeightTimer) {
            clearInterval(this.fontWeightTimer);
        }
        if (this.fontLetterTimer) {
            clearInterval(this.fontLetterTimer);
        }
        if (this.fontLineTimer) {
            clearInterval(this.fontLineTimer);
        }
    }


    __toggleSecond = (param) => {
        console.log('__toggleSecond');
        var unit = 0;
        param == 'font/size' ? unit = store.secondFontSize : null;
        param == 'font/weight' ? unit = store.secondFontWeight : null;
        param == 'font/letter-spacing' ? unit = store.secondFontLetterSpacing : null;
        param == 'font/line-spacing' ? unit = store.secondFontLineSpacing : null;
        
        if (unit == 100 ) {unit = 200 } 
        else if (unit == 200 ) {unit = 300 } 
        else if (unit == 300 ) {unit = 100 } 
        
        param == 'font/size' ? store.secondFontSize = unit : null;
        param == 'font/weight' ?  store.secondFontWeight = unit : null;
        param == 'font/letter-spacing' ?  store.secondFontLetterSpacing = unit : null;
        param == 'font/line-spacing' ?  store.secondFontLineSpacing = unit : null;

        if (store.isFontSizeAuto == false) {
            clearInterval(this.fontSizeTimer);
        } else {
            clearInterval(this.fontSizeTimer);
            this.__registerAutoFontSize();
        }
        if (store.isFontWeightAuto == false) {
            clearInterval(this.fontWeightTimer);
        } else {
            clearInterval(this.fontWeightTimer);
            this.__registerAutoFontWeight();
        }
        if (store.isFontLetterSpacingAuto == false) {
            clearInterval(this.fontLetterTimer);
        } else {
            clearInterval(this.fontLetterTimer);
            setInterval(this.fontLetterTimer);
            this.__registerAutoFontLetter();
        }
        if (store.isFontLineSpacingAuto == false) {
            clearInterval(this.fontLineTimer);
        } else {
            clearInterval(this.fontLineTimer);
            this.__registerAutoFontLine();
        }
    }

    onPrint  = () => {
        const html = document.querySelector('html');
        const printContents = document.querySelector('.font_display_container').innerHTML;
        const printDiv = document.createElement('DIV');
        printDiv.className = 'print-div';
         
        html.appendChild(printDiv);
        printDiv.innerHTML = printContents;
        document.body.style.display = 'none';
        window.print();
        document.body.style.display = 'block';
        printDiv.style.display = 'none';

        console.log('TEST')
    }

    render() {
        const { path } = this.props;
        const stored_token = store.token

        return (
            <>
            <style 
            jsx="true"
            global="true"
            suppressHydrationWarning>
                {`
                    @font-face {
                        font-family: "Earth_FinalGX";
                        src: url(${this.props.prefix}/static/fonts/Earth_FinalGX.ttf) format("truetype");
                        }


                    @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 100;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.otf) format('opentype');}

                    @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 300;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.otf) format('opentype');}
                    
                    @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 400;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf) format('opentype');}
                    
                    @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 500;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.otf) format('opentype');}
                    
                    @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 700;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf) format('opentype');}
                    
                    @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 900;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.otf) format('opentype');}
                    
                    
                          `}
                          </style>
            <style 
                jsx="true"
                global="true" 
                suppressHydrationWarning>{`
                textarea {
                    width: 100%;
                    resize: none;
                    overflow-y: hidden; /* prevents scroll bar flash */
                    padding: 1.1em; /* prevents text jump on Enter keypress */
                    padding-bottom: 0.2em;
                    line-height: 1.6;
                  }

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
                .mobile_drawer_menu_left {
                    width: calc(100% - 300px);
                    height: 100%;
                }

                .mobile_drawer_menu_inner {
                    width: 300px;
                    height: 100%;
                    min-width: 200px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    background-color: #fff;
                    z-index: 9999;
                    overflow-y: scroll;
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
                .slider-common {
                    width: calc(100% - 40px);
                }
                .rangeslider-horizontal .rangeslider__fill {
                    height: 100%;
                    background-color: #000;
                    border-radius: 10px;
                    top: 0;
                }
                .rangeslider {
                    margin: 8px 0;
                    position: relative;
                    background: #e6e6e6;
                    -ms-touch-action: none;
                    touch-action: none;
                    }
                .rangeslider {
                    max-height: 30px;
                }
                .rangeslider-horizontal .rangeslider__handle {
                    width: 10px;
                    height: 10px;
                    border-radius: 10px;
                    top: 50%;
                    transform: translate3d(-50%,-50%,0);
                    }
                .rangeslider-horizontal {
                    height: 6px;
                    border-radius: 10px;
                    }
                    .rangeslider-horizontal .rangeslider__handle:after {
                        content: '',
                        position: absolute;
                        width: 0px;
                        height: 0px;
                        top: 6px;
                        left: 6px;
                        border-radius: 50%;
                        background-color: #dadada;
                        box-shadow: 0 1px 3px rgba(0,0,0,.4) inset,0 -1px 3px rgba(0,0,0,.4) inset;
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
                <div className="header-wrapper is_desktop_laptop_tablet_phone_xsmall_xxsmall">
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
                            EARTH
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
                        <div id="mobile_drawer_menu" 
                        className="mobile_drawer_menu" >
                            <div id="mobile_drawer_menu_left" style={{ width: 'calc(100% - 300px)', height: '100%'}}></div>
                            <div  className="mobile_drawer_menu_inner">

                            <div id="menu-item-1" 
                            className="menu-item cursor_pointer not_draggable" 
                            style={{ 
                                fontFamily: "Earth_FinalGX",
                                color : path === '/' ? '#f84300' : 'rgba(0, 0, 0, 0.6)',
                                fontWeight: path === '/' ? '600' : '500',
                                textDecoration: path === '/' ? 'underline' : 'none',
                                marginTop : 80,
                                marginLeft : 40,
                                }}
                                onClick={()=> {
                                    this._goPage('/');
                                }}
                            >
                                <div style={{ fontSize: 15 }}>
                                    PARK JUNG HYO's 1st Planet<br/>2020 Typeface Earth
                                </div>
                                    
                            </div>
                            
                    <div >

                        <div  
                            style={{  
                                fontSize : 20, 
                                display: 'flex', 
                                alignItems: 'flex-start', 
                                justifyContent: 'center', 
                                maxWidth: 400,
                                marginLeft: 40,
                                marginTop: 50, 
                            }}>
                                <div >

                                <div style={{ width: '100%', display : 'flex', marginBottom: 20, }}>

                                    <div
                                        style={{  fontFamily: 'Earth_FinalGX' , 
                                        width: 80,
                                        height: 20, 
                                            fontSize: 10, 
                                            fontWeight: 700,
                                            backgroundColor: store.isPlayAll == true ? '#000' : '#E4E4E4',
                                            color : store.isPlayAll == true ? '#fff' : '#000',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius : 8,
                                            
                                        }}
                                        onClick={()=> {
                                            this.__togglePlayAll()
                                        }}
                                        >
                                        {store.isPlayAll == true ? 'Pause all' : 'Play all'}
                                    </div>
                                    <div
                                        style={{  fontFamily: 'Earth_FinalGX' , 
                                        width: 80,
                                        height: 20, 
                                            fontSize: 10, 
                                            fontWeight: 700,
                                            backgroundColor: '#E4E4E4',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginLeft: 8,
                                            borderRadius : 8,
                                        }}
                                        onClick={()=> {
                                            this.__toggleResetAll()
                                        }}
                                        >
                                        Reset
                                    </div>
                                    
                                </div>

                                <div 
                                    style={{  fontFamily: 'Earth_FinalGX' , 
                                        maxWidth: 225,
                                        fontSize: 10, 
                                        fontWeight: 700,
                                    }}>
                                        Font Size
                                        <Slider
                                        min={0}
                                        max={100}
                                        value={store.fontSizeState}
                                        style={{ color: '#000'}}
                                        onChange={this.handleFontSizeChange}
                                        />
                                        <div className='auto_row'>
                                            <div className="font_value">{store.fontSizeState}</div>
                                            <div 
                                            style={{ 
                                                backgroundColor: store.isFontSizeAuto ? '#000' : '#E4E4E4',
                                                color : store.isFontSizeAuto ? '#fff' : '#000',
                                                width: 80,
                                                height: 20, 
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius : 8,
                                                fontSize: 10,
                                            }}
                                            onClick={()=> {
                                                this._toggleFontSizeAuto();
                                            }}
                                            >
                                                {store.isFontSizeAuto ? 'Pause' : 'Play'}
                                            </div>
                                            {/* store.secondFontSize */}
                                            <div style={{ 
                                                backgroundColor: '#E4E4E4',
                                                color : '#000',
                                                width: 20,
                                                height: 20, 
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius : 10,
                                                fontSize: 10,
                                                marginLeft: 5
                                            }}
                                                onClick={()=> {
                                                    this.__toggleSecond('font/size')
                                                }}
                                            >
                                            {store.secondFontSize == 100 ? "x1"  : ""}
                                            {store.secondFontSize == 200 ? "x2"  : ""}
                                            {store.secondFontSize == 300 ? "x3"  : ""}
                                                
                                            </div>
                                            <div style={{ 
                                                backgroundColor: '#E4E4E4',
                                                color : '#000',
                                                width: 20,
                                                height: 20, 
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius : 10,
                                                fontSize: 10,
                                                marginLeft: 5
                                            }}>
                                                ?
                                            </div>
                                    </div>
                                    </div>
                                    <div 
                                    style={{  
                                        fontFamily: 'Earth_FinalGX' , 
                                        maxWidth: 225,
                                        fontSize: 10, 
                                        fontWeight: 700,
                                        marginTop: 20}}>
                                        Font Weight
                                        
                                        <Slider
                                        min={100}
                                        max={595}
                                        value={store.fontWeightState}
                                        style={{ color: '#000'}}
                                        onChangeStart={this.handleChangeStart}
                                        onChange={this.handleFontWeightChange}
                                        />
                                        <div className='auto_row'>
                                            <div className="font_value">{store.fontWeightState}</div>
                                            <div 
                                            style={{ 
                                                backgroundColor: store.isFontWeightAuto ? '#000' : '#E4E4E4',
                                                color : store.isFontWeightAuto ? '#fff' : '#000',
                                                width: 80,
                                                height: 20, 
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius : 8,
                                                fontSize: 10,
                                            }}
                                            onClick={()=> {
                                                this._toggleFontWeightAuto();
                                            }}
                                            >
                                            {store.isFontWeightAuto ? 'Pause' : 'Play'}
                                            </div>
                                            <div style={{ 
                                                backgroundColor: '#E4E4E4',
                                                color : '#000',
                                                width: 20,
                                                height: 20, 
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius : 10,
                                                fontSize: 10,
                                                marginLeft: 5
                                            }}
                                            onClick={()=> {

                                                this.__toggleSecond('font/weight')
                                            }}
                                            >
                                            {store.secondFontWeight == 100 ? "x1"  : ""}
                                            {store.secondFontWeight == 200 ? "x2"  : ""}
                                            {store.secondFontWeight == 300 ? "x3"  : ""}
                                            </div>
                                            <div style={{ 
                                                backgroundColor: '#E4E4E4',
                                                color : '#000',
                                                width: 20,
                                                height: 20, 
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius : 10,
                                                fontSize: 10,
                                                marginLeft: 5
                                            }}>
                                                ?
                                            </div>
                                        </div>
                                    </div>
                                    <div 
                                    style={{  
                                        fontFamily: 'Earth_FinalGX' , 
                                        maxWidth: 225,
                                        marginTop: 20,
                                        fontSize: 10, 
                                        fontWeight: 700,
                                        }}>
                                        Letter Spacing
                                        
                                        <Slider
                                        min={-0.1}
                                        max={0.2}
                                        value={store.fontLetterSpacingState}
                                        style={{ color: '#000'}}
                                        onChange={this.handleFontLetterSpacingChange}
                                        step={0.01}
                                        />
                                        <div className='auto_row'>

                                            <div className="font_value">
                                            {store.fontLetterSpacingState.toFixed(2)}</div>
                                            <div 
                                            style={{ 
                                                backgroundColor: store.isFontLetterSpacingAuto ? '#000' : '#E4E4E4',
                                                color : store.isFontLetterSpacingAuto ? '#fff' : '#000',
                                                width: 80,
                                                height: 20, 
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius : 8,
                                                fontSize: 10,
                                            }}
                                            onClick={()=> {
                                                this._toggleFontLetterSpacingAuto();
                                            }}
                                            >
                                            {store.isFontLetterSpacingAuto ? 'Pause' : 'Play'}
                                            </div>
                                            <div style={{ 
                                                backgroundColor: '#E4E4E4',
                                                color : '#000',
                                                width: 20,
                                                height: 20, 
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius : 10,
                                                fontSize: 10,
                                                marginLeft: 5
                                            }}
                                            onClick={()=> {
                                                this.__toggleSecond('font/letter-spacing')
                                            }}
                                            >
                                            {store.secondFontLetterSpacing == 100 ? "x1"  : ""}
                                            {store.secondFontLetterSpacing == 200 ? "x2"  : ""}
                                            {store.secondFontLetterSpacing == 300 ? "x3"  : ""}
                                            </div>
                                            <div style={{ 
                                                backgroundColor: '#E4E4E4',
                                                color : '#000',
                                                width: 20,
                                                height: 20, 
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius : 10,
                                                fontSize: 10,
                                                marginLeft: 5
                                            }}>
                                                ?
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                    style={{  
                                        fontFamily: 'Earth_FinalGX' , 
                                        maxWidth: 225,
                                        marginTop: 20,
                                        fontSize: 10, 
                                        fontWeight: 700,
                                        }}>
                                        Line Spacing
                                        <Slider
                                        min={0.85}
                                        max={1.5}
                                        value={store.fontLineSpacingState}
                                        step={0.01} 
                                        style={{ color: '#000'}}
                                        onChange={this.handleFontLineSpacingChange}
                                        />
                                        <div className='auto_row'>
                                        <div className="font_value">{store.fontLineSpacingState.toFixed(2)}</div>
                                            
                                        <div 
                                        style={{ 
                                            backgroundColor: store.isFontLineSpacingAuto ? '#000' : '#E4E4E4',
                                            color : store.isFontLineSpacingAuto ? '#fff' : '#000',
                                            width: 80,
                                            height: 20, 
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius : 8,
                                            fontSize: 10,
                                        }}
                                        
                                        onClick={()=> {
                                            this._toggleFontLineSpacingAuto();
                                        }}
                                        >
                                            {store.isFontLineSpacingAuto ? 'Pause' : 'Play'}
                                            </div>
                                            
                                            <div style={{ 
                                                backgroundColor: '#E4E4E4',
                                                color : '#000',
                                                width: 20,
                                                height: 20, 
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius : 10,
                                                fontSize: 10,
                                                marginLeft: 5
                                            }}
                                            onClick={()=> {
                                                this.__toggleSecond('font/line-spacing')
                                            }}
                                            >
                                            {store.secondFontLineSpacing == 100 ? "x1"  : ""}
                                            {store.secondFontLineSpacing == 200 ? "x2"  : ""}
                                            {store.secondFontLineSpacing == 300 ? "x3"  : ""}
                                            </div>
                                            <div style={{ 
                                                backgroundColor: '#E4E4E4',
                                                color : '#000',
                                                width: 20,
                                                height: 20, 
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius : 10,
                                                fontSize: 10,
                                                marginLeft: 5
                                            }}>
                                                ?
                                            </div>
                                            </div>
                                    </div>


                                    <div
                                    style={{  
                                        fontFamily: 'Earth_FinalGX',
                                        fontSize: 10,  
                                        marginBottom: 10, 
                                        fontWeight: 700,
                                    }}>Color
                                        <br/>
                                    </div>
                                        <ChromePicker
                                            color={ store.fontColorState }
                                            onChangeComplete={ this.handleChangeComplete }
                                            
                                        />
                                    <div 
                                            style={{ 
                                                fontFamily: 'Earth_FinalGX' , 
                                                backgroundColor:  '#E4E4E4',
                                                color : '#000',
                                                width: 80,
                                                height: 20, 
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius : 8,
                                                fontSize: 10,
                                                marginTop: 45,
                                                fontWeight: 600, 
                                            }}
                                            onClick={()=> {
                                                const icon = document.getElementsByClassName("icon");
                                                const mobile_drawer_menu = document.getElementById("mobile_drawer_menu");
                                                icon[0].classList.toggle('close');
                                                mobile_drawer_menu.classList.toggle('open');
                                                this.onPrint()
                                            }}
                                            >
                                                Print
                                            </div>
                                            <div style={{ height: 100 , }}></div>
                                    </div>

                                
                            <div className="font_display_controller"></div>
                        </div>
                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </>
        );
    }
}

export default Header;