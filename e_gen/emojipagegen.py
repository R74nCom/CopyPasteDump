emojis = open("rgi.txt","r",encoding="utf8").read().split()

special = {}
specialtxt = open("specialemoji.txt","r",encoding="utf8").read().splitlines()
for line in specialtxt:
    if line.startswith("#") or len(line.split())==0: continue
    e = line.split(" : ",1)[0]
    special[e] = eval(line.split(" : ",1)[1])
    emojis.append(e)

namedict = {}
namedicttxt = open("UnicodeData.txt","r",encoding="utf8").read().splitlines()
for line in namedicttxt:
    namedict[line.split(";")[0]] = line.split(";")[1]

emojis = sorted(emojis,key=len)
for e in emojis.copy():
    for char in e:
        if not char in e: emojis.append(char)

import unicodedata


def codepoint(e,U=True):
    points = []
    for char in e:
        points.append(("U+" if U else "")+str(hex(ord(char)).split("0x",1)[1]).upper())
    return ", ".join(points)
def link(e,text=None,codepoints=True):
    if text == None:
        text = e+" "+(codepoint(e)+" " if codepoints else "")+name(e)
    return "<a href='"+pagename(e)+"'>"+text+"</a>"
def pagename(e):
    return name(e).lower().replace(" ","_").replace("-","_").replace(", ","_").replace("<","").replace(">","")
def name(e):
    if e in special and "Name" in special[e]:
        return special[e]["Name"]
    names = []
    for char in e:
        names.append(namedict[codepoint(char,U=False)])
        #try: names.append(unicodedata.name(char))
        #except ValueError: names.append("[Unknown]")
    return ", ".join(names)
def sequence(e):
    chars = []
    for char in e:
        chars.append(link(char))
    return " + ".join(chars)
def genpage(e):
    if e in special: attrs = special[e].copy()
    else: attrs = {}
    if not "Name" in attrs: attrs["Name"] = name(e)
    if not "Codepoint" in attrs: attrs["Codepoint"] = codepoint(e)
    if len(e) > 1:
        if not "Sequence" in attrs: attrs["Sequence"] = sequence(e)
    attrs["CPD Identifier"] = pagename(e)
    variants = []
    for e2 in emojis:
        if e in e2 and not e==e2:
            variants.append(link(e2,codepoints=False))

    lines = []
    for key, value in attrs.items():
        lines.append("<strong>"+key+"</strong>: "+str(value))
    if len(variants) > 0: lines.append("<br>\n<br>\n<strong>Variants</strong><br>\n<ul>\n<li>"+"</li>\n<li>\n".join(variants)+"</li>")
    return "<br>\n".join(lines)

input()

for e in emojis[:1000]:
    try: page = genpage(e)
    except ZeroDivisionError: print(codepoint(e))
    else:
        try: savefile = open("e/"+pagename(e)+".html","w",encoding="utf8")
        except ZeroDivisionError: print(codepoint(e))
        else:
            savefile.write(page)
            savefile.close()



#savefile = open("emojicolors.html","w",encoding="utf8")
#savefile.write("\n".join(lines))
#savefile.close()
