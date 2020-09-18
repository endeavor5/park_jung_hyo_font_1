import React, { Component } from 'react';
import Router from 'next/router';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as store from "../common/store";

import Backdrop from './Backdrop';

@observer
class Footer extends Component {
    constructor(props) {
        super(props);
        //사용자가 입력한 props 처리
        // console.log(this.props.path);
        this.state = {
        }
    }


    _goPage = (paramRouterName, paramQuery) => {
    // import Router from 'next/router';
    Router.push({
      pathname: paramRouterName
    });
  };

  componentDidMount() {

  }

  onResize() {
    this.setState({
        layoutMode: this.getLayoutMode(),
    });
    const mobile_drawer_menu = document.getElementById("mobile_drawer_menu");
    const icon = document.getElementsByClassName("icon");
    if (this.state.layoutMode == 'desktop') {
        if (icon[0].classList.contains('close')) {
            icon[0].classList.remove('close');
        }
        if (mobile_drawer_menu.classList.contains('open')) {
            mobile_drawer_menu.classList.remove('open')
        }
    }
}


    render() {
        const { path, footerGap } = this.props;

        return (
            <footer className="footer-wrapper" style={{ marginTop : footerGap == null || footerGap === undefined ? 400 : 400 + footerGap}}>
                <div className="is_desktop_laptop" style={{ flexDirection : 'column'}}>
                <div className="footer-content footer-content-1">
                    <div 
                    className="footer-text cursor_pointer not_draggable"  
                    style={{ fontFamily: "Noto Sans KR"}}
                    // onClick={()=> {
                    //     this._goPage('/service/introduce')
                    // }}
                    >
                        회사소개
                    </div>
                    <div className="footer-text-divider"></div>
                    <div 
                    className="footer-text cursor_pointer not_draggable"
                    style={{ fontFamily: "Noto Sans KR"}}
                    // onClick={()=> {
                    //     this._goPage('/service/privacy')
                    // }}
                    >
                        개인정보처리방침
                    </div>
                    <div className="footer-text-divider"></div>
                    <div 
                    className="footer-text cursor_pointer not_draggable" 
                    style={{ fontFamily: "Noto Sans KR"}}
                    onClick={()=> {
                        this._goPage('/service/faq')
                    }}
                    >자주묻는질문</div>
                    <div className="footer-text-divider"></div>
                    <div 
                    className="footer-text cursor_pointer not_draggable" 
                    style={{ fontFamily: "Noto Sans KR"}}
                    // onClick={()=> {
                    //     this._goPage('/service/ask')
                    // }}
                    >고객센터</div>
                </div>
                <div className="footer-content footer-content-2">
                    <div className="footer-text not_draggable _is_padding_laptop_tablet_phone_xsmall_xxsmall" style={{ fontFamily: "Noto Sans KR", 
                        verticalAlign: 'middle'}}>
                        해당 페이지의 저작권은 제공처에 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 처벌될 수 있습니다.  <br/>
                        Park Jung Hyo.
                        Copyright ⓒ 2020. All Rights Reserved.
                    </div>

                </div>
            
                <div style={{height : 80 }}></div>
                </div>
                {/* MOBILE */}
                <div 
                className="is_tablet_phone_xsmall_xxsmall" 
                 style={{ flexDirection : 'column', alignItems : 'flex-start', justifyContent: 'flex-start'}}
                >
                <div 
                    className="footer-text cursor_pointer not_draggable"  
                    style={{ 
                        fontFamily: "Noto Sans KR",
                        fontSize : 14,
                        marginTop: 32,
                        marginLeft: 24,
                    }}
                    // onClick={()=> {
                    //     this._goPage('/service/introduce')
                    // }}
                    >
                        회사소개
                    </div>
                    <div className="footer-text-divider"></div>
                    <div 
                    className="footer-text cursor_pointer not_draggable"
                    style={{ 
                        fontFamily: "Noto Sans KR",
                        fontSize : 14,
                        marginTop: 12,
                        marginLeft: 24,
                    }}
                    // onClick={()=> {
                    //     this._goPage('/service/privacy')
                    // }}
                    >
                        개인정보처리방침
                    </div>
                    <div className="footer-text-divider"></div>
                    <div 
                    className="footer-text cursor_pointer not_draggable" 
                    style={{ 
                        fontFamily: "Noto Sans KR",
                        fontSize : 14,
                        marginTop: 12,
                        marginLeft: 24,
                    }}
                    // onClick={()=> {
                    //     this._goPage('/service/faq')
                    // }}
                    >자주묻는질문</div>
                    <div className="footer-text-divider"></div>
                    <div 
                    className="footer-text cursor_pointer not_draggable" 
                    style={{ 
                        fontFamily: "Noto Sans KR",
                        fontSize : 14,
                        marginTop: 12,
                        marginLeft: 24,
                    }}
                    // onClick={()=> {
                    //     this._goPage('/service/ask')
                    // }}
                    >고객센터</div>

                    <div className="footer-text not_draggable" 
                        style={{ 
                            height: 130,
                            fontFamily: "Noto Sans KR", 
                            fontSize : 12,
                            marginTop: 24,
                            paddingLeft: 24,
                            paddignRight: 24, 
                            textAlign: "left"

                        }}>
                    </div>

                    <div style={{height : 32 }}></div>
                </div>

            </footer>
        );
    }
}
export default Footer;