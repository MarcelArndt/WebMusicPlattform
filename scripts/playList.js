export class Playlist{
 constructor(){
    this.currentPlaylist = [];
    this.currentSelectedTrack = "";
    this.currentPlayedTrack = "";

 }

 addTrack(url){
    let newTrack = new Audio("url");
    newTrack.play();
    this.currentPlaylist.push(newTrack);
 }
}