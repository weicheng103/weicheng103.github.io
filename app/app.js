$(function(){

	var currentText = '';
	var memory;
	var operation;

	$('#btn1').on('click',function(){
		currentText = currentText + '1';
		$('#message').text(currentText);
	});

	$('#btn2').on('click',function(){
		currentText = currentText + '2';
		$('#message').text(currentText);
	});

	$('#btn3').on('click',function(){
		currentText = currentText + '3';
		$('#message').text(currentText);
	});
	$('#btn4').on('click',function(){
		currentText = currentText + '4';
		$('#message').text(currentText);
	});
	$('#btn5').on('click',function(){
		currentText = currentText + '5';
		$('#message').text(currentText);
	});
	$('#btn6').on('click',function(){
		currentText = currentText + '6';
		$('#message').text(currentText);
	});
	$('#btn7').on('click',function(){
		currentText = currentText + '7';
		$('#message').text(currentText);
	});
	$('#btn8').on('click',function(){
		currentText = currentText + '8';
		$('#message').text(currentText);
	});
	$('#btn9').on('click',function(){
		currentText = currentText + '9';
		$('#message').text(currentText);
	});
	$('#btn0').on('click',function(){
		currentText = currentText + '0';
		$('#message').text(currentText);
	});	
	$('#btn_dot').on('click',function(){
		currentText = currentText + '.';
		$('#message').text(currentText);
	});		

	// operation   ***********

	$('#btn_divide').on('click',function(){

		memory = currentText;
		currentText = '';
		$('#message').text('/');
		operation = 4;


	});	
	$('#btn_multiply').on('click',function(){

		memory = currentText;
		currentText = '';
		$('#message').text('*');
		operation = 3;
	});	
	$('#btn_minus').on('click',function(){
		memory = currentText ;
		currentText = '' ;
		$('#message').text('-');
		operation = 2 ;
	});				

	$('#btn_add').on('click',function(){

		memory = currentText;
		currentText ='' ;
		$('#message').text('+');
		operation = 1;
		
	});

	$('#btn_allclear').on('click',function(){
		currentText = '' ;
		memory = 0 ;
		operation = 0 ;

		$('#message').text('0');
	});

	$('#btn_equal').on('click',function(){
		if(operation == 1) { currentText = eval(memory) + eval(currentText);};//+
		if(operation == 2) { currentText = eval(memory) - eval(currentText);};//-
		if(operation == 3) { currentText = eval(memory) * eval(currentText);};//*
		if(operation == 4) { currentText = eval(memory) / eval(currentText);};///
		$('#message').text(currentText);


	});					






});

