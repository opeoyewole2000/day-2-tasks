

let findMinMax= (numbers)=>{
let numbersLength =	numbers.length;
if (numbersLength === 0)
{
  return "no numbers ";
}
if (numbersLength  <= 1)
{
  return "cant operate on one number";
}
else if(numbersLength >= 2)
{
  let lowest = numbers[0];
  let highest = numbers[0];
   let newArray = [];
for(i=0;i<numbersLength;i++){
  if (highest <= numbers[i+1])
  {
  highest = numbers[i+1];
  }
  if (lowest >= numbers[i+1])
  {
  lowest = numbers[i+1];
  
}
    
  }
  if(lowest === highest){
    newArray.push(lowest);
    
  }else{
 newArray.push(lowest);
 newArray.push(highest);
  }
    return newArray;
  }
  



}


findMinMax([1,2,3,4]);

exports.findMinMax = findMinMax;