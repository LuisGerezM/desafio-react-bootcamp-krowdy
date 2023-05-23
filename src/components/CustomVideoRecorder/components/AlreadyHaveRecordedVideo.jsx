import { CustomButton } from "@/components/CustomButton";
import CustomImage from "@/components/CustomImage";
import { themeColors } from "@/styled-components/Theme.styled";
import { SubtitleText, TitleText } from "@/styled-components/typography.styled";
import { styled } from "styled-components";

const AlreadyHaveRecordedVideo = ({ handleRetake, handlePreview }) => {
  return (
    <WrapAlreadyHaveRecordedVideo className='already-recorded-video'>
      <TitleText color={themeColors.white}>Video Grabado</TitleText>
      <SubtitleText color={themeColors.white}>
        Ya tienes un video grabado
      </SubtitleText>
      <div className='already-recorded-video-wrap-btn'>
        <CustomButton
          buttonClass='already-recorded-video-wrap-btn-updated'
          onClick={handleRetake}
        >
          <CustomImage
            className='already-recorded-video-wrap-btn-image'
            src='/assets/icons/updated-48.webp'
            alt='preview icon'
            title='Preview video'
          />
        </CustomButton>
        <CustomButton
          buttonClass='already-recorded-video-wrap-btn-prev'
          onClick={handleRetake}
          text='Previsualizar'
        />

        {/* <button onClick={handleRetake}>Regrabar</button>
        <button onClick={handlePreview}>Previsualizar</button> */}
      </div>
    </WrapAlreadyHaveRecordedVideo>
  );
};
export default AlreadyHaveRecordedVideo;

const WrapAlreadyHaveRecordedVideo = styled.div`
  background-color: ${themeColors.darkBlue};
  width: 100%;
  height: 98%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 2rem;

  .already-recorded-video-wrap-btn {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .already-recorded-video-wrap-btn-updated {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${themeColors.white};

    &:hover {
      background-color: ${themeColors.txtGray};
      cursor: pointer;
    }
  }

  .already-recorded-video-wrap-btn-prev {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-radius: 8px;
    border: 2px solid ${themeColors.greenBlue};
    color: ${themeColors.greenBlue};
    background-color: ${themeColors.transparent};

    &:hover {
      color: ${themeColors.darkBlue};
      background-color: ${themeColors.greenBlue};
      cursor: pointer;
    }
  }
`;
