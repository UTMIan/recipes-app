function Card(strMeal, strMealThumb, strInstructions){
    return(
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img className="h-20"
         src={strMealThumb} 
         alt={strMeal} 
            />
         </figure>
            <div className="card-body">
                <h2 className="card-title">
                {strMeal}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{strInstructions}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div> 
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
}

export default Card;