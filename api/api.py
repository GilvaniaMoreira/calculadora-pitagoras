from flask import Flask, request
import math
 
app = Flask(__name__)

@app.route('/calcular', methods = ['POST'])
def calcular():
    a = request.form.get('a', None)
    b = request.form.get('b', None)
    c = request.form.get('c', None)
    precisao = request.form.get('precisao', 2)

    if not a and b and c:
        a = math.sqrt(int(b) ** 2 + int(c) ** 2)
        return (str(round(a,int(precisao))), 200)
    elif not b and a and c:
        b = math.sqrt(int(a) ** 2 - int(c) ** 2)
        return (str(round(b,int(precisao))), 200)
    elif not c and a and b:
        c = math.sqrt(int(a) ** 2 - int(b) ** 2)
        return (str(round(c,int(precisao))), 200)
    else:
        return ("", 400)

if __name__ == "__main__":
    app.run(debug=True)