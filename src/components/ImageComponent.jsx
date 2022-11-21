import { Component } from "react";
class ImageComponent extends Component {
  render() {
    return (
      <img
        src={this.props.image}
        className={this.props.classname}
        alt={this.props.content}
      />
    );
  }
}

export default ImageComponent;
