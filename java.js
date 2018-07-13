 var start=new Date().getTime();var total=0; var count=0;var average=0;
         function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
             color += letters[Math.floor(Math.random() * 16)];
                }
            return color;
            }
        function msda(){
            var top = Math.random()*275;
            var left = Math.random()*550;
            var pix=(Math.random()*50)+50;
            var col=getRandomColor();
            document.getElementById("shape").style.borderRadius="50%";
            document.getElementById("shape").style.backgroundColor=col;
            document.getElementById("shape").style.width=pix+"px";
            document.getElementById("shape").style.height=pix+"px";    
            document.getElementById("shape").style.top = top + "px";
            document.getElementById("shape").style.left =  left + "px";
            document.getElementById("shape").style.display="block";
            start=new Date().getTime();
        }
        function aad(){
            setTimeout(msda,Math.random()*1000);
        }
        aad();
            document.getElementById("shape").onclick=function(){
                var top = Math.random()*300;
                var left = Math.random()*400;
                
                count=count+1;
                document.getElementById("shape").style.display="none";
                var end=new Date().getTime();
                var timen=(end-start)/1000;
                total=total+timen;
                average=total/count;
                var o = average.toFixed(2);
                var m = timen.toFixed(2);
                var n = total.toFixed(2);
                document.getElementById("ten").innerHTML = m+"s";
                document.getElementById("timeTaken").innerHTML = n+"s";
                document.getElementById("count").innerHTML = count;     
                document.getElementById("average").innerHTML = o+"s";     

    function reset()
    { total=0;timen=0;count=0;average=0;}
                document.getElementById("reset").onclick = function(){
                document.getElementById("ten").innerHTML = reset();
                document.getElementById("timeTaken").innerHTML = reset();
                document.getElementById("count").innerHTML = reset();
                document.getElementById("average").innerHTML = reset();

                }
                aad();
        }