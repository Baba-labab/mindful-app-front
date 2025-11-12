import React from 'react'

function CategoryCard() {
    const categories = [
        {
            name: "Balance",
            categoryImg: "images/equality.png"
        },
        {
            name: "Energy",
            categoryImg: "images/functional.png"
        },
        {
            name: "Expression",
            categoryImg: "images/magic.png"
        },
        {
            name: "Connection",
            categoryImg: "images/network-user.png"
        },
        {
            name: "Nourishment",
            categoryImg: "images/gymnast-diet.png"
        },
        {
            name: "Rest",
            categoryImg: "images/sleep.png"
        }];

    return (
        <div className='flex justify-center p6 mb-10 mt-10'>
            <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-4'>
                {categories.map((cat) => {
                    return <div>
                        <div key={cat.name}
                            className="lg:w-36 lg:h-36 card bg-base-100 shadow-sm flex flex-col items-center-safe justify-self-center hover:shadow-md transition">
                            <figure className="flex justify-center items-center mt-2">
                                <img className="w-10 h-10 object-contain cursor-pointer"
                                    src={cat.categoryImg}
                                    alt={cat.name} />
                            </figure>
                            <div className="card-body p-2 items-center text-center hidden lg:flex lg:flex-col">
                                <h2 className="card-title text-xs lg:text-sm mb-1">{cat.name}</h2>
                                {/* <p>Click the button to filter the exercises.</p> */}
                                <div className="card-actions justify-start">
                                    <button className="btn btn-sm mt-2">Filter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                })
                }
            </div>

        </div>

    )
}

export default CategoryCard