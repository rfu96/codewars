/*


Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.


*/


//my solution

function humanReadable (seconds) {
    let format = 'xx:yy:zz';
    let calc = (seconds / 3600);
    let hour = Math.floor(calc);
    let min = Math.floor((calc - hour)*60);
    let sec = Math.round((((calc - hour)*60) - min)*60);
     
    if (seconds == 0) return '00:00:00';
     
     if (seconds >= 3600) {
       if (hour < 10) hour = ('0' + `${hour}`)
        format = format.replace('xx', hour);
       if (min < 10) min = ('0' + `${min}`)
        format = format.replace('yy', min);
       if (sec < 10) sec = ('0' + `${sec}`)
        format = format.replace('zz', sec);
       if (sec >= 60) {
         format = format.replace('yy', min+1);
         format = format.replace('zz', '00');
       }
    
    }
     
     else if (seconds >= 60) {
       format = format.replace('xx', '00');
       
      if (min < 10) min = ('0' + `${min}`)
        format = format.replace('yy', min);
      if (sec < 10) sec = ('0' + `${sec}`)
        format = format.replace('zz', sec);
       
     }
  
    else {
      format = format.replace('xx', '00');
      format = format.replace('yy', '00');
        if (sec < 10) sec = ('0' + `${sec}`)
        format = format.replace('zz', sec);
    }
   
     return format.toString();
   
   }



//best practice solution


function humanReadable(seconds) {
    var pad = function(x) { return (x < 10) ? "0"+x : x; }
    return pad(parseInt(seconds / (60*60))) + ":" +
           pad(parseInt(seconds / 60 % 60)) + ":" +
           pad(seconds % 60)
  }

//alternative solution

function humanReadable(seconds) {
    var hours = parseInt( seconds / 3600 ) ;                //recall parseInt will ignore floating values.
    var minutes = parseInt( seconds / 60 ) % 60;
    var seconds = seconds % 60;
    
    var pad = function(val){
      return val < 10 ?"0"+val:val;
    }
    
    return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
    }