lines = """:) https://static-cdn.jtvnw.net/emoticons/v1/1/1.0
:( https://static-cdn.jtvnw.net/emoticons/v1/2/1.0
:D https://static-cdn.jtvnw.net/emoticons/v1/3/1.0
>( https://static-cdn.jtvnw.net/emoticons/v1/4/1.0
:| https://static-cdn.jtvnw.net/emoticons/v1/5/1.0
O_o https://static-cdn.jtvnw.net/emoticons/v1/6/1.0
B) https://static-cdn.jtvnw.net/emoticons/v1/7/1.0
:O https://static-cdn.jtvnw.net/emoticons/v1/8/1.0
<3 https://static-cdn.jtvnw.net/emoticons/v1/9/1.0
:/ https://static-cdn.jtvnw.net/emoticons/v1/10/1.0
;) https://static-cdn.jtvnw.net/emoticons/v1/11/1.0
:P https://static-cdn.jtvnw.net/emoticons/v1/12/1.0
;P https://static-cdn.jtvnw.net/emoticons/v1/13/1.0
R) https://static-cdn.jtvnw.net/emoticons/v1/14/1.0"""

final = []
for line in lines.splitlines():
    id = line.split("/v1/",1)[1].split("/",1)[0]
    name = line.split()[0]
    final.append('<img src="https://static-cdn.jtvnw.net/emoticons/v1/'+id+'/2.0" title="'+name+'" alt="'+name+'" height="30px">')
print("\n".join(final))
