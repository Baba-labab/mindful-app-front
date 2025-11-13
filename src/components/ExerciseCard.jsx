import { NavLink} from 'react-router-dom'


function ExerciseCard({exercise}) {

  return (
    <>
        <div className="list-row">
          <div><img className="size-10 rounded-box" src={exercise.imgUrl} /></div>
          <div>
            <div>{exercise.title}</div>
            <div className="text-xs uppercase font-semibold opacity-60">Time {exercise.duration}</div>
          </div>
          <NavLink to={`/exercise/${exercise._id}`}>
            <button className="btn btn-square">
            Start
          </button>
          </NavLink>
          
          <button className="btn btn-square btn-ghost">
            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
          </button>
        </div>

    </>
  )
}

export default ExerciseCard