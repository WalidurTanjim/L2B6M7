"use strict";
// Abstraction: the 3rd pilar of OOP
Object.defineProperty(exports, "__esModule", { value: true });
// abstraction with interface
// interface MediaPlayer {
//      play(): void;
//      pause(): void;
//      stop(): void;
// }
// class MusicPlayer implements MediaPlayer {
//      play(): void {
//           console.log(`Music playing...`);
//      };
//      pause(): void {
//           console.log(`Music paused...`);
//      };
//      stop(): void {
//           console.log(`Music stopped.`);
//      };
// };
// const myMusic = new MusicPlayer();
// myMusic.pause();
// abstraction with abtract class
class MediaPlayer {
}
;
class MusicPlayer extends MediaPlayer {
    play() {
        console.log(`Abstract music play...`);
    }
    pause() {
        console.log(`Abstract music pause...`);
    }
    stop() {
        console.log(`Abstract music stopped.`);
    }
}
;
new MusicPlayer().stop();
