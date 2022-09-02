/*
In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

Have fun!


*/


//my solution

function pickPeaks(arr){
    let pos = [];
    let peaks = [];
    let plateauPosition = [];
    let inflection;
    
    
    for (let i = 0; i < arr.length-1; i++) {
      
      
      if ((arr[i] > arr[i+1]) && (inflection == 'positive')) { //if present value greater than future, and we were on a rising streak before then we have ourselves a peak!
        inflection = 'negative'; //setting the trend pattern to negative
        if ((i !== 0) || (i !== arr.length-1)) { //exclude beginning and end of array since we can't know if they are actually peaks
          pos.push(i);
          peaks.push(arr[i]);
        }
      }
      
      if ((arr[i] > arr[i+1]) && (inflection == 'neutral')) { //if present value greater than future and we were plateauing we have a peak!
        inflection = 'negative';
        if (plateauPosition[0] !== 0) { //checking to see if that plateau included the beginning of the array. For all we know, it was plunging down before, then plateau'd, and then continued plunging. That plateau wouldn't be considered a peak! 
          pos.push(plateauPosition[0]); //we want the first position where the plateau started if this is indeed a peak
          peaks.push(arr[i]);
        }
        else plateauPosition = []; //reset the plateau counter
      }
      
      if (arr[i] < arr[i+1]) { //this is where we generate our trend pattern
        inflection = 'positive' 
        plateauPosition = [];  
      }
      else if (arr[i] > arr[i+1]) { //this is where we generate our trend pattern
        inflection = 'negative'  
        plateauPosition = [];  
      }
     
      else if ((arr[i] == arr[i+1]) && (inflection !== 'negative')) { //we only want to push to plateauPosition if we are sure this is a potential plateau peak. If the trend line was negative, it's just a temporary plateau before continuing plunging down
        inflection = 'neutral' //^of course, we will check during the actual pos.push and peaks.push if the plateauPosition includes the 0th index. We'll clear then after accumulating all of this plateau.
        plateauPosition.push(i); 
      }
      
    }
    
    return {pos,
            peaks}
  
}

//best practice solution

function pickPeaks(arr){
    var result = {pos: [], peaks: []};
    if(arr.length > 2) {
      var pos = -1;
      for(var i=1; i<arr.length;i++){
        if(arr[i] > arr[i-1]) {
          pos = i;
        } else if(arr[i] < arr[i-1] && pos != -1) {
          result.pos.push(pos);
          result.peaks.push(arr[pos]);
          pos = -1;
        }
      }
    }
    return result;
  }


//alternative solution

function pickPeaks(arr){
    var pos = arr.map((x,i)=>i > 0 ? Math.sign(x - arr[i-1]) * i : 0)
      .filter(i => i != 0)
      .filter((x,i,a) => i < a.length-1 && (a[i+1] < 0 && x > 0));
    return {pos:pos, peaks:pos.map(i=>arr[i])}
  }