import { InputTexts } from "@/styled-components/typography.styled";
import { CustomButton } from "@/components/CustomButton";
import CustomImage from "@/components/CustomImage";
import { Card } from "./styles";
import { themeColors } from "@/styled-components/Theme.styled";

const HomeCard = ({ question: { hasVideoRecord, question, id } }) => {
  return (
    <Card className='card' hasvideorecord={hasVideoRecord}>
      <div className='card-body'>
        {hasVideoRecord.status ? (
          <div>MOSTRAR pantalla negra del video</div>
        ) : (
          <InputTexts className='card-body-message' color={themeColors.white}>
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
  );
};
export default HomeCard;
