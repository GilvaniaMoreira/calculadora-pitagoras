from flask import Flask, request, jsonify
import math
 
app = Flask(__name__)

@app.route('/calcular', methods = ['POST'])
def calcular():
    try: 
        a = request.form.get('a', None)
        b = request.form.get('b', None)
        c = request.form.get('c', None)
        precisao = request.form.get('precisao', 2)

        if not a and b and c:
            a = math.sqrt(float(b) ** 2 + float(c) ** 2)
            response = jsonify({"a":str(round(a,int(precisao)))})            
        elif not b and a and c:
            if float(a) < float(c):
                response = jsonify({"error": "A hipotenusa não pode ser menor que os catetos"})
            else:
                b = math.sqrt(float(a) ** 2 - float(c) ** 2)
                response = jsonify({"b":str(round(b,int(precisao)))})                
        elif not c and a and b:
            if float(a) < float(b):
                response = jsonify({"error": "A hipotenusa não pode ser menor que os catetos"})
            else:
                c = math.sqrt(float(a) ** 2 - float(b) ** 2)
                response = jsonify({"c":str(round(c,int(precisao)))})                
        else:
            response = jsonify("")            
    
    except ValueError:
        response = jsonify({"error": "Valor digitado deve ser um número"})
    except Exception as e:
        response = jsonify({"error": "Ocorreu um error: %s" %e})

    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == "__main__":
    app.run(debug=True)