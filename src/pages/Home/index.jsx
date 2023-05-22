import { QuestionRecorderContext } from "@/contexts/Recorder.context";
import { InputTexts, TitleText } from "@/styled-components/typography.styled";
import { useContext } from "react";
import { Card, HomeHeader, Section } from "./styles";
import CustomImage from "@/components/CustomImage";
import { themeColors } from "@/styled-components/Theme.styled";
import { CustomButton } from "@/components/CustomButton";
import { routes } from "@/models/routes.models";
import { LinkReactRouter } from "@/components/LinkReactRouter";

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
          {questions.map(({ hasVideoRecord, question, id }) => (
            <Card className='card' hasvideorecord={hasVideoRecord} key={id}>
              <div className='card-body'>
                {hasVideoRecord.status ? (
                  <div>MOSTRAR pantalla negra del video</div>
                ) : (
                  <InputTexts
                    className='card-body-message'
                    color={themeColors.white}
                  >
                    Aun no respondiste esta pregunta
                  </InputTexts>
                )}
                <CustomButton
                  buttonClass='card-body-btn'
                  disabled={!hasVideoRecord.status}
                >
                  <CustomImage
                    src='/assets/icons/play-48.webp'
                    alt='play icon'
                    title='Play icon'
                  />
                </CustomButton>
              </div>
              <div className='card-footer'>{question}</div>
            </Card>
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
