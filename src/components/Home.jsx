import "../styles/Homes.scss";

import React, { PureComponent } from "react";
import { string } from "prop-types";

import Collab from "./collab";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  render() {
    const {
      indexName
      // asset,
    } = this.props;

    // const videoAsset = {
    //     mpv4: asset + ".mp4",
    //     ogv: asset + ".ogv",
    //     webm: asset + ".webm",
    // };

    return (
      <div className="landing-page">
        <div className="homePageMainComponent">
          <div className="servicesBannerComponent">
            <div className="collaborate">
              <h4>Let's Collaborate</h4>
            </div>
            <Collab />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

Home.propTypes = {
  indexName: string.isRequired,
  indexDescription: string.isRequired,
  to: string.isRequired
};
