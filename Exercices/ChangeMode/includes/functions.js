function modeHandler(self){
    var target =   document.querySelector('body');
    if(self.value==='dark'){
        target.style.backgroundColor='#000';                    
        target.style.color='#fff';
        self.value='light';

        var alist=document.querySelectorAll('a');
        var i=0;
        while(i<alist.length){
        alist[i].style.color='#c2f225';
        i++;
        }
    }
    else{
        target.style.backgroundColor='#fff';                    
        target.style.color='#000';
        self.value='dark';
        
        var alist=document.querySelectorAll('a');
        var i=0;
        while(i<alist.length){
        alist[i].style.color='blue';
        i++;
}
    }
}