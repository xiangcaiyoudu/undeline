(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ace"],{f49a:function(t,e,o){"use strict";o.r(e);var n=o("f491"),s=o.n(n);e["default"]={methods:{jsonFormat:function(){var t=this.editor.session.getValue();console.log(t)},jsonEncode:function(){}},mounted:function(){this.editor=s.a.edit("editor"),this.editor.setTheme("ace/theme/chrome"),this.editor.setFontSize(16);var t=s.a.require("ace/mode/javascript").Mode;this.editor.session.setMode(new t);var e=s.a.require("ace/keyboard/vscode").handler;this.editor.setKeyboardHandler(e),window.editor=this.editor},render:function(){var t=arguments[0];return t("div",{class:"convertImage"},[t("div",{class:"content"},[t("div",{attrs:{id:"editor"},style:"height: 200px;"}),t("div",{class:"btn-group button",attrs:{role:"group"}},[t("button",{attrs:{type:"button"},class:"btn btn-default",on:{click:this.jsonFormat}},["Json 格式化（format)"]),t("button",{attrs:{type:"button"},class:"btn btn-default",on:{click:this.jsonEncode}},["Json 压缩"])])])])}}}}]);