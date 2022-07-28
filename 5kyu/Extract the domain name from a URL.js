/*

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/


//my solution

function domainName(url){
    let urlName = [url];
    let regex1 = /(http(s)*:\/\/)*(www.)*/g
    let regex2 = /(\.\w{2})(m)*(\/)*(\S)*/g
    return urlName
      .map(item => item.replace(regex1, ''))
      .map(item => item.replace(regex2, ''));
      
  }


//best practice solution

function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };


//alternative solution

function domainName(url){
    return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
  }