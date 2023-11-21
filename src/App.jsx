import { ChitChat, CookieConsent, BasicCard, Modal } from './components/'

export const App = () => {
  const handleClick = () => {
    document.documentElement.classList.toggle('dark')
  }
  return (
    <>
      <main className="bg-neutral-400 dark:bg-neutral-800 min-h-screen">
        {/* Button to toggle theme */}
        <button
          onClick={handleClick}
          type="button"
          className="bg-slate-900 px-4 py-2 rounded-md mb-4 text-cyan-400"
        >
          TOGGLE THEME
        </button>
        {/* <ChitChat /> */}
        {/* <CookieConsent /> */}
        <BasicCard />
        <Modal />
      </main>
    </>
  )
}
