function copy(that){
   var inp =document.createElement('input');
   document.body.appendChild(inp);
   inp.value =unescape(that.textContent);
   inp.select();
   document.execCommand('copy',false);
   inp.remove();
}
function copyText(text) {
    var inp = document.createElement('input');
    document.body.appendChild(inp);
    inp.value = unescape(text);
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
}

window.onload = function() {
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
};