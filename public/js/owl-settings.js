var owl;

    $(document).ready(function() {
    
        owl = $("#owl-demo");

        owl.owlCarousel({

            navigation : true,
            lazyLoad : true,
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem : true,
            afterInit: afterOWLinit // do some work after OWL init

        });

        function afterOWLinit() {

            var pafinatorsLink = $('.item-link');

            /* this.owl.userItems - it's your HTML <div class="item"><img src="..."></div> */
            $.each(this.owl.userItems, function (i) {

                $(pafinatorsLink[i])
                    // i - counter
                    // set Custom Event for pagination item
                    .click(function () {
                        owl.trigger('owl.goTo', i);
                    });

            });

        }
       
    });  