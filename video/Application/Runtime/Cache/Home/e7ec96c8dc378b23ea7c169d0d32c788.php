<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>武汉热线视频专区</title>
	<link rel="stylesheet" href="/video/Public/css/main.css">
	<link rel="stylesheet" href="/video/Public/sea-modules/alice/base/1.0.2/base-debug.css">
	<link rel="stylesheet" href="/video/Public/css/font-awesome.min.css">
	<link href="/video/Public/css/video-js.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="/video/Public/sea-modules/seajs/seajs/2.2.0/sea.js"></script>
	<script type="text/javascript" src="/video/Public/js/video.js"></script>
	<script>
	    videojs.options.flash.swf = "/video/Public/js/video-js.swf";
	</script>
</head>
<body>


	<!-- 项部工具条 -->
	
	<div id="topnav" class="mininav">
		<div class="mininavInner">
			<div class="fn-left">
				<i class="fa fa-mobile fa-lg app"></i>
				<a href="javascript:;" class="app" id="wholApp">智慧城市无线门户</a>
				<div id="popupApp" class="fn-hide ui-popup">
					<div class="fn-left"><img src="/video/Public/i/qrcode.jpg" alt=""></div>
					<div class="fn-left context">
						<i class="fa fa-android fa-lg"></i>
						<span><a href="javascript:;">APP下载</a></span>
						<p>扫描二维码下载智慧城市无线门户客户端,或登录应用商店搜索"智慧城市"</p>
					</div>
				</div>
				<a href="http://m.wuhan.net.cn">WAP版</a>
			</div>
			
			<div class="fn-right">
				<span>您好，<span class="user">请登录</span></span>
				<a href="javascript:;" class="" id="smartPoint">积分等级</a>
				<i class="fa fa-angle-down"></i>
				<ul id="popupPoint" class="fn-hide ui-popup">
					<li><a href="javascript:;">LV</a></li>
					<li><a href="javascript:;">智慧币</a></li>
				</ul>
				<a href="javascript:;" class="" id="mail189">产品中心</a>
				<i class="fa fa-angle-down"></i>
				<ul id="popupMail" class="fn-hide ui-popup">
					<li><a href="javascript:;">189邮箱</a></li>
					<li><a href="javascript:;">天翼视讯</a></li>
					<li><a href="javascript:;">网上营业厅</a></li>
					<li><a href="javascript:;">爱游戏</a></li>
					<li><a href="javascript:;">爱音乐</a></li>
					<li><a href="javascript:;">爱动漫</a></li>
				</ul>

				<a href="javascript:;" class="arrow-down" id="personalSetting">个人设置</a>
				<i class="fa fa-angle-down"></i>
				<ul id="popupSetting" class="fn-hide ui-popup">
					<li><a href="javascript:;">设置昵称</a></li>
					<li><a href="javascript:;">更改邮箱</a></li>
					<li><a href="javascript:;">更改密码</a></li>
				</ul>
			</div>
		</div>
	</div>

	<!-- 通栏广告 -->

	<div class="layout mt40 fn-clear">
		<div class="">
			<a href="javascript:;"><img src="/video/Public/i/ad_7.jpg" alt=""></a>
		</div>
	</div>

	<!-- LOGO和搜索 -->

	<div class="soso soso_small mt12" id="soso">
		<div class="logo" id="whollogo">
			<h1><a href="http://www.wuhan.net.cn" class="whlogo"><span class="fn-hide">武汉热线</span></a></h1>
		</div>
		<div class="fn-right" id="searchbar">
			<div class="search" id="sosobar">
				<form action="" name="soso_search_box" target="_blank">
					<div id="searchTxt" class="searchTxt">
						<input type="text" id="wholSearchTxt">
					</div>
				</form>
			</div>
			<div class="searchBtn">
				<button id="searchBtn" type="submit" onclick="javascript:;">搜索</button>
				<input type="hidden" name="hidden">
			</div>
		</div>
	</div>

	<!-- 小导航 -->

	<div class="nav shortnav" id="mainnav">
		<div class="navInner">
			<div>
				<a href="javascript:;">资讯</a>
				<a href="javascript:;">房产</a>
				<a href="javascript:;">家居</a>
			</div>
			<div>
				<a href="javascript:;">生活</a>
				<a href="javascript:;">娱乐</a>
				<a href="javascript:;">旅游</a>
			</div>
			<div>
				<a href="javascript:;">交通</a>
				<a href="javascript:;">亲子</a>
				<a href="javascript:;">婚嫁</a>
			</div>
			<div>
				<a href="javascript:;">智慧城市</a>
				<a href="javascript:;">视频专区</a>
				<a href="javascript:;">电信专区</a>
			</div>	
		</div>
	</div>

	<!-- 主容器 -->

	<div class="layout mt12 fn-clear">

		<!-- 面包屑 -->

		<div class="breadcrumb">
			<i class="fa fa-home"></i><a href="javascript:;">首页</a> ><a href="/video/index.php/Home/Index/index">视频</a>><a href="/video/index.php/Home/Index/play/id/11211"><?php echo ($currentVideo["title"]); ?></a>
		</div>

		<div class="layoutLeft video-content">
			<h1><a href="javascript:;" title="<?php echo ($currentVideo["title"]); ?>" data-id="<?php echo ($currentVideo["id"]); ?>" target="_blank" id="big_video_title"><?php echo ($currentVideo["title"]); ?></a></h1>
			<div class="player">
				<video id="wholVideo_big" class="video-js vjs-default-skin" controls preload="none" width="460" height="264"
				      poster="<?php echo ($currentVideo["smallpic_url"]); ?>" >	   
				    <source id="video_source" src="" type='video/mp4'/>			   
				</video>
			</div>
			<div class="shareto">
				<div class="fn-left">分享到:</div>
				<div class="bdsharebuttonbox">
					<a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a><a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
				</div>
			</div><!--//shareto-->
			<script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script>


			<div class="video-list">
				<div id="videoSortTab" class="">
				        <ul class="ui-switchable-nav">
				        	<li><a target="_blank" href="javascript:;">最新</a></li>
					        <li><a target="_blank" href="javascript:;">排行</a></li>
				        </ul>
				        <div class="ui-switchable-content">
				            <div class="fn-hide col">
				                
				      <?php if(is_array($latest)): $i = 0; $__LIST__ = array_slice($latest,0,18,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$video): $mod = ($i % 2 );++$i;?><div class="news-video fn-clear">
		                		<div class="news-item-img">
									<a data-id="<?php echo ($video["id"]); ?>" class="videoLink" href="/video/index.php/Home/Index/play/id/<?php echo ($video["id"]); ?>">
										<!-- <span class="playing-icon">正在播放</span> -->
										<img alt="<?php echo ($video["title"]); ?>" src="<?php echo ($video["pic_url"]); ?>">
										<i></i>
									</a>
								</div>
								<div class="news-item-txt">
									<h2><a data-id="<?php echo ($video["id"]); ?>" class="videoLink" href="/video/index.php/Home/Index/play/id/<?php echo ($video["id"]); ?>"><?php echo ($video["title"]); ?></a></h2>
									<p class="desc"><?php echo ($video["intro"]); ?></p>
									<div class="news-item-info">
										<div class="news-item-time">
											<?php echo ($video["online_date"]); ?>
										</div>
										<div class="news-item-count">播放：<?php echo ($video["click_count"]); ?></div>
									</div>
								</div>
		                	</div><!--news-video--><?php endforeach; endif; else: echo "" ;endif; ?>

				            </div>
				            <div class="fn-hide col">
				            	
					<?php if(is_array($top)): $i = 0; $__LIST__ = array_slice($top,0,18,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$video): $mod = ($i % 2 );++$i;?><div class="news-video fn-clear">
		                		<div class="news-item-img">
									<a data-id="<?php echo ($video["id"]); ?>" class="videoLink" href="/video/index.php/Home/Index/play/id/<?php echo ($video["id"]); ?>">
										<!-- <span class="playing-icon">正在播放</span> -->
										<img alt="<?php echo ($video["title"]); ?>" src="<?php echo ($video["pic_url"]); ?>">
										<i></i>
									</a>
								</div>
								<div class="news-item-txt">
									<h2><a data-id="<?php echo ($video["id"]); ?>" class="videoLink" href="/video/index.php/Home/Index/play/id/<?php echo ($video["id"]); ?>"><?php echo ($video["title"]); ?></a></h2>
									<p class="desc"><?php echo ($video["intro"]); ?></p>
									<div class="news-item-info">
										<div class="news-item-time">
											<?php echo ($video["online_date"]); ?>
										</div>
										<div class="news-item-count">播放：<?php echo ($video["click_count"]); ?></div>
									</div>
								</div>
		                	</div><!--news-video--><?php endforeach; endif; else: echo "" ;endif; ?>			            

				            </div>
				        </div>
				</div>
			</div>
		</div>



		<!-- 右侧容器 -->
		<div class="layoutRight">
			<iframe id="sidebar-iframe" src="http://info.wuhan.net.cn/Sidebar.shtml" width="" height="100%" frameBorder="0" scrolling="no"></iframe>
		</div>

		
	</div>

	<!-- 友情链接 -->

	<div class="layout footlinks mt12">
		<ul class="">
			<li>
				<strong>友情链接：</strong>
				<a href="javascript:;">荆楚网</a>
				<a href="javascript:;">长江网</a>
				<a href="javascript:;">汉网</a>
				<a href="javascript:;">新浪湖北</a>
				<a href="javascript:;">凯风湖北</a>
				<a href="javascript:;">现在网</a>
				<a href="javascript:;">热线房产网</a>
				<a href="javascript:;">武汉圈</a>
				<a href="javascript:;">得意生活</a>
				<a href="javascript:;">武汉网络电视</a>
				<a href="javascript:;">湖北网台</a>
				<a href="javascript:;">纪委监察部</a>
				<a href="javascript:;">湖北道路交通安全网</a>
				<a href="javascript:;">新华湖北</a>
				<a href="javascript:;">武汉宽带网</a>
			</li>
			<li>
				<strong>精彩网址：</strong>
				<a href="javascript:;">未来网</a>
				<a href="javascript:;">米派网</a>
				<a href="javascript:;">电脑沙龙</a>
				<a href="javascript:;">车友</a>
				<a href="javascript:;">知音</a>
				<a href="javascript:;">新蛋网</a>
				<a href="javascript:;">武汉电影</a>
				<a href="javascript:;">湖北电影</a>
				<a href="javascript:;">中律网</a>
				<a href="javascript:;">公交站点</a>
				<a href="javascript:;">公路客运</a>
				<a href="javascript:;">公积金</a>
				<a href="javascript:;">证件下载</a>
				<a href="javascript:;">航班</a>
				<a href="javascript:;">天气预报</a>
				<a href="javascript:;">邮编</a>
				<a href="javascript:;">快递之家</a>
				<a href="javascript:;">农业网</a>
			</li>
			<li>
				<strong>金融信息：</strong>
				<a href="javascript:;">人民银行</a>
				<a href="javascript:;">工商银行</a>
				<a href="javascript:;">农业银行</a>
				<a href="javascript:;">中国银行</a>
				<a href="javascript:;">建设银行</a>
				<a href="javascript:;">交通银行</a>
				<a href="javascript:;">招商银行</a>
				<a href="javascript:;">民生银行</a>
				<a href="javascript:;">华夏银行</a>
				<a href="javascript:;">中信金融</a>
				<a href="javascript:;">光大银行</a>
				<a href="javascript:;">浦发银行</a>
				<a href="javascript:;">广发银行</a>
				<a href="javascript:;">汉口银行</a>
				<a href="javascript:;">广发证券</a>
				<a href="javascript:;">银商湖北</a>
			</li>
		</ul>
	</div>

	<!-- 版权信息 -->

	<div class="layout mt12 footer">
		<div class="ctlogo"></div>
		<div class="icplogo"></div>
		<div class="copyrights">
			<p class="license">［增值电信业务经营许可A2.B1.B2-20090001][文网文［2008］053号］</p>
			<p>版权所有：中国电信股份有限公司武汉分公司　地址：中国　武汉　武昌珞喻路724号　邮编：430074</p>
			<p>免责声明：本（栏目、频道等）内容由SP提供，欢迎大家对侵犯版权等不合法和不健康的内容进行监督和举报。</p>
			<p>欢迎提出宝贵建议！敬请留言：　<a href="mailto:wholnews@189.cn">E-mail:wholnews@189.cn</a></p>
		</div>	
	</div>



	<!-- JavaScript -->

	<!-- SEAJS -->

	<script>
		seajs.config({
			// base:"./sea-modules",
			alias:{
				"$":"jquery/jquery/1.10.1/jquery.js",
				"jquery-easing":"jquery/easing/1.3.0/easing.js"
			}
		});

		// seajs.use("./js/main");

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
		});

		//videoSortTab function
		seajs.use(['arale/switchable/1.0.2/tabs'], function(Tabs) {
	        tabs = new Tabs({
	            element: '#videoSortTab',
	            triggers: '#videoSortTab .ui-switchable-nav li',
	            panels: '#videoSortTab .ui-switchable-content .col',
	            activeIndex: 0
	        });

	        setTimeout(function() {
	            tabs.set("activeIndex", 0);
	        }, 3000);
	    });
	    

		seajs.use(['$','arale/overlay/1.1.4/mask','arale/position/1.0.1/position'],function($, mask,Position){
			
			$.ajax({
				type: "post",  
				url : "http://116.211.116.184/video/index.php/Home/Index/getVideoURL",
				dataType:'json',
				data: 'video_id='+$('#big_video_title').attr('data-id'), 
				success: function(json){
					videojs("wholVideo_big", { techOrder: ["flash","html5"]}).ready(function(){								
						this.src(json.videoURL);
						this.play();
					});
				}		
			});
			
		});



		
	</script>

</body>
</html>