define([],function(){
    return{
        request:function(paras){//获取请求参数
            var url = decodeURI(location.href);
            var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
            var returnValue,i;
            for (i = 0; i < paraString.length; i++) {
                var tempParas = paraString[i].split('=')[0];
                var parasValue = paraString[i].split('=')[1];
                if (tempParas === paras)
                    returnValue = parasValue;
            }
            if (typeof(returnValue) == "undefined") {
                return "";
            } else {
                return returnValue;
            }
        }
    }
})