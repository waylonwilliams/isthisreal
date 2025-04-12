import { useState } from "react";
import Quiz from "./Quiz";
import { Button } from "./components/ui/button";

export default function App() {
  const [isHomePage, setIsHomePage] = useState(true);

  if (isHomePage) {
    return (
      <main className="w-full h-screen bg-[#e4e4e4]">
      <div className="text-center pt-12">
      <h1 className="text-4xl font-bold">Is This Real</h1>
      <p className="mt-4 text-lg">Your journey to uncovering the truth</p>
      <Button
        onClick={() => setIsHomePage(false)
        }
        className="mt-8"
      >
        Continue to Quiz
      </Button>
      <img
            src={"philosopher.jpg"}
            alt="Guess if AI or not"
            className="w-96 h-96 mt-10 object-cover mx-auto border-4 border-black rounded-lg"
          />
      </div>
      </main>
    );
  } else {
    return <Quiz />;
  }
}
