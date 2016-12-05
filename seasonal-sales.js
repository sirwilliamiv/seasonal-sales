// Your job is to
// build a web page that lists all of the products, the name of the department it's
//in, and the price.
//
//
//function listProductsInDepartment {
    //'<h1>${name of department}</h1>
    //<ul>
    //  <li>${product name} + ${price}</li>
    //</ul>
//}
//for (var i = 0; i < categories.length; i++) {
//  var listDepartments;
//  listDepartments+= `<h1 classe="DepartmentName">${[i].name}</h1>`
//
//  }
//
//create 2 XMHRequests  - 4 steps each
//

var categoryRequest = new XMLHttpRequest();
categoryRequest.addEventListener("load", listingCategories );
categoryRequest.open("GET", "categories.json");
categoryRequest.send();



function listingCategories(e) {
  var cdata = JSON.parse(e.target.responseText)


  // do this with the data
  // cdata.categories
// [Object, Object, Object]
// cdata.categories.2
// VM625:1 Uncaught SyntaxError: Unexpected number
// cdata.categories[2]
// Object {id: 3, name: "Household", season_discount: "Spring", discount: 0.15}
// cdata.categories[2].name
// "Household"
  for (var i = 0; i < cdata.categories.length; i++) {
      var listDepartments = [i].[1];
        console.log(listDepartments)

 // listDepartments+= `<h1 class="DepartmentName">${[i].1}</h1>`

 }
  // console.log(cdata)
}

var producstRequest = new XMLHttpRequest();
producstRequest.addEventListener("load", producstList);
producstRequest.open("GET", "products.json")
producstRequest.send();




function producstList (e) {
  var pdata = JSON.parse(e.target.responseText)
  // do this with the data
  //
  console.log(pdata)
}





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
