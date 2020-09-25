// ==UserScript==
// @name         删除垃圾代码
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  删除某个discuz！插件带来的垃圾代码
// @author       Karlcx
// @include      http://*
// @include      https://*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var x = document.getElementsByClassName("jammer");
    for (var i=0;i<x.length-1;i++)
{
    x[i].innerHTML="";
}
})();
