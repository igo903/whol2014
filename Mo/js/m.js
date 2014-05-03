var bullets = document.getElementById('slideDots').getElementsByTagName('span');
var pdot = document.getElementById('dotnews').getElementsByTagName('span');

var slider = 
	  Swipe(document.getElementById('slideImage'), {
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
	
	var sliderNews = 
	  Swipe(document.getElementById('news_slide'), {
	  	startSlide:0,
	    auto: 0,
	    continuous: true,
	    callback: function(pos) {
	      
	      var dotName_title = $('#mod-news .more a');
	      var i = pdot.length;
	      while (i--) {
	        pdot[i].className = 'dot';
	      }
	      pdot[pos].className = 'dot current';
	      $('#mod-news h3 a').html($(dotName_title[pos]).html());
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