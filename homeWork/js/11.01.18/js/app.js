let checkDate = function(){
    let date = new Date();
    return new Promise( (resolve,reject)=>{
        if(date.getSeconds() % 2 == 0)
            resolve( date );
        else
            reject("Seconds are not an even number");
          
    })
    .then( (data)=>{
        console.log("Succes :",data);
    })
    .catch( (reason)=>{
        console.log( reason +':' ,'Lets try again') ;
        checkDate();
        
    })
}

checkDate();
    