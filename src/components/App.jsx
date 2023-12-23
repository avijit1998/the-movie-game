import * as React from "react"

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

  return (
    <>
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Question 1</CardTitle>
        <CardDescription className="text-lg font-bold">Which of these movies have a happy ending?</CardDescription>
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
        <Button>Next</Button>
      </CardFooter>
    </Card>
    </>
  )
}

export default App
