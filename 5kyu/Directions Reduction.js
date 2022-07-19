/*

Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed a mountainous desert the smart way.
The directions given to the man are, for example, the following (depending on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or
[North, South, South, East, West, North, West]
You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

["WEST"]
or
{ "WEST" }
or
[West]


*/


//my solution

function dirReduc(arr){                                 //most of this could've been reduced to 2-3 lines of code but I couldn't figure out how to use the || operator
                                                        //inside the replace method
    let checkArr = arr;
    let northSouth = new RegExp('NORTH SOUTH', 'g');
    let southNorth = new RegExp('SOUTH NORTH', 'g');
    let westEast = new RegExp('WEST EAST', 'g');
    let eastWest = new RegExp('EAST WEST', 'g');
    arr = arr.join(' ')
      .replace(northSouth, '')
      .replace(southNorth, '')
      .replace(westEast, '')
      .replace(eastWest, '')
      .split(" ")
      .filter(item => item !== '');
    
    if (arr.join('') !== checkArr.join('')) {
      return dirReduc(arr);    
    }
    
    else return arr;
  
  }


//best practice solution


function dirReduc(plan) {
    var opposite = {
      'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    return plan.reduce(function(dirs, dir){
        if (dirs[dirs.length - 1] === opposite[dir])
          dirs.pop();
        else
          dirs.push(dir);
        return dirs;
      }, []);
  }

//alternative solution

function dirReduc(arr) {
    var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
    while (pattern.test(str)) str = str.replace(pattern,'');
    return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
  }


//another alternate 

  function dirReduc(arr){
    var opposite = { "SOUTH":"NORTH", "NORTH":"SOUTH", "WEST":"EAST", "EAST":"WEST"}
    return arr.reduce(function (a, b, i) {
      opposite[a.slice(-1)] === b ? a.pop() : a.push(b)
      return a
    }, [])
  }                     //great solution!!