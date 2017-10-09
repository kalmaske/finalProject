import React, {Components} from "react";
import API from "../../utils/api";

class Photography extends Component {
  state = {
    photography: [],
    userName: "",
    Images: "",
    caption: ""
  };

  componentDidMount() {
    this.loadPhotography();
  }

  loadPhotography = () => {
    API.getPhotography()
      .then(res =>
        this.setState({ photography: res.data, userName: "", Images: "", caption: "" })
      )
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.savePhotography({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadPhotography())
        .catch(err => console.log(err));
    }
  };

render() {
  return (

<h1>Photography Post</h1>

  );
 }
}

export default Photography;