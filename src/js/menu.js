$(document).ready(function () {
    let contentSections = $('.cd-section'),
        navigationItems = $('#navigation a'),
        links = document.querySelectorAll('.navigation__item');

    updateNavigation();

    let sections = document.querySelectorAll('.cd-section');

    $(window).on('scroll', function () {
        updateNavigation();

        let firstViewportSection = null;
        sections.forEach((section) => {
            let rect = section.getBoundingClientRect();

            if (!firstViewportSection) {
                if (rect.bottom > 80) {
                    firstViewportSection = section;
                }
            }

        })

        let nav = document.querySelector('nav');

        if ((firstViewportSection.classList.contains('cd-dark'))) {
            links.forEach((link) => {
                link.style.color = '#fff'
                link.classList.remove('dark')
            })

        } else {
            links.forEach((link) => {
                link.classList.add('dark')
                link.style.color = '#000'
            })
        }
    });

    //smooth scroll to the section
    navigationItems.on('click', function (event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    function updateNavigation() {
        contentSections.each(function () {
            $this = $(this);
            let activeSection = $('#navigation a[href="#' + $this.attr('id') + '"]').data('number') - 1;
            if (($this.offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop())) {
                navigationItems.eq(activeSection).addClass('is-selected');
            } else {
                navigationItems.eq(activeSection).removeClass('is-selected');
            }
        });
    }

    function smoothScroll(target) {
        $('body,html').animate(
            { 'scrollTop': target.offset().top },
            200
        );
    }
});