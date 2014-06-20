//Constructor for product class
function product(SrNo,pdName,pdId,pdPrice,dtMfg,dtExp)
{   
    this.SrNo=SrNo;
	this.pdName = pdName;
	this.pdId = pdId;
	this.pdPrice = pdPrice;
	this.dtMfg = dtMfg;
	this.dtExp = dtExp;
	
    this.remove_item=remove_object;	
}
function remove_object()
{
	var index=this.SrNo-1;

	var temp_arr_start=cart.splice(0,index);
	var temp_arr_end=cart.splice(index+1,cart.length-1);

	temp_arr_start.pop();

	cart=temp_arr_start.concat(temp_arr_end);
}
//end


//to splice the information
function splitter(qty)
{
	var info=info.getElementById('rawCode').value;

	details=info.split(",");
	
	cart_top = cart_top +1; //same as serial number
	
	create_object(cart_top,details[0],details[1],details[2],details[3],details[4],qty);
	addEntry();
}
//end


//function to create an object
function create_object(cart_top,dname,pdid,price,dtmfg,dtexp,qty)
{ 
	price=convert(price);

	total_price+=calc(price,qty);//total to be paid
	
	
	var tempprod=new product(cart_top,dname,pdid,price,dtmfg,dtexp);
	

	cart.push(tempprod);
}
//end

//creating row
function addEntry()
 {
	var table = document.getElementById('myTable');
	var rows=table.getElementsByTagName('tr');
	var rowCount = rows.length;
	var row = table.insertRow(rowCount)
 
	var data0= row.insertCell(0);
	var data1 = row.insertCell(1);
	var data2 = row.insertCell(2);
	var data3 = row.insertCell(3);
	var data4= row.insertCell(4);
	var data5= row.insertCell(5);
 	
	data0.innerHTML = rowCount-1;
	data1.innerHTML = cart[0].pdName;
	data2.innerHTML = cart[0].pdId;
	data3.innerHTML = cart[0].pdPrice;
	data4.innerHTML = cart[0].dtMfg;
 
	/* var btn = data5.createElement["BUTTON"];
	var t =data5.createTextNode("Delete this item");
	
	btn.appendChild(t);
	data5.body.appendChild(btn); */
 }
 //end

function convert(price)
{
	return parseInt(price);
}


  function calc(price,qty)
{
	return price*qty;
}  

function remove_object()
{
	var index=this.SrNo-1;

	var temp_arr_start=cart.splice(0,index);
	var temp_arr_end=cart.splice(index+1,cart.length-1);

	temp_arr_start.pop();

	cart=temp_arr_start.concat(temp_arr_end);

	cart_top--;
}