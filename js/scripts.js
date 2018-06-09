// scripts.js


function selectCity() {

  	//select Cities

	var array = ["505120", "523920", "638242", "2459115", "44418"]; //Lodz, Warszawa, Berlin, New York, Londyn
	var city1 = array[Math.floor(Math.random()*array.length)];
	var index1 = array.indexOf(city1);
	array.splice(index1,1);

	var city2 = array[Math.floor(Math.random()*array.length)];
	var index2 = array.indexOf(city2);
	array.splice(index2,1);


	var city3 = array[Math.floor(Math.random()*array.length)];
	var index3 = array.indexOf(city3);
	array.splice(index3,1);

	//select HTML Elements 

	var paragraph1 = document.getElementById('city-one');
	var paragraph2 = document.getElementById('text-one');
	var paragraph3 = document.getElementById('temp-one');
	var paragraph4 = document.getElementById('icon-one');
	var paragraph5 = document.getElementById('link-one');
	var paragraph6 = document.getElementById('city-two');
	var paragraph7 = document.getElementById('text-two');
	var paragraph8 = document.getElementById('temp-two');
	var paragraph9 = document.getElementById('icon-two');
	var paragraph10 = document.getElementById('link-two');
	var paragraph11 = document.getElementById('city-three');
	var paragraph12 = document.getElementById('text-three');
	var paragraph13 = document.getElementById('temp-three');
	var paragraph14 = document.getElementById('icon-three');
	var paragraph15 = document.getElementById('link-three');

	//create url for each City 

	var url1 = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast ' +
	          'where woeid in (select woeid from geo.places(1) where woeid='+city1+') and u="c"&format=json';

	var url2 = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast ' +
	          'where woeid in (select woeid from geo.places(1) where woeid='+city2+') and u="c"&format=json';

	var url3 = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast ' +
          'where woeid in (select woeid from geo.places(1) where woeid='+city3+') and u="c"&format=json';


	//crete Requests 



	getDetails(url1,paragraph1,paragraph2,paragraph3, paragraph4, paragraph5, city1);
	getDetails(url2,paragraph6,paragraph7,paragraph8, paragraph9, paragraph10, city2);
	getDetails(url3,paragraph11,paragraph12,paragraph13, paragraph14, paragraph15, city3);


	function getDetails(param,a,b,c,d,e,city) {
		var xhr = new XMLHttpRequest();
		xhr.open ('GET', param); 

		xhr.addEventListener('load', function() {
			var response = JSON.parse(xhr.response);
			a.innerHTML = response.query.results.channel.location.city;
			b.innerHTML = response.query.results.channel.item.condition.text;
			c.innerHTML = response.query.results.channel.item.condition.temp + ' °C';
			d.innerHTML = '<img src=\'http://l.yimg.com/a/i/us/we/52/' + response.query.results.channel.item.condition.code +'.gif\'>';
			e.innerHTML = '<a href="https://weather.yahoo.com/country/state/city-'+city+'/" target="_blank">See more...</a>';
		});

		xhr.send();

	};

};

selectCity();

setInterval("selectCity()",60000);