import React, { Component } from 'react';
import Router from 'next/router';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import store from "../common/store";
import Document, { Head, Main, NextScript } from 'next/document';
import Footer from '../components/Footer';

class CustomDocument extends Document {

    constructor(props) {
        super(props);
        this.state = {
            sample_images : [
                'sample_001.jpg',
            ]
        };
    }

    componentDidMount() {

    }


    _goPage = (paramRouterName, paramQuery) => {
        // import Router from 'next/router';
        // current page -> reload page
        if (paramRouterName === '/') {
            Router.push({
                pathname: paramRouterName
            });
            return;
        }
        if (window.location.href.indexOf(paramRouterName) > -1) {
            window.location.reload();
            return;
        } else {
            Router.push({
                pathname: paramRouterName
            });
            return;
        }
    };


    render() {
        return (
            <html>
                <Head>
                    <title>Park Jung Hyo.</title>
                    <meta
                        name="description"
                        content="Park Jung Hyo."
                    />
                    <meta property="og:title" content={`Park Jung Hyo.`} />
                    <link rel="stylesheet" type="text/css" href="/static/css/font.css" />
                    <link rel="stylesheet" href="https://unpkg.com/react-rangeslider/umd/rangeslider.min.css" />
                </Head>
                <body>
                    {/* Header on Each files */}
                    <div className="container">
                        <Main />
                    </div>
                    <NextScript />
                    <style 
                        jsx="true"
                        global="true" 
                        suppressHydrationWarning>{`
                        @font-face {
                            font-family: "Earth_FinalGX";
                            src: url('https://drive.google.com/file/d/1kY12bdiHZHlIR_wX3bgxhovWF_rfM4NH/view?usp=sharing') format("truetype");
                          }
                .scrollbar_hidden {
                    -ms-overflow-style: auto; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
                .scrollbar_hidden::-webkit-scrollbar {
                    display: none; /* Chrome, Safari, Opera*/
                }
                    input::placeholder{
                        color: rgba(0,0,0,0.4);
                    }
                    @font-face { 
                        font-family: 'GmarketSansBold'; 
                        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff'); 
                        font-weight: normal; font-style: normal; 
                    }
                    .popup_overlay {
                        width: 100%;
                        display: flex;
                        z-index: 9999;
                        position: absolute;
                        align-items: center;
                        justify-content: center;

                        top: 0;
                        bottom:0;
                    }
                    .popup_input_wrapper {
                        width: 100%;
                        height: 48px;
                        border: solid 1px #eaeaea;
                        background-color: #ffffff;
                        display: flex;
                        align-items: center;
                    }
                    .popup_input_content {
                        width : 556px;
                        height: 30px;
                        border: none;
                        outline: none;
                        margin-left: 16px;
                    }

                    .content-max-width-class {
                        max-width: 1200px;
                        overflow-y: hidden;
                    }
                    .is_desktop_laptop_tablet_phone_xsmall_xxsmall {
                        display: flex;
                    }
                    .is_desktop_laptop_tablet_phone_xsmall {
                        display: flex;
                    }
                    .is_desktop_laptop_tablet_phone {
                        display: flex;
                    }
                    .is_desktop_laptop_tablet {
                        display: flex;
                    }
                    .is_desktop_laptop {
                        display: flex;
                    }
                    .is_desktop {
                        display: flex;
                    }
                    .is_laptop_tablet_phone_xsmall_xxsmall {
                        display: none;
                    }
                    .is_laptop_tablet_phone_xsmall {
                        display: none;
                    }
                    .is_laptop_tablet_phone {
                        display: none;
                    }
                    .is_laptop_tablet {
                        display: none;
                    }
                    .is_laptop {
                        display: none;
                    }
                    .is_tablet_phone_xsmall_xxsmall {
                        display: none;
                    }
                    .is_tablet_phone_xsmall {
                        display: none;
                    }
                    .is_tablet_phone {
                        display: none;
                    }
                    .is_tablet {
                        display: none;
                    }
                    .is_phone_xsmall_xxsmall {
                        display: none;
                    }
                    .is_phone_xsmall {
                        display: none;
                    }
                    .is_phone {
                        display: none;
                    }
                    .is_xsmall_xxsmall {
                        display: none;
                    }
                    .is_xsmall {
                        display: none;
                    }
                    .is_xxsmall {
                        display: none;
                    }
                    ._is_padding_laptop_tablet_phone_xsmall_xxsmall {
                        padding-left: 20px;
                        padding-right: 20px;
                    }


                    body {
                        font-family: "Noto Sans KR", sans-serif !important;
                        margin : 0;
                    }
                    .footer-text-divider {
                        width: 1px;
                        height: 12px;
                        background-color: #eaeaea;
                        margin-left: 10px;
                        margin-right: 10px;
                    }
                    .footer-text {
                        font-size: 12px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.5;
                        letter-spacing: -0.48px;
                        text-align: center;
                        color: rgba(0, 0, 0, 0.6);
                        word-wrap: keep-all;
                        z-index: 100;
                    }
                    .footer-content {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .footer-content-1 {
                        margin-top: 80px;
                    }
                    .footer-content-2 {
                        margin-top: 24px;
                    }
                    
                    .logo {
                        width: 140px;
                        height: 16px;
                        font-family: GmarketSansBold;
                        background: url(/static/images/logo_top_left.png);
                        object-fit: cover; 
                        background-repeat:no-repeat;
                        background-position: center center;
                    }
                    a {

                        text-decoration: none;
                    }
                    .footer-wrapper {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        height: auto;
                        background-color: #fafafa;
                        margin-top: 120px;
                    }

                    .cursor_pointer {
                        cursor: pointer;
                    }
                    .not_draggable {
                        user-drag: none;
                        user-select: none;
                        -moz-user-select: none;
                        -webkit-user-drag: none;
                        -webkit-user-select: none;
                        -ms-user-select: none;
                    }
                    #header {
                        width: 100%;
                        opacity: 1;
                        visibility: visible;
                        transition: .3s all ease;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-bottom: 1px solid #f0f0f0;
                    }
                    .max-width-wrapper {
                        max-width: 1200px;
                    }

                    #header .header-wrapper {
                        width: 100%;
                        height: 72px;
                        align-items: center;
                        padding-left: 20px;
                        padding-right: 20px;
                        max-width: 1200px;
                    }

                    .header-left {
                        width: 50%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content : flex-start;
                    }
                    .header-right {
                        width: 50%;
                        height: 100%;
                        right: 0;
                        float : right;
                        display: flex;
                        align-items: center;
                        justify-content : flex-end;
                    }
                    .header-center-content {
                        width: auto;
                        position: absolute;
                        margin-left : 200px;
                        display: flex;
                    }
                    .menu-item {
                        margin-right: 32px;
                        color: rgba(0, 0, 0, 0.6);
                        font-family: Noto Sans KR
                        white-space:nowrap;
                    }
                    .menu-item:hover { 
                        color : #f84300;
                        font-weight: bold;
                        text-decoration: underline;
                    }
                    .cs-item {
                        color: rgba(0, 0, 0, 0.6);
                        font-family: Noto Sans KR;
                        white-space:nowrap;
                    }
                    .content-input-max-width-class-2 {
                       
                    }
                    .overflow_x_scroll {
                        overflow-x : scroll;
                    }

                    .overflow_y_scroll {
                        overflow-y : scroll;
                    }
                        
                    /* Extra x-small devices (phones, 400px and down) */
                    @media only screen and (max-width: 400px) {
                        /* ... */

                        .is_desktop_laptop_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet_phone_xsmall {
                            display: none;
                        }
                        .is_desktop_laptop_tablet_phone {
                            display: none;
                        }
                        .is_desktop_laptop_tablet {
                            display: none;
                        }
                        .is_desktop_laptop {
                            display: none;
                        }
                        .is_desktop {
                            display: none;
                        }
                        .is_laptop_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_laptop_tablet_phone_xsmall {
                            display: none;
                        }
                        .is_laptop_tablet_phone {
                            display: none;
                        }
                        .is_laptop_tablet {
                            display: none;
                        }
                        .is_laptop {
                            display: none;
                        }
                        .is_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_tablet_phone_xsmall {
                            display: none;
                        }
                        .is_tablet_phone {
                            display: none;
                        }
                        .is_tablet {
                            display: none;
                        }
                        .is_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_phone_xsmall {
                            display: none;
                        }
                        .is_phone {
                            display: none;
                        }
                        .is_xsmall_xxsmall {
                            display: none;
                        }
                        .is_xsmall {
                            display: none;
                        }
                        .is_xxsmall {
                            display: none;
                        }


                        .header-left {
                            width: 50%;
                        }
                        .header-right {
                            width: 50%;
                        }

                        .content-max-width-class {
                            max-width: 400px;
                        }
                        .is_over_1200_flex_row_under_flex_column {
                            flex-direction: column;
                        }
                        .is_over_1200_width_50_percent_under_100_percent {
                            width: 100%;
                        }
                        ._is_padding_laptop_tablet_phone_xsmall_xxsmall {
                            padding-left: 20px;
                            padding-right: 20px;
                        }
                        ._is_margin_laptop_tablet_phone_xsmall_xxsmall {
                            margin-left: 20px;
                            margin-right: 20px;
                        }
                        ._is_padding_xxsmall {
                            padding-left: 20px;
                            padding-right: 0px;
                        }
                        ._wrapped_second_column_margin_top {
                            margin-top: 20px;
                        }
                        .content-input-max-width-class-2 {
                          max-width: 240px;
                        }
                        .popup_close_row {
                            display: flex;
                        }
                    }
                    /* Extra small devices (phones, 400px and down) */
                    @media only screen and (min-width: 400px) {
                        /* ... */
                        
                        .is_desktop_laptop_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet_phone {
                            display: none;
                        }
                        .is_desktop_laptop_tablet {
                            display: none;
                        }
                        .is_desktop_laptop {
                            display: none;
                        }
                        .is_desktop {
                            display: none;
                        }
                        .is_laptop_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_laptop_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_laptop_tablet_phone {
                            display: none;
                        }
                        .is_laptop_tablet {
                            display: none;
                        }
                        .is_laptop {
                            display: none;
                        }
                        .is_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_tablet_phone {
                            display: none;
                        }
                        .is_tablet {
                            display: none;
                        }
                        .is_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_phone_xsmall {
                            display: flex;
                        }
                        .is_phone {
                            display: none;
                        }
                        .is_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_xsmall {
                            display: flex;
                        }
                        .is_xxsmall {
                            display: none;
                        }
                        .header-left {
                            width: 50%;
                        }
                        .header-right {
                            width: 50%;
                        }
                        .content-max-width-class {
                            max-width: 400px;
                        }
                        ._is_padding_laptop_tablet_phone_xsmall_xxsmall {
                            padding-left: 20px;
                            padding-right: 20px;
                        }
                        ._is_margin_laptop_tablet_phone_xsmall_xxsmall {
                            margin-left: 20px;
                            margin-right: 20px;
                        }
                        .is_over_1200_flex_row_under_flex_column {
                            flex-direction: column;
                        }
                        .is_over_1200_width_50_percent_under_100_percent {
                            width: 100%;
                        }
                        ._is_padding_xxsmall {
                            padding-left: 0px;
                            padding-right: 0px;
                        }
                        ._wrapped_second_column_margin_top {
                            margin-top: 20px;
                        }
                        .content-input-max-width-class-2 {
                          max-width: 380px;
                        }
                        .popup_close_row {
                            display: flex;
                        }
                    }
                    /* Small devices (portrait tablets and large phones, 600px and up) */
                    @media only screen and (min-width: 600px) {
                        /* ... */

                        .is_desktop_laptop_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet_phone {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet {
                            display: none;
                        }
                        .is_desktop_laptop {
                            display: none;
                        }
                        .is_desktop {
                            display: none;
                        }
                        .is_laptop_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_laptop_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_laptop_tablet_phone {
                            display: flex;
                        }
                        .is_laptop_tablet {
                            display: none;
                        }
                        .is_laptop {
                            display: none;
                        }
                        .is_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_tablet_phone {
                            display: flex;
                        }
                        .is_tablet {
                            display: none;
                        }
                        .is_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_phone_xsmall {
                            display: flex;
                        }
                        .is_phone {
                            display: flex;
                        }
                        .is_xsmall_xxsmall {
                            display: none;
                        }
                        .is_xsmall {
                            display: none;
                        }
                        .is_xxsmall {
                            display: none;
                        }
                        .header-left {
                            width: 50%;
                        }
                        .header-right {
                            width: 50%;
                        }
                        .content-max-width-class {
                            max-width: 600px;
                        }
                        ._is_padding_laptop_tablet_phone_xsmall_xxsmall {
                            padding-left: 20px;
                            padding-right: 20px;
                        }
                        ._is_margin_laptop_tablet_phone_xsmall_xxsmall {
                            margin-left: 20px;
                            margin-right: 20px;
                        }
                        .is_over_1200_flex_row_under_flex_column {
                            flex-direction: column;
                        }
                        .is_over_1200_width_50_percent_under_100_percent {
                            width: 100%;
                        }
                        ._is_padding_xxsmall {
                            padding-left: 0px;
                            padding-right: 0px;
                        }
                        ._wrapped_second_column_margin_top {
                            margin-top: 20px;
                        }
                        .content-input-max-width-class-2 {
                          max-width: 500px;
                        }
                        .popup_close_row {
                            display: flex;
                        }
                    }
                    /* Medium devices (landscape tablets, 768px and up) */
                    @media only screen and (min-width: 768px) {
                        /* ... */

                        .is_desktop_laptop_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet_phone {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet {
                            display: flex;
                        }
                        .is_desktop_laptop {
                            display: none;
                        }
                        .is_desktop {
                            display: none;
                        }
                        .is_laptop_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_laptop_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_laptop_tablet_phone {
                            display: flex;
                        }
                        .is_laptop_tablet {
                            display: flex;
                        }
                        .is_laptop {
                            display: none;
                        }
                        .is_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_tablet_phone {
                            display: flex;
                        }
                        .is_tablet {
                            display: flex;
                        }
                        .is_phone_xsmall_xxsmall {
                            display: none;
                        }
                        .is_phone_xsmall {
                            display: none;
                        }
                        .is_phone {
                            display: none;
                        }
                        .is_xsmall_xxsmall {
                            display: none;
                        }
                        .is_xsmall {
                            display: none;
                        }
                        .is_xxsmall {
                            display: none;
                        }
                        .header-left {
                            width: 50%;
                        }
                        .header-right {
                            width: 50%;
                        }
                        .content-max-width-class {
                            max-width: 768px;
                        }
                        ._is_padding_laptop_tablet_phone_xsmall_xxsmall {
                            padding-left: 20px;
                            padding-right: 20px;
                        }
                        ._is_margin_laptop_tablet_phone_xsmall_xxsmall {
                            margin-left: 20px;
                            margin-right: 20px;
                        }
                        .is_over_1200_flex_row_under_flex_column {
                            flex-direction: column;
                        }
                        .is_over_1200_width_50_percent_under_100_percent {
                            width: 100%;
                        }
                        ._is_padding_xxsmall {
                            padding-left: 0px;
                            padding-right: 0px;
                        }
                        ._wrapped_second_column_margin_top {
                            margin-top: 20px;
                        }
                        .content-input-max-width-class-2 {
                          max-width: 600px;
                        }
                        .popup_close_row {
                            display: none;
                        }
                    }
                    /* Large devices (laptops/desktops, 992px and up) */
                    @media only screen and (min-width: 992px) {
                        /* ... */


                        .is_desktop_laptop_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet_phone {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet {
                            display: flex;
                        }
                        .is_desktop_laptop {
                            display: flex;
                        }
                        .is_desktop {
                            display: none;
                        }
                        .is_laptop_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_laptop_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_laptop_tablet_phone {
                            display: flex;
                        }
                        .is_laptop_tablet {
                            display: flex;
                        }
                        .is_laptop {
                            display: flex;
                        }
                        .is_tablet_phone_xsmall_xxsmall {
                            display: none;
                        }
                        .is_tablet_phone_xsmall {
                            display: none;
                        }
                        .is_tablet_phone {
                            display: none;
                        }
                        .is_tablet {
                            display: none;
                        }
                        .is_phone_xsmall_xxsmall {
                            display: none;
                        }
                        .is_phone_xsmall {
                            display: none;
                        }
                        .is_phone {
                            display: none;
                        }
                        .is_xsmall_xxsmall {
                            display: none;
                        }
                        .is_xsmall {
                            display: none;
                        }
                        .is_xxsmall {
                            display: none;
                        }

                        .header-left {
                            width: 80%;
                        }
                        .header-right {
                            width: 20%;
                        }
                        .content-max-width-class {
                            max-width: 992px;
                        }
                        ._is_padding_laptop_tablet_phone_xsmall_xxsmall {
                            padding-left: 20px;
                            padding-right: 20px;
                        }
                        ._is_margin_laptop_tablet_phone_xsmall_xxsmall {
                            margin-left: 20px;
                            margin-right: 20px;
                        }
                        .is_over_1200_flex_row_under_flex_column {
                            flex-direction: column;
                        }
                        .is_over_1200_width_50_percent_under_100_percent {
                            width: 100%;
                        }
                        ._is_padding_xxsmall {
                            padding-left: 0px;
                            padding-right: 0px;
                        }
                        ._wrapped_second_column_margin_top {
                            margin-top: 20px;
                        }
                        .content-input-max-width-class-2 {
                          max-width: 792px;
                        }
                        .popup_close_row {
                            display: none;
                        }
                    }
                    /* Extra large devices (large laptops and desktops, 1200px and up) */
                    @media only screen and (min-width: 1200px) {
                        /* ... */
                        
                        .is_desktop_laptop_tablet_phone_xsmall_xxsmall {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet_phone_xsmall {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet_phone {
                            display: flex;
                        }
                        .is_desktop_laptop_tablet {
                            display: flex;
                        }
                        .is_desktop_laptop {
                            display: flex;
                        }
                        .is_desktop {
                            display: flex;
                        }
                        .is_laptop_tablet_phone_xsmall_xxsmall {
                            display: none;
                        }
                        .is_laptop_tablet_phone_xsmall {
                            display: none;
                        }
                        .is_laptop_tablet_phone {
                            display: none;
                        }
                        .is_laptop_tablet {
                            display: none;
                        }
                        .is_laptop {
                            display: none;
                        }
                        .is_tablet_phone_xsmall_xxsmall {
                            display: none;
                        }
                        .is_tablet_phone_xsmall {
                            display: none;
                        }
                        .is_tablet_phone {
                            display: none;
                        }
                        .is_tablet {
                            display: none;
                        }
                        .is_phone_xsmall_xxsmall {
                            display: none;
                        }
                        .is_phone_xsmall {
                            display: none;
                        }
                        .is_phone {
                            display: none;
                        }
                        .is_xsmall_xxsmall {
                            display: none;
                        }
                        .is_xsmall {
                            display: none;
                        }
                        .is_xxsmall {
                            display: none;
                        }
    
                        .header-left {
                            width: 80%;
                        }
                        .header-right {
                            width: 20%;
                        }
                        .content-max-width-class {
                            max-width: 1200px;
                        }
                        ._is_padding_laptop_tablet_phone_xsmall_xxsmall {
                            padding-left: 0px;
                            padding-right: 0px;
                        }
                        ._is_margin_laptop_tablet_phone_xsmall_xxsmall {
                            margin-left: 0px;
                            margin-right: 0px;
                        }
                        .is_over_1200_flex_row_under_flex_column {
                            flex-direction: row;
                        }
                        .is_over_1200_width_50_percent_under_100_percent {
                            width: 50%;
                        }
                        ._is_padding_xxsmall {
                            padding-left: 0px;
                            padding-right: 0px;
                        }
                        ._wrapped_second_column_margin_top {
                            margin-top: 0px;
                        }
                        .content-input-max-width-class-2 {
                          max-width: 1200px;
                        }
                        .popup_close_row {
                            display: none;
                        }
                    }
                    `}</style>
                </body>
            </html>
        );
    }
}

export default CustomDocument;