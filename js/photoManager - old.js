$(".photoshoot-thumb").on('click', function(e)
{
    var shoot = $(this).attr('data-pshoot');
    console.log(gallery[shoot]);
    for(let i = 0; i < gallery[shoot].length; i++)
    {
        var image = gallery[shoot][i];
       
        if(image.orientation == "landscape")
        {
            var tags1 = '<div class="carousel-item carousel-landscape"><img style="width=85%;"src="';
            console.log(image.orientation);
        } else if (image.orientation == "portrait")
        {
            var tags1 = '<div class="carousel-item carousel-portrait"><img src="';
            console.log(image.orientation);
        } else if (image.orientation == "landscape-80")
        {
            var tags1 = '<div class="carousel-item carousel-landscape-80"><img src="';
            console.log(image.orientation);
        }

        var tags2 = '" class="d-block w-100 img-fluid" alt="..."></div>';
       
        var full = tags1 + image.source + tags2;
        console.log(full);
        $(full).appendTo('.carousel-inner');

        var tags3 = '<li data-target="#carousel" data-slide-to="';
        var tags4 = '"> </li>';

        $(tags3+i+tags4).appendTo('.carousel-indicators');
        $('.carousel-item').first().addClass('active');
        $('.carousel-indicators > li').first().addClass('active');
        $('#carousel').carousel();
    }
});

$(".close").on('click', function(e){
    $('.carousel-indicators').empty();
    $('.carousel-inner').empty();
})

var gallery = {
    pshoot1:[
        {
            //One Image//                                       
            shootName: 'untitled_bnw',
            source: 'img/Photography/2016/CAS CONCEPT 1/DSC_0017.jpg',
            orientation: 'portrait',
            models: 'Caitlin Halderman, Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'untitled_bnw',
            source: 'img/Photography/2016/CAS CONCEPT 1/DSC_0020.jpg',
            orientation: 'portrait',
            models: 'Caitlin Halderman, Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'untitled_bnw',
            source: 'img/Photography/2016/CAS CONCEPT 1/DSC_0021.jpg',
            orientation: 'portrait',
            models: 'Caitlin Halderman, Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'untitled_bnw',
            source: 'img/Photography/2016/CAS CONCEPT 1/DSC_0698_V1.jpg',
            orientation: 'portrait',
            models: 'Caitlin Halderman, Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'untitled_bnw',
            source: 'img/Photography/2016/CAS CONCEPT 1/DSC_0702.jpg',
            orientation: 'portrait',
            models: 'Caitlin Halderman, Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'untitled_bnw',
            source: 'img/Photography/2016/CAS CONCEPT 1/DSC_0712_V2.jpg',
            orientation: 'portrait',
            models: 'Caitlin Halderman, Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'untitled_bnw',
            source: 'img/Photography/2016/CAS CONCEPT 1/DSC_0794.jpg',
            orientation: 'landscape-80',
            models: 'Caitlin Halderman, Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'untitled_bnw',
            source: 'img/Photography/2016/CAS CONCEPT 1/DSC_0967.jpg',
            orientation: 'landscape-80',
            models: 'Caitlin Halderman, Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        }
        ,
    ],
    pshoot2:[
        {
            //One Image//                                       
            shootName: 'The Greenview',
            source: 'img/Photography/2016/CAS CONCEPT 2/DSC_0030.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn, Caitlin Halderman, Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'The Greenview',
            source: 'img/Photography/2016/CAS CONCEPT 2/DSC_0031.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn, Caitlin Halderman, Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'The Greenview',
            source: 'img/Photography/2016/CAS CONCEPT 2/DSC_0032.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn, Caitlin Halderman, Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'The Greenview',
            source: 'img/Photography/2016/CAS CONCEPT 2/DSC_0033.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn, Caitlin Halderman, Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'The Greenview',
            source: 'img/Photography/2016/CAS CONCEPT 2/DSC_0028.jpg',
            orientation: 'landscape-80',
            models: 'Saffron Llewellyn, Caitlin Halderman, Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'The Greenview',
            source: 'img/Photography/2016/CAS CONCEPT 2/DSC_0029.jpg',
            orientation: 'landscape-80',
            models: 'Saffron Llewellyn, Caitlin Halderman, Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        }
    ],

    pshoot3:[
        {
            //One Image//                                       
            shootName: 'The Greenview',
            source: 'img/Photography/2017/Milk, Eggs, and Hype/DSC05005.jpg',
            orientation: 'portrait',
            models: 'Jordinna Joaquin, Abigail Faiz, Aurelia Artha',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'The Greenview',
            source: 'img/Photography/2017/Milk, Eggs, and Hype/DSC04901.jpg',
            orientation: 'landscape-80',
            models: 'Jordinna Joaquin, Abigail Faiz, Aurelia Artha',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'The Greenview',
            source: 'img/Photography/2017/Milk, Eggs, and Hype/DSC04910.jpg',
            orientation: 'landscape-80',
            models: 'Jordinna Joaquin, Abigail Faiz, Aurelia Artha',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'The Greenview',
            source: 'img/Photography/2017/Milk, Eggs, and Hype/DSC05036.jpg',
            orientation: 'landscape-80',
            models: 'Jordinna Joaquin, Abigail Faiz, Aurelia Artha',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'The Greenview',
            source: 'img/Photography/2017/Milk, Eggs, and Hype/DSC05223.jpg',
            orientation: 'landscape-80',
            models: 'Jordinna Joaquin, Abigail Faiz, Aurelia Artha',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'The Greenview',
            source: 'img/Photography/2017/Milk, Eggs, and Hype/DSC05252.jpg',
            orientation: 'landscape-80',
            models: 'Jordinna Joaquin, Abigail Faiz, Aurelia Artha',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'The Greenview',
            source: 'img/Photography/2017/Milk, Eggs, and Hype/DSC04956.jpg',
            orientation: 'landscape-80',
            models: 'Jordinna Joaquin, Abigail Faiz, Aurelia Artha',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'The Greenview',
            source: 'img/Photography/2017/Milk, Eggs, and Hype/DSC04877.jpg',
            orientation: 'landscape-80',
            models: 'Jordinna Joaquin, Abigail Faiz, Aurelia Artha',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'The Greenview',
            source: 'img/Photography/2017/Milk, Eggs, and Hype/DSC04877.jpg',
            orientation: 'landscape-80',
            models: 'Jordinna Joaquin, Abigail Faiz, Aurelia Artha',
            author: 'Brandon McKinney'
            //........//
        }
    ],

    pshoot4:[
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Olivia Kokasih/DSC01503.jpg',
            orientation: 'landscape-80',
            models: 'Mathilda Coleman, Rahmani Wachjo, Lorenzo Marchini',
            author: 'Brandon McKinney, Olivia Kokasih'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Olivia Kokasih/DSC01505.jpg',
            orientation: 'landscape-80',
            models: 'Mathilda Coleman, Rahmani Wachjo, Lorenzo Marchini',
            author: 'Brandon McKinney, Olivia Kokasih'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Olivia Kokasih/DSC01502.jpg',
            orientation: 'landscape-80',
            models: 'Mathilda Coleman, Rahmani Wachjo, Lorenzo Marchini',
            author: 'Brandon McKinney, Olivia Kokasih'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Olivia Kokasih/DSC01504.jpg',
            orientation: 'landscape-80',
            models: 'Mathilda Coleman, Rahmani Wachjo, Lorenzo Marchini',
            author: 'Brandon McKinney, Olivia Kokasih'
            //........//
        }
    ],

    pshoot5:[
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Heyyy Sunshine/DSC09278.jpg',
            orientation: 'landscape-80',
            models: 'Mathilda Coleman, Rahmani Wachjo, Lorenzo Marchini',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Heyyy Sunshine/DSC09296.jpg',
            orientation: 'portrait',
            models: 'Mathilda Coleman, Rahmani Wachjo, Lorenzo Marchini',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Heyyy Sunshine/DSC09311.jpg',
            orientation: 'portrait',
            models: 'Mathilda Coleman, Rahmani Wachjo, Lorenzo Marchini',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Heyyy Sunshine/DSC09381.jpg',
            orientation: 'landscape-80',
            models: 'Mathilda Coleman, Rahmani Wachjo, Lorenzo Marchini',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Heyyy Sunshine/DSC09383.jpg',
            orientation: 'landscape-80',
            models: 'Mathilda Coleman, Rahmani Wachjo, Lorenzo Marchini',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Heyyy Sunshine/DSC09385.jpg',
            orientation: 'landscape-80',
            models: 'Mathilda Coleman, Rahmani Wachjo, Lorenzo Marchini',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Heyyy Sunshine/DSC09386.jpg',
            orientation: 'landscape-80',
            models: 'Mathilda Coleman, Rahmani Wachjo, Lorenzo Marchini',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Heyyy Sunshine/DSC09391.jpg',
            orientation: 'portrait',
            models: 'Mathilda Coleman, Rahmani Wachjo, Lorenzo Marchini',
            author: 'Brandon McKinney'
            //........//
        }
    ],

    pshoot6:[
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Studio Sembilan - Becky/Magazine 1.2.jpg',
            orientation: 'portrait',
            models: 'Marie Penduff',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Studio Sembilan - Becky/Magazine 1.1.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Studio Sembilan - Becky/Magazine 2.2.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Studio Sembilan - Becky/_DSC3207.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Studio Sembilan - Becky/_DSC3300.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Studio Sembilan - Becky/_DSC3170.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Studio Sembilan - Becky/_DSC3267.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Studio Sembilan - Becky/_DSC3202.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Studio Sembilan - Becky/_DSC3303.jpg',
            orientation: 'landscape-80',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Studio Sembilan - Becky/_DSC3277.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Studio Sembilan - Becky/_DSC3335.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
    ],

    pshoot7:[
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/HYGGE/DSC08535.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/HYGGE/DSC08533.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/HYGGE/DSC08540.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/HYGGE/DSC08559.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/HYGGE/DSC08563.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/HYGGE/DSC08648.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/HYGGE/DSC08650.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/HYGGE/DSC08708.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
    ],

    pshoot8:[
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Get Dirty/DSC05403.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Get Dirty/DSC05411.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Get Dirty/DSC05412.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Get Dirty/DSC05415.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Get Dirty/DSC05416.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Get Dirty/DSC05428.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Get Dirty/DSC05429.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Get Dirty/DSC05430.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Get Dirty/DSC05432.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Get Dirty/DSC05433.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Get Dirty/DSC05447.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
    ],

    pshoot9:[
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Hirtsals/DSC07498.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Hirtsals/DSC07489.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Hirtsals/DSC07490.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Hirtsals/DSC07494.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Hirtsals/DSC07499.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Hirtsals/DSC07514.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Hirtsals/DSC07525.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Hirtsals/DSC07493.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
    ],

    pshoot10:[
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/BR&ON/DSC01534.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/BR&ON/DSC01535.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/BR&ON/DSC01550.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/BR&ON/DSC01476.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/BR&ON/DSC01554.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/BR&ON/DSC01557.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/BR&ON/DSC01564.jpg',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/BR&ON/DSC01586.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/BR&ON/DSC01596.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/BR&ON/DSC01599.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/BR&ON/DSC01616.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/BR&ON/DSC01648.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/BR&ON/DSC01658.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
    ],

    desertshuttle_render:[
        {
            //One Image//                                       
            shootName: 'Desert Shuttle',
            source: 'img/Games/Renders/desert shuttle-sunset.jpg',
            orientation: 'landscape',
            models: 'Dennis Haupt',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Desert Shuttle',
            source: 'img/Games/Renders/desert shuttle.jpg',
            orientation: 'landscape',
            models: 'Dennis Haupt',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Desert Shuttle',
            source: 'img/Games/Renders/desert shuttle-2.jpg',
            orientation: 'landscape',
            models: 'Dennis Haupt',
            author: 'Brandon McKinney'
            //........//
        },
    ],

    

    abstract_orbs_render:[
        {
            //One Image//                                       
            shootName: 'Abstract Orbs',
            source: 'img/Games/Renders/orb1.png',
            orientation: 'landscape',
            models: 'Brandon McKinney',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Abstract Orbs',
            source: 'img/Games/Renders/orb2.png',
            orientation: 'landscape',
            models: 'Brandon McKinney',
            author: 'Brandon McKinney'
            //........//
        },
    ]
}