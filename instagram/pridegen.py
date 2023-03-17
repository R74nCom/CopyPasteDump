l = ["gay","lgbt","lgbtq","lgbtqi","lgbtqia","lgbtqiap","lgbtplus","lgbtqplus","lgbtqiaplus","trans","transgender","queer","ace","asexual","bi","bisexual","pan","pansexual","lesbian","homosexual","homo","nb","enby","nonbinary","glbt","glbtq","rainbow","pride"]

def generate():
    while True:
        end = input("Text: ")
        new = ["#"+word+end for word in l]
        print(" ".join(new))

generate()
