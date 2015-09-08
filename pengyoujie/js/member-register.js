;
(function() {

	//配置请求链接
    //var baseServerUrl = "http://localhost/tinyshop/index.php?con=api&act=webreg";
	
    //短信验证码秒数倒数（函数封装）
	var wait = 120;
    function time(o) { 
        if (wait == 0) { 
            o.removeAttribute("disabled");  
            o.value="获取短信验证码"; 
            wait = 120; 
        } else { 
            o.setAttribute("disabled", true); 
            o.value = "重新发送(" + wait + ")"; 
            wait--; 
            setTimeout(
                function() { 
                    time(o) 
                }, 
            1000) 
        } 
    }
	
    //获取短信验证码
    $("#get-msg-code").bind("click",  function() {
        var phoneNumber = $.trim($("#reg-phone").val());
        if ("" == phoneNumber) {
            alert("请输入手机号码!");
            return;
        } else {
			//手机号正则验证
			var reg = /^0?1[3|5|8][0-9]\d{8}$/;
			if (!reg.test(phoneNumber)) {
				alert("手机号格式不正确~");
				return;
			}
			//ajax请求 发送验证码到手机
			var o = this;
			$.ajax({
				type : "POST",
				url : 'http://test.gz383.com/index.php?con=api&act=send_code',
				data : {phone : phoneNumber},
				dataType : "jsonp",
				success : function(data) {
					if (data && data.status == 1) {
						//alert(data.message);
						//return;
						alert("验证码已发送，请查收！");
						//调用秒数倒数函数
						time(o);
					} else{
						alert(data.message);
						return;
					}
				},
				error : function(data) {
					alert("验证码发送失败，请稍后再试！");
				}
			});
        }
    });

    //注册提交
    $("#sub").bind("click", function() {
		//手机号正则验证
		var phoneNumber = $.trim($("#reg-phone").val());
		if ('' == phoneNumber){
			alert("请输入手机号码");
			return;
		}
		var reg = /^0?1[3|5|8][0-9]\d{8}$/;
		if (!reg.test(phoneNumber)) {
			alert("手机号格式不正确~");
			return;
		}
		
        if (verifyInputData()) {
			//邀请码
			var invite_code = $("#rec-code").length > 0 ? $.trim($("#rec-code").val()) : $.trim($("#rec-ipt span").text());
			//手机号
			var reg_phone = $.trim($("#reg-phone").val());
			//短信验证码
			var msg_code = $.trim($("#msg-code").val());
			//密码
			var password = $.trim($("#login-pwd").val());
			
			//验证短信验证码是否正确 
			$.ajax({
				type : "POST",
				url : 'http://test.gz383.com/index.php?con=api&act=check_code',
				data : {msg_code : msg_code, phone : reg_phone},
				dataType : "jsonp",
				success : function(data) {
					if (data && data.status == 1) {
						//alert(data.message);
						//return false;
						//短信验证码正确 往下执行 提交注册资料
						webreg();
					} else{
						alert(data.message);
						return;
					}
				},
				error : function(data) {
					alert("网络异常，请稍后再试！");
				}
			});
        }
    });
	
	//注册提交函数封装
	function webreg(){
		//邀请码
		var invite_code = $("#rec-code").length > 0 ? $.trim($("#rec-code").val()) : $.trim($("#rec-ipt span").text());
		//手机号
		var reg_phone = $.trim($("#reg-phone").val());
		//短信验证码
		var msg_code = $.trim($("#msg-code").val());
		//密码
		var password = $.trim($("#login-pwd").val());
		
		//ajax请求 开始注册
		$.ajax({
			type : "POST",
			url : 'http://test.gz383.com/index.php?con=api&act=webreg',
			data : {invite_code : invite_code, phone : reg_phone, password : password},
			dataType : "jsonp",
			success : function(data) {
				if (data && data.status == 1) {
					alert("注册成功^ ^！");
					location.href = "http://pengyoujie.com.cn/download.html";
				} else{
					alert(data.message);
					return;
				}
			},
			error : function(data) {
				alert("注册失败，请稍后再试！");
			}
		});
	}
	
	//验证提交数据是否完整
    function verifyInputData() {
        if (($("#rec-code").length > 0 && $.trim($("#rec-code").val()) == "") || ($("#rec-ipt span").length > 0 && $.trim($("#rec-ipt span").html()) == "")
            /*|| $.trim($("#nick-name").val()) == ""*/
            || $.trim($("#login-pwd").val()) == ""
            || $.trim($("#rep-login-pwd").val()) == ""
            || $.trim($("#reg-phone").val()) == ""
            || $.trim($("#msg-code").val()) == "") {
            alert("请填写完整注册资料！");
            return false;
        }
        if(!$("#protocol-check").is(":checked")){
        		alert("请阅读和勾选协议！");
        		return false;
        	}
        if ($("#login-pwd").val() != $("#rep-login-pwd").val()) {
            alert("两次输入的密码不一致！");
            return false;
        }
        return true;
    }
})();