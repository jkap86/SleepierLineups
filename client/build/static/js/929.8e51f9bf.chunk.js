"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[929],{863:(e,a,t)=>{t.d(a,{Z:()=>s});const s=t(2791).lazy((()=>t.e(176).then(t.bind(t,6051))))},8852:(e,a,t)=>{t.d(a,{BT:()=>c,MG:()=>i,SD:()=>d,fL:()=>r,oA:()=>o,um:()=>l,wR:()=>n});var s=t(1243);const r=e=>({type:"SET_STATE_USER",payload:e}),o=()=>({type:"RESET_STATE"}),n=e=>async a=>{a({type:"FETCH_COMMON_START",payload:{item:e}});try{const t=await s.Z.get("/main/".concat(e));"projections"===e&&console.log(t.data[0].filter((e=>4===e.week&&"8135"===e.player_id)));const r="projections"!==e?t.data[0]:t.data[0].reduce(((e,a)=>{const{week:t,player_id:s,injury_status:r,...o}=a;return e[t]||(e[t]={}),e[t][s]={...o,injury_status:r},e}),{});a({type:"FETCH_COMMON_SUCCESS",payload:{item:e,data:r}})}catch(t){a({type:"FETCH_COMMON_FAILURE",payload:t.message}),console.error(t.message)}},c=e=>async a=>{a({type:"FETCH_USER_START"});try{var t;const r=await s.Z.get("/user/create",{params:{username:e}});if(console.log(r.data),null!==(t=r.data)&&void 0!==t&&t.error)a({type:"FETCH_USER_FAILURE",payload:r.data});else{a({type:"FETCH_USER_SUCCESS",payload:r.data.user}),a({type:"SET_STATE_COMMON",payload:{state:r.data.state}});a({type:"SET_STATE_LINEUPS",payload:{week:"regular"===r.data.state.season_type?r.data.state.leg:r.data.state.season_type.includes("post")?19:1}})}}catch(r){a({type:"FETCH_USER_FAILURE",payload:r.message})}},l=e=>async a=>{a({type:"FETCH_LEAGUES_START"});try{const s=await fetch("/league/find?user_id=".concat(encodeURIComponent(e)),{method:"GET",headers:{Accept:"application/json"}});if(s.ok){const e=s.body.getReader();let r,o="";for(;;){const{done:t,value:s}=await e.read();if(t)break;o+=(new TextDecoder).decode(s);const r=o.match(/"league_id":/g);let n=0;r&&r.length>0&&(n=r.length),a({type:"SET_STATE_PROGRESS",payload:{progress:n}})}try{r=JSON.parse(o)}catch(t){console.log(t)}console.log(r),a({type:"FETCH_LEAGUES_SUCCESS",payload:r.flat()})}else a({type:"FETCH_LEAGUES_FAILURE",payload:"Failed to fetch user leagues"})}catch(t){a({type:"FETCH_LEAGUES_FAILURE",payload:t.message})}},d=e=>async a=>{a({type:"SET_STATE_USER",payload:{isLoadingPS:!0}});try{const t=await s.Z.get("/user/lmplayershares",{params:{user_id:e}});console.log({lmplayershares:t.data.sort(((e,a)=>e.username>a.username?1:-1))}),a({type:"SET_STATE_USER",payload:{lmplayershares:t.data,isLoadingPS:!1}})}catch(t){a({type:"SET_STATE_USER",payload:{isLoadingPS:!1,errorPS:t.message}})}},i=e=>async a=>{try{const t=await s.Z.post("/main/playervalues",{player_ids:e}),r={};t.data.forEach((e=>{r[e.date]||(r[e.date]={}),r[e.date][e.player_id]||(r[e.date][e.player_id]={}),r[e.date][e.player_id][e.type]=e.value})),a({type:"SET_STATE_COMMON",payload:{values:r}})}catch(t){console.log(t)}}},9929:(e,a,t)=>{t.r(a),t.d(a,{default:()=>E});var s=t(1087),r=t(2791),o=t(6261),n=t(863),c=t(9434),l=t(184);const d=r.forwardRef(((e,a)=>{let{dropdownOptions:t,visibleState:s,setState:r}=e;const o=(0,c.I0)();return(0,l.jsxs)("div",{className:"dropdown_wrapper",children:[(0,l.jsx)("p",{className:"dropdown_header",children:"Top League Counts"}),(0,l.jsx)("ol",{onBlur:()=>o(r({[s]:!1})),className:"dropdown",ref:a,children:t.sort(((e,a)=>parseInt(a.leaguesCount)-parseInt(e.leaguesCount))).map(((e,a)=>(0,l.jsx)("li",{children:(0,l.jsx)("button",{children:(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("p",{children:[(0,l.jsx)("span",{className:"leagues_count",children:a+1}),(0,l.jsxs)("span",{className:"username",children:[(0,l.jsx)(n.Z,{avatar_id:e.avatar,alt:"user avatar",type:"user"}),e.username]}),(0,l.jsx)("span",{className:"leagues_count",children:e.leaguesCount})]})})})},"".concat(e.username,"_").concat(a))))})]})})),i=d;var p=t(1243);const u=e=>({type:"SET_STATE_HOME",payload:e});var y=t(8852);const m=(e,a)=>{(0,r.useEffect)((()=>{const t=t=>{e.current&&e.current.contains(t.target)||a()};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}}),[])},E=()=>{const e=(0,c.I0)(),{username_searched:a,leagueId:t,tab:n,dropdownVisible:d,dropdownOptions:E}=(0,c.v9)((e=>e.home)),_=(0,r.useRef)();return(0,r.useEffect)((()=>{e((0,y.oA)())}),[]),(0,r.useEffect)((()=>{e((async e=>{try{e({type:"SET_STATE_HOME",payload:{dropdownOptions:(await p.Z.get("user/findmostleagues")).data}})}catch(a){console.log(a)}}))}),[]),m(_,(()=>e(u({dropdownVisible:!1})))),(0,l.jsxs)("div",{id:"homepage",children:[(0,l.jsxs)("div",{className:"picktracker",children:[(0,l.jsx)("p",{className:"home click",onClick:()=>e(u({tab:"username"===n?"picktracker":"username"})),children:"picktracker"}),"picktracker"===n?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("input",{onChange:a=>e(u({leagueId:a.target.value})),className:"picktracker",placeholder:"League ID"}),(0,l.jsx)(s.rU,{className:"home",to:"/picktracker/".concat(t),children:"Submit"})]}):null]}),(0,l.jsxs)("div",{className:"home_wrapper",children:[(0,l.jsx)("img",{alt:"sleeper_logo",className:"home",src:o}),(0,l.jsxs)("div",{className:"home_title",children:[(0,l.jsx)("strong",{className:"home",children:"Sleepier"}),(0,l.jsxs)("div",{className:"user_input",children:[(0,l.jsx)("input",{className:"home",type:"text",placeholder:"Username",onChange:a=>e(u({username_searched:a.target.value}))}),(0,l.jsx)("i",{className:"fa-solid fa-ranking-star",onClick:()=>e(u({dropdownVisible:!0}))})]}),(0,l.jsx)(s.rU,{className:"link click",to:""===a?"/":"/".concat(a,"/players"),children:"Submit"})]}),d&&E.length>0?(0,l.jsx)(i,{dropdownOptions:E,ref:_,visibleState:d,setState:u}):null]})]})}},6261:(e,a,t)=>{e.exports=t.p+"static/media/sleeper_icon.112b7db9cdaba849eed3.png"}}]);
//# sourceMappingURL=929.8e51f9bf.chunk.js.map