import subprocess
import json
import os
def copy(output):
    process = subprocess.Popen(
        'pbcopy', env={'LANG': 'en_US.UTF-8'}, stdin=subprocess.PIPE)
    process.communicate(output.encode('utf-8'))

chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz1234567890`~!@#$%^&*()-_=+[]{}\\|;:'\",.<>/?¡£€¢¥¿±–—∞"

d = eval(open("fonts.js","r",encoding="utf8").read().split(" = ",1)[1])
print(list(d.keys()))
print(chars)
copy(chars)
while True:
    name = input("Font Name: ").replace(" ","-").lower()
    if name in d:
        print("WARNING - Name taken")
#    copy(chars)
    newchars = input(chars+"\nConverted: ")
    starred = False
    if newchars.startswith("*"):
        newchars = ((newchars[1:]+"ŒŒŒŒŒŒ").join(chars)+newchars[1:]).replace("/"+newchars[1:]+"/"+newchars[1:],"//").split("ŒŒŒŒŒŒ")
        starred = True
    if "//" in newchars: newchars = newchars.split("//")
    if (not starred) and not len(newchars) == len(chars):
        print("ERROR - Incorrect format")
        continue
    d[name] = {"NAME":name.replace("-"," ").title()}
    for n in range(len(chars)):
        if not chars[n]==newchars[n]:
            d[name][chars[n]] = newchars[n]
    jsontext = str(json.dumps(d[name]))
    savefile = open("new.txt","a",encoding="utf8")
    savefile.write("\n\""+name+"\": "+jsontext+",")
    savefile.close()
