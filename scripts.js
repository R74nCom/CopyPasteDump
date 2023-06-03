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

document.addEventListener("DOMContentLoaded", function(){
  var specialEvents = {
    "5/30-6/30": ["Pride", "pride", "linear-gradient(135deg, rgba(255,0,0,0.75) 0%, rgba(255,154,0,0.75) 10%, rgba(208,222,33,0.75) 20%, rgba(79,220,74,0.75) 30%, rgba(63,218,216,0.75) 40%, rgba(47,201,226,0.75) 50%, rgba(28,127,238,0.75) 60%, rgba(95,21,242,0.75) 70%, rgba(186,12,248,0.75) 80%, rgba(251,7,217,0.75) 90%, rgba(255,0,0,0.75) 100%)"]
  }
  try {
    var today = new Date();
    // loop through the specialEvents object
    for (var key in specialEvents) {
        var dates = key.split('-');
        var start = new Date(dates[0]);
        if (dates.length > 1) {
            var end = new Date(dates[1]);
        }
        else {
            var end = start;
        }
        // set year
        start.setFullYear(today.getFullYear());
        end.setFullYear(today.getFullYear());
        // if today is between the start and end dates
        if (today >= start && today <= end) {
            var event = specialEvents[key];
            var eventTitle = event[0];
            var eventURL = event[1];
            var eventGradient = event[2]||"unset";
            console.log(eventTitle);
            // add to navbar after logo
            document.querySelector('.navhome').insertAdjacentHTML('afterend', '<a href="/'+eventURL+'" class="navspecial" style="background-image:'+eventGradient+'">'+eventTitle+'</a>');
            break;
        }
    }
  }
  catch (e) {
      console.log(e);
  }
});