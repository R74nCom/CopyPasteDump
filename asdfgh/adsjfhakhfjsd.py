text = open("text.txt","r",encoding="utf8").read()

savefile = open("new.txt","w",encoding="utf8")
savefile.write(text.replace("  "," &nbsp;").replace("<","&lt;").replace(">","&gt;").replace("\n","\n<br>"))
savefile.close()
