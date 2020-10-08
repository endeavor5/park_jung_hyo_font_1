import React, { Component } from 'react';
import Router from 'next/router';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import Backdrop from './Backdrop';

@observer
class Header extends Component {
    constructor(props) {
        super(props);
        //사용자가 입력한 props 처리
        // console.log(this.props.path);
        this.state = {
        }
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
        const { path, tab } = this.props;

        return (
            <>
            {/* 서브 메뉴 / 카테고리 */}
            <div className="sub-nav-wrapper">
                <div className="sub-nav">
                    <div className="sub-menu-item margin-right-32 cursor_pointer not_draggable" 
                    style={{ 
                    fontFamily: "Noto Sans KR",
                    color : path === '/mypage/info' ? '#f84300' : 'rgba(0, 0, 0, 0.6)',
                    fontWeight: path === '/mypage/info'? '600' : '500',
                    textDecoration: path === '/mypage/info'? 'underline' : 'none'
                    }}
                    onClick={()=> {
                        this._goPage('/mypage/info', 1)
                    }}
                    >파트너스 정보</div>
                    <div className="sub-menu-item cursor_pointer not_draggable" 
                    style={{ 
                    fontFamily: "Noto Sans KR",
                    color : path === '/mypage/portfolio' ? '#f84300' : 'rgba(0, 0, 0, 0.6)',
                    fontWeight: path === '/mypage/portfolio' ? '600' : '500',
                    textDecoration: path === '/mypage/portfolio'  ? 'underline' : 'none'
                    }}
                    onClick={()=> {
                        this._goPage('/mypage/portfolio', 1)
                    }}
                    >파트너스 포트폴리오</div>
                </div>
            </div>
            </>
        );
    }
}
export default Header;