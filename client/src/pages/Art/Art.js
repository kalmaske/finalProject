import React, {Components} from "react";
import API from "../../utils/api";

class Art extends Component {
  state = {
    art: [],
    userName: "",
    artImage: "",
    caption: ""
  };

  componentDidMount() {
    this.loadArt();
  }

  loadArt = () => {
    API.getArt()
      .then(res =>
        this.setState({ art: res.data, userName: "", artImage: "", caption: "" })
      )
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveArt({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadArt())
        .catch(err => console.log(err));
    }
  };

render() {
  return (

  <script type="text/javascript" >
      $('#myCarousel').on('slide.bs.carousel', function() => {      
        $('.carousel').carousel()
      });
</ script>

<div classNameName="container">    
  <div classNameName="row">    
      <div classNameName="col-md-12">
          <center><h1>Art Posts</ h1></ center>
      </ div>
  </ div>
</ div>            

<div classNameName="container">  
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
<div className="carousel-inner" role="listbox">
  <div className="carousel-item active">
    <img className="d-block img-fluid" src="..." alt="First slide" />
  </ div>
  <div className="carousel-item">
    <img className="d-block img-fluid" src="..." alt="Second slide" />
  </ div>
  <div className="carousel-item">
    <img className="d-block img-fluid" src="..." alt="Third slide" />
  </ div>
</ div>
<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="sr-only">Previous</span>
</ a>
<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="sr-only">Next</span>
</ a>
</ div>
</ div>
  <hr />
  


<div classNameName="container">
  <div classNameName="row">
    <div classNameName="col-md-4">
      <img src="../public/assets/images/QuinniArtwork.jpg" alt="Sound of my Heart" classNameName="img-thumbnail" />
        <div classNameName="caption">by Qinni</div>
    </ div>
    <div classNameName="col-md-4">
      <img src="../public/assets/images/QuinniArtwork.jpg" alt="Sound of my Heart" classNameName="img-thumbnail" />
        <div classNameName="caption"><a href="https://qinni.deviantart.com/" target="_blank">Qinni</ a></ div>
    </ div>
    <div classNameName="col-md-4">
      <div classNameName="user"></ div>
        <div classNameName="caption"></ div>
    </ div>
  </ div>
</ div><br />
  );
 }
}

export default Art;