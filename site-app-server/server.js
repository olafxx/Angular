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
  
app.get("/pages/about", function(request, response){
        
    // настройка заголовков CORS для кроссдоменных запросов
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
     
    response.send({result: "Contents about page"});
});  
  
  
app.get("/pages/catalog", function(request, response){
	
	let catalog =  [
	{
		id:1, 
		imgs:{
			preview: "/assets/catalog/1.png", 
		},
		name: "Basket", 
		description: "With this functionality you can customise the display of basket contents in emails by providing a template.",
		price: 9
	},
	{
		id:2, 
		imgs:{
			preview: "/assets/catalog/2.png", 
		},
		name: "Suit Jacket", 
		description: "With its fictional headquarters located within Savile Row tailors, Kingsman offers impeccable suiting.",
		price: 143
	},
	{
		id:3, 
		imgs:{
			preview: "/assets/catalog/3.png", 
		},
		name: "MANOLO BLAHNIK", 
		description: "Mr Manolo Blahnik started designing men's shoes in the '70s, and the elegance of that decade is still reflected in his collections today. These loafers have lightweight raffia uppers with leather trims and linings for comfort. Wear them with cuffed chinos or relaxed tailoring.",
		price: 54
	},
	{
		id:4, 
		imgs:{
			preview: "/assets/catalog/4.png", 
		},
		name: "Oribe Signature Conditioner", 
		description: "Oribe's rich, yet weightless 'Signature Conditioner' restores shine, repairs and strengthens for healthier-looking hair. It's formulated with moisturising Whole Wheat-Derived Proteins, smoothing Macadamia Nut Seed Oil and the brand's signature Watermelon, Lychee and Edelweiss Flower extracts that protect against the deterioration of natural keratin. - Luxurious, daily hydrating conditioner - Massage into wet hair and rinse with warm water - Free from parabens, sulfates and sodium chloride - Signature Shampoo also available",
		price: 24
	},
	{
		id:5, 
		imgs:{
			preview: "/assets/catalog/5.png", 
		},
		name: "Piaget", 
		description: "Piaget's signature 'Polo' timepiece has continued to evolve and get even better in the 40 years since its debut. Faultlessly crafted by specialist artisans, this watch is powered by a 1160P automatic movement that the label manufactures in house in the Swiss village of La Côte-aux-Fées. Cast from a sleek combination of brushed and polished stainless steel, it's fitted with a durable rubber strap which matches the two chronograph sub-dials. Every tiny detail is considered, including the intricate open-worked letter 'P' at the edge of the second hand and the exhibition case back that reveals the blued screws, magenta jewels and crested oscillating rotor.",
		price: 700
	},
	{
		id:6, 
		imgs:{
			preview: "/assets/catalog/6.png", 
		},
		name: "Lululemon", 
		description: "Lululemon's training apparel keeps you comfortable during the toughest workouts. - This 'Metal Vent Tech' T-shirt is cut from lightweight stretch-jersey with engineered ventilation zones to boost breathability - Specially designed to resist tearing and hold its shape even when wet - Free from seams around the torso to help prevent chafing - Odour-fighting Silverescent® technology keeps it smelling fresh",
		price: 78
	},
]

        
    // настройка заголовков CORS для кроссдоменных запросов
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
     
    response.send({result: "Contents catalog page", catalog: catalog});
});    
   
app.get("/pages/info", function(request, response){
        
    // настройка заголовков CORS для кроссдоменных запросов
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
     
    response.send({result: "Contents info page"});
});    

app.get("/pages/private/about", function(request, response){
        
    // настройка заголовков CORS для кроссдоменных запросов
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
     
    response.send({result: "Private contents about page"});
});  
  
app.get("/pages/private/info", function(request, response){
        
    // настройка заголовков CORS для кроссдоменных запросов
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
     
    response.send({result: "Private contents info page"});
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