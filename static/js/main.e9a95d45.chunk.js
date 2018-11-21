(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(25)},25:function(e,t,a){"use strict";a.r(t);var l=a(17),n=a(18),i=a(22),o=a(19),s=a(23),r=a(2),c=a(20),d=a.n(c),u=a(0),h=a.n(u),m=a(21),y=a.n(m),g=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(o.a)(t).call(this))).state={active:0,allowPlaying:!0,videoIsPlaying:!1,videos:[{title:"Restricted Embed 1",vimeoId:"301926039"},{title:"Restricted Embed 2",vimeoId:"85876630"},{title:"Restricted Embed 3",vimeoId:"301925886"},{title:"Embeddable Anywhere 1",vimeoId:"301926457"},{title:"Embeddable Anywhere 2",vimeoId:"301926243"}]},e.handlePlay=e.handlePlay.bind(Object(r.a)(Object(r.a)(e))),e.handlePause=e.handlePause.bind(Object(r.a)(Object(r.a)(e))),e.handleOnEnded=e.handleOnEnded.bind(Object(r.a)(Object(r.a)(e))),e.handleToggleAllowPlaying=e.handleToggleAllowPlaying.bind(Object(r.a)(Object(r.a)(e))),e.handleSelectVideo=e.handleSelectVideo.bind(Object(r.a)(Object(r.a)(e))),e}return Object(s.a)(t,e),Object(n.a)(t,[{key:"handlePlay",value:function(){this.setState({videoIsPlaying:!0})}},{key:"handlePause",value:function(){this.setState({videoIsPlaying:!1})}},{key:"handleToggleAllowPlaying",value:function(e){this.setState(function(e){return{allowPlaying:!e.allowPlaying}})}},{key:"handleOnEnded",value:function(){this.setState(function(e){return{active:e.active+1<e.videos.length?e.active+1:0}})}},{key:"handleSelectVideo",value:function(e){this.setState({active:e})}},{key:"render",value:function(){var e=this,t=this.state.videos[this.state.active],a=t.title,l=t.vimeoId;return h.a.createElement("div",null,h.a.createElement("h1",null,"React Player ",h.a.createElement("a",{href:"https://github.com/CookPete/react-player/issues/520",target:"_blank",rel:"noopener noreferrer"},"Issue #520")),h.a.createElement("p",null,"Demonstrates an issue where certain videos will cause the React Player to stop controlling the video playback. When the second video begins playing, the play/pause button will cease to control the video. In Safari it continues to work though the second video does not seem to autoplay, despite the first video autoplaying just fine."),h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col"},h.a.createElement("h2",null,a),h.a.createElement("p",null,h.a.createElement("button",{onClick:this.handleToggleAllowPlaying},this.state.allowPlaying?"Pause":"Play")),h.a.createElement("div",{className:"player-wrapper"},h.a.createElement(y.a,{playing:this.state.allowPlaying,url:"https://www.vimeo.com/"+l,onStart:this.handlePlay,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleOnEnded,className:"react-player"})),h.a.createElement("p",null,this.state.allowPlaying?"Playing Allowed":"Playing Disallowed"),h.a.createElement("p",null,this.state.videoIsPlaying?"Video Is Playing":"Video Is Not Playing"),h.a.createElement("ul",null,this.state.videos.map(function(t,a){var l=t.title,n=a===e.state.active;return h.a.createElement("li",{key:l,style:{cursor:"pointer",color:n?"#ff0000":"#000000"},onClick:function(t){n||e.handleSelectVideo(a)}},l)}))),h.a.createElement("div",{className:"col"},h.a.createElement("h2",null,"Browser Observations"),h.a.createElement("h3",null,"Chrome:"),h.a.createElement("strong",null,"Version 70.0.3538.110"),h.a.createElement("ul",null,h.a.createElement("li",null,"1st Video Loads and autoplays if playing is true as expected."),h.a.createElement("li",null,"2nd Video Loads and autoplays but without firing onPlaying event."),h.a.createElement("li",null,"Video can no longer be controlled by playing prop."),h.a.createElement("li",null,"Interacting with the Vimeo player regains expected functionality."),h.a.createElement("li",null,"Logged to console: nothing")),h.a.createElement("h3",null,"Firefox"),h.a.createElement("strong",null,"Version 63.0.3"),h.a.createElement("ul",null,h.a.createElement("li",null,"1st Video Loads and autoplays if playing is true as expected."),h.a.createElement("li",null,"2nd Video Loads and autoplays but without firing onPlaying event."),h.a.createElement("li",null,"Video can no longer be controlled by playing prop."),h.a.createElement("li",null,"Interacting with the Vimeo player regains expected functionality."),h.a.createElement("li",null,"Logged to console: InvalidStateError: An attempt was made to use an object that is not, or is no longer, usable - player.js:2")),h.a.createElement("h3",null,"Safari"),h.a.createElement("strong",null,"Version 12.0.1"),h.a.createElement("ul",null,h.a.createElement("li",null,"1st Video Loads and autoplays if playing is true as expected."),h.a.createElement("li",null,"2nd Video Loads but does not autoplay even if playing is true."),h.a.createElement("li",null,"Video can be controlled by playing prop."),h.a.createElement("li",null,"Logged to console: Successfuly preconnected to https://f.vimeocdn.com/")))))}}]),t}(h.a.PureComponent);d.a.render(h.a.createElement(g,null),document.getElementById("player-demo"))}},[[24,2,1]]]);
//# sourceMappingURL=main.e9a95d45.chunk.js.map