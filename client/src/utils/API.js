import axios from "axios";

export default {
  // Gets all Art
  getArt: function() {
    return axios.get("/api/art");
  },
  // Gets the Art with the given id
  getArtId: function(id) {
    return axios.get("/api/art/" + id);
  },
  // Deletes the Art with the given id
  deleteArt: function(id) {
    return axios.delete("/api/art/" + id);
  },
  // Saves a Art to the database
  saveArt: function(artData) {
    return axios.post("/api/art", artData);
  },

  getMusic: function() {
    return axios.get("/api/music");
  },
  // Gets the music with the given id
  getMusicId: function(id) {
    return axios.get("/api/music/" + id);
  },
  // Deletes the music with the given id
  deleteMusic: function(id) {
    return axios.delete("/api/music/" + id);
  },
  // Saves a music to the database
  saveMusic: function(musicData) {
    return axios.post("/api/music", musicData);
  },

  getPhotography: function() {
    return axios.get("/api/photography");
  },
  // Gets the photography with the given id
  getPhotographyId: function(id) {
    return axios.get("/api/photography/" + id);
  },
  // Deletes the photography with the given id
  deletePhotography: function(id) {
    return axios.delete("/api/photography/" + id);
  },
  // Saves a photography to the database
  savePhotography: function(photographyData) {
    return axios.post("/api/photography", photographyData);
  },

  getVideo: function() {
    return axios.get("/api/video");
  },
  // Gets the video with the given id
  getVideoId: function(id) {
    return axios.get("/api/video/" + id);
  },
  // Deletes the video with the given id
  deleteVideo: function(id) {
    return axios.delete("/api/video/" + id);
  },
  // Saves a video to the database
  saveVideo: function(videoData) {
    return axios.post("/api/video", videoData);
  },

  getWriting: function() {
    return axios.get("/api/writing");
  },
  // Gets the writing with the given id
  getWritingId: function(id) {
    return axios.get("/api/writing/" + id);
  },
  // Deletes the writing with the given id
  deleteWriting: function(id) {
    return axios.delete("/api/writing/" + id);
  },
  // Saves a writing to the database
  saveWriting: function(writingData) {
    return axios.post("/api/writing", writingData);
  }
};