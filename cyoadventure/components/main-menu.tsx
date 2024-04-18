/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/D6NHX62OvLw
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GameScreen } from "@/components/game-screen"
import { SettingsScreen } from "@/components/settings-screen"

export function MainMenu() {
  const [showGameScreen, setShowGameScreen] = useState(false); // State to control the visibility of the GameScreen
  const [showSettingsScreen, setShowSettingsScreen] = useState(false); // State to control the visibility of the GameScreen
  console.log(showGameScreen, "showGameScreen")
  const handleStartClick = () => {
    console.log("Start Clicked")
    console.log(showGameScreen, "showGameScreen")
    setShowGameScreen(true);
  };
  const handleSettingsClick = () => {
    console.log("Settings Clicked")
    console.log(showSettingsScreen, "showSettingsScreen")
    setShowSettingsScreen(true);
  }

  return (
    <div>
    {(!showGameScreen && !showSettingsScreen) &&  (
      <div className="flex h-screen flex-col items-center justify-center bg-white px-4">
      <h1 className="mb-8 text-5xl font-semibold italic text-black">Choose Your Own Story</h1>
      <Button className="mb-4 w-64 py-3 text-lg font-medium" onClick={handleStartClick}>
        Start
      </Button>
      <Button className="w-64 py-3 text-lg font-medium" variant="outline" onClick={handleSettingsClick}>
        Settings
      </Button>
      </div>
    )}
    {showGameScreen && (
      <GameScreen />
    )}
    {showSettingsScreen && (
      <SettingsScreen />
    )}
    </div>
  )
}
