define(['text!component/a/a.html','css!component/a/a.css'],function(a){
    var $el = $(a);
    $el.on("click",function(){
        alert("click");
    })
    return {
        $el:$el,
    }
})