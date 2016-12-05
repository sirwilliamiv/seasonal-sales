// Your job is to
// build a web page that lists all of the products, the name of the department it's
//in, and the price.



//
//create 2 XMHRequests  - 4 steps each
//
// go go gadget department names---------------
var categoryRequest = new XMLHttpRequest();
categoryRequest.addEventListener("load", listingCategories );
categoryRequest.open("GET", "categories.json");
categoryRequest.send();



// gogo gadget products-------------------------
var producstRequest = new XMLHttpRequest();
producstRequest.addEventListener("load", producstList);
producstRequest.open("GET", "products.json")
producstRequest.send();




var listDepartments="";
var inputDepartments;
var listProducts="";
var Apparel = 1;
var Furniture = 2;
var Household = 3;







function listingCategories(e) {
  var cdata = JSON.parse(e.target.responseText)


// ------------loop to add department names to h1-----------
  for (var i = 0; i < cdata.categories.length; i++) {
      // select menu
  inputDepartments+=  `<option value="value$">${cdata.categories[i].season_discount}</option>`
  // add department names to h1
  // listDepartments += `<h1 class="DepartmentName">${cdata.categories[i].name}</h1>`
  // document.getElementById('putDNamesHere').innerHTML = listDepartments
  // document.getElementById('seasonSales').innerHTML = inputDepartments

  }

}



// need a sorting function(name, price, department) {
//


function producstList (e) {
  var pdata = JSON.parse(e.target.responseText)
    // loop through products

     for (var i = 0; i < pdata.products.length; i++) {
// add products to div
        listProducts += `<div class="productName">${pdata.products[i].name}</div>
                      <div class="productPrice">${pdata.products[i].price}</div>
                      <div class="dnameForProduct">${pdata.products[i].category_id}</div>`
        document.getElementById('listProductsHere').innerHTML = listProducts
    }

  }




// ------------------ASSIGNING DEPARTMENT NAME TO ID #-----------------------
//
// loop through product id
// if the category id  === product "category_id "{then do stuff}
//
//


//
//
//
//
//
//
// Additionally, put a <select> element at the top of the page
//  that contains all possible values of the season_discount key in the categories file.
//  how to display these items????
// // <select name="select">
//   <option value="value1"></option>
//   <option value="value2" selected>Value 2</option>
//   <option value="value3">Value 3</option>
//   </select>
// /
// / As soon as you select one of the seasons,
// // all prices on the page should immediately be discounted by
// // the corresponding percentage.
// function switchPrice () {
//  switch the prices
// }

// // For example,
// //  when Spring is chosen,
// //  all products in the corresponding Household category should
// //  have their prices updated with a 15% discount off the base price.

// // The two JSON representations
// //  above should be in two files: products.json, and categories.json.
// //  You should load both file via XHRs and store the contents in
// //  two different JavaScript variables in your code.
