const express = require("express");
   
const app = express();
 
// обработчик по маршруту localhost:3000/sum
app.get("/sum", function(request, response){
       
    // получаем параметры из строки запроса и преобразуем в числа
    const number1 = parseInt(request.query.num1);
    const number2 = parseInt(request.query.num2);
 
    // вычисляем сумму
    const sum = number1 + number2;
     
    // настройка заголовков CORS для кроссдоменных запросов
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
     
    response.send({result: sum});
});
  
 app.get("/", function(request, response){       
    
    // настройка заголовков CORS для кроссдоменных запросов
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
     
    response.send("Node express server - is started.");
});
 
app.listen(3000); 

console.log("Node.js express is worked - localhost:3000")