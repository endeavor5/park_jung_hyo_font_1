import React, { Component } from 'react';
import { observable, toJS } from 'mobx';
import { observer } from 'mobx-react';
import Router from 'next/router';
import Slider from 'react-rangeslider'
import Header from "../components/Header";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import VerticalSlider from "../components/VerticalSlider";
import HorizontalSlider from "../components/HorizontalSlider";

import { ChromePicker } from 'react-color'; 



@observer
class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
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

    }



    handleChange = (paramName, event) => {
        if (paramName == 'input_content') {
            this.setState({
                input_content: event.target.value,
                errorMessage: ''
            });
        }

    };

    handleChangeComplete = (color) => {
        this.setState({ fontColorState: color.hex });
      };
    

      handleFontSizeChange = event => {
        //   console.log(event.target.value);
        this.setState({
            fontSizeState: event
        })
      };
      handleFontWeightChange = value => {
        this.setState({
            fontWeightState: value
        })
      };


      handleFontLetterSpacingChange = event => {
        //   console.log(event.target.value);
        this.setState({
            fontLetterSpacingState: event
        })
      };


      handleFontLineSpacingChange = event => {
        //   console.log(event.target.value);
        this.setState({
            fontLineSpacingState: event
        })
      };

      _toggleFontSizeAuto  = event => {

        if (event == null || event === undefined) {

            this.setState({
                isFontSizeAuto: !this.state.isFontSizeAuto
            }) 
        } else {
            if (event == true) {

                this.setState({
                    isFontSizeAuto: true
                }) 
            } else {

                this.setState({
                    isFontSizeAuto: false
                }) 
            }
        } 
      }


      _toggleFontWeightAuto  = event => {

        if (event == null || event === undefined) {

            this.setState({
                isFontWeightAuto: !this.state.isFontWeightAuto
            }) 
        } else {
            if (event == true) {

                this.setState({
                    isFontWeightAuto: true
                }) 
            } else {

                this.setState({
                    isFontWeightAuto: false
                }) 
            }
        } 
      }

      _toggleFontLetterSpacingAuto  = event => {

        if (event == null || event === undefined) {

            this.setState({
                isFontLetterSpacingAuto: !this.state.isFontLetterSpacingAuto
            }) 
        } else {
            if (event == true) {

                this.setState({
                    isFontLetterSpacingAuto: true
                }) 
            } else {

                this.setState({
                    isFontLetterSpacingAuto: false
                }) 
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



    render() {
        const { 
            fontSizeState, 
            fontWeightState, 
            fontLetterSpacingState,
            fontLineSpacingState,
            fontColorState,  
            isFontSizeAuto,
            isFontWeightAuto,
            isFontLetterSpacingAuto,
            isFontLineSpacingAuto,
            input_content } = this.state;
        return (
            <>
            <Header></Header>
                <div className=" " style={{ width: '100%', marginTop: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <div className="font_display_container  max-width-wrapper">

                        <div className="font_display_area" style={{  fontSize : 20,display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                                <div className="left " >
                                <div className="font_display_control_label" 
                                    style={{ 
                                        fontFamily: 'Earth_FinalGX' , width: 'calc(100% - 40px)'}}>
                                        Font Size
                                        {/* <br/>
                                        <input type="range" id="vol" name="vol" min="0" max="50" 
                                        style={{ width: '100%'}}
                                        value={fontSizeState} 
                                        onChange={e=>this.handleFontSizeChange(e)}
                                        />     */}


                                        <Slider
                                        min={0}
                                        max={100}
                                        value={fontSizeState}
                                        style={{ color: '#000'}}
                                        onChange={this.handleFontSizeChange}
                                        />
                                        <div className='auto_row'>
                                            <div className="font_value">{fontSizeState}</div>
                                            <div className="auto_buttton cursor_pointer not_draggable" 
                                            style={{ 
                                                backgroundColor: isFontSizeAuto ? '#000' : '#fff',
                                                color : isFontSizeAuto ? '#fff' : '#000',
                                                marginLeft: 20
                                            }}
                                            onClick={()=> {
                                                this._toggleFontSizeAuto();
                                            }}
                                            >Automation</div></div>
                                    </div>
                                    <div className="font_display_control_label" 
                                    style={{  
                                        fontFamily: 'Earth_FinalGX' , width: 'calc(100% - 40px)', marginTop: 100}}>
                                        Font Weight
                                        
                                        <Slider
                                        min={100}
                                        max={900}
                                        value={fontWeightState}
                                        style={{ color: '#000'}}
                                        onChangeStart={this.handleChangeStart}
                                        onChange={this.handleFontWeightChange}
                                        />
                                        <div className='auto_row'>
                                            <div className="font_value">{fontWeightState}</div>
                                            <div 
                                            className="auto_buttton cursor_pointer not_draggable" 
                                            style={{ 
                                                backgroundColor: isFontWeightAuto ? '#000' : '#fff',
                                                color : isFontWeightAuto ? '#fff' : '#000',
                                                marginLeft: 20
                                            }}
                                            onClick={()=> {
                                                this._toggleFontWeightAuto();
                                            }}
                                            >Automation</div>
                                        </div>
                                    </div>
                                    <div className="font_display_control_label" 
                                    style={{  
                                        fontFamily: 'Earth_FinalGX' , width: 'calc(100% - 40px)', marginTop: 100}}>
                                        Letter Spacing
                                        
                                        <Slider
                                        min={-0.1}
                                        max={0.2}
                                        value={fontLetterSpacingState}
                                        style={{ color: '#000'}}
                                        onChange={this.handleFontLetterSpacingChange}
                                        step={0.01}
                                        />
                                        <div className='auto_row'>

                                            <div className="font_value">
                                            {fontLetterSpacingState.toFixed(2)}</div>
                                            <div 
                                            className="auto_buttton cursor_pointer not_draggable" 
                                            style={{ 
                                                backgroundColor: isFontLetterSpacingAuto ? '#000' : '#fff',
                                                color : isFontLetterSpacingAuto ? '#fff' : '#000',
                                                marginLeft: 20
                                            }}
                                            onClick={()=> {
                                                this._toggleFontLetterSpacingAuto();
                                            }}
                                            >Automation</div></div>
                                    </div>
                                    <div className="font_display_control_label" 
                                    style={{  
                                        fontFamily: 'Earth_FinalGX' , width: 'calc(100% - 40px)', marginTop: 100}}>
                                        Line Spacing
                                        <Slider
                                        min={0.85}
                                        max={1.5}
                                        value={fontLineSpacingState}
                                        step={0.01} 
                                        style={{ color: '#000'}}
                                        onChange={this.handleFontLineSpacingChange}
                                        />
                                        <div className='auto_row'>
                                            
                                        <div className="font_value">{fontLineSpacingState.toFixed(2)}</div>
                                            
                                        <div 
                                        className="auto_buttton cursor_pointer not_draggable" 
                                        style={{ 
                                            backgroundColor: isFontLineSpacingAuto ? '#000' : '#fff',
                                            color : isFontLineSpacingAuto ? '#fff' : '#000',
                                            marginLeft: 20
                                        }}
                                        
                                        onClick={()=> {
                                            this._toggleFontLineSpacingAuto();
                                        }}
                                        >Automation</div></div>
                                    </div>

                                    {/* <div className="font_display_control_label" 
                                    style={{  fontFamily: "Noto Sans KR", width: 'calc(100% - 40px)', marginTop: 100}}>
                                        애니메이션 - Animation

                                        <Slider
                                        min={0}
                                        max={100}
                                        value={fontAnimationState}
                                        style={{ color: '#000'}}
                                        onChangeStart={this.handleChangeStart}
                                        onChange={this.handleFontAnimationChange}
                                        />
                                        <div className='value'>{fontAnimationState}</div>

                                    </div> */}
                                </div>
                                <div className="right " >

                                    <div className="font_display_control_label color_container_responsive_margin" 
                                    style={{  
                                        fontFamily: 'Earth_FinalGX' }}>Color
                                        <br/>
                                    </div>
                                        <ChromePicker
                                            color={ this.state.fontColorState }
                                            onChangeComplete={ this.handleChangeComplete }
                                            
                                        />
                                    
                                </div>
                                
                            <div className="font_display_controller"></div>
                        </div>
                    </div>

                    <div className="font_display_container  max-width-wrapper"  style={{  marginTop: 40, }}>

                        <div className="font_display_area" style={{  
                            fontSize : fontSizeState,
                            fontWeight: fontWeightState,}}>
                            <textarea
                                    className="input_content"
                                    placeholder="Font Contents"
                                    name="input_content"
                                    value={this.state.input_content}
                                    style={{  
                                        fontSize : fontSizeState, 
                                        fontWeight: fontWeightState,
                                        color: fontColorState,
                                        letterSpacing: fontLetterSpacingState, 
                                        lineHeight: fontLineSpacingState,
                                        wordWrap: 'wrap',
                                        whiteSpace: 'pre-wrap',
                                        fontFamily: 'Earth_FinalGX' 
                                    }}
                                    onChange={e => {
                                    this.handleChange('input_content', e);
                                    }}
                                /> 
                        </div>
                    </div>
                </div>
            <div style={{ height: 400 }}></div>
            <Footer path={'/'} footerGap={this.state.footerGap}/>

            <style 
            jsx="true"
            global="true"
            suppressHydrationWarning>
                {`
                .font_value {
                    width: 270px;
                }
                .auto_row {
                    width: 100%;
                    height: 40px;
                    display: inline-flex;
                    align-items:center;
                }
                .auto_buttton {
                    width: 100px;
                    height: 35px;
                    font-size: 14px;
                    border: 1px solid #000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    

                }
                .rangeslider-horizontal .rangeslider__fill {
                    height: 100%;
                    background-color: #000;
                    border-radius: 10px;
                    top: 0;
                }
                    div.left {
                    width: 50%;
                    float: left;
                    box-sizing: border-box;
                    }
                    div.right {
                    width: 50%;
                    float: right;
                    box-sizing: border-box;
                    }
                    .font_display_control_label {
                        height: 50px;
                        color : #0a0a0a;
                        width: 100%;
                        align-items: center;
                        justify-content: flex-start;
                        white-space : nowrap;
                    }
                    .input_wrapper {
                        width: 100%;
                        height: 100%;
                        border: solid 1px #eaeaea;
                        background-color: #ffffff;
                        display: flex;
                        align-items: center;
                    }
                    .input_content {
                        width : 100%;
                        height: 100%;
                        min-height: 600px;
                        margin-left: 16px;
                        resize: none;
                        border : none;
                        outline : none;
                    }
                    .font_display_container {
                        width: calc(100% - 40px);
                        min-height: 600px;
                        display: flex;
                        align-self: center;
                        align-items: center;
                        justify-content: center;
                    }

                    .font_controller_area {
                        width: 300px;
                        min-height: 600px;
                        border: 1px solid #aaa;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        
                    }

                    .font_display_area {
                        width: calc(100% - 320px);
                        min-height: 600px;
                        border: 1px solid #aaa;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding : 20px;
                
                    }
                    .font_display_inner {

                        width: calc(100% - 40px);
                        height: calc(100% - 40px);
                        border: 1px solid #aaa;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding : 20px;
                    }
                    .font_input_area {
                        width: calc(100% - 20px);
                        height: calc(100% - 20px);
                        display: flex;
                    }
                    /* Extra small devices (phones, 600px and down) */
                    @media only screen and (max-width: 600px) {
                    /* ... */
                        .font_display_area {
                            flex-direction: column;
                        }
                        .color_container_responsive_margin {
                            margin-top: 100px;
                        }
                    }
                    /* Small devices (portrait tablets and large phones, 600px and up) */
                    @media only screen and (min-width: 600px) {
                    /* ... */
                    .font_display_area {
                        flex-direction: column;
                    }
                    .color_container_responsive_margin {
                        margin-top: 100px;
                    }
                    }
                    /* Medium devices (landscape tablets, 768px and up) */
                    @media only screen and (min-width: 768px) {
                    /* ... */
                    .font_display_area {
                        flex-direction: column;
                    }
                    .color_container_responsive_margin {
                        margin-top: 100px;
                    }
                    }
                    /* Large devices (laptops/desktops, 992px and up) */
                    @media only screen and (min-width: 992px) {
                    /* ... */
                    .font_display_area {
                        flex-direction: row;
                    }
                    .color_container_responsive_margin {
                        margin-top: 0px;
                    }
                    }
                    /* Extra large devices (large laptops and desktops, 1200px and up) */
                    @media only screen and (min-width: 1200px) {
                    /* ... */
                    .font_display_area {
                        flex-direction: row;
                    }
                    .color_container_responsive_margin {
                        margin-top: 0px;
                    }
                    }
                `}
            </style>
            </>
        )
    }
}

export default Index;