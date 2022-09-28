# Introdução
API REST para calcular a relação entre os lados de um triângulo retângulo pelo teorema de Pitágoras.
<img src="teorema-de-pitagoras-png-1.png" alt="Teorema de Pitágoras" style="width:300px;display: block;margin-left: auto;margin-right: auto;"/>

## Cálculo

```http
POST /calcular
```

| Parâmetro | Tipo | Descrição |
| :--- | :--- | :--- |
| `a` | `int` | Lado a do triângulo |
| `b` | `int` | Lado b do triângulo |
| `c` | `int` | Lado c do triângulo |
| `precisao` | `int` | Número de casas decimais do resultado, padrão: 2 |

**Devem ser passados apenas 2 dos valores de a, b ou c. Por exemplo se desejo calcular o valor de c deve-se passar como parâmetro apenas a e b.**
*A precisão é opcional.*

## Resposta

A API irá retornar o valor do lado desejado em formato de float com prescisão desejada
Também será retornado os os códigos de status HTTP:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` se a requisição foi bem sucedida |
| 400 | `BAD REQUEST` se houve falha na requisição |
