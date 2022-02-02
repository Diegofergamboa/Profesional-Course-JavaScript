function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
};


MediaPlayer.prototype._initplig
MediaPlayer.prototype.play = function() {
    this.media.play();
};

MediaPlayer.prototype.pause = function() {
    this.media.pause();
};

MediaPlayer.prototype.togglePlay = function(){
    if (this.media.paused) {
        this.play();
    } else {
        this.pause();
    }
};

export default MediaPlayer();