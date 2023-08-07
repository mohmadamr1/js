const array= [1, 5, 42, 2, 77,2]; 

function sumOfLow(array){ 
    let index=0;
    let small=array[0]; 
    for(let i=1;i<array.length;i++){
        if(array[i] < small){
            index=i; 
            small=array[i];
        }
    }
    array.splice(index,1); 
    let small2=array[0];
    for(let i=1;i<array.length;i++){
        if (array[i] < small2){
            small2=array[i]; 
        }
    }
    return small+small2; 

}
console.log(sumOfLow(array)); 