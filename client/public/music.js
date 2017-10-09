import React, {Components} from "react";
import API from "../../utils/api";

class Music extends Component {
  state = {
    music: [],
    userName: "",
    track: "",
    caption: ""
  };

  componentDidMount() {
    this.loadMusic();
  }

  loadMusic = () => {
    API.getMusic()
      .then(res =>
        this.setState({ music: res.data, userName: "", track: "", caption: "" })
      )
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveMusic({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadMusic())
        .catch(err => console.log(err));
    }
  };

render() {
  return (

    <div class="container">
      <div class="row">
          <div class="col-md-6">
              <div class="music">
 
              </div>
          <div class="col-md-6">
              <div class="music">

              </div>
          </div>    
          </div>
      </div>       
      <div class="row">      
          <div class="col-md-6">
              <div class="musDes">
                  
              </div>
          </div>
          <div class="col-md-6">
                <div class="musDes">
                    
                </div>
          </div>    
      </div>
    </div>
  );
 }        
}

export default Music; 


