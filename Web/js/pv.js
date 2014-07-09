var content = '';//第一页内容缓存
var context = '';//全文内容缓存
var isfulltext = false;
$(function(){
	digg.get(contentid);
	content = $('#ctrlfscont').html();
	var font = $.cookie('font');//根据cookie设置字体大小并初始化按钮
	if(font){
		$('#ctrlfssummary,#ctrlfscont').addClass(font);
		if(font == 'fs-big'){
		 	$('#bfont').addClass('cor-current');
			$('#sfont').removeClass('cor-current');
		}
	}
	$.getJSON(APP_URL+'?app=system&controller=content&action=stat&jsoncallback=?&contentid='+contentid, function(data){
		$('#pv').html(data.pv);
	});
	
})


		<script type="text/javascript" src="{IMG_URL}js/config.js"></script>
		<!--< script type="text/javascript" src="{IMG_URL}js/lib/jquery.js">< /script>-->
		<script type="text/javascript" src="{IMG_URL}js/jquery.min.js"></script>
		<script type="text/javascript" src="{IMG_URL}js/lib/jquery.cookie.js"></script>
		<script type="text/javascript" src="{IMG_URL}js/dinggou.js"></script>
		<script type="text/javascript">var contentid = {$contentid};</script>

		<script type="text/javascript" src="{IMG_URL}templates/wuhan/2014/js/pv.js"></script>
		<script type="text/javascript">
			var content = '';//第一页内容缓存
			var context = '';//全文内容缓存
			var isfulltext = false;
			$(function(){
				digg.get(contentid);
				content = $('#ctrlfscont').html();
				$.getJSON(APP_URL+'?app=system&controller=content&action=stat&jsoncallback=?&contentid='+contentid, function(data){
				$('#pv').html(data.pv);
				});
			})
		</script>