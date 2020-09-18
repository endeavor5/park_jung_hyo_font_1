import React, { Component } from 'react';
import Router from 'next/router';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as store from "../common/store";
import * as FaIcons from "react-icons/fa";

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
            </>
        );
    }
}
export default Header;