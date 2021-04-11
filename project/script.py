from browser import ajax, document, alert
from browser.template import Template

def show(e):
    alert('Hello')
    document['hello'] <= 'HelloWorld'

document['alert-btn'].bind('click', show)

def show_text(e):
    document['output'].textContent = e.target.value
document['text'].bind('input', show_text)

#template variables
Template(document['greet']).render(name='Zain')

#Ajax Call
url = 'https://api.chucknorris.io/jokes/random'

def on_complete(req):
    import json
    data = json.loads(req.responseText)
    document['joke'].text = data['value']

def get_joke(e):
    req = ajax.ajax()
    req.open('GET', url, True)
    req.bind('complete', on_complete)
    document['joke'].text = "Loading..."
    req.send()

document['joke-btn'].bind('click', get_joke)