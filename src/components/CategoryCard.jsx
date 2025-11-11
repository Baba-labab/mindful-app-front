import React from 'react'

function CategoryCard() {
    const categories = [
        { name: "balance",
            categoryImg: ""
        },
        { name: "energy",
            categoryImg: ""
        },
        { name: "expression",
            categoryImg:""
         },
        { name: "connection",
            categoryImg:""
         },
        { name: "nourishment",
            categoryImg:""
         }];

return (
    <>
        {categories.map((cat) => { 
           return <div key={cat.name} className="card bg-base-100 image-full w-96 shadow-sm">
                <figure>
                    <img
                        src={cat.categoryImg}
                        alt={cat.name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{cat.name}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Start</button>
                    </div>
                </div>
            </div>

        })
        }
    </>
)
}

export default CategoryCard