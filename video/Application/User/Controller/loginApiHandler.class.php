<?php
namespace User\ApiHandler;

use User\Encrypt;
require 'HQ_3DES.php';
class LoginApiHandler {
	
	public $_appkey ;
	public $_3des_key ;
	public $_3des_iv ;
	public $_md5_suffix ;
	public $_timestamp ;
	
	
	function __construct(){
		$this->_appkey = '5s4fucdc';
		$this->_3des_key = 'bqIHRLNe7RHy481RUV0Pp79y';
		$this->_3des_iv  = '01234567';
		$this->_md5_suffix = 'EG6GR17PlXzWclM2';		
		$this->_timestamp = time()."000".rand(1000000, 9999999) ;
	}
	
	public function getUserInfo($userName,$password) {
		header('Content-Type:text/html;charset=utf-8');
				
		$post_data = "appkey=".$this->_appkey."&sign=".$this->sign($userName,$password)."&data=".$this->makeRequestData($userName, $password);
		$url = 'http://www.zhihuihb.net/api/open/get_user_info'; 	
		
		$ch = curl_init (); //初始化curl
		curl_setopt ( $ch, CURLOPT_URL, $url );
		curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, 1 ); 		
		curl_setopt ( $ch, CURLOPT_HEADER, 0);
		curl_setopt ( $ch, CURLOPT_POST, 1 ); //设置为POST方式
		curl_setopt ( $ch, CURLOPT_POSTFIELDS, $post_data); //POST数据		

		$response = curl_exec ( $ch ); //接收返回信息		

		if (curl_errno ( $ch )) { //出错则显示错误信息
			print curl_error ( $ch );		
		}		
		curl_close ( $ch ); //关闭curl链接
		
		$response = json_decode($response,true);
		return $response ; //显示返回信息
	

	}
	
	public function sign($username,$password){
		return md5("1".$username.$password.$this->_timestamp.$this->_md5_suffix);
	}
	
	public function makeRequestData($userName,$password){

		$requestContent = "type=1&username=$userName&password=$password&sign_timestamp=$this->_timestamp";
		$data = $this->encrypt($requestContent);

		return $data;
	}
	
	function encrypt($content) {			

//		$encryptedContent= mcrypt_encrypt (MCRYPT_3DES,$key,$content,MCRYPT_MODE_CBC,$iv);//
//		return base64_encode ($encryptedContent);

		$_3des = new \User\Encrypt\HQ_3DES($this->_3des_key,$this->_3des_iv,"cbc");
		return $_3des->encrypt($content);
	
	}
	
	function dencrypt($content) {		

		$_3des = new \User\Encrypt\HQ_3DES($this->_3des_key,$this->_3des_iv,"cbc");
		return $_3des->decrypt($content);
	
	}  
	
}
