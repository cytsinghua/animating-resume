<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor'
  import ResumeEditor from './components/ResumeEditor'
  import './assets/reset.css'

  export default {
    name: 'app',
    components: {
      StyleEditor,
      ResumeEditor
    },
    data() {
      return {
        interval: 40,
        currentStyle: '',
        enableHtml: false,
        fullStyle: [
          `/*
* Inspired by http://strml.net/
* 大家好，我是陈飞阳
* 上了一学期的Java课了，大家都在准备Java课设的简历管理系统
* 你是不是也在努力写(tao)代(mu)码(ban)呀
* 说做就做，我也来写一份简历！
*/

/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
html {
  color: rgb(222,222,222); background: rgb(0,43,54);
}
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 加点 3D 效果呗 */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}

/* 接下来我给自己准备一个编辑器 */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* 好了，我开始写简历了 */


\`,
          \`
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
\`
          ,
          \`
/* 再对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}

`],
        currentMarkdown: '',
        fullMarkdown: `

# Basic info. 基本信息

----------

* 个人信息: 陈飞阳 / 男 / 20岁
* 学士: 2016-2020 / 北京林业大学 & 计算机科学与技术（创新实验班）
* 硕士: 2020-2021 / Carnegie Mellon University & MSAII
 (我努力的目标～Up For CMU～)
* 博客: [Feiyang Chen 's Blog](http://blog.leanote.com/chenfeiyang)
* 知乎: [Eurus-Holmes](https://www.zhihu.com/people/chenfeiyang1998)
* GitHub: [Eurus-Holmes](https://github.com/Eurus-Holmes)

----------

# Experience. 研究&项目

----------

**清华大学智能技术与系统国家重点实验室iar研究组（2018.7---至今）**

***研究领域：多模态情感分析***

> 多模态情感分析是传统的基于文本的情感分析的一个新维度，它超越了文本的分析，并包括其他形式，
如音频和视觉数据。它可以是双模态的，包括两种模态的不同组合，或三种模式，包含三种模态的不同组合。
随着大量社交媒体数据以不同形式在线提供，如视频和图像，传统的基于文本的情感分析已演变为更复杂的
多模态情感分析模型，可应用于虚拟助手的开发，分析YouTube电影评论，新闻视频分析和情绪识别
（有时称为情绪检测），如抑郁症监测等。


***Publication：***

 - ***Audio Sentiment Analysis by Heterogeneous Signal Features Learned
  from Utterance-Based Parallel Neural Network. AAAI2019 Workshop: Affective
   Content Analysis: Modeling Affect-in-Action, Ziqian Luo, Hua Xu and Feiyang Chen***

----------
**北京林业大学人工智能研究所（2018.4---至今）**

***项目名称: 基于CNN与LSTM的文本情感分析算法研究***

> 此为2018年***国家级大学生创新训练计划项目***，本人在团队中担任***负责人***。

本项目预期将有以下成果:

1. 发表 SCI 或 EI 检索论文一篇;
2. 嵌入神经网络模型新算法的文本情感分析网站 demo。

----------
***生产建设项目水土保持监测单位水平评价服务系统 (2017.10-2018.1)***

> 随着新时代数字经济“互联网+”相关政策的出台，利用信息通信技术以及互联网平台，
让互联网与传统行业进行深度融合，创造新的发展生态已成一种必然趋势。这代表一种新的社会形态，
即充分发挥互联网在社会资源配置中的优化和集成作用，将互联网的创新成果深度融合于经济、社会各域之中，
提升全社会的创新力和生产力，形成更广泛的以互联网为基础设施和实现工具的经济发展新形态。
> 为此，基于“中国水土保持学会”的监测单位水平评价业务的服务创新要求，本人设计了此系统，
旨在围绕监测单位水平评价的公共评价过程，向社会、高校、研究等机构提供“一站式”服务。
***目前本系统已申请了软件著作权***。

----------
***微信小程序: 玩转北林 (2017.7---2017.8)***

> 这是我们"I上北林"团队在大一暑假利用30天时间，从零自学完成的一个微信小程序，
成果于2017-8-15日正式上线，切实方便了新生刚入学时的校园生活，总访问次数超过万次，
并***入选第六届全国大学生科技创新作品与专利成果展示推介会***。本人在团队中担任***负责人***。

----------

# Prize. 荣誉奖项

----------

* 2018美国大学生数学建模竞赛二等奖

* 第九届全国大学生数学竞赛三等奖

* 第二十八届北京市大学生数学竞赛三等奖

* 第九届蓝桥杯省赛三等奖

* 优秀学生一等奖学金

* 校级三好学生

* 校级优秀学生干部

* 校级暑期社会实践先进个人

* ......


----------

> 如果你喜欢这个效果，Fork [他的项目](https://github.com/jirengu-inc/animating-resume)，
打造你自己的简历吧233！

`
      }
    },
    created() {
      this.makeResume()
    },

    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0)
        await this.progressivelyShowResume()
        await this.progressivelyShowStyle(1)
        await this.showHtml()
        await this.progressivelyShowStyle(2)
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true
          this.$nextTick(() => {
            this.$refs.resumeEditor.goTop()
          })
          resolve()
        })
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
          let interval = this.interval
          let showStyle = (async function () {
            let style = this.fullStyle[n]
            if (!style) { return }
            // 计算前 n 个 style 的字符总数
            let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            let prefixLength = length - style.length
            if (this.currentStyle.length < length) {
              let l = this.currentStyle.length - prefixLength
              let char = style.substring(l, l + 1) || ' '
              this.currentStyle += char
              if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  this.$refs.styleEditor.goBottom()
                })
              }
              setTimeout(showStyle, interval)
            } else {
              resolve()
            }
          }).bind(this)
          showStyle()
        })
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
          let length = this.fullMarkdown.length
          let interval = this.interval
          let showResume = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
              let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
              let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
              if (prevChar === '\n' && this.$refs.resumeEditor) {
                this.$nextTick(() => this.$refs.resumeEditor.goBottom())
              }
              setTimeout(showResume, interval)
            } else {
              resolve()
            }
          }
          showResume()
        })
      }
    }
  }

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh; position: relative;
  }

  html {
    min-height: 100vh;
  }
  *{
    box-sizing: border-box;
  }

</style>
