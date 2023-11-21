import propTypes from 'prop-types'

export const Modal = ({
  name = 'Ají Pimiento',
  img = 'https://i.pravatar.cc/300',
  carrer = 'UI/UX Designer',
}) => {
  return (
    <>
      <div className="flex mx-auto max-w-sm bg-slate-100 dark:bg-slate-500 text-cyan-950 dark:text-cyan-200 py-4 px-8 rounded-md gap-4 shadow-lg">
        <img
          src={img}
          alt={`Image ${name}`}
          className="rounded-full w-32 h-32"
        />
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-bold text-purple-950 dark:text-gray-200">
              {name}
            </p>
            <p className="text-sm text-purple-400 dark:text-slate-400">
              {carrer}
            </p>
          </div>
          <button
            className="px-4 py-2 rounded-3xl font-bold 
          border-2 border-purple-500 text-purple-500 
          hover:bg-slate-500 hover:border-slate-500 hover:text-white
          dark:border-slate-200 dark:hover:bg-slate-200 dark:text-white dark:hover:text-black"
          >
            Message
          </button>
        </div>
      </div>
    </>
  )
}

Modal.propTypes = {
  name: propTypes.string,
  img: propTypes.string,
  carrer: propTypes.string,
}
