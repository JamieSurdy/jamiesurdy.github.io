/* Your JavaScript goes here */


(function(){

	var amex=$('input#amex');
	var visa=$('input#visa');
	var discover=$('input#discover')
	var mc=$('input#mc');
	var csv = $('.csv');

	//if selected, this value shows up
	$.fn.checked = function(value){
		if (value===true || value===false){
			$(this).each(function(){this.checked=value; });
		}
	};

	
	function getCardNumber(){
		$('#card_number').keyup(function(){
            var card=$(this).val();
            var card_number = (card).slice(0,1);

			console.log(card_number);

			if (card_number === '3'){
				(amex).checked(true);
                (csv).addClass('amexpress');
			} else if (card_number === '4'){
				(visa).checked(true);
                (csv).removeClass('amexpress');
			} else if (card_number=== '5'){
				(mc).checked(true);
                (csv).removeClass('amexpress')
			} else if (card_number=== '6'){
				(discover).checked(true);
                (csv).removeClass('amexpress');
			}
		});
	};


	getCardNumber();

    (amex).change(function(){
        if ($(this).prop('checked')){
            csv.addClass("amexpress"); 
        } else{
            csv.removeClass('amexpress')
        }
    });
	
	Modernizr.load({
		test: Modernizr.input.required,
		yep: console.log('required works here!'),
		nope: ['vendor/jquery.validate.min.js']
    });
			// call jQuery Validate if required is not supported
			//complete: function () {
			//	if (!Modernizr.input.required) {
			//	$('form').each(function() {
			//	$(this).validate();

})();




