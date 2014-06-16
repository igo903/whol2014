<?php
namespace Handler;

/**
获取所有分类列表：
http://itv.wuhan.net.cn/api/tel_every_category_query

查询分类下具体的视频列表：
http://itv.wuhan.net.cn/api/tel_item_id_quary?categoryid=16&num=10&offset=0

查询视频的播放地址等信息：
http://itv.wuhan.net.cn/api/item_get?id=视频ID

封面图的绝对地址参考格式：
http://itv.wuhan.net.cn/source/upload/item_pic/45b7061f76ecdd108fbbaeef3ca8ba04.jpg


参考网站：
http://m.wuhan.net.cn/ 
**/


class ApiHandler {

	 
	public function getCategoryList(){

    		$curl = curl_init();
		
		// 设置iTV的API入口URL
		curl_setopt($curl, CURLOPT_URL, 'http://itv.wuhan.net.cn/api/tel_every_category_query');
		
		// 设置不传回header
		curl_setopt($curl, CURLOPT_HEADER, 0);
		
		// 设置cURL 参数，要求结果保存到字符串中还是输出到屏幕上。
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
		
		// 运行cURL，请求API
		$data = curl_exec($curl);
		
		// 关闭URL请求
		curl_close($curl);
		
		
		$data = json_decode($data,true);
		$data=$data['date'];
		return  $data;	    
	 
	}
	
	
	public function getVideoListByCategoryID($categoryID,$num=6,$offset=0){
			
			$curl = curl_init();
			curl_setopt($curl, CURLOPT_URL, "http://itv.wuhan.net.cn/api/tel_item_id_quary?categoryid=$categoryID&num=$num&offset=$offset");
	
			curl_setopt($curl, CURLOPT_HEADER, 0);
	
			curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	
			$data = curl_exec($curl);
	
			curl_close($curl);	
			
			$data = json_decode($data,true);
			$data = $data['date'];
			
			return $data;
	    }
	    

    public function getVideoDetailInfo($videoID){
    			$curl = curl_init();
			curl_setopt($curl, CURLOPT_URL, "http://itv.wuhan.net.cn/api/item_get?id=$videoID");
	
			curl_setopt($curl, CURLOPT_HEADER, 0);
	
			curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	
			$data = curl_exec($curl);
	
			curl_close($curl);	
			
			$data = json_decode($data,true);
			//这个接口的很多API返回的是输入错误的‘date’ 这里又返回书写正确的'data'
			$data = $data['data'][0];
			return $data;
    }
    
    
    

    public function getPlayableURL($url){
		
		$curl = curl_init ();
		curl_setopt ( $curl, CURLOPT_URL,$url);
		
		curl_setopt ( $curl, CURLOPT_HEADER, 0 );
		
		curl_setopt ( $curl, CURLOPT_RETURNTRANSFER, 1 );
		
		$data = curl_exec ( $curl );
		
		curl_close ( $curl );
		
		$xmlObj = simplexml_load_string ( $data, 'SimpleXMLElement', LIBXML_NOCDATA );
		return (string)$xmlObj->Url;
    
    }
	    
}



