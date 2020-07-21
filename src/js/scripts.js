//slider at top
$('.slider').slick({
    autoplay: true,
    fade: true,
    dots: true,
    dotsClass: 'slider__dots',
    arrows: false,
    autoplaySpeed: 3000
});

let user = document.getElementById('user')
let userSett = document.getElementById('settings')
let logOut = document.getElementById('logOut')

user.addEventListener('click', (e) => {
    user.classList.toggle('active')
    userSett.classList.toggle('active')
    logOut.classList.toggle('active')
})

userSett.addEventListener('click', (e) => {
    user.classList.remove('active')
    userSett.classList.remove('active')
    logOut.classList.remove('active')
})

logOut.addEventListener('click', (e) => {
    user.classList.remove('active')
    userSett.classList.remove('active')
    logOut.classList.remove('active')
})
document.addEventListener('click', (e) => {
    if (!(e.target.classList.contains('user__settings') || e.target.classList.contains('user__logOut') || e.target.classList.contains('user__name'))) {
        user.classList.remove('active')
        userSett.classList.remove('active')
        logOut.classList.remove('active')
    }
})


//search form

let search = document.getElementById('search')
let togglerSearch = document.getElementById('togglerSearch')
let formSearch = document.getElementById('formSearch')
let w = null;
w = document.documentElement.clientWidth

togglerSearch.addEventListener('click', (e) => {
    togglerSearch.style.display = 'none'
    formSearch.classList.add('active')
    search.classList.add('active')
    $('#search').trigger("focus")
    search.setAttribute('placeholder', 'Search')

})
search.addEventListener('blur', () => {
    if (search.value == '') {
        formSearch.classList.remove('active')
        search.classList.remove('active')
        setTimeout(() => {
            togglerSearch.style.display = 'flex'
        }, 500)
    }
})

$('input[type=search]').on('input', function () {
    clearTimeout(this.delay);
    this.delay = setTimeout(function () {
        $(this).trigger('search');
    }.bind(this), 800);
}).on('search', function () {
    if (this.value) {
        /* call ajax request here */
    }
});



//slider at comment when more 3
let comments = document.getElementById('comments')
let commentsItem = document.getElementsByClassName('comments__item')

if (commentsItem.length > 3) {
    let items = document.querySelectorAll('.comments__item')
    items.forEach((item) => {
        item.style.padding = '20px'
    })

    $('.sliderComments').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ],
    });
}

w = document.documentElement.clientWidth
if (!comments.classList.contains('slick-slider')) {
    if (w <= 769) {
        let items = document.querySelectorAll('.comments__item')
        items.forEach((item) => {
            item.style.padding = '20px'
        })

        $('.sliderComments').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
            ],
        });
    }
}

window.addEventListener('resize', () => {
    w = document.documentElement.clientWidth
    if (!comments.classList.contains('slick-slider')) {
        if (w <= 769) {
            let items = document.querySelectorAll('.comments__item')
            items.forEach((item) => {
                item.style.padding = '20px'
            })

            $('.sliderComments').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
                autoplaySpeed: 3000,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    },
                ],
            });
        }
    }
})