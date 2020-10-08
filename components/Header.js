import React, { Component } from 'react';
import Router from 'next/router';
import App from 'next/app'
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import Slider from 'react-rangeslider'
import VerticalSlider from "../components/VerticalSlider";
import HorizontalSlider from "../components/HorizontalSlider";

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
            icon[0].classList.toggle('close');
            mobile_drawer_menu.classList.toggle('open');
        });
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

            this.setState({
                isFontLineSpacingAuto: !this.state.isFontLineSpacingAuto
            }) 
        } else {
            if (event == true) {

                this.setState({
                    isFontLineSpacingAuto: true
                }) 
            } else {

                this.setState({
                    isFontLineSpacingAuto: false
                }) 
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

    render() {
        
        const { path } = this.props;
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
                .mobile_drawer_menu_left {
                    width: calc(100% - 400px);
                    height: 100%;
                }

                .mobile_drawer_menu_inner {
                    width: 400px;
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
                        <div id="mobile_drawer_menu" 
                        className="mobile_drawer_menu" >
                            <div id="mobile_drawer_menu_left" style={{ width: 'calc(100% - 400px)', height: '100%'}}></div>
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
                                <div 
                                    style={{  fontFamily: 'Earth_FinalGX' , 
                                        maxWidth: 225,
                                        fontSize: 10, 
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
                                                backgroundColor: store.isFontSizeAuto ? '#000' : '#fff',
                                                color : store.isFontSizeAuto ? '#fff' : '#000',
                                                marginLeft: 20
                                            }}
                                            onClick={()=> {
                                                this._toggleFontSizeAuto();
                                            }}
                                            >Automation</div></div>
                                    </div>
                                    <div 
                                    style={{  
                                        fontFamily: 'Earth_FinalGX' , 
                                        maxWidth: 225,
                                        fontSize: 10, 
                                        marginTop: 20}}>
                                        Font Weight
                                        
                                        <Slider
                                        min={100}
                                        max={900}
                                        value={store.fontWeightState}
                                        style={{ color: '#000'}}
                                        onChangeStart={this.handleChangeStart}
                                        onChange={this.handleFontWeightChange}
                                        />
                                        <div className='auto_row'>
                                            <div className="font_value">{store.fontWeightState}</div>
                                            <div 
                                            style={{ 
                                                backgroundColor: store.isFontWeightAuto ? '#000' : '#fff',
                                                color : store.isFontWeightAuto ? '#fff' : '#000',
                                                marginLeft: 20
                                            }}
                                            onClick={()=> {
                                                this._toggleFontWeightAuto();
                                            }}
                                            >Automation</div>
                                        </div>
                                    </div>
                                    <div 
                                    style={{  
                                        fontFamily: 'Earth_FinalGX' , 
                                        maxWidth: 225,
                                        marginTop: 20,
                                        fontSize: 10, 
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
                                                backgroundColor: store.isFontLetterSpacingAuto ? '#000' : '#fff',
                                                color : store.isFontLetterSpacingAuto ? '#fff' : '#000',
                                                marginLeft: 20
                                            }}
                                            onClick={()=> {
                                                this._toggleFontLetterSpacingAuto();
                                            }}
                                            >Automation</div></div>
                                    </div>
                                    <div
                                    style={{  
                                        fontFamily: 'Earth_FinalGX' , 
                                        maxWidth: 225,
                                        marginTop: 20,

                                        fontSize: 10, 
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
                                            backgroundColor: store.isFontLineSpacingAuto ? '#000' : '#fff',
                                            color : store.isFontLineSpacingAuto ? '#fff' : '#000',
                                            marginLeft: 20
                                        }}
                                        
                                        onClick={()=> {
                                            this._toggleFontLineSpacingAuto();
                                        }}
                                        >Automation</div></div>
                                    </div>


                                    <div
                                    style={{  
                                        fontFamily: 'Earth_FinalGX',
                                        fontSize: 10,  }}>Color
                                        <br/>
                                    </div>
                                        <ChromePicker
                                            color={ store.fontColorState }
                                            onChangeComplete={ this.handleChangeComplete }
                                            
                                        />
                                </div>
                                
                            <div className="font_display_controller"></div>
                        </div>
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