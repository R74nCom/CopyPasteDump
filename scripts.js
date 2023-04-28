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
       anchor.setAttribute("texttocopy",anchor.innerHTML);
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
      + "<a href=''https://www.tumblr.com/share?v=3&u="+encodedURL+"&t="+pageTitle+"&tags=CopyPasteDump,emoji,emoticons' target='_blank' title='Share on Tumblr' style='background-color:#546c8c;color:white'>Tumblr</a>" // Tumblr
      
});