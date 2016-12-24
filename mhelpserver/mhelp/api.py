import requests
import json

def getdata():
    r = requests.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=25.4347,81.7650&rankby=distance&key=AIzaSyDw_LcnZBrfoy7yQ6En52I0KexWzRLQsYk&opennow')
    p = json.loads(r.text)
    #print(p['results'])
    datas = p['results']
    coords = []
    count =0
    for data in datas:
        coords.append(data['geometry']['location'])
        if(count==0):
            dest = data['geometry']['location']
        count = count+1
    #    print('----')
    print('Fetching data')
    retdata = [{'coords':coords},{'dest':dest}]
    return retdata

def getdir():
    r = requests.get('https://maps.googleapis.com/maps/api/directions/json?origin=43.6533103,-79.3827675&destination=45.5085712,-73.5537674&sensor=false&key=AIzaSyDw_LcnZBrfoy7yQ6En52I0KexWzRLQsYk')