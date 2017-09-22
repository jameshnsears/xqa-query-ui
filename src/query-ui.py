from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__)


@app.route('/', methods=['POST', 'GET'])
def hello_world():
    if request.method == 'POST':
        command = request.form['command']
        if command == 'empty':
            send_message('xqa.topic/xqa.store', 'empty')
        elif command == 'find':
            send_message('xqa.topic/xqa.find', 'find')
        elif command == 'select':
            send_message('xqa.topic/xqa.select', 'select')
        elif command == 'insert':
            send_message('xqa.topic/xqa.insert', 'insert')
        elif command == 'update':
            send_message('xqa.topic/xqa.store', 'update')
        elif command == 'export':
            send_message('xqa.topic/xqa.export', 'export')

    return render_template('index.html')


def send_message(destination, message):
    pass
