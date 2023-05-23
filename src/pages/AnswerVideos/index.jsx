import { LinkReactRouter } from "@/components/LinkReactRouter";
import { QuestionRecorderContext } from "@/contexts/Recorder.context";
import { routes } from "@/models/routes.models";
import { useContext, useState } from "react";
import AnswerSection from "./components/AnswerSection/AnswerSection";
import { WrapAnswerVideos } from "./styles";

const AnswerVideos = () => {
  const { questions } = useContext(QuestionRecorderContext);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  const handlePrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? questions.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    if (currentIndex === questions.length - 1) {
      // Check if all elements have `hasVideoRecord: { status: true }`
      const allCompleted = questions.every(
        question => question.hasVideoRecord.status
      );

      if (allCompleted) {
        console.log("Terminaste");
        setAllQuestionsAnswered(true);
        return;
      }
    }

    const nextIndex = getNextIndex();
    setCurrentIndex(nextIndex);
  };

  const getNextIndex = () => {
    let nextIndex = currentIndex;

    while (true) {
      nextIndex = (nextIndex + 1) % questions.length;

      if (!questions[nextIndex].hasVideoRecord.status) {
        return nextIndex;
      }

      if (nextIndex === currentIndex) {
        // No hay más elementos con `hasVideoRecord.status` en falso
        console.log("TODOS están true");
        break;
      }
    }

    return currentIndex;
  };

  // console.log(currentIndex);

  return (
    <WrapAnswerVideos className='answerVideos'>
      <header className='answerVideos-header'>
        <LinkReactRouter
          wrapLink='answerVideos-header-linkRR'
          to={routes.HOME}
          text='Volver a Lista'
          borderRadius='8px'
        />
      </header>

      {/* {questions.map(question => ( */}
      <AnswerSection
        // key={"answerVideos-" + question.id}
        question={questions[currentIndex]}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        allQuestionsAnswered={allQuestionsAnswered}
      />
      {/* ))}*/}

      {/* <section>
        <article className='answerVideos-article'></article>
      </section>

      <div className='answerVideos-footer'>
        <CustomButton
          buttonClass='answerVideos-footer-btn-prev'
          onClick={handlePrevious}
          text='Volver'
        />
        <CustomButton
          buttonClass='answerVideos-footer-btn-next'
          onClick={handleNext}
          text={
            allQuestionsAnswered &&
            currentIndex === questions.length - 1 &&
            questions[currentIndex].hasVideoRecord.status
              ? "Terminar"
              : "Siguiente"
          }
        />
      </div> */}

      <div>
        {questions[currentIndex].hasVideoRecord.status
          ? "Completado"
          : "No completado"}
      </div>
    </WrapAnswerVideos>
  );
};
export default AnswerVideos;

// const AnswerVideos = () => {
//   const { questions, questionAreAnswered } = useContext(
//     QuestionRecorderContext
//   );

//   const [currentIndex, setCurrentIndex] = useState(1);
//   const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

//   const handlePrevious = () => {
//     setCurrentIndex(prevIndex =>
//       prevIndex === 0 ? questions.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     if (currentIndex === questions.length - 1) {
//       // Check if all elements have `hasVideoRecord: { status: true }`
//       const allCompleted = questions.every(
//         question => question.hasVideoRecord.status
//       );

//       if (allCompleted) {
//         console.log("Terminaste");
//         setAllQuestionsAnswered(true);
//         return;
//       }
//     }

//     const nextIndex = getNextIndex();
//     setCurrentIndex(nextIndex);
//   };

//   const getNextIndex = () => {
//     let nextIndex = currentIndex;

//     while (true) {
//       nextIndex = (nextIndex + 1) % questions.length;

//       if (!questions[nextIndex].hasVideoRecord.status) {
//         return nextIndex;
//       }

//       if (nextIndex === currentIndex) {
//         // No hay más elementos con `hasVideoRecord.status` en falso
//         console.log("TODOS están true");
//         break;
//       }
//     }

//     return currentIndex;
//   };

//   return (
//     <div>
//       <header>
//         <LinkReactRouter
//           wrapLink='answerVideos-header-linkRR'
//           to={routes.HOME}
//           text='Volver a Lista'
//           borderRadius='8px'
//         />
//       </header>

//       <section>
//         <article className='answerVideos-article'></article>
//       </section>

//       <div className='answerVideos-footer'>
//         <CustomButton
//           buttonClass='answerVideos-footer-btn-prev'
//           onClick={handlePrevious}
//           text='Volver'
//         />
//         <CustomButton
//           buttonClass='answerVideos-footer-btn-next'
//           onClick={handleNext}
//           text={
//             allQuestionsAnswered &&
//             currentIndex === questions.length - 1 &&
//             questions[currentIndex].hasVideoRecord.status
//               ? "Terminar"
//               : "Siguiente"
//           }
//         />
//       </div>

//       <div>
//         {questions[currentIndex].hasVideoRecord.status
//           ? "Completado"
//           : "No completado"}
//       </div>
//     </div>
//   );
// };
// export default AnswerVideos;
