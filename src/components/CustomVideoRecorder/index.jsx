import { themeColors } from "@/styled-components/Theme.styled";
import { useEffect, useRef, useState } from "react";
import { css, keyframes, styled } from "styled-components";
import { CustomButton } from "../CustomButton";
import CustomImage from "../CustomImage";
import CustomVideoPreview from "../CustomVideoPreview";
import { PulseCircle, WrapCustomVideo } from "./styles";
import AlreadyHaveRecordedVideo from "./components/AlreadyHaveRecordedVideo";

const CustomVideoRecorder = ({ id, widthCustomVideo }) => {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedBlobs, setRecordedBlobs] = useState([]);
  const [recording, setRecording] = useState(false);
  const [recordedVideoURL, setRecordedVideoURL] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [timer, setTimer] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (mediaRecorder) {
      mediaRecorder.ondataavailable = handleDataAvailable;
      mediaRecorder.onstop = handleRecordingStop;
    }
  }, [mediaRecorder]);

  useEffect(() => {
    if (recordedBlobs.length > 0) {
      handleRecordingStop();
    }
  }, [recordedBlobs]);

  useEffect(() => {
    if (recording) {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [recording]);

  useEffect(() => {
    if (timer === 121) {
      stopRecording();
    }
  }, [timer]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
      });

      videoRef.current.srcObject = stream;
      videoRef.current.play();

      const mimeType = "video/webm";
      const options = { mimeType };

      let recorder;
      try {
        recorder = new MediaRecorder(stream, options);
      } catch (error) {
        console.error("Exception while creating MediaRecorder:", error);
        return;
      }

      setRecordedBlobs([]);
      setMediaRecorder(recorder);
      setRecording(true);

      recorder.start();
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && recording) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  const handleDataAvailable = event => {
    if (event.data && event.data.size > 0) {
      setRecordedBlobs(prevBlobs => [...prevBlobs, event.data]);
    }
  };

  const handleRecordingStop = () => {
    if (recordedBlobs.length > 0) {
      const superBuffer = new Blob(recordedBlobs, { type: "video/webm" });
      const videoURL = URL.createObjectURL(superBuffer);
      setRecordedVideoURL(videoURL);
    }
  };

  const handlePreview = () => {
    setPreviewMode(true);
  };

  const handleRetake = () => {
    setTimer(0);
    setPreviewMode(false);
    setRecordedBlobs([]);
    setRecordedVideoURL(null);
    startRecording();
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const renderRecorder = () => {
    if (previewMode && recordedVideoURL) {
      return <CustomVideoPreview recordedVideoURL={recordedVideoURL} />;
    }

    if (recordedVideoURL) {
      return (
        <AlreadyHaveRecordedVideo
          handleRetake={handleRetake}
          handlePreview={handlePreview}
        />
      );
    }

    return (
      <article className='custom-video-recorder'>
        <div className='custom-video-recorder-timer'>
          {formatTime(timer)} / 2:00
          <PulseCircle recording={recording.toString()} />
        </div>
        <video
          className='custom-video-recorder-cam'
          ref={videoRef}
          playsInline
          autoPlay
          muted
        />
        <div className='custom-video-recorder-wrap-btns'>
          <CustomButton
            onClick={!recording ? startRecording : stopRecording}
            buttonClass='custom-video-recorder-wrap-btns-btn'
          >
            <CustomImage
              src={`/assets/icons/${
                !recording ? "play-48.webp" : "stop-48.webp"
              }`}
              alt='play icon'
              title='Play icon'
            />
          </CustomButton>
        </div>
      </article>
    );
  };

  return (
    <WrapCustomVideo
      className='custom-video'
      widthcustomvideo={widthCustomVideo}
    >
      {renderRecorder()}
    </WrapCustomVideo>
  );
};
export default CustomVideoRecorder;
