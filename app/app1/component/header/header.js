define(['text!component/header/header.html','css!component/header/header.css'],function (html) {
    var Result = function(){
        this.$el = $(html);
        this.count = 0;
        this.bindEvents();
    }
    Result.prototype.bindEvents = function(){
        var me = this;
        this.$el.find("button").on("click",function(){
            alert(me.count ++ )
        })
    }
    return Result;
})