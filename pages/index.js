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
            input_content : 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz ',

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

        const prefix = process.env.NODE_ENV === 'production' ? 'https://endeavor5.github.io/park_jung_hyo_font_1' : '';
    

        return (
            <>
            <Header prefix={prefix}></Header>
                <div className=" " style={{ width: '100%', marginTop: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <div className="intro_text">
                    "EARTH" Font Designed by Park Jung Hyo. <br/>in Seoul / South Korea.<br/>
                    <br/> 
                    </div><div className="intro_text_2">
                        Website Desinged, Developed and Supported <br/>
                        By Studio SEON / OFFICE 201c <br/>
                        in Seoul/KR
                        (OH SEONG JIN)
                    </div>
                    <div className="font_display_container"  style={{  marginTop: 40, }}>

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
                                        fontFamily: 'Earth_FinalGX' ,
                                    }}
                                    onChange={e => {
                                    this.handleChange('input_content', e);
                                    }}
                                /> 
                        </div>
                    </div>
                <div className="intro_text" style={{ marginTop : 100}}>

                    "EARTH" 
                    <br/> 
                    </div>
                    <div className="intro_text_2">
                    박정효 / JH P / wjdgym@gmail.com
                    <br/>
                    감사합니다.<br/> <br/> <br/> 
                    </div>
            <div style={{ height: 150 }}></div>

            <div className="intro_text" style={{ marginTop : 100}}>
                     What is Variable Font
                    </div>
                    <br/> 
                    <div  className="intro_text_2">

                    OpenType variable fonts are an adaptation of Apple's TrueType GX font variations to OpenType, with integration into key aspects of the OpenType format including OpenType Layout tables and both TrueType and CFF glyph outline formats. 
                    It also surpasses TrueType GX by providing better interoperability, both between different fonts, and between variable fonts and font-formatting specifications such as those found in Cascading Style Sheets. The technology allows software to access any design instance for a continuous range of designs defined within the font. 
                    When a specific design instance has been selected, the glyph outlines or other data values for that design instance are computed as font data is being processed during text layout and rasterization.
                                    
                    The technology uses interpolation and extrapolation mechanisms that have been supported in font-development tools and used by font designers for many years. In that paradigm, the font designer creates a variable design, 
                    but then chooses specific instances to generate as static, non-variable fonts that get distributed to customers. With variable fonts, however, the font produced and distributed by the font designer can have built-in variability, and the interpolation mechanisms can now be built into operating systems 
                    and Web browsers or other applications, with specific design instances selected at time of use.

                    One of the key benefits of the technology is that it can significantly reduce the combined size of font data whenever multiple styles are in use. 
                    On the Web, this may allow a site to use more font styles while at the same time reducing page load times. A further benefit is that it gives access to a continuous range of style variations, 
                    which can provide benefits for responsive design.

                    The technology has been compared to Adobe's multiple master fonts (MM fonts) technology, also from the 1990s, which used on-the-fly generation of font designs from master files by interpolation and extrapolation.
                    Multiple master fonts, however, required the user to generate a specific "instance" of the font for particular variation-axis values before it could be used. This is not required for OpenType variable fonts, however: named or arbitrary design instances can be selected and used on demand.

                    </div>
                </div>
            <div style={{ height: 10 }}></div>
            <Footer prefix={prefix} path={'/'} footerGap={this.state.footerGap}/>

            <style 
            jsx="true"
            global="true"
            suppressHydrationWarning>
                {`
                .intro_text {
                    font-family : 'Noto Sans KR';
                    text-align: center;
                    font-size : 10px;
                    width: calc(100% - 40px);
                    max-width: 1024px;
                    align-self: center;
                    justify-content: center;
                    display : flex;
                }
                .intro_text_2 {
                    font-family : 'Noto Sans KR';
                    text-align: center;
                    color : #a1a1a1;
                    font-size : 10px;
                    max-width: 1024px;
                    width: calc(100% - 40px);
                    align-self: center;
                    justify-content: center;
                    display : flex;
                }
                .intro_text_3 {
                    font-family : 'Noto Sans KR';
                    text-align: center;
                    color : #eaeaea;
                    font-size : 10px;
                    width: calc(100% - 40px);
                    max-width: 1024px;
                    align-self: center;
                    justify-content: center;
                    display : flex;
                }

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
                        resize: none;
                        border : none;
                        outline : none;
                        overflow-x : hidden;
                    }
                    .font_display_container {
                        width: calc(100% - 40px);
                        height: auto;
                        min-height: 600px;
                        display: flex;
                        align-self: center;
                        align-items: center;
                        justify-content: center;
                        overflow-x : hidden;
                    }

                    .font_controller_area {
                        width: 300px;
                        min-height: 600px;
                        height: auto;
                        border: 1px solid #aaa;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow-x : hidden;
                        
                    }

                    .font_display_area {
                        width: calc(100% - 40px);
                        max-width: 1024px;
                        min-height: 600px;
                        border: 1px solid #aaa;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding : 10px;
                        overflow : scroll;
                    }
                    .font_display_inner {

                        width: calc(100% - 40px);
                        height: calc(100% - 40px);
                        border: 1px solid #aaa;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding : 40px;
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