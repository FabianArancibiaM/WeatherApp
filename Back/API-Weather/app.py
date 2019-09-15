from flask import Flask, request, Response, json
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/api', methods = ['GET'])
def hello_world():
    loca = request.args.get('location', default="undefined", type=str)
    response = {"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],"base":"stations","main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},"visibility":10000,"wind":{"speed":4.1,"deg":80},"clouds":{"all":90},"dt":1485789600,"sys":{"type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875},"id":2643743,"name":loca,"cod":200}
    resp = Response(json.dumps(response), mimetype='application/json',status=200)
    resp.headers['Link']='http://127.0.0.1:5000/api'
    return resp

if __name__ == '__main__':
    app.run()
