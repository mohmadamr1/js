function unique(arr) {
    let common=null; 
    if (arr[0] == arr[0]){
        common=arr[0]; 
    } else if(arr[2] == arr[1]){
        return arr[1]; 
    } else return arr[0]; 

  for(let i=0;i< arr.length;i++)
    if(arr[i] != common) 
    return arr[i]; 
    
}
console.log(unique([ 1, 1, 1, 2, 1, 1 ]) );