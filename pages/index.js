import React, { Component } from 'react';
import { observable, toJS } from 'mobx';
import { observer } from 'mobx-react';
import Router from 'next/router';
import Header from "../components/Header";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import store from "../common/store";



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
    handleChange = (type , e) => {
        if (type == 'input_content') {
            this.setState({
                input_content :  e.target.value
            })
        }
    }

    render() {

        const prefix = process.env.NODE_ENV === 'production' ? 'http://endeavor5.github.io/park_jung_hyo_font_1' : '';
    

        return (
            <>
            <Header prefix={prefix}></Header>
                <div className=" " style={{ width: '100%', marginTop: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>

                    <div className="font_display_container  max-width-wrapper"  style={{  marginTop: 40, }}>

                        <div className="font_display_area" style={{  
                            fontSize : store.fontSizeState,
                            fontWeight: store.fontWeightState,}}>
                            <textarea
                                    className="input_content"
                                    placeholder="Font Contents"
                                    name="input_content"
                                    value={this.state.input_content}
                                    style={{  
                                        fontSize : store.fontSizeState, 
                                        fontWeight: store.fontWeightState,
                                        color: store.fontColorState,
                                        letterSpacing: store.fontLetterSpacingState, 
                                        lineHeight: store.fontLineSpacingState,
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
            <Footer prefix={prefix} path={'/'} footerGap={this.state.footerGap}/>

            <style 
            jsx="true"
            global="true"
            suppressHydrationWarning>
                {`
                .font_value {
                    width: calc(100% - 130px);
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