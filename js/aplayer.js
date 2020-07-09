var currentTrackIndex = 0;

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: []
});

ap.on('listswitch', function(e){
    currentTrackIndex = e.index;
    console.log(currentTrackIndex);
    var titleText = ap.list.audios[currentTrackIndex].name + " - " + ap.list.audios[currentTrackIndex].artist;
    document.title = titleText;
});

$(".album-poster").on('click', function(e)
{
    var dataJukeID = $(this).attr('data-juke-index');
    var albumName = $(this).attr('data-album');
    ap.list.clear();

    if(albumName != "TBA")
    {
        if(albumName == "-")
        {
            ap.list.add(jukebox.singles[dataJukeID]);
        } else {
            var albumSongList = jukebox.albums[albumName];
            for(var i = 0; i < albumSongList.length; i++)
            {
                ap.list.add(albumSongList[i]);
            }
        }
    
        ap.play();
        $("#aplayer").addClass('showPlayer');
    }
});

var jukebox = {
    singles:[
        {
            name: 'Out of Breath (feat. Maaike Maria & Tunga Troll)',
            artist: 'BR&ON',
            url: 'music/br&on/Out_of_Breath.wav',
            cover: 'img/oob-final.jpg'
        },
        {
            name: 'Wardenclyffe Tower',
            artist: 'BR&ON',
            url: 'music/br&on/Wardenclyffe_Tower.mp3',
            cover: 'img/WT.jpg'
        }
    ],

    albums:{
        merdeka:[
            {
                name: 'Brown (Instrumental)',
                artist: 'BR&ON',
                url: 'music/br&on/Merdeka/Brown.wav',
                cover: 'img/Merdeka.jpg'
            },
            {
                name: 'Lazytown',
                artist: 'BR&ON',
                url: 'music/br&on/Merdeka/Lazytown.mp3',
                cover: 'img/Merdeka.jpg'
            },
            {
                name: "Lucy's Fable (prod. Marino the Menace)",
                artist: 'BR&ON',
                url: 'music/br&on/Merdeka/Lucy_Fable.mp3',
                cover: 'img/Merdeka.jpg'
            },
            {
                name: 'Merdeka',
                artist: 'BR&ON',
                url: 'music/br&on/Merdeka/Merdeka.mp3',
                cover: 'img/Merdeka.jpg'
            },
            {
                name: 'Cold (feat. Maaike Maria)',
                artist: 'BR&ON',
                url: 'music/br&on/Merdeka/Cold.mp3',
                cover: 'img/Merdeka.jpg'
            },
            {
                name: '(Bonus Track) Merdeka (Eminem Mockingbird Remix) / Forgotten Eulogy',
                artist: 'BR&ON',
                url: 'music/br&on/Merdeka/Merdeka_Eminem Remix_Forgotten Eulogy.mp3',
                cover: 'img/Merdeka.jpg'
            }
        ]
    }
};