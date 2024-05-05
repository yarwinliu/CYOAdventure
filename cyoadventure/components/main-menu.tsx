/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/D6NHX62OvLw
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GameScreen } from "@/components/game-screen"
import { SettingsScreen } from "@/components/settings-screen"
import WinScreen from "@/components/win-screen"
import LoseScreen from "@/components/lose-screen"
import NeutralEndScreen from "@/components/end-neutral"
import {State} from "@/app/stateHelpers"
import * as myStates from "@/app/stateDeclare"


export function MainMenu() { 
  const [showGameScreen, setShowGameScreen] = useState(false); // State to control the visibility of the GameScreen
  const [showSettingsScreen, setShowSettingsScreen] = useState(false); // State to control the visibility of the GameScreen
  const [showWin, setWin] = useState(false);
  const [showLose, setLose] = useState(false);
  const [showNeutral, setNeutral] = useState(false);

  //game screen components
  const [journeyText, setJourneyText] = useState<string>(myStates.state1.story);
  const [optionAText, setOptionAText] = useState<string>(myStates.state1.next[0].description);
  const [optionBText, setOptionBText] = useState<string>(myStates.state1.next[1].description);
  const [optionCText, setOptionCText] = useState<string>(myStates.state1.next[2].description);
  const [currState, setState] = useState(myStates.state1);

  //to change states
  const handleStateChange = (newState:State) => {
    setState(newState);
  }

  // Function to handle changing the journey text
  const handleJourneyTextChange = (newText:any) => {
    setJourneyText(newText);
  };

  // Functions to handle changing the option texts
  const handleOptionAChange = (newText:any) => {
    setOptionAText(newText);
  };

  const handleOptionBChange = (newText:any) => {
    setOptionBText(newText);
  };

  const handleOptionCChange = (newText:any) => {
    setOptionCText(newText);
  };
  
  console.log(showGameScreen, "showGameScreen")
  const handleStartClick = () => {
    console.log("Start Clicked")
    console.log(showGameScreen, "showGameScreen")
    setShowGameScreen(true);
    //setWin(true);
  };
  const handleSettingsClick = () => {
    console.log("Settings Clicked")
    console.log(showSettingsScreen, "showSettingsScreen")
    setShowSettingsScreen(true);
  }
  const handleWin = () => {
    console.log("win path has been selected")
    setShowGameScreen(false);
    setWin(true);
  }
  const handleLose = () => {
    console.log("lose path has been selected")
    setShowGameScreen(false);
    setLose(true);
  }
  const handleNeutral = () => {
    console.log("neutral path has been selected")
    setShowGameScreen(false);
    setNeutral(true);
  }

  return (
    <div>
    {(!showGameScreen && !showSettingsScreen && !showWin && !showLose && !showNeutral) &&  (
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
      <GameScreen
        currState={currState}
        onStateChange={handleStateChange}
        journeyText={journeyText}
        optionAText={optionAText}
        optionBText={optionBText}
        optionCText={optionCText}
        onJourneyTextChange={handleJourneyTextChange}
        onOptionAChange={handleOptionAChange}
        onOptionBChange={handleOptionBChange}
        onOptionCChange={handleOptionCChange}
        onWin={handleWin}
        onLose={handleLose}
        onNeutral={handleNeutral}
      />
    )}
    {showSettingsScreen && (
      <SettingsScreen />
    )}
    {showWin && (
      <WinScreen 
        currState={currState}
      />
    )}
    {showLose && (
      <LoseScreen />
    )}
    {showNeutral && (
      <NeutralEndScreen />
    )}
    </div>
  )
}
