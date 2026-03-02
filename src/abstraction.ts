// Abstraction: the 3rd pilar of OOP

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
abstract class MediaPlayer {
     abstract play(): void;
     abstract pause(): void;
     abstract stop(): void;
};

class MusicPlayer extends MediaPlayer {
     play(): void {
          console.log(`Abstract music play...`);
     }

     pause(): void {
          console.log(`Abstract music pause...`);
     }

     stop(): void {
          console.log(`Abstract music stopped.`);
     }
};

new MusicPlayer().stop();