(function () {
    var c = {};
    c.subFlag = true;
    c.getMsgFlag = true;
    c.regExpPhone = /^1[3458]\d{9}$/;
    c.url = LFX.url + "LfxService?act=";
    c.recInvitationCode = getParameterByName("code"), $recIpt = $("#rec-ipt");
    var getCredit = getParameterByName("getCredit");
    var redCellPhone = getParameterByName("cellPhone");
    if(getCredit && getCredit != null){
    	if(getCredit >=1){
    		$("#getCredit").text(getCredit);
        	$("#redCredit").show();
    	}else if (getCredit == -1){
    		$("#noRedCredit").show();
    	}
    }
    if(redCellPhone && redCellPhone !=""){
    	$("#reg-phone").val(redCellPhone);
    }
    if (c.recInvitationCode) {
        $recIpt.html("<span>" + c.recInvitationCode + '</span><p class="notice"></p>');
    } else {
        $recIpt.find("input:hidden").show().attr("type","text");
    }
    $("button").on("touchstart",function () {
        if (this.className != "disable-button") {
            this.className = "btn-active"
        }
    }, false).on("touchend", function () {
            if (this.className != "disable-button") {
                this.className = ""
            }
        }, false);
    var a = {"rec_code_null": "邀请码不能为空", "rec_code_noexist": "邀请码不存在", "reg_phone_inputtip": "用于接收短信验证码，登录，修改密码", "reg_phone_null": "您的手机号码不能为空", "reg_phone_format": "您的手机号码格式有误", "reg_phone_exist": "您的手机号码已经被注册了", "msg_code_null": "短信验证码不能为空", "msg_code_format": "短信验证码是6位的数字", "msg_code_wrong": "短信验证码输入错误", "login_pwd_null": "登录密码不能为空", "login_pwd_number": "密码为纯数字，安全性低", "login_pwd_zh": "登录密码不能包含汉字", "login_pwd_same": "登录密码不能为同一字符", "login_pwd_maxlength": "登录密码太长，长度应为6-20个字符", "login_pwd_minlength": "登录密码太短，长度应为6-20个字符", "nick_name_tip": "3-12个字符，推荐使用英文和数字", "nick_name_error": "您的用户名含有特殊字符", "serror_error": "页面开了一个小差，请稍候重试！"}, d = {"recCode": $recIpt.children("input"), "regCode": $("#reg-code"), "msgCodeNotice": $("#msg-code-box").next("p"), "msgCode": $("#msg-code"), "loginPwd": $("#login-pwd"), "nickName": $("#nick-name"), "getMsgCode": $("#get-msg-code,#get-code-again"), "subForm": $("#sub")}, b = {};
    $("#hide-show-pwd").on("tap", function () {
        var e = d.loginPwd[0], f = e.type;
        if (f == "text") {
            e.type = "text";
            this.innerHTML = "显示"
        } else {
            e.type = "password";
            this.innerHTML = "隐藏"
        }
    });
    c.checkRight = function (e, f) {
        b[e] = f
    };
    c.showNotice = function (f, e) {
        c.subFlag = false;
        c.getMsgFlag = false;
        f.text(e).addClass("error").show()
    };
    c.enableGetCode = function () {
        d.getMsgCode.attr("data-submit", "0").removeClass("disable-button")
    };
    c.getCodeTime = function () {
        var g = 120, f = null;

        function e() {
            if (g > 0) {
                d.getMsgCode.text(+g + " 秒后再次获取");
                g--
            } else {
                clearInterval(f);
                d.getMsgCode.text("再次获取");
                c.enableGetCode()
            }
        }

        f = setInterval(e, 1000)
    };
    c.enableSubForm = function () {
        d.subForm.attr("data-submit", "0")
    };
    /*c.checkRegPhone = function () {
        var f = d.regPhone, e = f.val(), g = f.siblings(".notice");
        e == "" ? c.showNotice(g, a.reg_phone_null) : (!e.match(c.regExpPhone)) ? c.showNotice(g, a.reg_phone_format) : c.checkRight("regPhone", e)
    };*/
    c.checkMsgCode = function () {
        var g = d.msgCode, f = g.val(), e = d.msgCodeNotice;
        f == "" ? c.showNotice(e, a.msg_code_null) : (!f.match(/\d{4}/g)) ? c.showNotice(e, a.msg_code_format) : c.checkRight("msgCode", f)
    };
    c.checkLoginPwd = function () {
        var g = d.loginPwd, j = g.val(), k = g.siblings(".notice"), f = j.length;

        function h(m) {
            var l = [" ", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "=", "`", "[", "]", "\\", "|", "{", "}", ";", "'", ":", '"', ",", "/", "<", ">", "?", "“", "”", "《", "》", "（", "）", "￥", "，", "。", "……", "——", "！", "：", "‘", "’", "【", "】", "、"];
            for (i = l.length; i--;) {
                if (m.indexOf(l[i]) >= 0) {
                    return true
                }
            }
        }

        function e(n) {
            var l = true;
            for (var m = n.length; m--;) {
                if (n.charAt(m) != n.charAt(--m)) {
                    l = false;
                    return false
                }
            }
            return l
        }

        j == "" ? c.showNotice(k, a.login_pwd_null) : f < 6 ? c.showNotice(k, a.login_pwd_minlength) : f > 20 ? c.showNotice(k, a.login_pwd_maxlength) : (!j.match(/\D/)) ? c.showNotice(k, a.login_pwd_number) : (escape(j).indexOf("%u") != -1) ? c.showNotice(k, a.login_pwd_zh) : h(j) ? c.showNotice(k, a.login_pwd_illegality) : e(j) ? c.showNotice(k, a.login_pwd_same) : c.checkRight("loginPwd", j)
    };
    c.checkForm = function (e) {
        c.subFlag = true;
        c.getMsgFlag = true;
        //c.checkRegPhone();
        if (!e) {
            return
        } else {
            c.checkMsgCode();
            c.checkLoginPwd();
            return
        }
    };
    d.getMsgCode.on("tap click", function () {
        var f = $(this);
        c.checkForm(false);
        if (c.getMsgFlag && f.attr("data-submit") == "0") {
            d.getMsgCode.attr("data-submit", "1");
            var h = c.url + "sendIdentyingCode", e = {"request": {"encryptType": 2, "data": {"uuid": b.regPhone, "recommendTelephone": b.recPhone}}};
            e.sign = hex_md5(JSON.stringify(e.request));
            e = fnSerializeParam(e);
            var g = function (l) {
                if (l) {
                    var j = l.resultCode;
                    if (j == 0) {
                        f.addClass("disable-button");
                        $("#code-send-tip").show();
                        c.getCodeTime()
                    } else {
                        if (j == 9009) {
                            var k = $recIpt.children("p");
                            c.showNotice(k, a.rec_phone_noexist);
                            setTimeout(c.enableGetCode, 3000)
                        } else {
                            if (j == 9011) {
                                var k = d.regPhone.siblings("p");
                                c.showNotice(k, a.reg_phone_exist);
                                setTimeout(c.enableGetCode, 3000)
                            } else {
                                setTimeout(c.enableGetCode, 3000)
                            }
                        }
                    }
                } else {
                    alert(a.serror_error);
                    setTimeout(c.enableGetCode, 3000)
                }
            };
            fnXMLHttpRequest(h, e, g, "post")
        }
    });
    d.subForm.on("tap click", function () {
        var f = $(this);
        c.checkForm(true);
        if (c.subFlag && f.attr("data-submit") == "0") {
            f.attr({"data-submit": "1", "class": "disable-button"}).text("提交中……");
            var h = c.url + "register", e = {"request": {"encryptType": 2, "data": {"uuid": b.regPhone, "recommendTelephone": b.recPhone, "identifyingCode": b.msgCode, "password": b.loginPwd, "nickName": d.nickName.val()}}};
            e.sign = hex_md5(JSON.stringify(e.request));
            e = fnSerializeParam(e);
            var g = function (k) {
                if (k) {
                    var j = k.resultCode;
                    if (j == 0) {
                        location.href = WL.url + "webapp/regok.html"
                    } else {
                        f.removeClass("disable-button").text("同意以下协议并注册");
                        if (j == 9010) {
                            c.showNotice(d.msgCodeNotice, a.msg_code_wrong)
                        } else {
                            if (j == 9006) {
                                c.showNotice(d.nickName.siblings("p"), a.nick_name_error)
                            }
                        }
                        setTimeout(c.enableSubForm, 3000)
                    }
                } else {
                    alert(a.serror_error);
                    setTimeout(c.enableSubForm, 3000)
                }
            };
            fnXMLHttpRequest(h, e, g, "post")
        }
    });
    /*d.regPhone.on("focus",function () {
        $(this).siblings("p").removeClass("error").text(a.reg_phone_inputtip).show()
    }).on("change blur", function () {
            c.checkRegPhone()
        });
    d.msgCode.on("change blur", function () {
        c.checkMsgCode()
    });*/
    d.loginPwd.on("focus",function () {
        $(this).siblings("p").removeClass("error").text(a.login_pwd_tip).show()
    }).on("change blur", function () {
            c.checkLoginPwd()
        });
    d.nickName.on("focus", function () {
        $(this).siblings("p").removeClass("error").text(a.nick_name_tip).show()
    });
    $("#reg-form").on("keyup", "input", function () {
        this.id == "msg-code" ? d.msgCodeNotice.hide() : $(this).siblings(".error").hide()
    })
})();
