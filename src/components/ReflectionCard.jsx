import { NavLink } from "react-router-dom"

function ReflectionCard({ ref }) {


  return (
    <div>

      <div className="list-row">

        <div>
          <div className="card-title">{ref.title}</div>
          <div className="text-xs uppercase font-semibold opacity-60">Date {ref.date.slice(0,10)}</div>
        </div>

        <div className="card-actions justify-end">
          <NavLink to={`/update-reflection/${ref._id}`}>
            <button className="btn btn-square">Edit</button>
          </NavLink>
        </div>

        <div className="card-actions justify-end">
          <NavLink to={`/reflection/${ref._id}`}>
            <button className="btn btn-square btn-base">Read</button>
          </NavLink>
        </div>

      </div>

    </div>

  )
}

export default ReflectionCard