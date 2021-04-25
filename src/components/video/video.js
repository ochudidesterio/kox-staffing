import React, { Component } from "react";
import "./video.css";
class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL:
        "https://video.wixstatic.com/video/d0f5b4_f42e547b98bf48efb6c241d8c1f50ba7/720p/mp4/file.mp4",
    };
  }

  render() {
    return (
      <div className="video">
        
        <video name='media' className='player' loop autoPlay>
          <source src={this.state.videoURL} type="video/mp4" />
          <source src={this.state.videoURL} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default Example;
