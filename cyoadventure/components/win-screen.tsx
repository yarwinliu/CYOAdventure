/**
 * v0 by Vercel.
 * @see https://v0.dev/t/N43lW1CnLby
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
//import currState from "@/components/game-screen"

export default function WinScreen(currState: any) {
    const handlePlayAgain = () => {
        window.location.reload(); // Reload the page
    };

    const handleExit = () => {
        window.close(); // Close the tab
    };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#9333ea] to-[#4f46e5] dark:from-[#4f46e5] dark:to-[#9333ea]">
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-gray-50">Congratulations!</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-8">
          You've successfully completed your adventure. Well done!
        </p> 
        <div className="flex justify-center gap-4">
            <button
            onClick={handlePlayAgain}
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                Play Again
            </button>
            <button
            onClick={handleExit}
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                Exit
            </button>
        </div>
      </div>
    </div>
  )
}