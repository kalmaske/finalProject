import React, {Components} from "react";
import API from "../../utils/API";

// class Art extends Components {
//   state = {
//     art: [],
//     userName: "",
//     artImage: "",
//     caption: ""
//   };

//   componentDidMount() {
//     this.loadArt();
//   };

//   loadArt = () => {
//     API.getArt()
//       .then(res =>
//         this.setState({ art: res.data, userName: "", artImage: "", caption: "" })
//       )
//       .catch(err => console.log(err));
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.title && this.state.author) {
//       API.saveArt({
//         title: this.state.title,
//         author: this.state.author,
//         synopsis: this.state.synopsis
//       })
//         .then(res => this.loadArt())
//         .catch(err => console.log(err));
//     }
//   };

// render() {
//   return (
const Art = () =>
<div>
  
      {/* {document.getElementById('myCarousel').on('slide.bs.carousel', function () {      
        document.getElementsByClassName('carousel').carousel()
      })} */}


<div className="container">    
  <div className="row">    
      <div className="col-md-12">
          <center><h1>Art Posts</h1></center>
      </div>
  </div>
</div>            

<div className="container">  
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
<div className="carousel-inner" role="listbox">
  <div className="carousel-item active">
    <img className="d-block img-fluid" src="..." alt="First slide" />
  </div>
  <div className="carousel-item">
    <img className="d-block img-fluid" src="..." alt="Second slide" />
  </div>
  <div className="carousel-item">
    <img className="d-block img-fluid" src="..." alt="Third slide" />
  </div>
</div>
<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="sr-only">Previous</span>
</a>
<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="sr-only">Next</span>
</a>
</div>
</div>
  <hr />
  


<div className="container">
  <div className="row">
    <div className="col-md-4">
      <img src="../public/assets/images/QuinniArtwork.jpg" alt="Sound of my Heart" className="img-thumbnail" />
        <div className="caption">by Qinni</div>
    </div>
    <div className="col-md-4">
      <img src="../public/assets/images/QuinniArtwork.jpg" alt="Sound of my Heart" className="img-thumbnail" />
        <div className="caption"><a href="https://qinni.deviantart.com/" target="_blank">Qinni</a></div>
    </div>
    <div className="col-md-4">
      <div className="user"></div>
        <div className="caption"></div>
    </div>
  </div>
</div><br />
</div>


export default Art;