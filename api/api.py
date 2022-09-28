from flask import Flask, request, jsonify
import math
 
app = Flask(__name__)

@app.route('/calcular', methods = ['POST'])
def calcular():
    a = request.form.get('a', None)
    b = request.form.get('b', None)
    c = request.form.get('c', None)
    precisao = request.form.get('precisao', 2)

    #TODO: Verificar se os valores da hipotenusa é maior que os catetos

    if not a and b and c:
        a = math.sqrt(int(b) ** 2 + int(c) ** 2)
        response = jsonify({"a":str(round(a,int(precisao)))})
        response.status_code = 200
    elif not b and a and c:
        b = math.sqrt(int(a) ** 2 - int(c) ** 2)
        response = jsonify({"b":str(round(b,int(precisao)))})
        response.status_code = 200
    elif not c and a and b:
        c = math.sqrt(int(a) ** 2 - int(b) ** 2)
        response = jsonify({"c":str(round(c,int(precisao)))})
        response.status_code = 200
    else:
        response = jsonify("")
        response.status_code = 400

    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == "__main__":
    app.run(debug=True)