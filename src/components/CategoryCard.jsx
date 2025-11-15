

function CategoryCard({ filterExercises, cat, isActive }) {



    return (
        <div>
            <button className={`
               flex flex-col items-center justify-center p-3 rounded-xl shadow-sm 
        transition-all hover:scale-105 active:scale-95 border aspect-square w-full
        ${isActive ? "bg-primary text-white" : "bg-base-100 hover:bg-base-200"}`}
                onClick={() => filterExercises(cat.name)}>
                <img
                    src={cat.categoryImg}
                    alt={cat.name}
                    className="w-10 h-10 object-contain"
                />

                <span className="mt-1 text-sm hidden sm:block">
                    {cat.name}
                </span>
            </button>
            {/* <label>
                <figure className="hidden md:flex justify-center items-center mt-2">
                    <img className="w-10 h-10 object-contain cursor-pointer"
                        src={cat.categoryImg}
                        alt={cat.name} />
                </figure>
                <input className="btn flex justify-center items-center mt-2"
                    // className="btn"
                    type="checkbox"
                    name="categories"
                    value={cat.name}
                    aria-label={cat.name}
                    onChange={() => filterExercises(cat.name)} />
            </label> */}
        </div>
    )
}

export default CategoryCard