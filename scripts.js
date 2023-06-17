function copy(that){
var inp =document.createElement('input');
document.body.appendChild(inp)
inp.value =that.textContent
inp.select();
document.execCommand('copy',false);
inp.remove();
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
function closeTabs() {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
}
function toggleTab(evt, tabName) {
  if (document.getElementById(tabName).style.display == "block") {
    closeTabs();
  }
  else {
    openTab(evt, tabName);
  }
}

function reversed(str){
  if (str === "")
    return "";
  else
    return reversed(str.substr(1)) + str.charAt(0);
}

window.addEventListener('load', function(){
  // get the page path without the domain
  var path = window.location.pathname;
  // trim ".html" and "/" from the end
  path = path.replace(/(index)?\.html$/, '').replace(/\/$/, '').replace(/^\//, '');
  // if CopyPasteDump/ is in the path, split it and keep the last part
  if (path.indexOf('CopyPasteDump/') > -1) {
    path = path.split('CopyPasteDump/')[1];
  }
  // remove /index.html
  path = path.replace(/\/index.html$/, '');
  // loop through the ul in navdiv. if the href of the a matches the path, add the navactivepage class
  document.getElementById('navdiv').querySelector('ul').querySelectorAll('a').forEach(function(li){
    // trim "/" from start of href
    if (li.getAttribute('href').replace(/^\//, '') === path) {
      li.classList.add('navactivepage');
    }
  });
});

// 'Copy' Buttons
function copyText(text) {
    navigator.clipboard.writeText(text);
}

window.addEventListener('load', function() {
   var anchors = document.getElementsByClassName("cb");
   for(var i = 0; i < anchors.length; i++) {
       var anchor = anchors[i];
       if (anchor.getAttribute("texttocopy") == null) {
        anchor.setAttribute("texttocopy",anchor.innerHTML);
       }
       anchor.setAttribute("title","Click to Copy "+anchor.innerHTML);
       anchor.onclick = function() {
           copyText(this.getAttribute("texttocopy"));
           this.innerHTML = "✓";
           this.setAttribute("cooldown","true");
           setTimeout(() => {
               this.innerHTML = this.getAttribute("texttocopy");
               this.removeAttribute("cooldown");
           }, 2000);
       };

   }
});


// share buttons
window.addEventListener('load', function() {
  var footershare = document.getElementById('footershare');
  var currentURL = window.location.href;
  var encodedURL = encodeURIComponent(currentURL);
  var pageTitle = document.title;
  footershare.innerHTML = "Share to: "
      + "<a href='https://twitter.com/intent/tweet?hashtags=CopyPasteDump&related=R74nCom%2CCopyPasteDump&text="+pageTitle+"&url="+encodedURL+"&via=R74nCom' target='_blank' title='Share on Twitter' style='background-color:#1DA1F2;color:white'>Twitter</a>" // Twitter
      + "<a href='https://www.facebook.com/sharer/sharer.php?u="+encodedURL+"&amp;src=sdkpreparse' target='_blank' title='Share on Facebook' style='background-color:#3B5998;color:white'>Facebook</a>" // Facebook
      + "<a href='https://www.reddit.com/submit?url="+encodedURL+"&title="+pageTitle+"' target='_blank' title='Share on Reddit' style='background-color:#FF4500;color:white'>Reddit</a>" // Reddit
      + "<a href='https://www.tumblr.com/share?v=3&u="+encodedURL+"&t="+pageTitle+"&tags=CopyPasteDump,emoji,emoticons' target='_blank' title='Share on Tumblr' style='background-color:#546c8c;color:white'>Tumblr</a>"; // Tumblr
    // add a gray Copy button
    footershare.innerHTML += "<a href='javascript:void(0)' onclick='copyText(\""+currentURL+"\");this.innerHTML=\"Copied\"' title='Copy URL to Clipboard' style='background-color:#808080;color:white'>Copy</a>";
      
});

currentEvent = null;
document.addEventListener("DOMContentLoaded", function(){
  var USA = ["blue","blue","white","red","white","red"];
  var specialEvents = {
    // should be sorted by end date to work properly
    // "6/10-6/12": ["Juneteenth", "/juneteenth", ["#d90000","#000000","#00a808"]],
    "1/1": ["New Year", "/new-year", ["#02172F","#073656","#F0D466","#D7AF30"]],
    "2/9-2/14": ["Valentine's", "/valentines-day", ["#fa69ff","#ff6969"]],
    "3/20-3/31": ["Ramadan", "/ramadan", ["#c869ff","#6400c2"]],
    "4/15-4/18": ["Tax Day", "/tax-day", USA],
    "4/10-4/14": ["Eid al-Fitr", "/eid", ["#0E6D14","#00900A","#D9CD44","#CFB53B"]],
    "4/18-4/23": ["Earth Day", "/earth-day", ["#1c3aff","#00990f"]],
    "5/2": ["R74n", "https://R74n.com", "#00ffff"],
    "5/4-5/5": ["Cinco de Mayo", "/cinco-de-mayo", ["#ffd900","#c90000"]],
    "5/10-5/15": ["Mother's Day", "/mothers-day", ["#f59cff","#d93deb"]],
    "5/25-5/31": ["Memorial Day", "/memorial-day", USA],
    "6/18": ["Father's Day", "/fathers-day", ["#00b3ff","#005eff","#1500ff"]],
    "6/16-6/19": ["Juneteenth", "/juneteenth", ["#d90000","#000000","#00a808"]],
    "6/28-6/29": ["Eid al-Adha", "/eid", ["#0E6D14","#00900A","#D9CD44","#CFB53B"]],
    "5/30-6/30": ["Pride", "/pride", ["#ff0000","#ff9900","#d0de21","#4fdc4a","#3fdad8","#2fcae2","#1c7eee","#5f15f2","#ba0cf8","#fb07da","#ff0000"]],
    "7/1-7/4": ["July 4th", "/july-4th", USA],
    "7/28": ["Ashura", "/ashura", ["green","red"]],
    "9/1-9/5": ["Labor Day", "/labor-day", USA],
    "9/24-9/30": ["Yom Kippur", "/yom-kippur", ["#4da6ff","#e6c440"]],
    "10/1-10/31": ["Halloween", "/halloween", ["#ffa200","#ff8800"]],
    "11/1-11/10": ["US Election", "/election-day", USA],
    "11/18-11/28": ["Thanksgiving", "/thanksgiving", ["#ff6f00","#804b00"]],
    "12/5-12/15": ["Hanukkah", "/hanukkah", ["#4da6ff","#e6c440"]],
    "12/1-12/25": ["Christmas", "/christmas", ["red","lime"]],
    "12/26-12/30": ["Kwanzaa", "/kwanzaa", ["#d90000","#000000","#00a808"]],
    "12/31": ["New Year", "/new-year", ["#02172F","#073656","#F0D466","#D7AF30"]],
  }
  try {
    var today = new Date();
    // today = new Date(last key in specialEvents)
    //today = new Date(Object.keys(specialEvents)[Object.keys(specialEvents).length-1].split('-')[1]);
    // loop through the specialEvents object
    for (var key in specialEvents) {
        var dates = key.split('-');
        var start = new Date(dates[0]);
        if (dates.length > 1) {
            var end = new Date(dates[1]);
        }
        else {
            var end = new Date(dates[0]);
        }
        // set year
        start.setFullYear(today.getFullYear());
        end.setFullYear(today.getFullYear());
        // set time
        start.setHours(0,0,0);
        end.setHours(23,59,59);
        // if today is between the start and end dates
        if (today >= start && today <= end) {
            var event = specialEvents[key];
            var eventTitle = event[0];
            var eventURL = event[1];
            var eventGradient = event[2]||"unset";
            if (Array.isArray(eventGradient)) {
                eventGradient = "linear-gradient(135deg, "+eventGradient.join(",")+")";
            }
            console.log(eventTitle);
            currentEvent = eventTitle;
            // add to navbar after logo
            document.querySelector('.navhome').insertAdjacentHTML('afterend', '<a href="'+eventURL+'" class="navspecial" style="background:'+eventGradient+'">'+eventTitle+'</a>');
            break;
        }
    }
  }
  catch (e) {
      console.log(e);
  }
});