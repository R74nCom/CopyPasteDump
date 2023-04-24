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