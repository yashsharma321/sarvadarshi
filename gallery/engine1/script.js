// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 9.0
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a}});function ws_turn(d,a,b){var f=jQuery;var h=f(this);var c=f("li",b);var e=f(".ws_list",b);var g=f("<div>").addClass("ws_effect ws_turn").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",perspective:500}).appendTo(b);this.go=function(q,l){var s=b.height();var j=b.width();var k={left:["0% 50%",{rotateY:90,translate:[0,0,0.1]},{left:-j}],right:["100% 50%",{rotateY:-90,translate:[0,0,0.1]},{left:j}],up:["50% 0%",{rotateX:-90,translate:[0,0,0.1]},{top:-s}],down:["50% 100%",{rotateX:90,translate:[0,0,0.1]},{top:s}]}[d.direction||["left","right","down","up"][Math.floor(Math.random()*4)]];var i=f("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",transformOrigin:k[0],transformStyle:"preserve-3d",outline:"1px solid transparent",zIndex:5}).append(f(a.get(q)).clone()),r=f("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",background:"#000",zIndex:4}).append(f(a.get(l)).clone());g.css({perspectiveOrigin:k[0]});if(d.responsive<3){i.find("img").css("width","100%");r.find("img").css("width","100%")}r.appendTo(g);i.appendTo(g);e.stop(true,true).hide().css({left:-q+"00%"});var p=k[2];var o={top:0,left:0};var n={opacity:1};var m={opacity:0.2};if(d.support.transform){p=k[1];o={rotateX:0,rotateY:0,translate:[0,0,0]}}wowAnimate(i,p,o,d.duration,"easeInOutQuart",function(){h.trigger("effectEnd");i.remove();r.remove()});wowAnimate(r.find("img"),n,m,d.duration,"easeInOutQuart")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 9.0
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a}});function ws_shift(k,i,c){var d=jQuery;var h=d(this);var b=c.find("li");var f=c.find(".ws_list");var e={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"};var g=d("<div>").addClass("ws_effect ws_shift").css(e).appendTo(c);var a=d("<div>").css(e).css({display:"none",zIndex:4}).appendTo(g);var j=d("<div>").css(e).css({display:"none",zIndex:3}).appendTo(g);this.go=function(l,p,n){var m=c.width();var o=c.height();a.append(d(i.get(l)).clone());j.append(d(i.get(p)).clone());if(k.responsive<3){a.find("img").css("width","100%");j.find("img").css("width","100%")}f.stop(true,true).hide().css({left:-l+"00%"});var q={left:[{left:-m},{left:0}],right:[{left:m},{left:0}],down:[{top:o},{top:0}],up:[{top:-o},{top:0}]}[k.direction||["left","right","down","up"][Math.floor(Math.random()*4)]];if(k.support.transform){if(q[0].left){q[0]={translate:[q[0].left,0,0]}}else{q[0]={translate:[0,q[0].top,0]}}q[1]={translate:[0,0,0]}}a.show();j.show();wowAnimate(a,q[0],q[1],k.duration,"easeInOutCubic",function(){f.show();a.hide().html("");j.hide().html("");h.trigger("effectEnd")});wowAnimate(j,{scale:1,translate:[0,0,0]},{scale:0.5,translate:[0,0,0]},k.duration,"easeInOutCubic")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 9.0
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"turn,shift",prev:"",next:"",duration:20*100,delay:20*100,width:370,height:566,autoPlay:true,autoPlayVideo:false,playPause:false,stopOnHover:false,loop:false,bullets:0,caption:true,captionEffect:"fade",controls:true,controlsThumb:false,responsive:1,fullScreen:true,gestures:1,onBeforeStep:0,images:0});