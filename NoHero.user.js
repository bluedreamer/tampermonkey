// ==UserScript==
// @name         NoHero
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Removed annoying hero image
// @author       bluedreamer
// @match        https://app.scorechaser.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=scorechaser.com
// @downloadURL  https://github.com/bluedreamer/tampermonkey/raw/master/NoHero.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const style = document.createElement('style');
    style.textContent = 'div.home-hero-image {display: none;}';
    document.head.appendChild(style);

})();