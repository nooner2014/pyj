function AESEncrypt(str, key) {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var encrypted = CryptoJS.AES.encrypt(str, keyHex, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
    return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
}
function AESDecrypt(str, key) {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var decrypted = CryptoJS.AES.decrypt({ciphertext: CryptoJS.enc.Base64.parse(str)}, keyHex, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
    return decrypted.toString(CryptoJS.enc.Utf8);
}
function fnXMLHttpRequest(url, oParam, callback, type) {
    var xmlHttp = new XMLHttpRequest();
    if (xmlHttp != null) {
        xmlHttp.onreadystatechange = requestStateChange;
        xmlHttp.open(type, url, true);
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
        xmlHttp.send(oParam);
    }
    function requestStateChange() {
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {
                callback && callback(fnResponseDataFormat(xmlHttp.responseText));
            }
        }
    }
}
function fnSerializeParam(oParam) {
    var arr = [];
    if (oParam) {
        for (var name in oParam) {
            var value = oParam[name];
            if (typeof value === "object") {
                value = JSON.stringify(value);
            }
            arr.push(name + "=" + encodeURIComponent(value));
        }
    }
    return arr.join("&");
}
function fnResponseDataFormat(responseText) {
    var oResponse = JSON.parse(responseText);
    if (oResponse.resultCode != 0 || typeof(oResponse.data) == "object") {
        return oResponse;
    }
    oResponse.data = JSON.parse(AESDecrypt(oResponse.data, LFX.aesKey));
    return oResponse;
}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var LFX = LFX || {};
var Isinline = "yes";
LFX.url = Isinline == "yes" ? "http://www.51lfx.com" : "";
