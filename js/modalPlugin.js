(function($) {
	'use strict';

	// Tilføjer plugin til fn så det kan bruges normalt
	$.fn.modalPlugin = function (options) {

		// Options
		// Sætter default options, hvis der ikke sendes noget med
		let defaultOptions = {
			selectors:{
				openbutton: '',
				opencontainer: '',
				closebutton: '',

			},
			modal:{
				type: '',
				effect: '',
				duration: '20',
			},
			style:{
				closebutton: 'X',
				background:'',
			},
            closing:{
			    clickanywhere: ''
            }
		};
		
		let opts = $.extend(true, {}, defaultOptions, options);

		// Går gennem alle elementer der matcher selector = idx=index, el=element
		return this.each(function (idx, el) {
			var openbutton = document.getElementById(opts.selectors.openbutton);
			var opencontainer = document.getElementById(opts.selectors.opencontainer);
			var closebutton = document.getElementById(opts.selectors.closebutton);
			var backgroundcolor = opts.style.background;
			var closebtn_style = opts.style.closebutton;
			var effect_durration = opts.modal.duration;
			var effect_type = opts.modal.effect;



			$(openbutton).click(function () {
                if (effect_type === 'fade'){
                    $(opencontainer).fadeToggle(effect_durration).css({'background-color' : backgroundcolor});
                    $(closebutton).html(closebtn_style).css({'cursor':'pointer'});
                } else if (effect_type === 'slide'){
                    $(opencontainer).slideToggle(effect_durration).css({'background-color' : backgroundcolor});
                    $(closebutton).html(closebtn_style).css({'cursor':'pointer'});
                } else {
                    $(opencontainer).toggle().css({
                        'background-color' : backgroundcolor
                    });
                    $(closebutton).html(closebtn_style).css({'cursor':'pointer'});
                }
			});

            // For at undgå at luk effekten bliver sendt 2 gange så er der lavet et if/else.
			if (opts.closing.clickanywhere === 'yes') {
                $(window).click(function (event) {
                    if (event.target === opencontainer){
                        $(opencontainer).toggle()
                    }
                });
			}

			    $(closebutton).click(function () {
			        if (effect_type === 'fade'){
                        $(opencontainer).fadeToggle(effect_durration);
                    } else if (effect_type === 'slide'){
                        $(opencontainer).slideToggle(effect_durration);
                    } else {
                        $(opencontainer).toggle(effect_durration);
                    }
            });

		});
	};

})(jQuery);