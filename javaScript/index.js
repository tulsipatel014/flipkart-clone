let serverData = [{
    name: "Sameer",
    imageURL: "./images/card1.jpeg",
    Price: "350",
  },
  {
    name: "LAN Cable",
    imageURL: "./images/card1.jpeg",
    Price: "350",
  },
  {
    name: "LAN Cable",
    imageURL: "./images/card1.jpeg",
    Price: "350",
  },
  {
    name: "Sameer",
    imageURL: "./images/card1.jpeg",
    Price: "5.5",
  },
]

var rowHtml= document.getElementById('product-section');

for(let i=0; i<serverData.length; i++){
    var htmlCard = ` <div class="col-md-3" >
                         <div class="custom-card">
                             <img src="${serverData[0].imageURL}" alt="" class="prd-img" />
                             <p class="text-muted prd-name">${serverData[0].name}</p>
                             <h6>₹${serverData[0].Price}</h6>
                             <button class="btn btn-primary btn-small">Add to Cart</button>
                        </div>
                    </div>`;

                 rowHtml.insertAdjacentHTML("beforeend", htmlCard);

   

}




