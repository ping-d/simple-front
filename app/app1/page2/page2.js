define(["text!page2/page2.html",'component/header/header',"css!page2/page2.css"],function(html,header){

    var Result = function(){
        this.$el = $(html);
        this.init();
    }
    Result.prototype.init = function(){
        var me = this;
        this.bindEvents();
        me.$el.append(new header().$el);
    }
    Result.prototype.bindEvents = function(){
        var me = this;
        this.$el.find(".button").on("click",function(){
            requirejs(['component/a/a'],function(a){
                me.$el.append(a.$el)
            })

        })
    }



    return Result;
})