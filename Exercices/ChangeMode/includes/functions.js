var Links={
    setColor:function(color){
       /* var alist=document.querySelectorAll('a');
       var i=0;
        while(i<alist.length){
        alist[i].style.color=color;
        i++;
        }*/
        // .css() : var color = $( this ).css(propertyName,value);
        $('a').css('color',color); //jQuery starts with $ 
    }
}

function importHtml(a,b){
    $(document).ready(function(){
        doncument.getElementById('"'+a+"'").innerHTML='\'<object type="text/html" data="includs/"'+b+'.html"></object>\'';
    })
}


var Body={setTxtColor:function(variable,color){
    /*variable.style.color=color*/
    $('body').css('color',color);},
    setBGColor:function(variable,color){
        /*variable.style.backgroundColor=color;*/
    $('body').css('backgroundColor',color);
}
}


function modeHandler(self){
    var target =   document.querySelector('body');
    if(self.value==='dark'){
        Body.setBGColor(target,'#000');                    
        Body.setTxtColor(target,'#fff');
        self.value='light';

        Links.setColor('#c2f225')

    }
    else{
        Body.setBGColor(target,'#fff');                    
        Body.setTxtColor(target,'#000');
        self.value='dark';

        Links.setColor('blue');
    }
}

