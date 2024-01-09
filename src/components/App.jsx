import * as React from "react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Skeleton from "./Skeleton"


import MovieCard from './MovieCard'
import { fetchMovie } from "@/lib/tmdb"


function App() {
  const questions = [
    'Which of these two films has a happier ending?', 
    'Between these two movies, which one has a more joyful conclusion?', 
    'In terms of ending, which of these two films would you say is more uplifting?', 
    'Which of these two films leaves the audience feeling happier at the end?', 
    'Comparing the endings of these two films, which one is more cheerful?'
  ];
  
  const [questionNum, setQuestionNum] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  const [opt1ImgUrl, setOpt1ImgUrl] = useState('');
  const [opt1Name, setOpt1Name] = useState('');
  const [opt1Id, setOpt1Id] = useState(null);
  const [opt2ImgUrl, setOpt2ImgUrl] = useState('');
  const [opt2Name, setOpt2Name] = useState('');
  const [opt2Id, setOpt2Id] = useState(null);
  const [selectedOpt, setSelectedOpt] = useState('');

  const changeQNum = () => {
    if (questionNum < 5) {
      setQuestionNum(questionNum + 1);
      setOpt1Id(null);
      setOpt1Name('');
      setOpt1ImgUrl('');
      setOpt2Id(null);
      setOpt2Name('');
      setOpt2ImgUrl('');
    }
  };

  const nextQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
  };

  const setFirstMvOpt = () => {
    fetchMovie(setOpt1ImgUrl, setOpt1Name, setOpt1Id).catch(err => console.error(err));
  }

  const setSecondMvOpt = () => {
    fetchMovie(setOpt2ImgUrl, setOpt2Name, setOpt2Id).catch(err => console.error(err));
  }

  const callback = (value) => {
    setSelectedOpt(value);
  }

  useEffect(() => {
    setFirstMvOpt();
    setSecondMvOpt();
  }, []);

  return (
    <>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Question {questionNum}</CardTitle>
        <CardDescription className="text-lg font-bold">{currentQuestion}</CardDescription>
      </CardHeader>
      <CardContent className="justify-around">
        <div className="flex">
          {(opt1ImgUrl.length > 0) ? (
            <MovieCard id={opt1Id} name={opt1Name} poster={opt1ImgUrl} selectedOpt={selectedOpt} callback={callback}/>
          ) : (
            <Skeleton/>
          )}

          {(opt2ImgUrl.length > 0) ? (
            <MovieCard id={opt2Id} name={opt2Name} poster={opt2ImgUrl} selectedOpt={selectedOpt} callback={callback}/>
          ) : (
            <Skeleton/>
          )} 
        </div>
        <div className="mb-2 text-lg font-semibold text-center">
          {selectedOpt} was selected.
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
      <Button onClick={() => {
        if (questionNum === 5) {
          window.location.reload();
        } else {
          changeQNum();
          nextQuestion();
          setFirstMvOpt();
          setSecondMvOpt();
          setSelectedOpt('');
        }
      }}>Next</Button>
      </CardFooter>
    </Card>
    </>
  )
}

export default App
