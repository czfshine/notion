import React, {Component} from 'react';

var CodeMirror = require('react-codemirror');

require(['codemirror/lib/codemirror.css',
    "codemirror/theme/seti.css",
    "codemirror/theme/eclipse.css",
    "codemirror/theme/eclipse.css",
    "codemirror/theme/seti.css",
    "codemirror/theme/dracula.css",
    "codemirror/keymap/vim.js",

    //引入js，绑定Vim
    "codemirror/addon/dialog/dialog.css",
    "codemirror/addon/search/searchcursor.js",
    //改善vim输入命令时的样式
    "codemirror/addon/dialog/dialog.js",
    //支持代码折叠
    "codemirror/addon/fold/foldgutter.css",
    "codemirror/addon/fold/foldcode.js",
    "codemirror/addon/fold/foldgutter.js",
    "codemirror/addon/fold/brace-fold",
    "codemirror/addon/fold/comment-fold",

    //全屏模式
    "codemirror/addon/display/fullscreen.css",
    "codemirror/addon/display/fullscreen.js",

//括号匹配
    "codemirror/addon/edit/matchbrackets.js",

//自动补全
    "codemirror/addon/hint/show-hint.css",
    "codemirror/addon/hint/show-hint.js",
    "codemirror/addon/hint/anyword-hint.js"
]);


let Editor = () => {

    var options = {

//Java高亮显示
        mode:"text/x-java",

        //显示行号
        lineNumbers:true,

        //设置主题
        theme:"seti",

        //绑定Vim
        //keyMap:"vim",

        //代码折叠
        lineWrapping:true,
        foldGutter: true,
        gutters:["CodeMirror-linenumbers", "CodeMirror-foldgutter"],

        //全屏模式
        fullScreen:true,

        //括号匹配
        matchBrackets:true,

        //智能提示
        extraKeys:{"Ctrl-Space":"autocomplete"}//ctrl-space唤起智能提示
    };
    return <CodeMirror options={options}/>
}
export default Editor;