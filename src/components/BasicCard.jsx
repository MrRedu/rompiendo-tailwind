import propTypes from 'prop-types'

export const BasicCard = ({
  name = 'Ají Pimiento',
  img = 'https://i.pravatar.cc/300',
  followers = '1.2k',
  repos = '14',
}) => {
  return (
    <div className="p-6 bg-slate-900 flex flex-row gap-4 mx-auto max-w-2xl rounded-3xl shadow-lg text-gray-50">
      <div className="min-w-max">
        <img src={img} alt="Random user" className="rounded-xl w-36 h-36" />
      </div>
      <div className="flex flex-col justify-between w-full">
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <div className="flex flex-row gap-2">
            <p className="">UI/UX Designer</p>
            <span>|</span>
            <span>Cochin, IND</span>
          </div>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        <div className="flex justify-between items-center">
          <p>{followers} Followers</p>
          <p>{repos} repositories</p>
          <button className="px-4 py-2 rounded-3xl bg-teal-700 w-36 ">
            Follow
          </button>
        </div>
      </div>
    </div>
  )
}

BasicCard.propTypes = {
  name: propTypes.string,
  img: propTypes.string,
  followers: propTypes.string,
  repos: propTypes.string,
}
