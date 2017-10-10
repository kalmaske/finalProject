import React, {Components} from "react";
import API from "../../utils/api";

function handleClick() {
  alert('You have clicked on me');
}

const panelInstance = (
  <Panel onClick={ handleClick }>
    <center>Aggrandize</center>
  </Panel>
);

ReactDOM.render(panelInstance, mountNode);

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

const thumbnailInstance = (
<Grid>
  <Row>
  <Col xs={6} md={3}>
    <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />
  </Col>
  <Col xs={6} md={3}>
    <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />
  </Col>
  <Col xs={6} md={3}>
    <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />
  </Col>
  </Row>
</Grid>
);

ReactDOM.render(thumbnailInstance, mountNode);
  );
 }
}

export default Photography;