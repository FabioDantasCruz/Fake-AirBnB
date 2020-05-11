const API_URL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";


fetch(API_URL)
  .then(response => response.text())
  .then(result => {

    const data = JSON.parse(result);


    
    data.forEach(dado => {

      const { photo, property_type, name, price } = dado;
          
      console.log(dado);


      row = document.getElementById("row");

      Div = document.createElement("div");
      Div.className = "col-md-4";

      
      Card = document.createElement("div");
      Card.className = "card mb-4 box-shadow";


      foto = document.createElement("img");
      foto.className = "card-img-top img";
      foto.src = photo;

      cardBody = document.createElement("div");
      cardBody.className = "card-body";

      
      cardText = document.createElement("div");
      cardText.className = "card-text";

      tipo = document.createElement("p");
      tipo.className = "property-type";
      tipo.innerHTML =  property_type;

      nome = document.createElement("p");
      nome.className = "property-name";
      nome.innerHTML = name;

      preco = document.createElement("p");
      preco.className = "property-price";
      preco.innerHTML = "Preço: R$ " + price;
    

      row.appendChild(Div);
      Div.appendChild(Card);
      Card.appendChild(foto);
      Card.appendChild(cardBody);
      cardBody.appendChild(cardText);
      cardText.appendChild(tipo);
      cardText.appendChild(nome);
      cardText.appendChild(preco);

    });
  
  });