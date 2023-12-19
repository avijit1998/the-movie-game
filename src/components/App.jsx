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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


function App() {

  return (
    <>
      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Question 1</CardTitle>
        <CardDescription>Which form looks better?</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-around">
        <Button>Card1</Button>
        <Button>Card2</Button>

        
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
      
      
    </>
  )
}

export default App
