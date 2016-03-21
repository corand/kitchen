import httplib2
import os
from apiclient import discovery
import oauth2client
from oauth2client import client
from oauth2client import tools
import datetime
import feedparser
from bs4 import BeautifulSoup
import web,json,re
import dateutil.parser


try:
    import argparse
    flags = argparse.ArgumentParser(parents=[tools.argparser]).parse_args()
except ImportError:
    flags = None

SCOPES = 'https://www.googleapis.com/auth/calendar.readonly'
CLIENT_SECRET_FILE = 'client_secret.json'
APPLICATION_NAME = 'Google Calendar API Python Quickstart'

urls = (
    '/albisteak', 'albiste_zerrenda',
    '/egutegia', 'egutegia',
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


class egutegia:
    def get_credentials(self):
        """Gets valid user credentials from storage.

        If nothing has been stored, or if the stored credentials are invalid,
        the OAuth2 flow is completed to obtain the new credentials.

        Returns:
            Credentials, the obtained credential.
        """
        home_dir = os.path.expanduser('~')
        credential_dir = os.path.join(home_dir, '.credentials')
        if not os.path.exists(credential_dir):
            os.makedirs(credential_dir)
        credential_path = os.path.join(credential_dir,
                                       'calendar-python-quickstart.json')

        store = oauth2client.file.Storage(credential_path)
        credentials = store.get()
        if not credentials or credentials.invalid:
            flow = client.flow_from_clientsecrets(CLIENT_SECRET_FILE, SCOPES)
            flow.user_agent = APPLICATION_NAME
            if flags:
                credentials = tools.run_flow(flow, store, flags)
            else: # Needed only for compatibility with Python 2.6
                credentials = tools.run(flow, store)
            print('Storing credentials to ' + credential_path)
        return credentials

    def GET(self):
        web.header('Content-Type', 'application/json')
        web.header('Access-Control-Allow-Origin','*')
        web.header('Access-Control-Allow-Credentials', 'true')
        #start = user_data.start
        #end = user_data.end
        user_data = web.input()
        start = dateutil.parser.parse(user_data.start).isoformat() + 'Z'
        end = dateutil.parser.parse(user_data.end).isoformat() + 'Z'
        credentials = self.get_credentials()
        http = credentials.authorize(httplib2.Http())
        service = discovery.build('calendar', 'v3', http=http)

        now = datetime.datetime.utcnow().isoformat() + 'Z' # 'Z' indicates UTC time
        print('Getting the upcoming 10 events')
        eventsResult = service.events().list(
            calendarId='primary', timeMin=start, timeMax=end,singleEvents=True,
            orderBy='startTime').execute()
        events = eventsResult.get('items', [])

        #"2015-10-10 17:00:00+02:00
        #2016-02-04T19:00:00+01:00
        json_list = []
        for event in events:
            event_start = dateutil.parser.parse(event["start"]["dateTime"]).isoformat()
            event_end = dateutil.parser.parse(event["end"]["dateTime"]).isoformat()
            json_entry = {'start':event_start,'end':event_end, 'allDay':False, 'title': event["summary"]}
            json_list.append(json_entry)

        return json.dumps(json_list)

if __name__ == "__main__":
    app = web.application(urls, globals())
    app.run()

app = web.application(urls, globals(), autoreload=False)
application = app.wsgifunc()