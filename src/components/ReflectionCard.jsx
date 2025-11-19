import { NavLink } from "react-router-dom"

function ReflectionCard({ ref }) {


  return (
    <div>
      <div className="card bg-base-300 text-black-content w-96 border mb-4">
        <div className="card-body">
          <h2 className="card-title">{ref.title}</h2>
          <p>{ref.text}</p>
          <div className="flex justify-items-center justify-center gap-2">

            <div className="card-actions justify-center ">
              <NavLink to={`/update-reflection/${ref._id}`}>
                <button className="btn btn-neutral mt-5">Edit</button>
              </NavLink>
            </div>

            <div className="card-actions justify-center">
              <button className="btn btn-neutral w-full mt-5">Delete</button>
            </div>
          </div>

          <div className="card-actions justify-center">
            <NavLink to={`/reflection/${ref._id}`}>
              <button className="btn btn-neutral w-full mt-5">Read</button>
            </NavLink>
            
          </div>
        </div>

      </div>

    </div>

  )
}

export default ReflectionCard