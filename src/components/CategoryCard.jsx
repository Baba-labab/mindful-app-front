

function CategoryCard({ filterExercises, cat }) {



    return (
        <div>
            <label>
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
            </label>
        </div>
    )
}

export default CategoryCard