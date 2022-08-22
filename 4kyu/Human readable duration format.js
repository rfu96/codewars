/*

DESCRIPTION:
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, 
in a human-friendly way.

The function must accept a non-negative integer.
If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. 
In general, a positive integer and one of the valid units of time, separated by a space. 
The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). 
Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. 
herefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero.
 Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". 
It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.


*/


//my solution

function formatDuration (seconds) {
  
    if (seconds == 0) return 'now';
    
    let timeKey = {
      year: 31536000,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1
    }
    
    let resultArray = [];
    
    for (duration in timeKey) {
      if (seconds >= timeKey[duration]){
        let timeVal = Math.floor(seconds / timeKey[duration]);
        timeVal > 1 ? resultArray.push(timeVal + ' ' + duration + 's') : resultArray.push(timeVal + ' ' + duration);
        seconds = seconds % timeKey[duration];
      }
    }
    
    if (resultArray.length == 1) return resultArray.join('');
    
    if (resultArray.length == 2) return resultArray.join(' and ');
    
    if (resultArray.length > 2) {
      let finalString1 = resultArray.slice(0, resultArray.length-2).join(', ');
      let finalString2 = resultArray.slice(resultArray.length-2, ).join(' and ');
      return finalString1.concat(", ", finalString2);
    }
  
    
    
  }

//best practice solution

function formatDuration (seconds) {
    var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
        res = [];
  
    if (seconds === 0) return 'now';
    
    for (var key in time) {
      if (seconds >= time[key]) {
        var val = Math.floor(seconds/time[key]);
        res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
        seconds = seconds % time[key];
      }
    }
   
    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
  }


//alternative solution

function formatDuration (seconds) {
    if(!seconds)return "now";
    var strout = "";
    var s = seconds%60;
    seconds = (seconds-s)/60;
    var m = seconds%60;
    seconds = (seconds-m)/60;
    var h = seconds%24;
    seconds = (seconds-h)/24;
    var d = seconds%365;
    seconds = (seconds-d)/365;
    var y = seconds;
    
    var english=[];
    if(y)english.push(y+" year"+(y>1?'s':''));
    if(d)english.push(d+" day"+(d>1?'s':''));
    if(h)english.push(h+" hour"+(h>1?'s':''));
    if(m)english.push(m+" minute"+(m>1?'s':''));
    if(s)english.push(s+" second"+(s>1?'s':''));
    
    return english.join(", ").replace(/,([^,]*)$/," and$1");
    
  }