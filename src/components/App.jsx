import * as React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import MovieCard from './MovieCard'

function App() {
  
  const [questionNum, setQuestionNum] = useState(1);

  const changeQNum = () => {
    if (questionNum < 5) {
      setQuestionNum(questionNum + 1);
    }
  };

  const questions = [
    'Which of these two films has a happier ending?', 
    'Which of these two films is more popular?', 
    'Which of these two films has a bittersweet ending?', 
    'Which of these films would you rewatch?', 
    'Which of these films is overrated?'
  ];
  
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  const nextQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
  };

  return (
    <>
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Question {questionNum}</CardTitle>
        <CardDescription className="text-lg font-bold">{currentQuestion}</CardDescription>
      </CardHeader>
      <CardContent className="justify-around">
        <div className="flex">
          <MovieCard/>
          <MovieCard/>
        </div>
        <div className="mb-2 text-lg font-semibold text-center">
          Movie 1 was the right answer.
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
      <Button onClick={() => {
        if (questionNum === 5) {
          window.location.reload();
        } else {
          changeQNum();
          nextQuestion();
        }
      }}>Next</Button>
      </CardFooter>
    </Card>
    </>
  )
}

export default App
