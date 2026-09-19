let playlist = ["Song A", "Song B", "Song C"];

playlist.push("Song D");
console.log(playlist);

function remove() {
    playlist = playlist.filter(song => song.includes("C") || song.includes("D"))
}

remove();

console.log(playlist);

function removeSong(playlist, song) {
    return playlist.filter(list => list !== song);
}

const reusablePlaylist = removeSong(playlist, "Song D");
console.log(reusablePlaylist);


