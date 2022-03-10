
jQuery(document).ready(function ($) {

	var urlsite = WPURLS.siteurl;

	//alert( urlsite );


	function process(date){
	   var parts = date.split("/");
	   return new Date(parts[2], parts[1] - 1, parts[0]);
	}

	$.validator.addMethod("maxDate", function(value, element) {

		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();
		if(dd<10) {
			dd='0'+dd
		}
		if(mm<10) {
			mm='0'+mm
		}
		var today = dd+'/'+mm+'/'+yyyy;

		if ( process(value) < process(today) )
			return true;
		return false;

	});   // error message


	$("#theme-form").validate({
			rules: {
				firstname: "required",
				lastname: "required",
				email: "required"
			},
			messages: {
				firstname: "Veuillez saisir votre prénom.",
				lastname:  "Veuillez saisir votre nom.",
				email:  "Veuillez saisir votre email."
			},
			submitHandler: function(form, event) {
				// document.getElementById('get-reading').click();
				form.submit();
				// event.preventDefault();
				// var datastring = $("#theme-form").serialize();
				// var url = urlsite + '/wp-admin/admin-ajax.php?action=num_theme&' + datastring;
				// document.getElementById('get-reading').click();
				// $.ajax({
				// 	type: 'GET',
				// 	url: url,
				// 	success: function(data) {
				// 	   localStorage.setItem('theme-result', data);
				// 	   window.location = urlsite + '/theme-resultat/';
				// 	}
				// });

			}
		});


 	$("#forecast-form").validate({
			rules: {
				firstname: "required",
				lastname: "required",
				email: "required"
			},
			messages: {
				firstname: "Veuillez saisir votre prénom.",
				lastname:  "Veuillez saisir votre nom.",
				email:  "Veuillez saisir votre email."
			},
			submitHandler: function(form, event) {
				// document.getElementById('fbs-button').click();
				form.submit();

				// event.preventDefault();
				// var datastring = $("#forecast-form").serialize();
				// var url = urlsite + '/wp-admin/admin-ajax.php?action=num_forecast&' + datastring;
				// document.getElementById('get-reading').click();
				// $.ajax({
				// 	type: 'GET',
				// 	url: url,
				// 	success: function(data) {
				// 	   localStorage.setItem('forecast-result', data);
				// 	   window.location = urlsite + '/previsions-resultat/';
				// 	}
				// });

			}
		});


 	$("#compatibility-form").validate({
			rules: {
				firstname1: "required",
				lastname1: "required",
				email: "required",
				firstname2: "required",
				lastname2: "required"
			},
			messages: {
				firstname1: "Veuillez saisir votre prénom.",
				lastname1: "Veuillez saisir votre nom.",
				email:  "Veuillez saisir votre email.",
				firstname2: "Veuillez saisir le prénom de votre partenaire.",
				lastname2: "Veuillez saisir le nom de votre partenaire."
			},
			submitHandler: function(form, event) {
				// document.getElementById('comp-button').click();
				form.submit();

				// event.preventDefault();
				// var datastring = $("#compatibility-form").serialize();
				// var url = urlsite + '/wp-admin/admin-ajax.php?action=num_compatibility&' + datastring;
				// document.getElementById('get-reading').click();
				// $.ajax({
				// 	type: 'GET',
				// 	url: url,
				// 	success: function(data) {
				// 	   localStorage.setItem('compatibility-result', data);
				// 	   window.location = urlsite + '/compatibilite-couple-resultat/';
				// 	}
				// });

			}
		});


    // Switch
    $('.switch-toggle > a').click(function() {

        var parent = $(this).parent();

			parent.find('a').removeClass('selected');
			$(this).addClass('selected');
			parent.find('input').val($(this).data('value'));

		return false;

    });

});


if (window.location.hash && window.location.hash == '#_=_') {
	if (window.history && history.pushState) {
		window.history.pushState("", document.title, window.location.pathname);
	} else {
		// Prevent scrolling by storing the page's current scroll offset
		var scroll = {
			top: document.body.scrollTop,
			left: document.body.scrollLeft
		};
		window.location.hash = '';
		// Restore the scroll offset, should be flicker free
		document.body.scrollTop = scroll.top;
		document.body.scrollLeft = scroll.left;
	}
}
