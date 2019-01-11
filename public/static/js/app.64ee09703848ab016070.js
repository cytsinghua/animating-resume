webpackJsonp([1],{40:function(n,e){},41:function(n,e,t){t(87);var r=t(14)(t(48),t(95),"data-v-2df95543",null);n.exports=r.exports},42:function(n,e,t){t(86);var r=t(14)(t(49),t(94),"data-v-2ca90776",null);n.exports=r.exports},43:function(n,e,t){t(85);var r=t(14)(t(46),t(93),"data-v-288975d1",null);n.exports=r.exports},44:function(n,e,t){t(88);var r=t(14)(t(47),t(96),"data-v-b76f4cbc",null);n.exports=r.exports},46:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),a=t(24),u=t.n(a),l=t(42),c=t.n(l),d=t(41),m=t.n(d),h=t(40);t.n(h);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:m.a},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Inspired by http://strml.net/\n* 大家好，我是陈飞阳\n* 上了一学期的Java课了，大家都在准备Java课设的简历管理系统\n* 你是不是也在努力写(tao)代(mu)码(ban)呀\n* 说做就做，我也来写一份简历！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:'\n\n# Basic info. 基本信息\n\n----------\n\n* 个人信息: 陈飞阳 / 男 / 20岁\n* 学士: 2016-2020 / 北京林业大学 & 计算机科学与技术（创新实验班）\n* 硕士: 2020-2021 / Carnegie Mellon University & MSAII\n (我努力的目标～Up For CMU～)\n* 博客: [Feiyang Chen \'s Blog](http://blog.leanote.com/chenfeiyang)\n* 知乎: [Eurus-Holmes](https://www.zhihu.com/people/chenfeiyang1998)\n* GitHub: [Eurus-Holmes](https://github.com/Eurus-Holmes)\n\n----------\n\n# Experience. 研究&项目\n\n----------\n\n**清华大学智能技术与系统国家重点实验室iar研究组（2018.7---至今）**\n\n***研究领域：多模态情感分析***\n\n> 多模态情感分析是传统的基于文本的情感分析的一个新维度，它超越了文本的分析，并包括其他形式，\n如音频和视觉数据。它可以是双模态的，包括两种模态的不同组合，或三种模式，包含三种模态的不同组合。\n随着大量社交媒体数据以不同形式在线提供，如视频和图像，传统的基于文本的情感分析已演变为更复杂的\n多模态情感分析模型，可应用于虚拟助手的开发，分析YouTube电影评论，新闻视频分析和情绪识别\n（有时称为情绪检测），如抑郁症监测等。\n\n\n***Publication：***\n\n - ***Audio Sentiment Analysis by Heterogeneous Signal Features Learned\n  from Utterance-Based Parallel Neural Network. AAAI2019 Workshop: Affective\n   Content Analysis: Modeling Affect-in-Action, Ziqian Luo, Hua Xu and Feiyang Chen***\n\n----------\n**北京林业大学人工智能研究所（2018.4---至今）**\n\n***项目名称: 基于CNN与LSTM的文本情感分析算法研究***\n\n> 此为2018年***国家级大学生创新训练计划项目***，本人在团队中担任***负责人***。\n\n本项目预期将有以下成果:\n\n1. 发表 SCI 或 EI 检索论文一篇;\n2. 嵌入神经网络模型新算法的文本情感分析网站 demo。\n\n----------\n***生产建设项目水土保持监测单位水平评价服务系统 (2017.10-2018.1)***\n\n> 随着新时代数字经济“互联网+”相关政策的出台，利用信息通信技术以及互联网平台，\n让互联网与传统行业进行深度融合，创造新的发展生态已成一种必然趋势。这代表一种新的社会形态，\n即充分发挥互联网在社会资源配置中的优化和集成作用，将互联网的创新成果深度融合于经济、社会各域之中，\n提升全社会的创新力和生产力，形成更广泛的以互联网为基础设施和实现工具的经济发展新形态。\n> 为此，基于“中国水土保持学会”的监测单位水平评价业务的服务创新要求，本人设计了此系统，\n旨在围绕监测单位水平评价的公共评价过程，向社会、高校、研究等机构提供“一站式”服务。\n***目前本系统已申请了软件著作权***。\n\n----------\n***微信小程序: 玩转北林 (2017.7---2017.8)***\n\n> 这是我们"I上北林"团队在大一暑假利用30天时间，从零自学完成的一个微信小程序，\n成果于2017-8-15日正式上线，切实方便了新生刚入学时的校园生活，总访问次数超过万次，\n并***入选第六届全国大学生科技创新作品与专利成果展示推介会***。本人在团队中担任***负责人***。\n\n----------\n\n# Prize. 荣誉奖项\n\n----------\n\n* 2018美国大学生数学建模竞赛二等奖\n\n* 第九届全国大学生数学竞赛三等奖\n\n* 第二十八届北京市大学生数学竞赛三等奖\n\n* 第九届蓝桥杯省赛三等奖\n\n* 优秀学生一等奖学金\n\n* 校级三好学生\n\n* 校级优秀学生干部\n\n* 校级暑期社会实践先进个人\n\n* ......\n\n\n----------\n\n> 如果你喜欢这个效果，Fork [他的项目](https://github.com/jirengu-inc/animating-resume)，\n打造你自己的简历吧233！\n\n'}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=u()(s.a.mark(function e(){var r,a,u,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},47:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),a=t(24),u=t.n(a),l=t(42),c=t.n(l),d=t(41),m=t.n(d),h=t(40);t.n(h);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:m.a},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:['/*\n* Inspired by http://strml.net/\n* 大家好，我是陈飞阳\n* 上了一学期的Java课了，大家都在准备Java课设的简历管理系统\n* 你是不是也在努力写(tao)代(mu)码(ban)呀\n* 说做就做，我也来写一份简历！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n`,\n          `\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n`\n          ,\n          `\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n\n'],currentMarkdown:"",fullMarkdown:'\n\n# Basic info. 基本信息\n\n----------\n\n* 个人信息: 陈飞阳 / 男 / 20岁\n* 学士: 2016-2020 / 北京林业大学 & 计算机科学与技术（创新实验班）\n* 硕士: 2020-2021 / Carnegie Mellon University & MSAII\n (我努力的目标～Up For CMU～)\n* 博客: [Feiyang Chen \'s Blog](http://blog.leanote.com/chenfeiyang)\n* 知乎: [Eurus-Holmes](https://www.zhihu.com/people/chenfeiyang1998)\n* GitHub: [Eurus-Holmes](https://github.com/Eurus-Holmes)\n\n----------\n\n# Experience. 研究&项目\n\n----------\n\n**清华大学智能技术与系统国家重点实验室iar研究组（2018.7---至今）**\n\n***研究领域：多模态情感分析***\n\n> 多模态情感分析是传统的基于文本的情感分析的一个新维度，它超越了文本的分析，并包括其他形式，\n如音频和视觉数据。它可以是双模态的，包括两种模态的不同组合，或三种模式，包含三种模态的不同组合。\n随着大量社交媒体数据以不同形式在线提供，如视频和图像，传统的基于文本的情感分析已演变为更复杂的\n多模态情感分析模型，可应用于虚拟助手的开发，分析YouTube电影评论，新闻视频分析和情绪识别\n（有时称为情绪检测），如抑郁症监测等。\n\n\n***Publication：***\n\n - ***Audio Sentiment Analysis by Heterogeneous Signal Features Learned\n  from Utterance-Based Parallel Neural Network. AAAI2019 Workshop: Affective\n   Content Analysis: Modeling Affect-in-Action, Ziqian Luo, Hua Xu and Feiyang Chen***\n\n----------\n**北京林业大学人工智能研究所（2018.4---至今）**\n\n***项目名称: 基于CNN与LSTM的文本情感分析算法研究***\n\n> 此为2018年***国家级大学生创新训练计划项目***，本人在团队中担任***负责人***。\n\n本项目预期将有以下成果:\n\n1. 发表 SCI 或 EI 检索论文一篇;\n2. 嵌入神经网络模型新算法的文本情感分析网站 demo。\n\n----------\n***生产建设项目水土保持监测单位水平评价服务系统 (2017.10-2018.1)***\n\n> 随着新时代数字经济“互联网+”相关政策的出台，利用信息通信技术以及互联网平台，\n让互联网与传统行业进行深度融合，创造新的发展生态已成一种必然趋势。这代表一种新的社会形态，\n即充分发挥互联网在社会资源配置中的优化和集成作用，将互联网的创新成果深度融合于经济、社会各域之中，\n提升全社会的创新力和生产力，形成更广泛的以互联网为基础设施和实现工具的经济发展新形态。\n> 为此，基于“中国水土保持学会”的监测单位水平评价业务的服务创新要求，本人设计了此系统，\n旨在围绕监测单位水平评价的公共评价过程，向社会、高校、研究等机构提供“一站式”服务。\n***目前本系统已申请了软件著作权***。\n\n----------\n***微信小程序: 玩转北林 (2017.7---2017.8)***\n\n> 这是我们"I上北林"团队在大一暑假利用30天时间，从零自学完成的一个微信小程序，\n成果于2017-8-15日正式上线，切实方便了新生刚入学时的校园生活，总访问次数超过万次，\n并***入选第六届全国大学生科技创新作品与专利成果展示推介会***。本人在团队中担任***负责人***。\n\n----------\n\n# Prize. 荣誉奖项\n\n----------\n\n* 2018美国大学生数学建模竞赛二等奖\n\n* 第九届全国大学生数学竞赛三等奖\n\n* 第二十八届北京市大学生数学竞赛三等奖\n\n* 第九届蓝桥杯省赛三等奖\n\n* 优秀学生一等奖学金\n\n* 校级三好学生\n\n* 校级优秀学生干部\n\n* 校级暑期社会实践先进个人\n\n* ......\n\n\n----------\n\n> 如果你喜欢这个效果，Fork [他的项目](https://github.com/jirengu-inc/animating-resume)，\n打造你自己的简历吧233！\n\n'}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goTop()}),e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=u()(s.a.mark(function e(){var r,a,u,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},48:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(89),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},49:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(90),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},50:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(45),o=t(43),i=t.n(o),s=t(44),a=t.n(s),u=document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(u>500?i.a:a.a)}})},85:function(n,e){},86:function(n,e){},87:function(n,e){},88:function(n,e){},93:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},94:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},95:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},96:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}}},[50]);
//# sourceMappingURL=app.64ee09703848ab016070.js.map