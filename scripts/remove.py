import os, requests, json

cont = ''
with open('list.json', 'r') as f:
	cont = f.read()
	f.close()
	
lst = json.loads(cont)

for i in lst:
	os.remove("%s.json" % (i))

os.remove("list.json")