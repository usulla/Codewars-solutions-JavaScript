/* 5kyu. Extract the domain name from a URL
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/
// Solution 1
function domainName(url) {
    const newUrl = url.replace(/www\.|http:\/\/|https:\/\/|\/[a-z0-9_-]*|\.[a-z0-9_-]*/g, "");
    return newUrl;
}

// Solution 2
function domainName(url) {
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};