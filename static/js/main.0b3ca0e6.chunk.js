(this["webpackJsonpnew-portfolio"]=this["webpackJsonpnew-portfolio"]||[]).push([[0],{24:function(n,e,t){"use strict";t.r(e);var o,r,i,c,l,a,s,d,h,u,b,m,p,g,x,j,f,O,y,k=t(1),w=t.n(k),v=t(7),C=t.n(v),M=t(3),R=t(2),H=R.c.header(o||(o=Object(M.a)(["\n  position: fixed;\n  top: 0;\n  z-index: 20;\n  height: ",";\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: ",";\n  background-color: ",";\n  padding: 0 4rem;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,\n    rgba(0, 0, 0, 0.22) 0px 10px 10px;\n\n  @media only screen and (max-width: calc("," + 100px)) {\n    padding: 0 2rem;\n  }\n\n  @media only screen and (max-width: ",") {\n    padding: 0 1rem;\n  }\n"])),(function(n){return n.theme.headerHeight}),(function(n){return n.theme.colors.yellow}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.menuBreakPoint}),(function(n){return n.theme.menuBreakPoint})),_=R.c.div(r||(r=Object(M.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 2.5rem;\n  font-weight: bold;\n  color: ",";\n  position: relative;\n  border-bottom: dashed 4px ",";\n\n  .left {\n    transform: rotate(-90deg);\n  }\n  .right {\n    position: relative;\n    top: 1px;\n  }\n"])),(function(n){return n.theme.colors.yellowHover}),(function(n){return n.theme.colors.yellow})),z=R.c.nav(i||(i=Object(M.a)(["\n  height: 100%;\n\n  ul {\n    display: flex;\n    height: 100%;\n    list-style: none;\n    transition: all 0.4s ease-in-out;\n\n    @media only screen and (max-width: ",") {\n      flex-direction: column;\n      position: absolute;\n      z-index: 10;\n      top: ",";\n      left: 0;\n      width: 100%;\n      height: calc(100vh - ",");\n      transform: translateX(",");\n    }\n\n    li {\n      height: 100%;\n\n      @media only screen and (max-width: ",") {\n        background-color: ",";\n        a {\n          color: ",";\n        }\n        &:nth-child(odd) {\n          background-color: ",";\n          a {\n            color: ",";\n          }\n        }\n      }\n\n      a {\n        text-decoration: none;\n        display: flex;\n        position: relative;\n        align-items: center;\n        height: 100%;\n        padding: 0 3rem;\n        color: ",';\n        font-weight: 700;\n        font-size: 1.5rem;\n        transition: all 0.3s ease-in-out;\n\n        &::before {\n          display: block;\n          position: absolute;\n          content: "";\n          height: 5px;\n          width: 0;\n          bottom: 0;\n          left: 50%;\n          background-color: ',';\n          transition: all 0.3s ease-in-out;\n        }\n        &::after {\n          display: block;\n          position: absolute;\n          content: "";\n          height: 5px;\n          width: 0;\n          bottom: 0;\n          left: 50%;\n          background-color: ',";\n          transition: all 0.3s ease-in-out;\n        }\n\n        &:hover,\n        &:focus {\n          @media only screen and (min-width: ",") {\n            color: ",";\n            background-color: ",";\n\n            &::before {\n              left: 0;\n              width: 50%;\n            }\n            &::after {\n              width: 50%;\n            }\n          }\n        }\n      }\n    }\n  }\n"])),(function(n){return n.theme.menuBreakPoint}),(function(n){return n.theme.headerHeight}),(function(n){return n.theme.headerHeight}),(function(n){return n.isMenuOpen?"0":"100%"}),(function(n){return n.theme.menuBreakPoint}),(function(n){return n.theme.colors.blackHover}),(function(n){return n.theme.colors.yellowHover}),(function(n){return n.theme.colors.yellowHover}),(function(n){return n.theme.colors.blackHover}),(function(n){return n.theme.colors.yellow}),(function(n){return n.theme.colors.yellow}),(function(n){return n.theme.colors.yellow}),(function(n){return n.theme.menuBreakPoint}),(function(n){return n.theme.colors.yellowHover}),(function(n){return n.theme.colors.blackHover})),S=t(4),P=t(8),T=Object(P.b)({name:"menu",initialState:{isMenuOpen:!1},reducers:{toggleMenu:function(n){console.log("xd"),n.isMenuOpen=!n.isMenuOpen},closeMenu:function(n){n.isMenuOpen=!1}}}),B=T.reducer,A=T.actions,F=A.toggleMenu,I=A.closeMenu,L=t(0),E=[{text:"Home",link:"#"},{text:"Projects",link:"#"},{text:"Skills",link:"#"},{text:"About",link:"#"},{text:"Contact",link:"#"}],D=function(){var n=Object(S.c)((function(n){return n.menuReducer.isMenuOpen})),e=Object(S.b)();return Object(L.jsx)(z,{isMenuOpen:n,children:Object(L.jsx)("ul",{onClick:function(){e(I())},children:E.map((function(n){return Object(L.jsx)("li",{children:Object(L.jsx)("a",{href:n.link,children:n.text})},n.text)}))})})},N=R.c.button(c||(c=Object(M.a)(["\n  border: none;\n  transition: all 0.4s ease-in-out;\n  padding: 0 1rem;\n  background-color: transparent;\n  cursor: pointer;\n  height: 100%;\n\n  @media only screen and (min-width: ",") {\n    display: none;\n  }\n\n  &:hover {\n    .hamburger__line {\n      background-color: ",";\n    }\n  }\n\n  .hamburger__wrapper {\n    width: 2.5rem;\n    height: 2.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    position: relative;\n    transition: all 0.4s ease-in-out;\n  }\n\n  .hamburger__line {\n    display: block;\n    width: 120%;\n    height: 6px;\n    background-color: ",';\n    content: "";\n    border-radius: 5px;\n    transition: all 0.4s ease-in-out;\n\n    &--top {\n      transform-origin: left top;\n    }\n    &--bottom {\n      transform-origin: left bottom;\n    }\n  }\n\n  .isOpen {\n    transform-origin: 50% 50%;\n    transform: rotate(360deg);\n\n    .hamburger__line {\n      width: 3.1rem;\n      &--top {\n        transform: rotate(45deg);\n      }\n      &--middle {\n        width: 0;\n      }\n      &--bottom {\n        transform: rotate(-45deg);\n      }\n    }\n  }\n'])),(function(n){return n.theme.menuBreakPoint}),(function(n){return n.theme.colors.yellowHover}),(function(n){return n.theme.colors.yellow})),X=function(){var n=Object(S.c)((function(n){return n.menuReducer.isMenuOpen})),e=Object(S.b)(),t="hamburger__wrapper ".concat(n?"isOpen":"");return console.log(t),Object(L.jsx)(N,{onClick:function(){e(F())},children:Object(L.jsxs)("div",{className:t,children:[Object(L.jsx)("span",{className:"hamburger__line hamburger__line--top"}),Object(L.jsx)("span",{className:"hamburger__line hamburger__line--middle"}),Object(L.jsx)("span",{className:"hamburger__line hamburger__line--bottom"})]})})},W=function(){return Object(L.jsxs)(H,{children:[Object(L.jsxs)(_,{children:[Object(L.jsx)("div",{className:"left",children:"M"}),Object(L.jsx)("div",{className:"right",children:"D"})]}),Object(L.jsx)(D,{}),Object(L.jsx)(X,{})]})},Y=R.c.section(l||(l=Object(M.a)(["\n  width: 100%;\n  min-height: 100vh;\n  color: ",";\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 1rem;\n\n  @media only screen and (min-width: ",") {\n    padding: 2rem;\n  }\n"])),(function(n){return n.textColor}),(function(n){return n.bgColor}),(function(n){return n.theme.menuBreakPoint})),G=R.c.div(a||(a=Object(M.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n\n  ","\n"])),(function(n){return n.centerXY&&"display: flex;\n    justify-content: center;\n    align-items: center;"})),J=R.c.h2(s||(s=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  font-size: 2.5rem;\n  font-weight: 800;\n  width: 100%;\n  margin: 1rem;\n  margin-bottom: 3rem;\n  max-width: 1280px;\n"]))),V=R.c.h2(d||(d=Object(M.a)(["\n  display: block;\n  padding: 0 0.5rem;\n  background-color: ",";\n  position: absolute;\n  top: 0;\n  transform: translate(-0.5rem, -50%);\n  font-size: 1.5rem;\n  font-weight: 700;\n"])),(function(n){return n.bgColor})),q=function(n){var e=n.bgColor,t=n.textColor,o=n.headlineText,r=n.minusHeight,i=void 0===r?"0px":r,c=n.children,l=n.centerXY,a=void 0!==l&&l;return Object(L.jsxs)(Y,{bgColor:e,textColor:t,minusHeight:i,children:[o&&Object(L.jsx)(J,{children:o}),Object(L.jsx)(G,{centerXY:a,children:c})]})},K=R.c.article(h||(h=Object(M.a)(["\n  padding: 2rem;\n  border: 3px solid ",";\n  width: 100%;\n  max-width: 550px;\n  position: relative;\n  border-radius: 0.25rem;\n  font-size: 1.2rem;\n  box-shadow: ","88 0px 3px 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  ul {\n    margin: 0.5rem 0;\n    list-style-type: none;\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  @media only screen and (min-width: ",") {\n  }\n"])),(function(n){return n.borderColor}),(function(n){return n.borderColor}),(function(n){return n.theme.articleWidthBreakPoint})),Q=R.c.span(u||(u=Object(M.a)(["\n  font-weight: bold;\n  word-wrap: break-word;\n"]))),U=R.c.div(b||(b=Object(M.a)(["\n  font-size: 1rem;\n  width: max-content;\n  margin: 0.8rem;\n  position: relative;\n  height: min-content;\n  z-index: 10;\n  ",'\n\n  &::before {\n    content: "";\n    display: block;\n    position: absolute;\n    transform: skew(20deg);\n    border: 3px solid ',";\n    top: -0.5rem;\n    bottom: -0.5rem;\n    left: -0.5rem;\n    right: -0.5rem;\n    z-index: -1;\n    ","\n  }\n"])),(function(n){var e=n.isMain,t=n.borderColor,o=n.textColor;if(e)return"background-color: ".concat(t,";\n        color: ").concat(o,";")}),(function(n){return n.borderColor}),(function(n){var e=n.isMain,t=n.borderColor;if(e)return"background-color: ".concat(t,";")})),Z=function(n){var e=n.borderColor,t=n.headlineText,o=n.bgColor,r=n.children;return Object(L.jsxs)(K,{borderColor:e,children:[t&&Object(L.jsx)(V,{bgColor:o,children:t}),r]})},$=R.c.a(m||(m=Object(M.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  padding: 0.5rem 0;\n  margin-top: 1rem;\n  font-size: 1.2rem;\n  font-weight: bold;\n  text-decoration: none;\n  border: 2px solid ",";\n  border-radius: 0.25rem;\n  color: ",";\n  background: ",";\n  transition: all 0.3s ease-in-out;\n  box-shadow: ","88 0px 3px 8px;\n\n  &:first-child {\n    margin-top: 0rem;\n  }\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.bgColor}),(function(n){return n.textColor}),(function(n){return n.bgColor}),(function(n){return n.bgColor}),(function(n){return n.textColor}),(function(n){return n.bgColor})),nn=R.c.div(p||(p=Object(M.a)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 2rem;\n"]))),en=function(n){var e=n.text,t=n.link,o=n.textColor,r=n.bgColor;return Object(L.jsx)($,{href:t,textColor:o,bgColor:r,children:e})},tn={colors:{yellowHover:"#FFEE32",yellow:"#FFFD25",white:"#EDEDED",black:"#333533",blackHover:"#434543"},headerHeight:"5rem",menuBreakPoint:"1000px",articleWidthBreakPoint:"1200px"},on=R.c.p(g||(g=Object(M.a)(["\n  font-size: 1.5rem;\n  line-height: 1.5;\n"]))),rn=function(){var n=tn.colors,e=n.yellow,t=n.black,o=tn.headerHeight;return Object(L.jsx)(q,{bgColor:e,textColor:t,minusHeight:o,centerXY:!0,children:Object(L.jsxs)(Z,{bgColor:e,headlineText:"Hello",borderColor:t,children:[Object(L.jsxs)(on,{children:["My name is ",Object(L.jsx)(Q,{children:"Micha\u0142 Depa"})," and I am"," ",Object(L.jsx)(Q,{children:"Frontend Developer"}),". I am looking for a job in Warsaw or remotely."]}),Object(L.jsxs)(nn,{children:[Object(L.jsx)(en,{textColor:e,bgColor:t,text:"Linkedin",link:"https://www.linkedin.com/in/mdepa1"}),Object(L.jsx)(en,{textColor:e,bgColor:t,text:"Github",link:"https://github.com/depish1"}),Object(L.jsx)(en,{textColor:e,bgColor:t,text:"Contact me",link:"#"})]})]})})},cn=[{title:"Organizer",desc:"Task management application integrated with firebase and having a login / registration system.",technologies:["Typescript","React","Redux","React Hook Form","React Router","Firebase","Styled Components"],liveLink:"https://depish1.github.io/organizer",githubLink:"https://github.com/depish1/organizer"},{title:"MyBooks",desc:"Online store with books with a login and registration system. The product database, transaction history and user data are stored in firebase.",technologies:["javascript (ES6+)","React","Redux","Formik","React Router","Firebase","Styled Components"],liveLink:"https://depish1.github.io/mybooks-ecomm",githubLink:"https://github.com/depish1/mybooks-ecomm"},{title:"Covid-19 Tracker",desc:"Application presenting charts with basic information on the Covid-19 epidemic. The data is taken from an external API.",technologies:["javascript (ES6+)","React","Styled Components","React Router","react-chart-js-2","REST Api"],liveLink:"https://depish1.github.io/covid-tracker",githubLink:"https://github.com/depish1/covid-tracker"},{title:"Portfolio",desc:"Personal page created to showcase my projects and skills.",technologies:["Typescript","React","Styled Components","React Hook Form"],liveLink:"https://depish1.github.io/new-portfolio",githubLink:"https://github.com/depish1/new-portfolio"}],ln=R.c.div(x||(x=Object(M.a)(["\n  display: grid;\n  grid-template-columns: 100%;\n  grid-gap: 1rem;\n  grid-row-gap: 2rem;\n  margin-bottom: 1rem;\n\n  @media only screen and (min-width: ",") {\n    grid-template-columns: 50% 50%;\n    grid-gap: 2rem;\n  }\n"])),(function(n){return n.theme.menuBreakPoint})),an=R.c.p(j||(j=Object(M.a)(["\n  margin: 1rem 0;\n  line-height: 1;\n  height: 5rem;\n"]))),sn=function(){var n=tn.colors,e=n.yellow,t=n.black;return Object(L.jsx)(q,{bgColor:t,textColor:e,headlineText:"Projects",centerXY:!0,children:Object(L.jsx)(ln,{children:cn.map((function(n){var o=n.title,r=n.desc,i=n.technologies,c=n.liveLink,l=n.githubLink;return Object(L.jsxs)(Z,{headlineText:o,bgColor:t,borderColor:e,children:[Object(L.jsxs)("div",{children:[Object(L.jsx)(an,{children:r}),Object(L.jsx)(Q,{children:"Technologies: "}),Object(L.jsx)("ul",{children:i.map((function(n){return Object(L.jsx)("li",{children:Object(L.jsx)(U,{borderColor:e,textColor:t,children:n})},n)}))})]}),Object(L.jsxs)(nn,{children:[Object(L.jsx)(en,{text:"Live",link:c,textColor:t,bgColor:e}),Object(L.jsx)(en,{text:"Github",link:l,textColor:t,bgColor:e})]})]},o)}))})})},dn=R.c.p(f||(f=Object(M.a)(["\n  p {\n    margin: 0.5rem 0;\n\n    &:last-child {\n      margin-bottom: 2rem;\n    }\n  }\n"]))),hn=R.c.ul(O||(O=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n\n  li {\n    display: flex;\n    align-items: center;\n  }\n\n  ul {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n"]))),un=function(){var n=tn.colors,e=n.yellow,t=n.black;return Object(L.jsx)(q,{bgColor:e,textColor:t,children:Object(L.jsx)(G,{centerXY:!0,children:Object(L.jsxs)(Z,{headlineText:"About me",borderColor:t,bgColor:e,children:[Object(L.jsxs)(dn,{children:[Object(L.jsx)("p",{children:"My name is Micha\u0142, I'm 25 years old and I come from Warsaw. I have been learning programming for 1.5 years and since the beginning of September 2021 I have been gaining my first full-time commercial experience as a Frontend Developer. "}),Object(L.jsx)("p",{children:"I am a communicative person who likes to spend time with other people. When I program, I am soaked up and I want to understand the problem in its entirety. I specialize in React and am currently open to a job offer in Warsaw or remotely."})]}),Object(L.jsx)(Q,{color:t,children:"My skills:"}),Object(L.jsx)(hn,{children:[{category:"React",skillsArr:["Redux","Styled components","React Router"]},{category:"Javascript",skillsArr:["ES6+","Typescrit"]},{category:"Css",skillsArr:["Sass","BEM","CSS Modules"]},{category:"HTML",skillsArr:["Accessibility","Semantics"]},{category:"Others",skillsArr:["Git","Fork","Omega","VS Code"]}].map((function(n){var o=n.category,r=n.skillsArr;return Object(L.jsxs)("li",{children:[Object(L.jsx)(U,{borderColor:t,textColor:e,isMain:!0,children:o}),Object(L.jsx)("ul",{children:r.map((function(n){return Object(L.jsx)("li",{children:Object(L.jsx)(U,{borderColor:t,textColor:e,children:n})})}))})]})}))})]})})})},bn=function(){return Object(L.jsxs)("div",{className:"App",children:[Object(L.jsx)(W,{}),Object(L.jsx)(rn,{}),Object(L.jsx)(sn,{}),Object(L.jsx)(un,{})]})},mn={menuReducer:B},pn=Object(P.a)({reducer:mn}),gn=Object(R.b)(y||(y=Object(M.a)(["\n    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');\n\n    *, *::after, *::before {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n    }\n    html, body {\n        box-sizing: border-box;\n        font-family: 'Roboto', sans-serif;\n        width: 100%;\n        min-height: 100vh;\n        overflow-x: hidden;\n    }\n    a, button {\n        font-family: 'Roboto', sans-serif;\n    }\n"])));C.a.render(Object(L.jsx)(w.a.StrictMode,{children:Object(L.jsx)(S.a,{store:pn,children:Object(L.jsxs)(R.a,{theme:tn,children:[Object(L.jsx)(gn,{}),Object(L.jsx)(bn,{})]})})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.0b3ca0e6.chunk.js.map