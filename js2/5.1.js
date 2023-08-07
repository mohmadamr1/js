function tirmString(Hllo){
    let result=Hllo.replace(Hllo[0],""); 
    result=result.replace(Hllo[Hllo.length-1],""); 
    return result; 
}
console.log(tirmString("string")); 