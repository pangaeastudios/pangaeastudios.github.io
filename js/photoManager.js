$(".photoshoot-thumb").on('click', function(e)
{
    $('.lightbox').addClass('stop-scrolling');
    $('#photo-page').addClass('margin-zero');
    //$('html').addClass('stop-scrolling');

    var shoot = $(this).attr('data-pshoot');
    var galleryName = $(this).attr('data-lightbox');
    var thisSource = $(this).attr('href');

    console.log(gallery[shoot]);
    for(let i = gallery[shoot].length; i > 0; i--)
    {
        console.log(i);
        var image = gallery[shoot][i-1];
       
        var tags = '<a href="' + image.source + '" data-lightbox="' + galleryName + '" ' + 'data-title="In frame: '+ image.models + '"><img src="' + image.source + '"></a>';
        console.log(tags);
        if(image.source != thisSource)
        {
            $(tags).appendTo('.gallery');
        }
    }
});



$('body').on('mouseover', function(e){
    $('#photo-page').removeClass('margin-zero');
    console.log($('.lightbox').css('display'));
    if($('.lightbox').css('display') === 'none')
    {
       // $('body').removeClass('stop-scrolling');
        //$('html').removeClass('stop-scrolling');
    }
});

// $('body').on('click','#lightboxOverlay', function(e) {
//     $('body').removeClass('stop-scrolling');
//     $('html').removeClass('stop-scrolling');
//     $('.gallery').empty();
// });

$('.lightbox').on('click', '.lb-close', function(e){
    $('body').removeClass('stop-scrolling');
    //$('html').removeClass('stop-scrolling');
    $('.gallery').empty();
})

$(".close").on('click', function(e){
    $('.carousel-indicators').empty();
    $('.carousel-inner').empty();
})

var gallery = {
    pshoot1:[
        {
            //One Image//                                       
            shootName: 'Black and White',
            source: 'img/Photography/2016/CAS CONCEPT 1/DSC_0017.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'Black and White',
            source: 'img/Photography/2016/CAS CONCEPT 1/DSC_0020.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'Black and White',
            source: 'img/Photography/2016/CAS CONCEPT 1/DSC_0021.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'Black and White',
            source: 'img/Photography/2016/CAS CONCEPT 1/DSC_0698_V1.jpg',
            orientation: 'portrait',
            models: 'Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'Black and White',
            source: 'img/Photography/2016/CAS CONCEPT 1/DSC_0702.jpg',
            orientation: 'portrait',
            models: 'Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'Black and White',
            source: 'img/Photography/2016/CAS CONCEPT 1/DSC_0712_V2.jpg',
            orientation: 'portrait',
            models: 'Caitlin Halderman, Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'Black and White',
            source: 'img/Photography/2016/CAS CONCEPT 1/DSC_0794.jpg',
            orientation: 'landscape-80',
            models: 'Caitlin Halderman, Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'Black and White',
            source: 'img/Photography/2016/CAS CONCEPT 1/DSC_0967.jpg',
            orientation: 'landscape-80',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        }
        ,
    ],
    pshoot2:[
        {
            //One Image//                                       
            shootName: 'The Hamptons',
            source: 'img/Photography/2016/CAS CONCEPT 2/DSC_0030.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn, Caitlin Halderman, Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'The Hamptons',
            source: 'img/Photography/2016/CAS CONCEPT 2/DSC_0031.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn, Caitlin Halderman, Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'The Hamptons',
            source: 'img/Photography/2016/CAS CONCEPT 2/DSC_0032.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn, Caitlin Halderman, Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'The Hamptons',
            source: 'img/Photography/2016/CAS CONCEPT 2/DSC_0033.jpg',
            orientation: 'portrait',
            models: 'Saffron Llewellyn, Caitlin Halderman, Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'The Hamptons',
            source: 'img/Photography/2016/CAS CONCEPT 2/DSC_0028.jpg',
            orientation: 'landscape-80',
            models: 'Saffron Llewellyn, Caitlin Halderman, Maura Gabriella',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'The Hamptons',
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
            shootName: 'Milk, Eggs, and Hype',
            source: 'img/Photography/2017/Milk-Eggs-and-Hype/DSC05005.jpg',
            orientation: 'portrait',
            models: 'Jordinna Joaquin, Abigail Faiz, Aurelia Artha',
            author: 'Brandon McKinney'
            //........//
        }
        
        ,
        {
            //One Image//                                       
            shootName: 'Milk, Eggs, and Hype',
            source: 'img/Photography/2017/Milk-Eggs-and-Hype/DSC04901.jpg',
            orientation: 'landscape-80',
            models: 'Jordinna Joaquin, Abigail Faiz, Aurelia Artha',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'Milk, Eggs, and Hype',
            source: 'img/Photography/2017/Milk-Eggs-and-Hype/DSC04910.jpg',
            orientation: 'landscape-80',
            models: 'Jordinna Joaquin, Abigail Faiz, Aurelia Artha',
            author: 'Brandon McKinney'
            //........//
        }
        ,
        {
            //One Image//                                       
            shootName: 'Milk, Eggs, and Hype',
            source: 'img/Photography/2017/Milk-Eggs-and-Hype/DSC05036.jpg',
            orientation: 'landscape-80',
            models: 'Jordinna Joaquin, Abigail Faiz, Aurelia Artha',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Milk, Eggs, and Hype',
            source: 'img/Photography/2017/Milk-Eggs-and-Hype/DSC05223.jpg',
            orientation: 'landscape-80',
            models: 'Jordinna Joaquin, Abigail Faiz, Aurelia Artha',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Milk, Eggs, and Hype',
            source: 'img/Photography/2017/Milk-Eggs-and-Hype/DSC05252.jpg',
            orientation: 'landscape-80',
            models: 'Jordinna Joaquin',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Milk, Eggs, and Hype',
            source: 'img/Photography/2017/Milk-Eggs-and-Hype/DSC04956.jpg',
            orientation: 'landscape-80',
            models: 'Aurelia Artha, Rizq Naherta, Jordinna Joaquin',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Milk, Eggs, and Hype',
            source: 'img/Photography/2017/Milk-Eggs-and-Hype/DSC04877.jpg',
            orientation: 'landscape-80',
            models: 'Jordinna Joaquin, Abigail Faiz, Aurelia Artha',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Milk, Eggs, and Hype',
            source: 'img/Photography/2017/Milk-Eggs-and-Hype/DSC04877.jpg',
            orientation: 'landscape-80',
            models: 'Jordinna Joaquin, Abigail Faiz, Aurelia Artha',
            author: 'Brandon McKinney'
            //........//
        }
    ],

    pshoot4:[
        {
            //One Image//                                       
            shootName: 'Personal Photoshoot',
            source: 'img/Photography/2017/Olivia Kokasih/DSC01503.jpg',
            orientation: 'landscape-80',
            models: 'Mathilda Coleman, Rahmani Wachjo, Lorenzo Marchini',
            author: 'Brandon McKinney, Olivia Kokasih'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Personal Photoshoot',
            source: 'img/Photography/2017/Olivia Kokasih/DSC01505.jpg',
            orientation: 'landscape-80',
            models: 'Mathilda Coleman, Rahmani Wachjo',
            author: 'Brandon McKinney, Olivia Kokasih'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Personal Photoshoot',
            source: 'img/Photography/2017/Olivia Kokasih/DSC01502.jpg',
            orientation: 'landscape-80',
            models: 'Lorenzo Marchini, Mathilda Coleman',
            author: 'Brandon McKinney, Olivia Kokasih'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Personal Photoshoot',
            source: 'img/Photography/2017/Olivia Kokasih/DSC01504.jpg',
            orientation: 'landscape-80',
            models: 'Lorenzo Marchini',
            author: 'Brandon McKinney, Olivia Kokasih'
            //........//
        }
    ],

    pshoot5:[
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Heyyy Sunshine/DSC09278.JPG',
            orientation: 'landscape-80',
            models: 'Mathilda Coleman, Rahmani Wachjo, Lorenzo Marchini',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Heyyy Sunshine/DSC09296.JPG',
            orientation: 'portrait',
            models: 'Mathilda Coleman, Rahmani Wachjo, Lorenzo Marchini',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Heyyy Sunshine/DSC09311.JPG',
            orientation: 'portrait',
            models: 'Mathilda Coleman, Rahmani Wachjo, Lorenzo Marchini',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Heyyy Sunshine/DSC09381.JPG',
            orientation: 'landscape-80',
            models: 'Mathilda Coleman, Rahmani Wachjo, Lorenzo Marchini',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Heyyy Sunshine/DSC09383.JPG',
            orientation: 'landscape-80',
            models: 'Mathilda Coleman, Rahmani Wachjo, Lorenzo Marchini',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Heyyy Sunshine/DSC09385.JPG',
            orientation: 'landscape-80',
            models: 'Mathilda Coleman, Rahmani Wachjo, Lorenzo Marchini',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Heyyy Sunshine/DSC09386.JPG',
            orientation: 'landscape-80',
            models: 'Mathilda Coleman, Rahmani Wachjo, Lorenzo Marchini',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Heyyy Sunshine/DSC09391.JPG',
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
            models: 'Marie Penduff',
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
            models: 'Marie Penduff',
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
            models: 'Marie Penduff',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2017/Studio Sembilan - Becky/_DSC3277.jpg',
            orientation: 'portrait',
            models: 'Marie Penduff',
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
            source: 'img/Photography/2018/Get Dirty/DSC05403.JPG',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Get Dirty/DSC05411.JPG',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Get Dirty/DSC05412.JPG',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Get Dirty/DSC05415.JPG',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Get Dirty/DSC05416.JPG',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Get Dirty/DSC05428.JPG',
            orientation: 'portrait',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Get Dirty/DSC05429.JPG',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Get Dirty/DSC05430.JPG',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Get Dirty/DSC05432.JPG',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Get Dirty/DSC05433.JPG',
            orientation: 'landscape',
            models: 'Saffron Llewellyn',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2018/Get Dirty/DSC05447.JPG',
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
            source: 'img/Photography/2020/Brandon McKinney/DSC01534.JPG',
            orientation: 'landscape',
            models: 'Brandon McKinney',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/Brandon McKinney/DSC01535.JPG',
            orientation: 'landscape',
            models: 'Brandon McKinney',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/Brandon McKinney/DSC01550.JPG',
            orientation: 'landscape',
            models: 'Brandon McKinney',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/Brandon McKinney/DSC01476.JPG',
            orientation: 'landscape',
            models: 'Brandon McKinney',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/Brandon McKinney/DSC01554.JPG',
            orientation: 'landscape',
            models: 'Brandon McKinney',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/Brandon McKinney/DSC01557.JPG',
            orientation: 'landscape',
            models: 'Brandon McKinney',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/Brandon McKinney/DSC01564.JPG',
            orientation: 'landscape',
            models: 'Brandon McKinney',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/Brandon McKinney/DSC01586.JPG',
            orientation: 'portrait',
            models: 'Brandon McKinney',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/Brandon McKinney/DSC01596.JPG',
            orientation: 'portrait',
            models: 'Brandon McKinney',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/Brandon McKinney/DSC01599.JPG',
            orientation: 'portrait',
            models: 'Brandon McKinney',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/Brandon McKinney/DSC01616.JPG',
            orientation: 'portrait',
            models: 'Brandon McKinney',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/Brandon McKinney/DSC01648.JPG',
            orientation: 'portrait',
            models: 'Brandon McKinney',
            author: 'Brandon McKinney'
            //........//
        },
        {
            //One Image//                                       
            shootName: 'Editorial Photoshoot',
            source: 'img/Photography/2020/Brandon McKinney/DSC01658.JPG',
            orientation: 'portrait',
            models: 'Brandon McKinney',
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