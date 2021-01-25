import React, { useState } from "react";
import './Quiz.css';
import { ActiveQuiz}  from "../../components/ActiveQuiz/ActiveQuiz";
import { FinishedQuiz } from "../../components/FinishedQuiz/FinishedQuiz";


export const Quiz = () => {
  const [quiz, setQuiz] = useState([{
      question: 'В каком году представили JS?',
      rightAnswerId: 3,
      id: 1,
      answers: [
        { text: '1998', id: 1 },
        { text: '1997', id: 2 },
        { text: '1995', id: 3 },
        { text: '1992', id: 4 },
      ]},
    {
      question: 'В каком выпустили React?',
      rightAnswerId: 2,
      id: 2,
      answers: [
        { text: '2011', id: 1 },
        { text: '2013', id: 2 },
        { text: '2012', id: 3 },
        { text: '2009', id: 4 },
      ]}
  ]);

  //state для перехода к новому вопросу
  const [activeQuestion, setActiveQuestion] = useState(0);
  //state для определения правильного ответа, для перехода к следующему вопросу
  const [answerState, setAnswerState] = useState({});
  //state для определения, что весь Quiz пройден
  const [isFinished, setIsFinished] = useState(false);
  //собираем статистику
  const [result, setResult] = useState({});

  //определяем последний вопрос
  const isQuizFinished = () =>  activeQuestion + 1 === quiz.length;

  const onAnswerClickHandler = answerId => {
    //проверка на существование значения success в ключе
    const key = Object.keys(answerState)
    if(answerState[key] === 'success') return;

    //получаем текущий вопрос
    const question = quiz[activeQuestion];

    //сравниваем правильный ответ с id ответа
    if ( question.rightAnswerId ===  answerId) {
      setAnswerState({
        [answerId]: 'success',
      })

      //если в result значений нет - значит 'success' с первой попытки
      if(!result[question.id]) setResult(prevState => ({
        ...prevState,
        [question.id]: 'success',
      }))

      //переходим к следующему вопросу и обнуляем stateAnswer
      const timeout = window.setTimeout(() => {
        if (isQuizFinished()) {
          setIsFinished(true);
        } else {
          setActiveQuestion(prevState => prevState + 1);
          setAnswerState({});
        }

      window.clearTimeout(timeout);
      }, 1000)
    } else {
      setAnswerState({
        [answerId]: 'error',
      })

      setResult(prevState => ({
        ...prevState,
        [question.id]: 'error',
      }))
    }
  }

 const onRetryHandler = () => {
   setActiveQuestion(0);
   setResult(0);
   setIsFinished(false);
   setAnswerState({});
 }

  return (
    <div className={'quiz'}>
      <div className={'quiz__wrapper'}>
        <h1 className={'quiz__title'}>Ответьте на все вопросы</h1>
        {
          isFinished
          ? <FinishedQuiz
             result={result}
             quiz={quiz}
             onRetry={onRetryHandler}
            />
            :<ActiveQuiz
              answers={ quiz[activeQuestion].answers }
              question={ quiz[activeQuestion].question }
              onAnswerClick={onAnswerClickHandler}
              quizLength={quiz.length}
              answerNumber={activeQuestion}
              stateAnswer={answerState}
            />
        }
      </div>

    </div>
  );
}
