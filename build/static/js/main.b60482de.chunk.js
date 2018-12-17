(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){e.exports=a(303)},114:function(e,t,a){},116:function(e,t,a){},303:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(67),l=a.n(c),o=(a(114),a(3)),s=a(4),i=a(7),u=a(5),m=a(8),d=(a(116),a(9)),p=a(6),v=a(21),h="DATES_BY_MONTH",E="ADD_REMINDER",f="REMOVE_REMINDER",b={dates:[],dateErr:null,addSuccess:!1,removeSuccess:!1,addErr:null,removeErr:null},y=a(13),O=Object(p.combineReducers)({form:y.reducer,CalendarReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload,r=t.error;switch(a){case h:return r?Object(v.a)({},e,{dateErr:r,addSuccess:!1}):Object(v.a)({},e,{dates:n,dateErr:null,addSuccess:!1});case E:return r?Object(v.a)({},e,{addErr:r,addSuccess:!1,removeSuccess:!1}):Object(v.a)({},e,{addSuccess:!0,removeSuccess:!1,addErr:null});case f:return r?Object(v.a)({},e,{removeErr:r,removeSuccess:!1,addSuccess:!1}):Object(v.a)({},e,{removeSuccess:!0,addSuccess:!1,removeErr:null});default:return e}}}),g=a(107),j=Object(p.createStore)(O,void 0,Object(p.compose)(Object(p.applyMiddleware)(g.a))),N=a(20),C=a.n(N),S=a(50);function D(e,t){return new Date(t,e+1,0).getDate()}var M={getDatesByMonth:function(e,t){return function(){var a=Object(S.a)(C.a.mark(function a(n){var r,c,l,o,s,i,u;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:try{for(r=(r=localStorage.getItem("reminders"))?JSON.parse(r):{},(c=new Date).setUTCFullYear(t),c.setUTCDate(1),c.setUTCMonth(e),l=D(c.getUTCMonth(),c.getUTCFullYear()),o=[],s=1;s<=l;s++)(i=new Date(c.getTime())).setDate(s),(u=r[i.getUTCFullYear()+"-"+i.getUTCMonth()+"-"+i.getUTCDate()])||(u=[]),o.push({date:i,reminders:u});n({type:h,payload:o,error:null})}catch(m){n({type:h,error:JSON.stringify(m)})}case 1:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()},addReminder:function(e,t,a){return function(){var n=Object(S.a)(C.a.mark(function n(r){var c;return C.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:try{c=(c=localStorage.getItem("reminders"))?JSON.parse(c):{},e.rawTime=Number(e.hour+e.min),a.push(e),c[t.getUTCFullYear()+"-"+t.getUTCMonth()+"-"+t.getUTCDate()]=a,localStorage.setItem("reminders",JSON.stringify(c)),r(Object(y.reset)("NewReminderForm")),r({type:E,payload:!0,error:null})}catch(l){r({type:E,error:JSON.stringify(l)})}case 1:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},removeReminder:function(e,t){return function(){var a=Object(S.a)(C.a.mark(function a(n){var r;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:try{(r=(r=localStorage.getItem("reminders"))?JSON.parse(r):{})[t.getUTCFullYear()+"-"+t.getUTCMonth()+"-"+t.getUTCDate()]=e,localStorage.setItem("reminders",JSON.stringify(r)),n({type:E,payload:!0,error:null})}catch(c){n({type:E,error:JSON.stringify(c)})}case 1:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()}},w=a(30);function T(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=[],r=new Set,c=[],l=[];return e.map(function(e){r.add(e[t])}),c=Object(w.a)(r),1===a?(c.sort(),c.reverse()):c.sort(),c.map(function(e){l[e]=[]}),e.map(function(e){var a=parseInt(e[t]),n=l[a]||[];n.push(e),l[a]=n}),1===a&&l.reverse(),l.map(function(e){n.push.apply(n,Object(w.a)(e))}),n}var k=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=T(this.props.reminders,"rawTime",0);return r.a.createElement("div",{className:"day-reminders"},e.map(function(e){return r.a.createElement("div",{key:e.reminder,className:"day-reminder",style:{background:e.color}},r.a.createElement("span",null,e.hour,":",e.min),r.a.createElement("span",null,e.reminder.substr(0,5).trim()+(e.reminder.length>5?"...":"")))}))}}]),t}(n.Component),R=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.blank,a=e.date,n=e.handleAdd;return t?r.a.createElement("div",{className:"day-block blank"}):r.a.createElement("div",{className:"day-block",onClick:function(){n(a)}},r.a.createElement("span",null,a.date.getUTCDate()),r.a.createElement(k,{reminders:a.reminders}))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).renderDates=function(){return a.props.dates.map(function(e,t){var n=e.date.getUTCDay(),c=[];if(0===t&&0!==n)for(var l=1;l<=n;l++)c.push(r.a.createElement(R,{blank:!0,key:l}));return c.push(r.a.createElement(R,{key:e,date:e,handleAdd:a.props.handleAdd})),c})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"month"},this.renderDates())}}]),t}(n.Component),F=Object(d.connect)(function(e){return{dates:e.CalendarReducer.dates}},null)(U),A=a(108),J=a.n(A),x=function(e){var t=e.handleSubmit;return r.a.createElement("form",{onSubmit:t,className:"row"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("label",null,"Hour"),r.a.createElement(y.Field,{name:"hour",component:"select",className:"form-control"},r.a.createElement("option",{value:"0"},"00"),r.a.createElement("option",{value:"1"},"01"),r.a.createElement("option",{value:"2"},"02"),r.a.createElement("option",{value:"3"},"03"),r.a.createElement("option",{value:"4"},"04"),r.a.createElement("option",{value:"5"},"05"),r.a.createElement("option",{value:"6"},"06"),r.a.createElement("option",{value:"7"},"07"),r.a.createElement("option",{value:"8"},"08"),r.a.createElement("option",{value:"9"},"09"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"11"},"11"),r.a.createElement("option",{value:"12"},"12"),r.a.createElement("option",{value:"13"},"13"),r.a.createElement("option",{value:"14"},"14"),r.a.createElement("option",{value:"15"},"15"),r.a.createElement("option",{value:"16"},"16"),r.a.createElement("option",{value:"17"},"17"),r.a.createElement("option",{value:"18"},"18"),r.a.createElement("option",{value:"19"},"19"),r.a.createElement("option",{value:"20"},"20"),r.a.createElement("option",{value:"21"},"21"),r.a.createElement("option",{value:"22"},"22"),r.a.createElement("option",{value:"23"},"23"))),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("label",null,"Min"),r.a.createElement(y.Field,{name:"min",component:"select",className:"form-control"},r.a.createElement("option",{value:"0"},"00"),r.a.createElement("option",{value:"15"},"15"),r.a.createElement("option",{value:"30"},"30"),r.a.createElement("option",{value:"45"},"45"))),r.a.createElement("div",{className:"col-md-5"},r.a.createElement("label",null,"Reminder"),r.a.createElement(y.Field,{name:"reminder",component:"input",type:"text",className:"form-control"})),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("label",null,"Colour"),r.a.createElement(y.Field,{name:"color",component:"select",className:"form-control"},r.a.createElement("option",{value:"ForestGreen"},"Green"),r.a.createElement("option",{value:"Firebrick"},"Red"),r.a.createElement("option",{value:"Coral"},"Orange"),r.a.createElement("option",{value:"RoyalBlue"},"Blue"))),r.a.createElement("div",{className:"col-md-3 mt-2"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save")))},I=x=Object(y.reduxForm)({form:"NewReminderForm"})(x),B=a(46),Y=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=T(this.props.reminders,"rawTime",0);return r.a.createElement("div",{className:"modal-reminders"},t.map(function(a,n){return r.a.createElement("div",{className:"modal-reminder row",key:a},r.a.createElement("div",{className:"col-2"},r.a.createElement("span",{style:{display:"inline-block",marginRight:5,background:a.color,borderRadius:"50%",height:10,width:10}}),a.hour,":",a.min),r.a.createElement("span",{className:"col-6"},a.reminder),r.a.createElement("span",{className:"col-4 delete",onClick:function(){return e.props.delete(n,t)}},"Delete"))}))}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).renderContent=function(){return a.props.activeDate?r.a.createElement("div",null,r.a.createElement("h3",null,a.props.activeDate.date.toDateString()),r.a.createElement("hr",null),a.props.activeDate.reminders.length>0&&r.a.createElement("div",null,r.a.createElement("h4",null,"All Reminders"),r.a.createElement(Y,{reminders:a.props.activeDate.reminders,delete:a.handleDelete}),r.a.createElement("hr",null)),r.a.createElement("div",null,r.a.createElement("h4",null,"New Reminder"),r.a.createElement(I,{onSubmit:a.handleSave,initialValues:{hour:"10",min:"15",color:"ForestGreen"}}))):null},a.handleSave=function(e){var t=a.props,n=t.actions,r=t.activeDate;n.addReminder(e,r.date,r.reminders)},a.handleDelete=function(e,t){var n=a.props,r=n.actions,c=n.activeDate;(t=Object(w.a)(t)).splice(e,1),r.removeReminder(t,c.date)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(J.a,{className:"reminder-modal",isOpen:this.props.open,onRequestClose:this.props.close},this.renderContent())}}]),t}(n.Component),_=Object(B.a)(function(e){return{dates:e.CalendarReducer.dates}},function(e){return{actions:Object(p.bindActionCreators)(M,e)}})(W),G=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).getData=function(){e.props.actions.getDatesByMonth(e.state.currentMonth.getUTCMonth(),e.state.currentMonth.getUTCFullYear())},e.handleAdd=function(t){e.setState({modalOpen:!0,activeDate:t})},e.closeModal=function(){e.setState({modalOpen:!1,activeDate:null})},e.lastMonth=function(){var t=new Date(e.state.currentMonth);t.setUTCMonth(t.getUTCMonth()-1),e.setState({currentMonth:t}),e.setState({currentMonth:t},function(){e.getData()})},e.nextMonth=function(){var t=new Date(e.state.currentMonth);t.setUTCMonth(t.getUTCMonth()+1),e.setState({currentMonth:t},function(){e.getData()})},e.state={currentMonth:new Date,modalOpen:!1,activeDate:null},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.getData()}},{key:"componentWillReceiveProps",value:function(e){var t=e.actions;(e.addSuccess||e.removeSuccess)&&(t.getDatesByMonth(this.state.currentMonth.getUTCMonth()),this.closeModal()),(e.addErr||e.removeErr)&&alert("Something went wrong. Try again later")}},{key:"render",value:function(){var e=this.state.currentMonth;return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement("h1",null,function(e){switch(e){case 0:return"January";case 1:return"February";case 2:return"March";case 3:return"April";case 4:return"May";case 5:return"June";case 6:return"July";case 7:return"August";case 8:return"September";case 9:return"October";case 10:return"November";case 11:return"December"}}(e.getUTCMonth())+" "+e.getUTCFullYear())),r.a.createElement("div",{className:"col-2",onClick:this.lastMonth},r.a.createElement("span",null,"Prev Month")),r.a.createElement("div",{className:"col-2",onClick:this.nextMonth},r.a.createElement("span",null,"Next Month"))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"day-name"},r.a.createElement("span",null,"Sunday")),r.a.createElement("div",{className:"day-name"},r.a.createElement("span",null,"Monday")),r.a.createElement("div",{className:"day-name"},r.a.createElement("span",null,"Tuesday")),r.a.createElement("div",{className:"day-name"},r.a.createElement("span",null,"Wednesday")),r.a.createElement("div",{className:"day-name"},r.a.createElement("span",null,"Thursday")),r.a.createElement("div",{className:"day-name"},r.a.createElement("span",null,"Friday")),r.a.createElement("div",{className:"day-name"},r.a.createElement("span",null,"Saturday"))),r.a.createElement("div",{className:"card-body"},r.a.createElement(F,{handleAdd:this.handleAdd}))),r.a.createElement(_,{open:this.state.modalOpen,close:this.closeModal,activeDate:this.state.activeDate}))}}]),t}(n.Component),P=Object(d.connect)(function(e){return{dates:e.CalendarReducer.dates,addSuccess:e.CalendarReducer.addSuccess,removeSuccess:e.CalendarReducer.removeSuccess,addErr:e.CalendarReducer.addErr,removeErr:e.CalendarReducer.removeErr}},function(e){return{actions:Object(p.bindActionCreators)(M,e)}})(G),H=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.Provider,{store:j},r.a.createElement(P,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[109,2,1]]]);
//# sourceMappingURL=main.b60482de.chunk.js.map