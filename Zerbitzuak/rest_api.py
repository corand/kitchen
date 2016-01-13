import feedparser
from bs4 import BeautifulSoup
import web,json,re

urls = (
    '/albisteak', 'albiste_zerrenda',
)

class albiste_zerrenda:        
    def GET(self):
        data = []
        web.header('Content-Type', 'application/json')
        web.header('Access-Control-Allow-Origin','*')
        web.header('Access-Control-Allow-Credentials', 'true')
        # 20minutos atariko albisteak
        d = feedparser.parse('http://20minutos.feedsportal.com/c/32489/f/478284/index.rss')
        for post in d.entries:
            objektua = {}
            objektua["titularra"] = post["title"].encode('utf-8')
            soup = BeautifulSoup(post["description"].encode('utf-8'), "html.parser")
            objektua["argazkia"] = soup.find('img')['src']
            img = re.compile(r'<img.*?/>')
            deskribapena = img.sub('', post["description"].encode('utf-8')[:800])
            objektua["deskribapena"] = deskribapena + " ..."
            objektua["iturria"] = "20minutos.es"
            data.append(objektua)

        return json.dumps(data)

if __name__ == "__main__":
    app = web.application(urls, globals())
    app.run()

app = web.application(urls, globals(), autoreload=False)
application = app.wsgifunc()