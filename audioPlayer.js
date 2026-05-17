function audioPlayer() {
    var currentSong = 0;
    var audio = $("#audioPlayer")[0];
    var playlist = $("#playlist li a");

    function playSong(index) {
        if (index >= playlist.length) index = 0;
        if (index < 0) index = playlist.length - 1;

        currentSong = index;

        $("#playlist li").removeClass("current-song");
        $("#playlist li:eq(" + currentSong + ")").addClass("current-song");

        audio.src = playlist[currentSong].href;
        audio.play();

        updateLockScreenInfo();
    }

    function updateLockScreenInfo() {
        if ("mediaSession" in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: $(playlist[currentSong]).text(),
                artist: "Your Artist Name"
            });
        }
    }

    if ("mediaSession" in navigator) {
        navigator.mediaSession.setActionHandler("nexttrack", function () {
            playSong(currentSong + 1);
        });

        navigator.mediaSession.setActionHandler("previoustrack", function () {
            playSong(currentSong - 1);
        });

        navigator.mediaSession.setActionHandler("play", function () {
            audio.play();
        });

        navigator.mediaSession.setActionHandler("pause", function () {
            audio.pause();
        });
    }

    $("#playlist li a").click(function (e) {
        e.preventDefault();
        playSong($(this).parent().index());
    });

    audio.addEventListener("ended", function () {
        playSong(currentSong + 1);
    });

    playSong(currentSong);
}