<?php
namespace Home\Controller;

use Handler\ApiHandler;
use Think\Controller;

require_once('apiHandler.class.php');

class IndexController extends Controller { 
	
	public function index(){
		header ( 'Content-Type:text/html;charset=utf-8' );

		$videoList = $this->prepareForIndexPage();
		
		$this->assign('videolist',$videoList);
		$this->display();

		
    }
    
    public function getVideoURL(){
    		header ( 'Content-Type:text/html;charset=utf-8' );		
    		
    		$id = $_REQUEST['video_id'];
		$videoInfo = M("videolist")->find($id);
		M("videolist")->where("id=$id")->setInc('click_count');
    		
    		$apiHandler = new \Handler\ApiHandler ();
    		
    		$returnData = array();
		$returnData['videoURL'] = $apiHandler->getPlayableURL($videoInfo['media_url']);	
		$returnData['videoName'] = $videoInfo['title'];
		$returnData['videoRelease'] = $videoInfo['online_date'];
		$returnData['videoDescription'] = $videoInfo['intro'];
		$returnData['videoPoster'] = $videoInfo['smallpic_url'];
		
		$this->ajaxReturn($returnData);
    }
    
    
    public function more(){
		header ( 'Content-Type:text/html;charset=utf-8' );
		$categoryMap = array ("直播大武汉", "经视直播", "看荆楚", "原创视界", "天翼4G高清视频", "电视问政", "社区网络春晚", "10000知道", "天翼视讯", "itv导视", "优酷资讯" );
		$categoryID = $_REQUEST ['category'];
		$categoryName = $categoryMap [$categoryID - 1];
		

		$DB = M ( 'videolist' ); // 实例化
		$count = $DB->where ( "path='".$categoryName."'" )->count (); // 查询满足要求的总记录数
		$Page = new \Think\Page ( $count, 25 ); // 实例化分页类 传入总记录数和每页显示的记录数(25)

		$Page->setConfig('prev',"上一页");
		$Page->setConfig('next',"下一页"); 
		
		$show = $Page->show (); // 分页显示输出
		// 进行分页数据查询 
		$latestVideo = $DB->where ( "path='".$categoryName."'" )->order ( "id desc" )->limit ( $Page->firstRow . ',' . $Page->listRows )->select ();
		 
		
		$this->assign ( 'page', $show ); // 赋值分页输出
		$this->assign ( 'latest', $latestVideo );
		$this->assign ( 'first', $latestVideo [0] );
		
		
		
//		$latestVideo = M ( "videolist" )->where ( "path='".$categoryName."'" )->order ( "id desc" )->limit ( 80 )->select ();
//		$topVideo = M ( "videolist" )->where ( "path='".$categoryName."'" )->order ( "click_count desc" )->limit ( 80 )->select ();   	
    		$this->display ();
	}
	
	public function play(){
		header ( 'Content-Type:text/html;charset=utf-8' );
		
		$id = $_REQUEST['id'];
		
		$currentVideo = M ( "videolist" )->find($id);
		$latestVideo = M ( "videolist" )->order ( "id desc" )->limit ( 30 )->select ();
		$topVideo = M ( "videolist" )->order ( "click_count desc" )->limit ( 30 )->select ();
		
		$this->assign ( 'currentVideo', $currentVideo );
		$this->assign ( 'latest', $latestVideo );
		$this->assign ( 'top', $topVideo );
		
		$this->display();
	}
	
	
	protected function prepareForIndexPage() {
		$category = array();
		
		if (M("videolist")->count()<66){
			$this->updateCache(6);
		}
		$category[0] = M ( "videolist" )->where ( "path='直播大武汉'" )->order ( "id desc" )->limit ( 6 )->select ();
		$category[1] = M ( "videolist" )->where ( "path='经视直播'" )->order ( "id desc" )->limit ( 6 )->select ();
		$category[2] = M ( "videolist" )->where ( "path='看荆楚'" )->order ( "id desc" )->limit ( 6 )->select ();
		$category[3] = M ( "videolist" )->where ( "path='原创视界'" )->order ( "id desc" )->limit ( 6 )->select ();
		$category[4] = M ( "videolist" )->where ( "path='天翼4G高清视频'" )->order ( "id desc" )->limit ( 6 )->select ();
		$category[5] = M ( "videolist" )->where ( "path='电视问政'" )->order ( "id desc" )->limit ( 6 )->select ();
		$category[6] = M ( "videolist" )->where ( "path='社区网络春晚'" )->order ( "id desc" )->limit ( 6 )->select ();
		$category[7] = M ( "videolist" )->where ( "path='10000知道'" )->order ( "id desc" )->limit ( 6 )->select ();
		$category[8] = M ( "videolist" )->where ( "path='天翼视讯'" )->order ( "id desc" )->limit ( 6 )->select ();
		$category[9] = M ( "videolist" )->where ( "path='itv导视'" )->order ( "id desc" )->limit ( 6 )->select ();
		$category[10] = M ( "videolist" )->where ( "path='优酷资讯'" )->order ( "id desc" )->limit ( 6 )->select ();
		
		return $category;
	}
	
	
	public function updateCache($num=100,$offset=0) {
		header ( 'Content-Type:text/html;charset=utf-8' );
		
		$videoCategoryList = array ();
		$videoListByCategory = array ();
		
		$apiHandler = new \Handler\ApiHandler ();
		//获取视频栏目列表
		$data = $apiHandler->getCategoryList ();
		
		foreach ( $data as $k => $v ) {
			
			$videoCategoryList [$v ['tel_category_id']] = $v ['category_name'];
			//获取栏目下的视频列表			
			$videoUnderThisCategory = $apiHandler->getVideoListByCategoryID ( $v ['tel_category_id'], $num,$offset);
			$videoListByCategory [$v ['tel_category_id']] = $videoUnderThisCategory;
		}
		
		$imgUrlPrefix = "http://itv.wuhan.net.cn/source/upload/item_pic/";
		
		foreach ( $videoListByCategory as $key => $value ) {
			foreach ( $value as $k => $v ) {
				//视频的信息被分散在两个接口下面，重新组装一下					

				$videoDetailInfo = $apiHandler->getVideoDetailInfo ( $v ['id'] );
				$videoListByCategory [$key] [$k] ['online_date'] = $videoDetailInfo ['online_date'];
				$videoListByCategory [$key] [$k] ['path'] = trim($videoDetailInfo ['path']);
				$videoListByCategory [$key] [$k] ['intro'] = $videoDetailInfo ['intro'];
				$videoListByCategory [$key] [$k] ['pic_url'] = $imgUrlPrefix . $videoDetailInfo ['pic_url'];
				$videoListByCategory [$key] [$k] ['media_url'] = $videoDetailInfo ['media_url'];
				$videoListByCategory [$key] [$k] ['smallpic_url'] = $imgUrlPrefix . $videoListByCategory [$key] [$k] ['smallpic_url'];
				$videoListByCategory [$key] [$k] ['create_time'] = $videoListByCategory [$key] [$k] ['create_time'];
				
				$DB = M ( "videolist" );
				$DB_data = $videoListByCategory [$key] [$k];
				
				if (! $DB->find ( $DB_data ['id'] )) {
					$DB_data ['click_count'] = rand ( 1, 50 );
					$DB->add ( $DB_data );
				}
			
			}
		}
		
//		dump ( $videoListByCategory);
    }
    

    
}