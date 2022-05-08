import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }
  //Get the image height upon loading the picture
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans());
  }
  setSpans = () => {
    const height = this.imageRef.current.height;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };
  render() {
    return (
      <img
        style={{ gridRowEnd: `span ${this.state.spans}` }}
        ref={this.imageRef}
        src={this.props.image.urls.regular}
        alt={this.props.image.alt_description}
      />
    );
  }
}

export default ImageCard;
