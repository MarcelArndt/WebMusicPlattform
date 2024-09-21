import { Playlist } from "./PlayList.js";

let playlist = new Playlist();
let addToPlaylistButton = document.getElementById("addToPlaylist");
let inputForUrl = document.getElementById("urlOfMusik");

addToPlaylistButton.addEventListener("click", (event) => {
    let url = inputForUrl.value;
    playlist.addTrack(url);
    console.log(playlist.currentPlaylist);
});
