$(document).ready(function(){ // an anonymous function that tells the page to run and load first before loading all the functions //

// DOM == document object model --  put something in our JS that asks the DOM to listen for what the user inputs on our calcular and form//

$('.item').find('input').on('keyup keydown keypress change', function(){} // look for everything witht he class item, and find the first input. being typed on the input box //

// variables = storage box of data //

var input = $(this), // selecting the cell //
	item = input.closest('.item'),
	qty = parseFloat(item.find('.qty').val()), // return the decimal value in the the input, which the user puts, into anything with the class qty. //
	cost = parseFloat (item.find('.cost').val()), // calling cost class //
	tariff = parseFloat(item.data('tariff-percent')), // looking for data, calling it tariff percent //
	total_before = parseFloat(qty * cost), // taking these two variables, multiply the quantity times the cost //
	total_after = addTariff(total_before, tariff);


});


function addTariff(total_before, tarff){
	return total_before + (total_before*(tariff/100)) // add cost divided by 100 //
}
