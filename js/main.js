// config
seajs.config({
	// base:"./sea-modules",
	alias:{
		"$":"jquery/jquery/1.10.1/jquery.js",
		"detector":"arale/detector/1.4.0/detector.js",
		"jquery-easing":"jquery/easing/1.3.0/easing.js"
	}
});

// detector
seajs.use(['detector'],function(detector){
	var deviceName = detector.os.name;
	console.log(deviceName);
	if(deviceName == "ios" || deviceName == "android" ) {
		//window.location.href = 'http://www.baidu.com';
		window.location.href = 'http://115.29.207.162/whol2014/MoMain.html';
	}
});

// switchable
// seajs.use("./js/main");
seajs.use(['arale/switchable/1.0.2/slide', '$'], function(Slide, $) {
	var slide = new Slide({
		element: '#slidePicNews',
		effect: 'scrollx',
		hasTriggers: false
		//activeIndex: 1,
		//interval:2600
	}).render();

	// prev/next
	$("#slidePicNews #prev").click(function(e) {
		e.preventDefault();
		slide.prev();
	});

	$("#slidePicNews #next").click(function(e) {
		e.preventDefault();
		slide.next();
	});
});

// popup
seajs.use(['arale/popup/1.1.6/popup'], function(Popup){
	new Popup({
		trigger: '#smartPoint',
		element: '#popupPoint'
	});
	new Popup({
		trigger: '#mail189',
		element: '#popupMail'
	});
	new Popup({
		trigger: '#personalSetting',
		element: '#popupSetting'
	});
	new Popup({
		trigger: '#wholApp',
		element: '#popupApp'
	});
	new Popup({
		trigger: '#loginWhol',
		element: '#popupLogin'
	});
	new Popup({
		trigger: '#signOut',
		element: '#popupsignOut'
	});


	//smartjs
	new Popup({
		trigger: '#nav .one span',
		element: '#popupOne'
	});
	new Popup({
		trigger: '#nav .two span',
		element: '#popupTwo'
	});
	new Popup({
		trigger: '#nav .three span',
		element: '#popupThree'
	});
	new Popup({
		trigger: '#nav .four span',
		element: '#popupFour'
	});
	new Popup({
		trigger: '#nav .five span',
		element: '#popupFive'
	});
	new Popup({
		trigger: '#nav .six span',
		element: '#popupSix'
	});
	new Popup({
		trigger: '#nav .seven span',
		element: '#popupSeven'
	});

	new Popup({
		trigger: '#nav .eight span',
		element: '#popupEight'
	});






});

// jQuery
seajs.use(['$'],function($){

	// product
	var flag = false;
	$('.newsTab h2').hover(function(){
		var nameId = $(this).attr('name');
		var currentDiv = $('#'+nameId);

		currentDiv.show();
		currentDiv.siblings().hide();

		if($(this).hasClass('selected')){
		} else {
			$(this).siblings().removeClass('selected');
			$(this).addClass('selected');
		}
	});

	$(".productFloatBtn").click(function(){
		var state = $(this).data('toggleState');

		if(flag == false){
			expandto($(this));
			flag = true;
		} else {
			backto($(this));
			flag = false;
		}
		//$(this).data('toggleState', !state);
	});

	$('#slidePicNews').hover(function(){
		$('#slidePicNews .move').show();
	},function(){
		$('#slidePicNews .move').hide();
	});
	function backto(el){
		var extendDiv = el.prev();
		el.attr('class','productFloatBtn');

		extendDiv.animate({
			width:0
		},500,function(){
			el.parent().css("right","318px");
		});
		extendDiv.hide();
		el.parent().animate({
			width:15
		},500,function(){

		});

		extendDiv.show();
	}
	function expandto(el){
		var extendDiv = el.prev();
		el.attr('class','productFloatBtnClicked');
		extendDiv.show();
		el.parent().css("right","318px");

		extendDiv.animate({
			width:339
		},500,function(){
			$('#productNav').mouseleave(function(event) {
				if($('#productFloatBtn').hasClass('productFloatBtnClicked')){
					backto($('#productFloatBtn'));
					flag = false;
				}
			});
		});

		el.parent().animate({
			width:339 + 15
		},500,function(){

		});
	}

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
	
	
	//weather
	
	if($('#weather')){
			$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q=wuhan&lang=zh_cn&units=metric&cnt=1&callback=?",function(data){
				
				if (data && data.list[0].temp.min && data.list[0].weather[0].description){
					var w_min = Math.round(data.list[0].temp.min);
					var w_max = Math.round(data.list[0].temp.max);
					var w_desc = data.list[0].weather[0].description ;							
						
					$('#weather').html("武汉："+w_desc+"  "+w_min+"度~"+w_max+"度");

				}
			});				

	}


	
});