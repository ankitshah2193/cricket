(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(38)},26:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),l=a.n(i),s=(a(14),a(4)),o=a(5),u=a(7),c=a(6),m=a(8);a(26),a(28);var v=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"current-team-summary"},r.a.createElement("span",null," ",e.currentBattingTeam," "),r.a.createElement("span",null,e.currentBattingTeamScore,"/",e.currentTeamWickets," in ",e.currentTeamOver,"/",e.totalOvers)),r.a.createElement("div",null,r.a.createElement("span",{className:"previous-team-summary"},function(e){return e.previousBattingTeam?r.a.createElement("span",null," ",e.previousBattingTeam," scored ",e.previousBattingTeamScore,"/",e.teamWickets," in ",e.previousTeamOvers," overs "):r.a.createElement("span",null)}(e))))},g=a(2);function O(e){return Math.floor(e/6)+"."+e%6}var E=Object(g.b)(function(e){return{currentBattingTeam:e.game.currentBattingTeam,previousBattingTeam:e.game.previousBattingTeam,currentTeamOver:O(e.team[e.game.currentBattingTeam].noOfBalls),previousTeamOvers:e.team[e.game.previousBattingTeam]&&O(e.team[e.game.previousBattingTeam].noOfBalls),currentBattingTeamScore:e.team[e.game.currentBattingTeam].totalScore,previousBattingTeamScore:e.team[e.game.previousBattingTeam]&&e.team[e.game.previousBattingTeam].totalScore,currentTeamWickets:e.team[e.game.currentBattingTeam].wickets,totalOvers:e.game.noOfOvers}})(v),b=(a(34),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).runs=[0,1,2,3,4,6],a.extras=["W","N","B","Lb"],a.getRunDataTemplate=function(){return a.runs.map(function(e){return r.a.createElement("button",{key:e,className:"score-button btn "+(a.state.runs===e.toString()?"btn-primary":"btn-light"),onClick:a.handleRunChange},e)})},a.getExtrasDataTemplate=function(){return a.extras.map(function(e){return r.a.createElement("button",{key:e,className:"score-button btn "+(a.state.extraType===e.toString()?"btn-primary":"btn-light"),onClick:a.handleExtraChange},e)})},a.handleRunChange=function(e){var t=e.target.innerText;a.setState({runs:a.state.runs===t?null:t})},a.handleExtraChange=function(e){var t=e.target.innerText;a.setState({extraType:a.state.extraType===t?null:t,isExtra:a.state.extraType!==t})},a.handleOutChange=function(){a.setState({isOut:!a.state.isOut})},a.handleNextBallEvent=function(){var e=a.state,t=e.runs,n=e.isExtra,r=e.isOut,i=e.extraType;a.setState({runs:null,isExtra:!1,isOut:!1,extraType:null}),a.props.recordRuns(t,n,i,r)},a.state={runs:null,isExtra:!1,isOut:!1,extraType:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"runs-container"},this.getRunDataTemplate()),r.a.createElement("div",{className:"extra-runs-container"},r.a.createElement("span",{className:"extra-label"},"Extras\xa0"),this.getExtrasDataTemplate()),r.a.createElement("div",{className:"out-container"},r.a.createElement("button",{className:"score-button btn "+(this.state.isOut?"btn-primary":"btn-light"),onClick:this.handleOutChange},"Out")),r.a.createElement("div",{className:"next-ball-container"},r.a.createElement("button",{className:"btn btn-lg "+(this.state.runs||this.state.isOut||this.state.isExtra?"btn-success":"btn-secondary disabled"),onClick:this.handleNextBallEvent},"Next Ball")))}}]),t}(r.a.Component));function p(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i={type:e};return a.forEach(function(e,t){i[a[t]]=n[t]}),i}}var T=p("OVER_COMPLETE","teamName"),B=p("UPDATE_TEAM_SCORE","teamName","totalRuns"),h=p("UPDATE_NO_OF_BALLS","teamName"),f=p("UPDATE_OVER_DETAILS","teamName","deliveryData","currentOver");function d(e,t){return!e||e&&("Lb"===t||"B"===t)}function y(e,t,a,n){return function(r,i){var l=i(),s=l.team[l.game.currentBattingTeam],o=l.game.currentBattingTeam,u=l.game.currentBatsmen.filter(function(e){return e.isStriker})[0].name,c=l.game.currentBowler,m=t?1:0,v=e?parseInt(e,10):0,g=s.overs.length-1,O=s.overs[g].length>0?function(e){var t=0;return e.forEach(function(e){d(e.isExtra,e.extraType)&&t++}),t}(s.overs[g]):0;r(B(o,v+m)),d(t,a)&&(r(h(o)),O+=1),r(f(o,{batsman:u,bowler:c,isExtra:t,isOut:n,extraRuns:m,runs:v,extraType:a},g)),6===O&&r(T(o))}}var w=Object(g.b)(null,function(e){return{recordRuns:function(t,a,n,r){e(y(t,a,n,r))}}})(b),x=(a(36),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row current-over-details"},r.a.createElement("div",{className:"col-sm-12"},"This Over: ",this.props.currentOverDetails),r.a.createElement("div",{className:"col-sm-12"},"Bowler: ",this.props.currentBowler))}}]),t}(r.a.Component)),A=Object(g.b)(function(e){return{currentBowler:e.game.currentBowler,currentOverDetails:function(){var t=e.team[e.game.currentBattingTeam].overs;return t.length>0?t[t.length-1].map(function(e){var t="";return 0===e.runs&&(e.isExtra||e.isOut)?t="":t+=e.runs,e.isExtra&&(t+=e.extraType),e.isOut&&(t+="Out"),t}).join("  "):""}()}})(x),N=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(E,null),r.a.createElement(A,null),r.a.createElement(w,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(1),_={currentBattingTeam:"Team1",previousBattingTeam:null,currentBowlingTeam:"Team2",currentBatsmen:[{name:"Player1",isStriker:!0},{name:"Player2",isStriker:!1}],currentBowler:"Player3",noOfOvers:5},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;arguments.length>1&&arguments[1];return e},F=a(19),P={Team1:{totalScore:0,noOfBalls:0,wickets:0,players:{Player1:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0},Player2:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0},Player3:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0},Player4:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0},Player5:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0}},overs:[[]]},Team2:{totalScore:0,noOfBalls:0,wickets:0,players:{Player1:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0},Player2:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0},Player3:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0},Player4:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0},Player5:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0}},overs:[[]]}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,a=Object(F.a)({},e);switch(t.type){case"UPDATE_TEAM_SCORE":return a[t.teamName].totalScore+=t.totalRuns,a;case"UPDATE_NO_OF_BALLS":return a[t.teamName].noOfBalls+=1,a;case"UPDATE_OVER_DETAILS":return a[t.teamName].overs[t.currentOver].push(t.deliveryData),a;case"OVER_COMPLETE":return a[t.teamName].overs.push([]),a}return a},D=Object(S.c)({game:j,team:k}),C=a(18),R=Object(S.e)(D,{},Object(S.d)(Object(S.a)(C.a),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||S.d));l.a.render(r.a.createElement(g.a,{store:R},r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.151a2967.chunk.js.map