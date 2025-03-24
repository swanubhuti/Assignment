function printing(n){
    
    for( let i = 1 ;i<=n;i++){
     
setTimeout(function(){
        console.log(i)
    },i*1000)
        
}
}

printing(5)