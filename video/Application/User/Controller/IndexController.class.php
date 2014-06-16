<?php
namespace User\Controller;

use Think\Controller;
use User\ApiHandler;

require_once('loginApiHandler.class.php');

class IndexController extends Controller {
    public function index(){	
	    	$apiHandler = new \User\ApiHandler\LoginApiHandler();
		
		$userName = "18907194782";
		$password = "123456";
		
		//		$userName = urlencode ( $_REQUEST ['username'] );
		//		$password = urlencode ( $_REQUEST ['password'] );
		

		$userInfo = $apiHandler->getUserInfo ( $userName, $password );
	    	
    		$userInfo['returnData'] = json_decode($apiHandler->dencrypt($userInfo['returnData']),true);
    		
    		dump($userInfo);
    }
    
    public function login(){
    		$apiHandler = new \User\ApiHandler\LoginApiHandler();
    		
		$userName = urlencode ( $_REQUEST ['username'] );
		$password = urlencode ( $_REQUEST ['password'] );
		$jsonP = $_REQUEST['callback'];
    		
    		$userInfo = $apiHandler->getUserInfo($userName,$password);
    		$userInfo['returnData'] = json_decode($apiHandler->dencrypt($userInfo['returnData']));
    		
    		
    		echo $jsonP."(".json_encode($userInfo).")";
    	
    		
    }
}