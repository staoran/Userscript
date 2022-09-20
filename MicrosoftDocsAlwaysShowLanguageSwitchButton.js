// ==UserScript==
// @name         微软文档始终显示语言切换按钮
// @namespace    https://github.com/staoran/Userscript
// @version      0.2
// @description  显示在英语页被隐藏的语言切换按钮
// @author       Tao<staoran@gmail.com>
// @license          MIT
// @supportURL       https://github.com/staoran/Userscript/issues
// @match               http*://msdn.microsoft.com/en-us/*
// @match               http*://msdn.microsoft.com/zh-cn/*
// @match               http*://docs.microsoft.com/en-us/*
// @match               http*://docs.microsoft.com/zh-cn/*
// @match               http*://learn.microsoft.com/en-us/*
// @match               http*://learn.microsoft.com/zh-cn/*
// @grant        none
// ==/UserScript==

var lang = document.getElementById('lang-link-tablet')
if (lang.hidden && document.URL.search(/\/zh-cn\//) == -1) {
    lang.hidden = false
    lang.title = '使用中文阅读'
    lang.href = location.href.replace(/\/en-us\//, '\/zh-cn\/')
}
