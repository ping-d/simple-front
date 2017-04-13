define(['jquery'],function($){
    return {
        selector:null,
        routeMap:[],
        init:function(selector,routeMap){
            var me = this;
            this.selector = selector;
            this.routeMap = routeMap;
            window.onhashchange = function(){
                me.hash = window.location.hash || "#/";
                me.route();
            }
            this.route();
        },
        hash:window.location.hash||"#/",
        route:function(){
            var flag = true;
            for(var i=0;i<this.routeMap.length;i++){
                if(("#"+this.routeMap[i].key) === this.hash){
                   this.appendElement(this.routeMap[i].value);
                   flag = false;
                   break;
                }
            }
            if(flag){
                throw new Error("路由不匹配")
            }
        },
        appendElement:function(value){
            var me = this;
            requirejs([value],function(value){

                var $container = $(me.selector);
                $container.empty();
                $container.append(new value().$el);
            })
        }
    }
})