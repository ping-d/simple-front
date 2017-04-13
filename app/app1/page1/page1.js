define(['text!page1/page1.html','component/header/header','css!page1/page1.css'],function(page1,header){

    var Result = function(){
        this.$el = $(page1);
        this.init();
    }
    Result.prototype.init = function(){
        this.$el.append(new header().$el)
    }
    return Result;
})