var bullets = document.getElementById('slideDots').getElementsByTagName('span');
var pdot1 = document.getElementById('dotnews1').getElementsByTagName('span');
var pdot2 = document.getElementById('dotnews2').getElementsByTagName('span');

var slider = Swipe(document.getElementById('slideImage'), {
	startSlide:0,
	auto: 3000,
	continuous: true,

	callback: function(pos) {
		var img_title = $('.swipe-wrap a img');
		var i = bullets.length;
			while (i--) {
				bullets[i].className = 'dot';
	        }
			bullets[pos].className = 'dot current';
			$('#slideImageTitile a').html($(img_title[pos]).attr("alt"));
	    }
	});
	
var sliderNews = Swipe(document.getElementById('news_slide_1'), {
	startSlide:0,
	auto: 0,
	continuous: true,

	callback: function(pos) {
		var dotName_title = $('#mod-news1 .more1 a');
		var i = pdot1.length;
			while (i--) {
				pdot1[i].className = 'dot 1';
			}
			pdot1[pos].className = 'dot current 1';
			$('#mod-news1 h3 a').html($(dotName_title[pos]).html());
		}
	});

var sliderNews = Swipe(document.getElementById('news_slide_2'), {
	startSlide:0,
	auto: 0,
	continuous: true,

	callback: function(pos) {
		var dotName_title = $('#mod-news2 .more2 a');
		var i = pdot2.length;
			while (i--) {
				pdot2[i].className = 'dot 2';
			}
			pdot2[pos].className = 'dot current 2';
			$('#mod-news2 h3 a').html($(dotName_title[pos]).html());
		}
	});

var mySidr = function(){
	$('#simple-menu').sidr();
}();


/*var myScroll;
function loaded() {
	myScroll = new iScroll('wrapper');
}
document.addEventListener('DOMContentLoaded', loaded, false);*/
	
	/*var sliderIndex = 0;
	window.mySwipe = new Swipe(document.getElementById(''), {
	  callback: function(index, elem) {
	      if (index < sliderIndex) {
	         //backwards
	          
	      }else{
	         //forwards
	      }
	      sliderIndex = index;
	  },
	  transitionEnd: function(index, elem) {
	      if (index < sliderIndex) {
	         //backwards 
	      }else{
	         //forwards
	      }
	      sliderIndex = index;
	  }
	});*/