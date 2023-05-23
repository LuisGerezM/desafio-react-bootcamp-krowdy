import { CustomButton } from "@/components/CustomButton";
import { QuestionRecorderContext } from "@/contexts/Recorder.context";
import { useContext } from "react";
import AnswerVideoCard from "../AnswerVideoCard/AnswerVideoCard";
import { BodyAnswerSection, FooterAnswerSection } from "./styles";
import {
  InputTexts,
  SubtitleText
} from "@/styled-components/typography.styled";

const AnswerSection = ({
  handlePrevious,
  handleNext,
  allQuestionsAnswered,
  question
}) => {
  // CREO que AQUI NO VA ESTE - questionAreAnswered
  const { questionAreAnswered } = useContext(QuestionRecorderContext);

  return (
    <section className='answerSection'>
      <BodyAnswerSection className='answerSection-body'>
        <AnswerVideoCard question={question} />
        <InputTexts className='answerSection-question'>
          {question.question}
        </InputTexts>
      </BodyAnswerSection>

      <FooterAnswerSection className='answerSection-footer'>
        <CustomButton
          buttonClass='answerSection-footer-btn prev'
          onClick={handlePrevious}
          text='Volver'
        />
        <CustomButton
          buttonClass='answerSection-footer-btn next'
          onClick={handleNext}
          text={
            allQuestionsAnswered &&
            currentIndex === questions.length - 1 &&
            questions[currentIndex].hasVideoRecord.status
              ? "Terminar"
              : "Siguiente"
          }
        />
      </FooterAnswerSection>
    </section>
  );
};
export default AnswerSection;
