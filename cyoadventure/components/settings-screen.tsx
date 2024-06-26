/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/enGzxVQdagx
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Gabarito } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

gabarito({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button"

export function SettingsScreen() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Game Settings</h1>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Audio</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-gray-700 dark:text-gray-400 font-medium" htmlFor="master-volume">
                  Master Volume
                </label>
                <div className="flex items-center">
                  <input
                    className="w-40 h-2 bg-gray-300 dark:bg-gray-600 rounded-full appearance-none cursor-pointer"
                    defaultValue="75"
                    id="master-volume"
                    max="100"
                    min="0"
                    type="range"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-400">75%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-gray-700 dark:text-gray-400 font-medium" htmlFor="sfx-volume">
                  SFX Volume
                </label>
                <div className="flex items-center">
                  <input
                    className="w-40 h-2 bg-gray-300 dark:bg-gray-600 rounded-full appearance-none cursor-pointer"
                    defaultValue="50"
                    id="sfx-volume"
                    max="100"
                    min="0"
                    type="range"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-400">50%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-gray-700 dark:text-gray-400 font-medium" htmlFor="music-volume">
                  Music Volume
                </label>
                <div className="flex items-center">
                  <input
                    className="w-40 h-2 bg-gray-300 dark:bg-gray-600 rounded-full appearance-none cursor-pointer"
                    defaultValue="25"
                    id="music-volume"
                    max="100"
                    min="0"
                    type="range"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-400">25%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
