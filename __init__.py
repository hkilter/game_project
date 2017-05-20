from flask import  Flask, jsonify,render_template,request,redirect,url_for
import requests,json,os
from demjson import decode




app = Flask(__name__)

def const():
    sabit="http://kbora.xyz/fetch-all-fish.php?"
    return(sabit)


@app.route("/")
def index():
    getCount = requests.get("http://kbora.xyz/fetch-all-fish.php?")
    getCountData = json.loads(getCount.text)
    getCountGame = len(getCountData['game_name'])

    return render_template("index.html",getCountGame=getCountGame)


@app.route('/games',methods = ['POST', 'GET'])
def search():
        # if request.method == 'POST':
            try:
                search_tag = request.form['currency']
                GetkonteynerInfoDate = requests.get("http://kbora.xyz/fetch-all-fish.php?game_name="+str(search_tag)+"")
                data = json.loads(GetkonteynerInfoDate.text)
                game_name = (data['game_name'][0]['game_name'])
                game_type = (data['game_name'][0]['catName'])
                game_screenshots_1 = (data['game_name'][0]['screenshots_1'])
                game_screenshots_2 = (data['game_name'][0]['screenshots_2'])
                game_screenshots_3 = (data['game_name'][0]['screenshots_3'])

                return render_template('games.html',
                                       game_name=game_name,
                                       game_type=game_type,
                                       game_screenshots_1=game_screenshots_1,
                                       game_screenshots_2=game_screenshots_2,
                                       game_screenshots_3=game_screenshots_3)
            except:
                return render_template("index.html")



if __name__ == "__main__":
    app.run()