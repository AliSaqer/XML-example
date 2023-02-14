function loadXMLDoc() {

   const req = new XMLHttpRequest();

   req.open("GET", "products.xml");

   req.send();

   req.onload = function() {

      const xmlDoc = req.responseXML;

      const products = xmlDoc.getElementsByTagName("movie");

      console.log(products);

      populate(products);
 }
}

   function populate(products){

    let column="";
 for (let i = 0; i < products.length; i++) {
   console.log(i);

   column += `
   <div class="movie">
   <ul>
   <img width="350px" height="500" src="./assets/image/`+products[i].getElementsByTagName("img")[0].childNodes[0].nodeValue +`" />
   <h3>فيلم : ` + products[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue +`</h3>
       <li>التقييم : `+products[i].getElementsByTagName("rate")[0].childNodes[0].nodeValue+`</li>
       <li>السعر : `+products[i].getElementsByTagName("Price")[0].childNodes[0].nodeValue+`</li>
   </ul>
   <br>
   <button class="button button2">BUY NOW
       &nbsp;
       <i class="fa fa-credit-card-alt" aria-hidden="true"></i>
       <i class="fa fa-cc-mastercard" aria-hidden="true"></i>
   </button>

   <button class="button button1">Add to cart &nbsp;<i class="fa fa-shopping-cart"></i>
   </div>`;
   
 }
 document.getElementById("data").innerHTML = column;
   }
   loadXMLDoc();