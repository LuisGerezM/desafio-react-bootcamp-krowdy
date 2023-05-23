import { QuestionRecorderContext } from "@/contexts/Recorder.context";
import { useContext } from "react";
import { ArticleAnswerVideoCard } from "./styles";
import CustomVideoRecorder from "@/components/CustomVideoRecorder";

const AnswerVideoCard = ({ question }) => {
  const { questionAreAnswered } = useContext(QuestionRecorderContext);
  return (
    <ArticleAnswerVideoCard className='answerVideos-article'>
      <CustomVideoRecorder id={question.id} widthCustomVideo='80%' />
    </ArticleAnswerVideoCard>
  );
};
export default AnswerVideoCard;
