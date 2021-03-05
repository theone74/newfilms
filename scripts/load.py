import os, requests, json

baseurl = 'http://prox.theone74.ru:1234'

# http://prox.theone74.ru:1234/list.json
r = requests.get(baseurl + '/list.json')
cont = r.content
with open('list.json', 'w') as f:
	f.write(cont.decode('utf-8'))
	f.close()
	

lst = json.loads(cont)

for i in lst:
	r = requests.get("%s/%s.json" % (baseurl, i))
	cont = r.content
	with open("%s.json" % (i), 'w') as f:
		f.write(cont.decode('utf-8'))
		f.close()
