import { IBlueVideo } from "components/BlueVideoComp";

import VideoLayout from "layouts/VideoLayout";
import { Fragment } from "react";
import styled from "styled-components";

const VideoPageItem = ({ video }: { video: IBlueVideo }) => {
  return (
    <Fragment>
      <VideoLayout>
        <Wrapper>
            <h1>slug</h1>
        </Wrapper>
      </VideoLayout>
    </Fragment>
  );
};

export default VideoPageItem;

const Wrapper = styled.div``;
