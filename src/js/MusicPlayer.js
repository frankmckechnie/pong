import may from '../assets/tune-one.mp3';
import rolem from '../assets/tune-two.mp3';
import captain from '../assets/tune-three.mp3';

const MusicTypes = {
    MAY: 1,
    ROLEM: 2,
    CAPTIAN: 3,
    MUTE: 4
};

class MusicPlayer {

    constructor(type) {
        this.tune = undefined;
        this.audio = undefined;
        this.timer = undefined;
        this.mute = false;
        this.sortTune(type).setAudio(this.tune);
    }

    setTune(tune) {
        this.tune = tune;
        this.mute = false;
        console.log('this is the tune', tune);
    }

    setMute(mute) {
        this.mute = mute;
    }

    sortTune(type) {

        switch (parseInt(type)) {
        case MusicTypes.MAY:
            this.setTune(may);
            break;
        case MusicTypes.ROLEM:
            this.setTune(rolem);
            break;
        case MusicTypes.CAPTIAN:
            this.setTune(captain);
            break;
        case MusicTypes.MUTE:
            this.setMute(true);
            break;
        default:
            this.setMute(true);
            break;
        }
        return this;
    }

    setAudio(tune = this.tune) {
        this.audio = new Audio(tune);
        return this;
    }

    preview(fn) {
        this.play(true);
        this.timer = setTimeout(()=>{
            this.pause().reset();
            fn(this);
        }, 10000);
    }

    play(override = false) {
        if (this.mute && !override) return false;
        this.audio.play();
        return this;
    }

    pause() {
        this.audio.pause();
        return this;
    }

    reset() {
        this.audio.currentTime = 0;
        clearTimeout(this.timer);
        return this;
    }

}

export default MusicPlayer;