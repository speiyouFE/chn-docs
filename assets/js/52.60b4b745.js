(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{372:function(t,a,s){"use strict";s.r(a);var n=s(24),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"发送消息到渲染进程-sendtorender"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送消息到渲染进程-sendtorender","aria-hidden":"true"}},[t._v("#")]),t._v(" 发送消息到渲染进程 (sendToRender) "),s("Badge",{attrs:{text:"1.0.6",type:"green"}}),t._v(" "),s("Badge",{attrs:{text:"重要",type:"warn"}})],1),t._v(" "),s("p",[t._v("发送数据到渲染进程("),s("strong",[t._v("大屏")]),t._v(")。该接口一般是底层往大屏发送数据的时候使用。")]),t._v(" "),s("p",[t._v("比如，大屏需要答题数据时，底层可通过该接口发送数据给大屏。")]),t._v(" "),s("h3",{attrs:{id:"基础用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 基础用法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getMessageCenter "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../message-center'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" messageCenter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMessageCenter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用")]),t._v("\nmessageCenter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendToRender")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcontent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ttime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nmessageCenter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendToRender")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DEMO'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 大屏需要监听相应的`command`")]),t._v("\n")])])]),s("h3",{attrs:{id:"所需参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#所需参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 所需参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("必填")]),t._v(" "),s("th",[t._v("可选值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("command")]),t._v(" "),s("td",[t._v("消息指令")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("data")]),t._v(" "),s("td",[t._v("消息内容")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✘")]),t._v(" "),s("td",[t._v("-")])])])])])},[],!1,null,null,null);a.default=e.exports}}]);