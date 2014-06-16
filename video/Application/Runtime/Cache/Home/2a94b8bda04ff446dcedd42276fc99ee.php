<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>武汉热线 视频专区</title>
	<link rel="stylesheet" href="/video/Public/css/main.css">
	<link rel="stylesheet" href="/video/Public/sea-modules/alice/base/1.0.2/base-debug.css">
	<link rel="stylesheet" href="/video/Public/css/font-awesome.min.css">
	<link rel="stylesheet" href="/video/Public/css/video-js.css" type="text/css">
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
				<a href="javascript:;">首页</a>
				<a href="javascript:;">资讯</a>
				<a href="javascript:;">房产</a>
				<a href="javascript:;">家居</a>
				<a href="javascript:;">娱乐</a>
				<a href="javascript:;">婚嫁</a>
				<a href="javascript:;">亲子</a>
				<a href="javascript:;">生活</a>
				<a href="javascript:;">旅游</a>
				<a href="javascript:;">交通</a>
				<a href="javascript:;">视频</a>
				<a href="javascript:;">智慧城市</a>
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
			<i class="fa fa-home"></i><a href="javascript:;">首页</a> > <a href="/video/index.php/Home/Index/index">视频</a>
		</div>

		<!-- 左侧容器 -->
		<div class="layoutLeft videoCategory">

	<!-- 大循环 -->	
	<?php if(is_array($videolist)): $k = 0; $__LIST__ = $videolist;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($k % 2 );++$k;?><div class="videosWrapper mt12">
				<div class="fn-clear">
	                <div class="mod_title">
	                    <h2 class="title">
	                        <a target="_blank" href="/video/index.php/Home/Index/more/category/<?php echo ($k); ?>">
	                        <span class="text_sprite text_variety">	                        
	                        <?php switch($k): case "1": ?>直播大武汉<?php break;?>
   							<?php case "2": ?>经视直播<?php break;?>
   							<?php case "3": ?>看荆楚<?php break;?>
   							<?php case "4": ?>原创视界<?php break;?>
   							<?php case "5": ?>4G高清视频<?php break;?>
   							<?php case "6": ?>电视问政<?php break;?>
   							<?php case "7": ?>社区网络春晚<?php break;?>
   							<?php case "8": ?>10000知道<?php break;?>
   							<?php case "9": ?>天翼视讯<?php break;?>
   							<?php case "10": ?>iTV导视<?php break;?>
   							<?php case "11": ?>优酷资讯<?php break;?>   							
    							<?php default: ?>直播大武汉<?php endswitch;?>	                        
	                        </span></a>
	                    </h2>
	                    <div class="title_sub">
			                <i class="divide">|</i>
			                <a href="/video/index.php/Home/Index/more/category/<?php echo ($k); ?>" target="_blank" class="link_more" title="更多">更多
			                	<i class="fa fa-caret-right"></i>
			                </a>
	                    </div>
	                </div>
	            </div>

	            <div class="fn-clear figureVideos">
	            	<ul class="figures_list">
	            	
	  <?php if(is_array($vo)): $i = 0; $__LIST__ = array_slice($vo,0,3,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$video): $mod = ($i % 2 );++$i;?><li class="list_item">
	            			<a href="/video/index.php/Home/Index/play/id/<?php echo ($video["id"]); ?>" target="_blank" data-id="<?php echo ($video["id"]); ?>" class="figure videoLink" title="<?php echo ($video["title"]); ?>">
			                    <img src="<?php echo ($video["smallpic_url"]); ?>" style="visibility: visible;">
			                </a>
			                <strong class="figure_title">
			                	<a href="/video/index.php/Home/Index/play/id/<?php echo ($video["id"]); ?>" target="_blank" data-id="<?php echo ($video["id"]); ?>" title="<?php echo ($video["title"]); ?>" class="videoLink"><?php echo ($video["title"]); ?></a>
			                </strong>
			                <p class="figure_desc"><?php echo ($video["online_date"]); ?></p>
	            		</li><?php endforeach; endif; else: echo "" ;endif; ?>
	            	</ul><!--figures_list-->

	            	<ul class="figures_list">
	 <?php if(is_array($vo)): $i = 0; $__LIST__ = array_slice($vo,3,3,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$video): $mod = ($i % 2 );++$i;?><li class="list_item">
	            			<a href="/video/index.php/Home/Index/play/id/<?php echo ($video["id"]); ?>" target="_blank" data-id="<?php echo ($video["id"]); ?>" class="figure videoLink" title="<?php echo ($video["title"]); ?>">
			                    <img src="<?php echo ($video["smallpic_url"]); ?>" style="visibility: visible;">
			                </a>
			                <strong class="figure_title">
			                	<a href="/video/index.php/Home/Index/play/id/<?php echo ($video["id"]); ?>" target="_blank" data-id="<?php echo ($video["id"]); ?>" class="videoLink" title="<?php echo ($video["title"]); ?>"><?php echo ($video["title"]); ?></a>
			                </strong>
			                <p class="figure_desc"><?php echo ($video["online_date"]); ?></p>
	            		</li><?php endforeach; endif; else: echo "" ;endif; ?>         		
	            	</ul><!--figures_list-->
	            </div>
            </div><!--videosWrapper--><?php endforeach; endif; else: echo "" ;endif; ?>


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

	<div id="" class="fn-hide videopops videojumpOut">
		<div class="fn-left video-content pops">
			<h1><a href="javascript:;" title="" target="_blank" id="video_title"></a></h1>
			<div class="player">
				<video id="wholVideo" class="video-js vjs-default-skin" controls preload="none" width="460" height="264"
				      poster="" >				   
				    <source id="video_source" src="" type='video/mp4'/>			   
				</video>
			</div>
			<div class="shareto pops">
				<p>视频名称：<span id="video_name"></span></p>
				<p>上映时间：<span id="video_release"></span></p>
				<p>视频简介：<span id="video_description"></span></p>
			</div><!--//shareto-->
		</div>
		<div class="close-btn fa fa-times-circle fa-3x"></div>
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
		});


	</script>

</body>
</html>