define(function(require, exports, module) {

    var Widget = require('widget');
    var swfobject = require('swfobject');

    var MediaPlayer = Widget.extend({
        attrs: {
            src: '',
        },

        events: {},

        setup: function() {
            window.GrindPlayerEventProcesser = this._evetProcesser;
        },

        setSrc: function(src) {
            this.set('src', src);
        },

        play: function() {

            if (swfobject.hasFlashPlayerVersion('10.2')) {
                this._initGrindPlayer();
            } else if (this._isSupportHtml5Video()) {
                this._initHtml5Player();
            } else {
                alert('您的浏览器未装Flash播放器或版本太低，请先安装Flash播放器。');
            }

        },

        _initHtml5Player: function() {
            var html = '<video id="' + this.get('playerId') + '" src="';
            html += this.get('src') + '" autoplay controls style="width:100%;height:100%">';
            html += '</video>';
            this.element.html(html);
        },

        _isSupportHtml5Video: function() {
            return !!document.createElement('video').canPlayType;
        },

        _initGrindPlayer: function() {
            var flashvars = {
                src: encodeURIComponent(this.get('src')),
                javascriptCallbackFunction: "GrindPlayerEventProcesser",
                plugin_hls: "http://cdn.staticfile.org/GrindPlayer/1.0.0/HLSProviderOSMF.swf"
            };

            var params = {
                allowFullScreen: true
                , allowScriptAccess: "always"
                , bgcolor: "#000000"
            };

            var attrs = {
                name: "player"
            };

            swfobject.embedSWF(
                "http://cdn.staticfile.org/GrindPlayer/1.0.0/GrindPlayer.swf",
                this.get('playerId'),
                "100%", "100%", "10.2", null, flashvars, params, attrs
            );
        },

        _evetProcesser: function(playerId, event, data) {
            switch(event) {
                case "onJavaScriptBridgeCreated":
                    this.set('flashPlayer', document.getElementById(playerId));
                    break;
                case "complete":
                    this.trigger('ended');
                    break;
            }
        }

    });

    module.exports = MediaPlayer;
});