import React from "react"

export default function Main() {
    const [ingredients , setIngredients] = React.useState([])
    const ingredientsListItems = ingredients.map(ingredient => (<li key={ingredient}>{ingredient}</li>))


    function addIngredients(formData) {
        
        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredient => [...prevIngredient , newIngredient])



    }
    return (
        <>
            <main>
                <form action={addIngredients} className="ingredient-form">
                    <input
                        aria-label="Add ingredient"
                        type="text"
                        placeholder="eg. Flour"
                        name="ingredient">

                    </input>
                    <button>
                        Add Ingredients
                    </button>
                </form>
                <ul className="ingredient-list">
                    {ingredientsListItems}
                </ul>

            </main>

        </>
    )
}