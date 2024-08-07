from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/users')
def users():
    return {"members": [{"id": 1, "name": "yerin"},
                        {"id": 2, "name": "kyeeun"}]}

if __name__ == '__main__':
    app.run(debug=True, port=8080)