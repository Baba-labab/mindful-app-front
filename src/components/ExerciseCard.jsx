import { NavLink} from 'react-router-dom'
import HandleFavourites from './HandleFavourites'


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
          <HandleFavourites exerciseId={exercise._id}/>
        
        </div>

    </>
  )
}

export default ExerciseCard