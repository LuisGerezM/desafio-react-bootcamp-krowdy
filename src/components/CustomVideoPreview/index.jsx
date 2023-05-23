import { SubtitleText } from "@/styled-components/typography.styled";
import { styled } from "styled-components";

const CustomVideoPreview = ({ recordedVideoURL }) => {
  return (
    <div>
      <SubtitleText className='custom-video-preview-subtitle'>
        Reproduciendo Video
      </SubtitleText>
      <VideoPreview
        className='custom-video-preview-repeat'
        src={recordedVideoURL}
        controls
      />
    </div>
  );
};
export default CustomVideoPreview;

const VideoPreview = styled.video``;
