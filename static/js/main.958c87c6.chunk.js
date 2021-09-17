(this["webpackJsonpnew-portfolio"]=this["webpackJsonpnew-portfolio"]||[]).push([[0],{24:function(n,e,t){"use strict";t.r(e);var o,r,i,c,l,a,s,d,h,u,b,m,p,g,x=t(0),f=t.n(x),j=t(7),k=t.n(j),w=t(3),O=t(2),y=O.c.header(o||(o=Object(w.a)(["\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  height: ",";\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: ",";\n  background-color: ",";\n  padding: 0 4rem;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,\n    rgba(0, 0, 0, 0.22) 0px 10px 10px;\n\n  @media only screen and (max-width: calc("," + 100px)) {\n    padding: 0 2rem;\n  }\n\n  @media only screen and (max-width: ",") {\n    padding: 0 1rem;\n  }\n"])),(function(n){return n.theme.headerHeight}),(function(n){return n.theme.colors.yellow}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.menuBreakPoint}),(function(n){return n.theme.menuBreakPoint})),v=O.c.div(r||(r=Object(w.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 2.5rem;\n  font-weight: bold;\n  color: ",";\n  position: relative;\n  border-bottom: dashed 4px ",";\n\n  .left {\n    transform: rotate(-90deg);\n  }\n  .right {\n    position: relative;\n    top: 1px;\n  }\n"])),(function(n){return n.theme.colors.yellowHover}),(function(n){return n.theme.colors.yellow})),C=O.c.nav(i||(i=Object(w.a)(["\n  height: 100%;\n\n  ul {\n    display: flex;\n    height: 100%;\n    list-style: none;\n    transition: all 0.4s ease-in-out;\n\n    @media only screen and (max-width: ",") {\n      flex-direction: column;\n      position: absolute;\n      z-index: 10;\n      top: ",";\n      left: 0;\n      width: 100%;\n      height: calc(100vh - ",");\n      transform: translateX(",");\n    }\n\n    li {\n      height: 100%;\n\n      @media only screen and (max-width: ",") {\n        background-color: ",";\n        a {\n          color: ",";\n        }\n        &:nth-child(odd) {\n          background-color: ",";\n          a {\n            color: ",";\n          }\n        }\n      }\n\n      a {\n        text-decoration: none;\n        display: flex;\n        position: relative;\n        align-items: center;\n        height: 100%;\n        padding: 0 3rem;\n        color: ",';\n        font-weight: 700;\n        font-size: 1.5rem;\n        transition: all 0.3s ease-in-out;\n\n        &::before {\n          display: block;\n          position: absolute;\n          content: "";\n          height: 5px;\n          width: 0;\n          bottom: 0;\n          left: 50%;\n          background-color: ',';\n          transition: all 0.3s ease-in-out;\n        }\n        &::after {\n          display: block;\n          position: absolute;\n          content: "";\n          height: 5px;\n          width: 0;\n          bottom: 0;\n          left: 50%;\n          background-color: ',";\n          transition: all 0.3s ease-in-out;\n        }\n\n        &:hover,\n        &:focus {\n          @media only screen and (min-width: ",") {\n            color: ",";\n            background-color: ",";\n\n            &::before {\n              left: 0;\n              width: 50%;\n            }\n            &::after {\n              width: 50%;\n            }\n          }\n        }\n      }\n    }\n  }\n"])),(function(n){return n.theme.menuBreakPoint}),(function(n){return n.theme.headerHeight}),(function(n){return n.theme.headerHeight}),(function(n){return n.isMenuOpen?"0":"100%"}),(function(n){return n.theme.menuBreakPoint}),(function(n){return n.theme.colors.blackHover}),(function(n){return n.theme.colors.yellowHover}),(function(n){return n.theme.colors.yellowHover}),(function(n){return n.theme.colors.blackHover}),(function(n){return n.theme.colors.yellow}),(function(n){return n.theme.colors.yellow}),(function(n){return n.theme.colors.yellow}),(function(n){return n.theme.menuBreakPoint}),(function(n){return n.theme.colors.yellowHover}),(function(n){return n.theme.colors.blackHover})),H=t(4),_=t(8),R=Object(_.b)({name:"menu",initialState:{isMenuOpen:!1},reducers:{toggleMenu:function(n){console.log("xd"),n.isMenuOpen=!n.isMenuOpen},closeMenu:function(n){n.isMenuOpen=!1}}}),P=R.reducer,M=R.actions,B=M.toggleMenu,z=M.closeMenu,T=t(1),L=[{text:"Home",link:"#"},{text:"Projects",link:"#"},{text:"Skills",link:"#"},{text:"About",link:"#"},{text:"Contact",link:"#"}],F=function(){var n=Object(H.c)((function(n){return n.menuReducer.isMenuOpen})),e=Object(H.b)();return Object(T.jsx)(C,{isMenuOpen:n,children:Object(T.jsx)("ul",{onClick:function(){e(z())},children:L.map((function(n){return Object(T.jsx)("li",{children:Object(T.jsx)("a",{href:n.link,children:n.text})},n.text)}))})})},S=O.c.button(c||(c=Object(w.a)(["\n  border: none;\n  transition: all 0.4s ease-in-out;\n  padding: 0 1rem;\n  background-color: transparent;\n  cursor: pointer;\n  height: 100%;\n\n  @media only screen and (min-width: ",") {\n    display: none;\n  }\n\n  &:hover {\n    .hamburger__line {\n      background-color: ",";\n    }\n  }\n\n  .hamburger__wrapper {\n    width: 2.5rem;\n    height: 2.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    position: relative;\n    transition: all 0.4s ease-in-out;\n  }\n\n  .hamburger__line {\n    display: block;\n    width: 120%;\n    height: 6px;\n    background-color: ",';\n    content: "";\n    border-radius: 5px;\n    transition: all 0.4s ease-in-out;\n\n    &--top {\n      transform-origin: left top;\n    }\n    &--bottom {\n      transform-origin: left bottom;\n    }\n  }\n\n  .isOpen {\n    transform-origin: 50% 50%;\n    transform: rotate(360deg);\n\n    .hamburger__line {\n      width: 3.1rem;\n      &--top {\n        transform: rotate(45deg);\n      }\n      &--middle {\n        width: 0;\n      }\n      &--bottom {\n        transform: rotate(-45deg);\n      }\n    }\n  }\n'])),(function(n){return n.theme.menuBreakPoint}),(function(n){return n.theme.colors.yellowHover}),(function(n){return n.theme.colors.yellow})),E=function(){var n=Object(H.c)((function(n){return n.menuReducer.isMenuOpen})),e=Object(H.b)(),t="hamburger__wrapper ".concat(n?"isOpen":"");return console.log(t),Object(T.jsx)(S,{onClick:function(){e(B())},children:Object(T.jsxs)("div",{className:t,children:[Object(T.jsx)("span",{className:"hamburger__line hamburger__line--top"}),Object(T.jsx)("span",{className:"hamburger__line hamburger__line--middle"}),Object(T.jsx)("span",{className:"hamburger__line hamburger__line--bottom"})]})})},D=function(){return Object(T.jsxs)(y,{children:[Object(T.jsxs)(v,{children:[Object(T.jsx)("div",{className:"left",children:"M"}),Object(T.jsx)("div",{className:"right",children:"D"})]}),Object(T.jsx)(F,{}),Object(T.jsx)(E,{})]})},N=O.c.section(l||(l=Object(w.a)(["\n  width: 100%;\n  min-height: calc(100vh - ",");\n  color: ",";\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 1rem;\n\n  @media only screen and (min-width: ",") {\n    padding: 4rem;\n  }\n"])),(function(n){var e=n.minusHeight;return null!==e&&void 0!==e?e:"0px"}),(function(n){return n.textColor}),(function(n){return n.bgColor}),(function(n){return n.theme.menuBreakPoint})),X=O.c.div(a||(a=Object(w.a)(["\n  height: 100%;\n  width: 100%;\n  max-width: 1280px;\n  display: flex;\n\n  ","\n"])),(function(n){return n.centerXY&&"display: flex;\n    justify-content: center;\n    align-items: center;"})),A=O.c.h2(s||(s=Object(w.a)(["\n  display: flex;\n  justify-content: center;\n  font-size: 2.5rem;\n  font-weight: 800;\n  width: 100%;\n  margin: 1rem;\n  margin-bottom: 3rem;\n  max-width: 1280px;\n"]))),Y=O.c.h2(d||(d=Object(w.a)(["\n  display: block;\n  padding: 0 0.5rem;\n  background-color: ",";\n  position: absolute;\n  top: 0;\n  transform: translate(-0.5rem, -50%);\n  font-size: 1.5rem;\n  font-weight: 700;\n"])),(function(n){return n.bgColor})),I=function(n){var e=n.bgColor,t=n.textColor,o=n.headlineText,r=n.minusHeight,i=void 0===r?"0px":r,c=n.children,l=n.centerXY,a=void 0!==l&&l;return Object(T.jsxs)(N,{bgColor:e,textColor:t,minusHeight:i,children:[o&&Object(T.jsx)(A,{children:o}),Object(T.jsx)(X,{centerXY:a,children:c})]})},G=O.c.article(h||(h=Object(w.a)(["\n  padding: 2rem;\n  border: 3px solid ",";\n  width: 100%;\n  max-width: 550px;\n  position: relative;\n  border-radius: 0.25rem;\n  font-size: 1.2rem;\n  box-shadow: ",'88 0px 3px 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  p {\n    margin: 1rem 0;\n    line-height: 1;\n    height: 5rem;\n  }\n\n  ul {\n    margin: 0.5rem 0;\n    list-style-type: none;\n    display: flex;\n    flex-wrap: wrap;\n\n    li {\n      font-size: 1rem;\n\n      width: max-content;\n      padding: 0.5rem;\n      margin: 0.5rem;\n      position: relative;\n\n      &::before {\n        content: "";\n        display: block;\n        position: absolute;\n\n        transform: skew(20deg);\n        border: 3px solid ',";\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n      }\n    }\n  }\n\n  @media only screen and (min-width: ",") {\n  }\n"])),(function(n){return n.borderColor}),(function(n){return n.borderColor}),(function(n){return n.borderColor}),(function(n){return n.theme.articleWidthBreakPoint})),J=O.c.span(u||(u=Object(w.a)(["\n  font-weight: bold;\n"]))),W=function(n){var e=n.borderColor,t=n.headlineText,o=n.bgColor,r=n.children;return Object(T.jsxs)(G,{borderColor:e,children:[t&&Object(T.jsx)(Y,{bgColor:o,children:t}),r]})},q=O.c.a(b||(b=Object(w.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  padding: 0.5rem 0;\n  margin-top: 1rem;\n  font-size: 1.2rem;\n  font-weight: bold;\n  text-decoration: none;\n  border: 2px solid ",";\n  border-radius: 0.25rem;\n  color: ",";\n  background: ",";\n  transition: all 0.3s ease-in-out;\n  box-shadow: ","88 0px 3px 8px;\n\n  &:first-child {\n    margin-top: 0rem;\n  }\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n\n  @media only screen and (min-width: ",") {\n    margin-right: 1rem;\n    width: 150px;\n\n    &:first-child {\n      margin-top: 1rem;\n    }\n    &:last-child {\n      margin-right: 0rem;\n    }\n  }\n"])),(function(n){return n.bgColor}),(function(n){return n.textColor}),(function(n){return n.bgColor}),(function(n){return n.bgColor}),(function(n){return n.textColor}),(function(n){return n.bgColor}),(function(n){return n.theme.buttonsBreakPoint})),K=O.c.div(m||(m=Object(w.a)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 2rem;\n\n  @media only screen and (min-width: ",") {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n"])),(function(n){return n.theme.buttonsBreakPoint})),Q=function(n){var e=n.text,t=n.link,o=n.textColor,r=n.bgColor;return Object(T.jsx)(q,{href:t,textColor:o,bgColor:r,children:e})},U={colors:{yellowHover:"#FFEE32",yellow:"#FFFD25",white:"#EDEDED",black:"#333533",blackHover:"#434543"},headerHeight:"5rem",menuBreakPoint:"1000px",articleWidthBreakPoint:"1200px",buttonsBreakPoint:"550px"},V=function(){var n=U.colors,e=n.yellow,t=n.black,o=U.headerHeight;return Object(T.jsx)(I,{bgColor:e,textColor:t,minusHeight:o,centerXY:!0,children:Object(T.jsxs)(W,{bgColor:e,headlineText:"Hello",borderColor:t,children:["My name is ",Object(T.jsx)(J,{children:"Micha\u0142 Depa"})," and I am"," ",Object(T.jsx)(J,{children:"Frontend Developer"}),".",Object(T.jsxs)(K,{children:[Object(T.jsx)(Q,{textColor:e,bgColor:t,text:"Linkedin",link:"https://www.linkedin.com/in/mdepa1"}),Object(T.jsx)(Q,{textColor:e,bgColor:t,text:"Github",link:"https://github.com/depish1"}),Object(T.jsx)(Q,{textColor:e,bgColor:t,text:"Contact me",link:"#"})]})]})})},Z=[{title:"Covid-19 Tracker",desc:"Application presenting charts with basic information on the Covid-19 epidemic. The data is taken from an external API.",technologies:["javascript (ES6+)","React","Styled Components","React Router","react-chart-js-2","REST Api"],liveLink:"https://depish1.github.io/covid-tracker",githubLink:"https://depish1.github.io/covid-tracker"},{title:"MyBooks",desc:"Online store with books with a login and registration system. The product database, transaction history and user data are stored in firebase.",technologies:["javascript (ES6+)","React","Redux","Formik","React Router","Firebase","Styled Components"],liveLink:"https://depish1.github.io/mybooks-ecomm",githubLink:"https://depish1.github.io/mybooks-ecomm"},{title:"Organizer",desc:"Task management application integrated with firebase and having a login / registration system.",technologies:["Typescript","React","Redux","React Hook Form","React Router","Firebase","Styled Components"],liveLink:"https://depish1.github.io/organizer",githubLink:"https://depish1.github.io/organizer"},{title:"Portfolio",desc:"Personal page created to showcase my projects and skills.",technologies:["Typescript","React","Styled Components","React Hook Form"],liveLink:"https://depish1.github.io/new-portfolio",githubLink:"https://depish1.github.io/new-portfolio"}],$=O.c.div(p||(p=Object(w.a)(["\n  display: grid;\n  grid-template-columns: 100%;\n  grid-gap: 2rem;\n\n  @media only screen and (min-width: ",") {\n    grid-template-columns: 50% 50%;\n  }\n"])),(function(n){return n.theme.menuBreakPoint})),nn=function(){var n=U.colors,e=n.yellow,t=n.black;return Object(T.jsx)(I,{bgColor:t,textColor:e,headlineText:"Projects",centerXY:!0,children:Object(T.jsx)($,{children:Z.map((function(n){var o=n.title,r=n.desc,i=n.technologies,c=n.liveLink,l=n.githubLink;return Object(T.jsxs)(W,{headlineText:o,bgColor:t,borderColor:e,children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("p",{children:r}),Object(T.jsx)(J,{children:"Technologies: "}),Object(T.jsx)("ul",{children:i.map((function(n){return Object(T.jsx)("li",{children:Object(T.jsx)("span",{children:n})},n)}))})]}),Object(T.jsxs)(K,{children:[Object(T.jsx)(Q,{text:"Live",link:c,textColor:t,bgColor:e}),Object(T.jsx)(Q,{text:"Github",link:l,textColor:t,bgColor:e})]})]},o)}))})})},en=function(){return Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)(D,{}),Object(T.jsx)(V,{}),Object(T.jsx)(nn,{})]})},tn={menuReducer:P},on=Object(_.a)({reducer:tn}),rn=Object(O.b)(g||(g=Object(w.a)(["\n    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');\n\n    *, *::after, *::before {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n    }\n    html, body {\n        box-sizing: border-box;\n        font-family: 'Roboto', sans-serif;\n        width: 100%;\n    }\n    a, button {\n        font-family: 'Roboto', sans-serif;\n    }\n"])));k.a.render(Object(T.jsx)(f.a.StrictMode,{children:Object(T.jsx)(H.a,{store:on,children:Object(T.jsxs)(O.a,{theme:U,children:[Object(T.jsx)(rn,{}),Object(T.jsx)(en,{})]})})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.958c87c6.chunk.js.map