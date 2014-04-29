digg.get(contentid);
$(function(){
	$.getJSON(APP_URL+'?app=system&controller=content&action=stat&jsoncallback=?&contentid='+contentid, function(data){
		$('#pv').html(data.pv);
	});
})