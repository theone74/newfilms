import os, requests, json

baseurl = os.getenv("CDN_FILMS_READ_URL")

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
	fn = "%s.json" % (i)
	with open(fn, 'w') as f:
		f.write(cont.decode('utf-8'))
		print("Write", fn)
		f.close()
