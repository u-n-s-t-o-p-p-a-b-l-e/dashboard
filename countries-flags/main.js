// For visualization

/*
"AD" : {
	"name" : "Andorra",
	"native" : "Andorra",
	"phone" : "376",
	"continent" : "EU",
	"capital" : "Andorra la Vella",
	"currency" : "EUR",
	"languages" : [
		"ca"
	]
}

*/ 


const obj2li = function( code, data ) {
	const li = document.createElement('li');
	const codeCarac = code.toUpperCase().split('').map( car => [55356, 56806 + car.charCodeAt(0) - 'A'.charCodeAt(0)] );

	li.innerHTML = `<figure class="box"> <div class ="fill">${String.fromCharCode( ...codeCarac[0], ...codeCarac[1] )}</div> <figcaption>${code}</figcaption> </figure> <p>${data.native}<br>${data.name}</p>`;

	li.classList.add('card');

	return document.getElementById('countries').append(li);
};

fetch('https://raw.githubusercontent.com/annexare/Countries/master/dist/countries.min.json').then(response => response.json()).then( data => Object.entries(data).forEach(([clef, valeur]) => obj2li(clef, valeur)) ).catch(error => alert("Error: " + error));
