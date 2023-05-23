import { CustomButton } from "@/components/CustomButton";
import { LinkReactRouter } from "@/components/LinkReactRouter";
import { QuestionRecorderContext } from "@/contexts/Recorder.context";
import { routes } from "@/models/routes.models";
import { TitleText } from "@/styled-components/typography.styled";
import { useContext } from "react";
import HomeCard from "./components/HomeCard";
import { HomeHeader, Section } from "./styles";

const Home = () => {
  const { questions, questionAreAnswered } = useContext(
    QuestionRecorderContext
  );

  const handleClickOnSend = () => {
    console.log("ENVIAR");
  };

  return (
    <>
      <HomeHeader className='home-header'>
        <TitleText className='home-header-title'>Video Cuestionario</TitleText>
        <LinkReactRouter
          wrapLink='home-header-btn'
          to={routes.ANSWER_VIDEOS}
          text='Responder'
          borderRadius='8px'
        />
      </HomeHeader>
      <Section className='home-section' disabled={!questionAreAnswered}>
        <div className='home-section-body'>
          {questions.map(question => (
            <HomeCard key={"home-" + question.id} question={question} />
          ))}
        </div>

        <div className='home-section-footer'>
          <CustomButton
            buttonClass='home-section-footer-btn'
            onClick={handleClickOnSend}
            disabled={!questionAreAnswered}
            text='Enviar'
          />
        </div>
      </Section>
    </>
  );
};
export default Home;
