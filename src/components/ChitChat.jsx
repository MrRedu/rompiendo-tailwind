import { Bubble } from './Icons/Bubble'

export const ChitChat = () => {
  return (
    <>
      <div className="p-6 max-w-sm mx-auto bg-neutral-300 rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <Bubble />
        </div>
        <div>
          <h4 className="text-xl font-medium text-white">ChitChat</h4>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </>
  )
}
