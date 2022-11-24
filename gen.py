from datetime import date
from collections import deque

def main():
    with open('build/index.html', 'w') as f:
        f.write("""<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <title>Domonic Milesi</title>
  <meta charset="utf-8">
  <meta name="author" content="Domonic Milesi">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="https://domonicmilesi.com/favicon.png">
  <link rel="stylesheet" href="./style.css" />
</head>
<body>
  <main class="content container">
    <p>
      Can be found elsewhere/contacted:
      <br>
      <a href="mailto:domonic.n.milesi@gmail.com?subject=whats%20good&amp;body=yoo,%0d%0a">domonic.n.milesi@gmail.com</a>
      &nbsp;
      <a href="https://github.com/dom-o">github</a>
      &nbsp;
      <a href="https://mostbiggestegg.com">misc</a>
    </p>
    <div id="timeline">
""")
        f.write(timeline())
        f.write("""
    </div>
  </main>
</body>
</html>"""
    )

def timeline():
    colors = deque([
        '#0074D9', #blue
        '#2ECC40', #green
        '#FFDC00', #yellow
        '#FF851B', #orange
        '#FF4136', #red
        '#B10DC9', #purple
        '#FFFFFF' #white
    ])

    events = [
        {'start':date(year=2012, month=1, day=1), 'start_text':'Moved to Pittsburgh',
        'end':None, 'end_text':''},
        {'start':date(year=2012, month=8, day=1), 'start_text':'Started college @ U of Pittsburgh',
        'end':date(year=2018, month=4, day=1),  'end_text':'Graduated from U of Pittsburgh'},
        {'start':date(year=2014, month=4, day=1), 'start_text':'Started work @ U of Pittsburgh Climbing Wall',
        'end':date(year=2017, month=7, day=1), 'end_text':'Left U of Pittsburgh Climbing Wall'}
    ]

    a=[]
    for i,e in enumerate(events):
        if e['start']:
            a.append({'date':e['start'], 'text':e['start_text'], 'id':i})
        if e['end']:
            a.append({'date':e['end'], 'text':e['end_text'], 'id':i})
    a.sort(key= lambda x: x['date'])
    events = a

    years = {x:[] for x in range(1994,date.today().year+1)}
    for e in events:
        years[e['date'].year].append(e)

    i=0
    s={}
    out=''
    for y,es in years.items():
        str= (
            '<div class="year-container">\n'
            f'\t<h1>{y}</h1>\n'
            '\t<div class="events-container">\n'
        )
        if es:
            tmp=''
            for e in es:
                if e['id'] in s:
                    c = s[e['id']]['color']
                    s[e['id']] = e
                    s[e['id']]['color'] = c
                    tmp=bars(e,s)+tmp
                    del s[e['id']]
                    colors.append(c)
                else:
                    s[e['id']] = e
                    s[e['id']]['color'] = colors.popleft()
                    i+=1
                    tmp=bars(e,s)+tmp
            str+= tmp
        else:
            str+= bars(None,s)

        str+= (
            '\t</div>\n</div>\n\n'
        )
        out=str+out
    return out



def bars(e,s):
    str=(
        """<div class="event">
            <div class="bars" style="background: linear-gradient(to right"""
    )
    j=0
    for i,(k,v) in enumerate(s.items()):
        if v == e:
            str+= f', {v["color"]} {14*i}%,{v["color"]} 100%'
            break
        else:
            str+= f', {v["color"]} {14*i}%,{v["color"]} {14*i+14}%'
            j=14*i+14
    else:
        str+= f', #121212 {j}%, #121212 100%'
    str+=');"></div>\n'
    if e:
        str+= f'\t\t\t<h2>{e["date"]}</h2><p>{e["text"]}</p>\n'
    str+= '\t\t</div>\n'
    return str

if __name__ == '__main__':
    main()
