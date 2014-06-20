//splicing the information
//converting into desired datatypes
//creating an object
//creating an object
//inserting that object in the array for later use

var details=new Array();//temporary arto hold the info properties in string form 

var total_price=0; //total to be paid
sessionStorage.setItem('total',total_price);


var cart=[];//array of objects;
sessionStorage.setItem('temp_cart',cart);


var top=0;
sessionStorage.setItem('top',top);




  function splitter(var qty)//to splice the information
{
var info=sessionStorage.getItem('qrcode');//code string is retrieved from the browser

details=info.split(",");

create_object(details[0],details[1],details[2],details[3],details[4],qty);
}


//constructor
function product(var dName,var pdId,var price,var dtMfg,var dtExp)
{   
    this.SrNo=sessionStorage.getItem('top')+1;
	sessionStorage.setItem('top',top);
	this.Name = pdName;
	this.Id = pdId;
	this.price = price;
	this.Mfg = dtMfg;
	this.Exp = dtExp;
	
    this.remove_item=remove_object;
		
	}


   function create_object(var dname,var pdid,var price,var dtmfg,var dtexp,var qty)//function to create an object
{ 
price=convert(price);

var total_price=sessionStorage.getItem('total');
total_price+=calc(price,qty);//total to be paid
sessionStorage.setItem('total',total_price);

var tempprod=new product(dName,pdid,price,dtmfg,dtexp);
cart=sessionStorage.getItem('temp_cart');
cart.push(tempprod);
sessionStorage.setItem('temp_cart',cart);
}



   function convert(var price)
{
 return parseInt(price);
}


  function calc(var price,var qty)
{
 return price*qty;
}  






function remove_object()
{
var index=this.SrNo-1;

cart=session.getItem('temp_cart');

var temp_arr_start=cart.splice(0,index);
var temp_arr_end=cart.splice(index+1,cart.length-1);

temp_arr_start.pop();

cart=temp_arr_start.concat(temp_arr_end);
session.setItem('temp_cart',cart);

}