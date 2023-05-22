import { ApiDataMocked } from "@/ApiDataMocked/ApiDataMocked";
import { useEffect } from "react";
import { createContext, useState } from "react";

export const QuestionRecorderContext = createContext();

export const QuestionRecorderProvider = ({ children }) => {
  const [questions, setQuestions] = useState(
    ApiDataMocked.map(question => ({
      ...question,
      hasVideoRecord: { status: false, video: null }
    }))
  );

  const [questionAreAnswered, setQuestionAreAnswered] = useState(false);

  useEffect(() => {
    setQuestionAreAnswered(
      !questions.some(question => question.hasVideoRecord.status === false)
    );
  }, [questions]);

  const handleAddAnswerToQuestion = () => {
    console.log("handleAddReponseToQuestion");
  };

  return (
    <QuestionRecorderContext.Provider
      value={{ handleAddAnswerToQuestion, questions, questionAreAnswered }}
    >
      {children}
    </QuestionRecorderContext.Provider>
  );
};
