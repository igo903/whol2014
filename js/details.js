// base:"./sea-modules",
seajs.config({
	alias:{
		"$":"jquery/jquery/1.10.1/jquery.js",
		"detector":"arale/detector/1.4.0/detector.js",
		"jquery-easing":"jquery/easing/1.3.0/easing.js"
	}
});

// detector
// seajs.use(['detector'],function(detector){
// 	var deviceName = detector.os.name;
// 	if(deviceName == "ios" || deviceName == "android" ) {
// 		window.location.href = 'http://115.29.207.162/whol2014/MoMain.html';
// 	}
// });

//Responsive
seajs.use(['detector','$'],function(detector, $){
	var deviceName = detector.os.name;

	if($(window).width()<=640 || deviceName == "ios" || deviceName == "android"){
			$('#topnav').addClass('fn-hide');
			$('.footer').addClass('fn-hide');
			$('.footlinks').addClass('fn-hide');
			$('.layoutRight').addClass('fn-hide');
			$('.shortnav').addClass('fn-hide');
			$('.layout.mt40').addClass('fn-hide');
			$('#soso').addClass('fn-hide');
			$('#wholsns').addClass('none');
			$('.recommendNews').addClass('fn-hide');
			$('.sms').addClass('fn-hide');
			$('.city').addClass('fn-hide');
			$('#mood').addClass('fn-hide');
			$('.digg-share').addClass('fn-hide');
			$('.newsArticle .titdd-Article').addClass('fn-hide');
			$('.layout').css('width','100%');
			$('.mainBody').css('width','100%');
			$('.mainBody').css('border','none');
			$('.newsArticle p').css('width','100%');
			$('.mt12 p img').css('width','290px');
			$('.mt12 p img').css('height','auto');
			$('center img').css('width','240px');
			$('center img').css('height','auto');
			$('body').css('padding','0px 10px');
			$('.newsArticle p').css('padding','0px');
			$('.header').removeClass('none');
			$('#footer-dock').removeClass('none');
			$('.breadcrumb').addClass('none');
	}
	$(window).resize(function() {
		if($(window).width()<=640){
			$('#topnav').addClass('fn-hide');
			$('.footer').addClass('fn-hide');
			$('.footlinks').addClass('fn-hide');
			$('.layoutRight').addClass('fn-hide');
			$('.shortnav').addClass('fn-hide');
			$('.layout.mt40').addClass('fn-hide');
			$('#soso').addClass('fn-hide');
			$('#wholsns').addClass('none');
			$('.recommendNews').addClass('fn-hide');
			$('.sms').addClass('fn-hide');
			$('.city').addClass('fn-hide');
			$('#mood').addClass('fn-hide');
			$('.digg-share').addClass('fn-hide');
			$('.newsArticle .titdd-Article').addClass('fn-hide');
			$('.layout').css('width','100%');
			$('.mainBody').css('width','100%');
			$('.mainBody').css('border','none');
			$('.newsArticle p').css('width','100%');
			$('center img').css('width','240px');
			$('center img').css('height','auto');
			$('.mt12 p img').css('width','240px');
			$('.mt12 p img').css('height','auto');
			$('body').css('padding','0px 10px');
			$('.newsArticle p').css('padding','0px');
			$('.header').removeClass('none');
			$('#footer-dock').removeClass('none');
			$('.breadcrumb').addClass('none');
		} else if($(window).width()>640){
			$('#topnav').removeClass('fn-hide');
			$('.footer').removeClass('fn-hide');
			$('.footlinks').removeClass('fn-hide');
			$('.layoutRight').removeClass('fn-hide');
			$('.shortnav').removeClass('fn-hide');
			$('.layout.mt40').removeClass('fn-hide');
			$('#soso').removeClass('fn-hide');
			$('#wholsns').removeClass('hide');
			$('.recommendNews').removeClass('fn-hide');
			$('.sms').removeClass('fn-hide');
			$('.city').removeClass('fn-hide');
			$('#mood').removeClass('fn-hide');
			$('.digg-share').removeClass('fn-hide');
			$('.newsArticle .titdd-Article').removeClass('fn-hide');
			$('.layout').css('width','1000px');
			$('.mainBody').css('width','660px');
			$('.mainBody').css('border','1px solid #cECED0');
			$('.newsArticle p').css('width','640px');
			$('center img').css('width','400px');
			$('center img').css('height','auto');
			$('.mt12 p img').css('width','400px');
			$('.mt12 p img').css('height','auto');
			$('.newsArticle p').css('padding','0px 10px');
			$('body').css('padding','0px 0px');
			$('.header').addClass('none');
			$('#footer-dock').addClass('none');
			$('.breadcrumb').removeClass('none');
		}
		console.log($(window).width());
	});
});

// popup
seajs.use(['arale/popup/1.1.6/popup'], function(Popup){
	new Popup({
		trigger: '#smartPoint',
		element: '#popupPoint'
	});
	// new Popup({
	// 	trigger: '#mail189',
	// 	element: '#popupMail'
	// });
	new Popup({
		trigger: '#personalSetting',
		element: '#popupSetting'
	});
	new Popup({
		trigger: '#loginWhol',
		element: '#popupLogin'
	});
	new Popup({
		trigger: '#signOut',
		element: '#popupsignOut'
	});
});

// Tabs
seajs.use(['arale/switchable/1.0.2/tabs'], function(Tabs) {

	sideNewsImgTabs = new Tabs({
		element: '#sideNewsImgTabs',
		triggers: '#sideNewsImgTabs .ui-switchable-nav li',
		panels: '#sideNewsImgTabs .ui-switchable-content .col',
		activeIndex: 0
	});

	sideNewsTextTabs = new Tabs({
		element: '#sideNewsTextTabs',
		triggers: '#sideNewsTextTabs .ui-switchable-nav li',
		panels: '#sideNewsTextTabs .ui-switchable-content .col',
		activeIndex: 0
	});

	setTimeout(function() {
		sideNewsImgTabs.set("activeIndex", 0);
		sideNewsTextTabs.set("activeIndex", 0);
	}, 3000);
});

// jquery
seajs.use(['$'],function($){

	// stat
	var contentid = {$contentid};
	$.getJSON(APP_URL+'?app=system&controller=content&action=stat&jsoncallback=?&contentid='+contentid, function(data){});

	// font-size
	$('.large').click(function(){
		$('.newsArticle p').css("font-size","16px");
		$(this).addClass('current');
		$(this).siblings().removeClass('current');
	});
	$('.small').click(function(){
		$('.newsArticle p').css("font-size","14px");
		$(this).addClass('current');
		$(this).siblings().removeClass('current');
	});

	// loginsmartcity
	$('.btn').click(function(){
		login();
	});
	$('#signOutBtn').click(function(){
		signOut();
	});

	// cookie helper	
	(function (factory) {
		if (typeof define === 'function' && define.amd) {					
			define(['jquery'], factory);
		} else if (typeof exports === 'object') {					
			factory(require('jquery'));
		} else {					
			factory(jQuery);
		}
	}(function ($) {
		var pluses = /\+/g;
		function encode(s) {
			return config.raw ? s : encodeURIComponent(s);
		}
		function decode(s) {
			return config.raw ? s : decodeURIComponent(s);
		}
		function stringifyCookieValue(value) {
			return encode(config.json ? JSON.stringify(value) : String(value));
		}
		function parseCookieValue(s) {
			if (s.indexOf('"') === 0) {						
				s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
			}
			try {
				s = decodeURIComponent(s.replace(pluses, ' '));
				return config.json ? JSON.parse(s) : s;
			} catch(e) {}
		}
		function read(s, converter) {
			var value = config.raw ? s : parseCookieValue(s);
			return $.isFunction(converter) ? converter(value) : value;
		}
		var config = $.cookie = function (key, value, options) {
			// Write
			if (value !== undefined && !$.isFunction(value)) {
				options = $.extend({}, config.defaults, options);
				if (typeof options.expires === 'number') {
					var days = options.expires, t = options.expires = new Date();
					t.setTime(+t + days * 864e+5);
				}
				return (document.cookie = [
					encode(key), '=', stringifyCookieValue(value),
					options.expires ? '; expires=' + options.expires.toUTCString() : '', 
					options.path    ? '; path=' + options.path : '',
					options.domain  ? '; domain=' + options.domain : '',
					options.secure  ? '; secure' : ''
				].join(''));
			}
			// Read
			var result = key ? undefined : {};
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			for (var i = 0, l = cookies.length; i < l; i++) {
				var parts = cookies[i].split('=');
				var name = decode(parts.shift());
				var cookie = parts.join('=');
				if (key && key === name) {	
					result = read(cookie, value);
					break;
				}
				if (!key && (cookie = read(cookie)) !== undefined) {
					result[name] = cookie;
				}
			}
			return result;
		};
		config.defaults = {};
		$.removeCookie = function (key, options) {
			if ($.cookie(key) === undefined) {
				return false;
			}
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return !$.cookie(key);
		};
	}));
	
	// ajax
	if($.cookie('username')&&$.cookie('password')){
		login();
	}
	function login(){
		if($.cookie('username')&&$.cookie('password')){
			var username = $.cookie('username');
			var password = $.cookie('password');		
		}else{
			var username = $('#username').val();
			var password = $('#password').val();	
		}				
		$.ajax({  
			type: "post",  
			url : "http://116.211.116.184/video/index.php?m=User&c=Index&a=login",
			dataType:'jsonp',
			jsonp:'callback',
			data: 'username='+username+'&password='+password, 
			success: function(json){
				if(json.returnCode==1){	
					$.cookie('username',username,{ expires: 30, path: '/' });
					$.cookie('password',password,{ expires: 30, path: '/' });
						$('.user').removeClass('fn-hide');
						$('.topfunc').removeClass('hidden');
						$('#loginWhol').hide();
						if (json.returnData.nick !='') {
							$('.user').html("您好，" + json.returnData.nick); 
						}else{
							$('.user').html("您好，" + json.returnData.username); 
						}
						$('#level').html("等级："+json.returnData.achievement.level_info.level);
						$('#currency').html("智慧币：" + json.returnData.achievement.currency);
						if(!$('.error').hasClass('fn-hide')){
							$('.error').addClass('fn-hide');
						}
				}else {
					$.removeCookie('username');
					$.removeCookie('password');
					$('.error').removeClass('fn-hide');
				}
			}
		}); 
	}
	function signOut() {
		$.removeCookie('username', { path: '/' });
		$.removeCookie('password', { path: '/' });
		$('#level').html("等级");
		$('#currency').html("智慧币");
		$('#loginWhol').show();
		$('.user').addClass('fn-hide');
		$('.topfunc').addClass('hidden');
		$('#username').val('');
		$('#password').val('');	
	}

	//　digg
	var mood_img_url = IMG_URL+'apps/mood/';
	var votehtml= $('#mood').html();
	$('#mood li a, #mood li input').click(function(){
		var moodsid = $(this).attr('moodsid');
		console.log(moodsid);
		vote(moodsid);
	});
	function setting(app,option){
		if (app=="mood" && option == "votetime") {
			return 24*60*60;
		}
	}
	function vote(vote_id) {
		if ( !$.cookie("mood_time"+contentid) || (( new Date().getTime() - $.cookie('mood_time'+contentid) ) > 1000*{setting('mood','votetime')}) ) {
			$.getJSON(APP_URL+"?app=mood&controller=index&action=vote&contentid="+contentid+"&voteid="+vote_id+"&jsoncallback=?", function(json){
				voteShow(json);
			});
		} else {
			alert("请勿重复刷新");
			$.getJSON(APP_URL+"?app=mood&controller=index&action=vote&contentid="+contentid+"&jsoncallback=?", function(json){
				voteShow(json);
			});
		}
		$.cookie("mood_time"+contentid, new Date().getTime());
	}
	function voteShow(json) {
		$("#mood").html(votedhtml + '<ul class="clear">' + $("ul:last", "#mood").html() + '</ul>').hide().fadeIn(450 | "slow").find(':radio').remove();
		$('#vote_total').html(json.total);
		for(var i in json.data) {
			$('#'+i+'_li em').html(json.data[i].number);
			$('#'+i+'_bar').css({"height": json.data[i].height+'%'}); 
		}
	}
	var votedhtml = '<style>\
	.mood_bar {position:relative; width:24px; height:100px;background:#EEF7F7; margin:0 auto;}\
	.mood_bar_in {background:url({IMG_URL}apps/mood/images/moodrank.gif) repeat-y -2px 0;bottom:0;left:0;position:absolute;width:24px;}\
	</style>\
	<div class="titles ">\
	<h3 class="mar-b-10 txt-l"><span class="f-r" style="width: 80px;"></span>\
	已经有 <font color="red" id="vote_total"></font> 人表态：</h3>\
		<ul id="clear ">\
		<!--{db sql="select * from #table_mood where 1"}-->
		<li id="m{$r[moodid]}_li">\
		<em></em><div class="mood_bar"><div class="mood_bar_in" id="m{$r[moodid]}_bar"></div></div>\
		</li>\
		<!--{/db}-->
	</ul></div>';

});