function Card({ strMeal, strMealThumb, strInstructions }) {
    return (
    <>
        <div className="card w-96 bg-[#f3ae6d] text-primary-content shadow-xl">
            <figure>
            <img className="h-10px" src={strMealThumb} alt={strMeal} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {strMeal}
                    <div className="badge badge-secondary">Lets go</div>
                </h2>
            <p>{strInstructions.substring(0,150)}...</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Photos</div>
                </div>
            </div>
        </div>
        </>
      
    );
  }
  
  export default Card;
  