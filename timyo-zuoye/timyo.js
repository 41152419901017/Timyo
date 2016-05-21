 $(document).ready(function(){
 var arr=[ "Forget inbox zero:","Relal time isnit for neal:","It's about time:"]
 var i=0,a=1;

 setInterval(function(){
       if(i>=3)
       {
        i=0;
       }
        $(".vary")[0].innerHTML=arr[i]
        i++;
    },1000)



timer=setInterval(btn,1000)

$(".btn_4 li").click(function(){
clearInterval(timer)
 var  b=$(".btn_4 li").index($(this))+1;
     a=b;console.log(a)
     btn();
}   )
  
 var that=$(".btn_4 li")[0];

  function btn(){
    clearInterval(timer)
   if(a>=5)
   {
    a=1;
   }
        // 本算法采取清除上一次样式
    $(".iph img")[0].src="images/solid"+a+".png";//换图片
    that.style.background="none";
    $(".btn_4 li")[a-1].style.background="black";
       that=$(".btn_4 li")[a-1]; //记录上一次
    a++;  
    timer=setInterval(btn,1000)
  }
  }
)
