import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"

export default function Main() {
    const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )
    

    const [recipeShown, setRecipeShown] = React.useState(false)

    function showRecipe(){
        setRecipeShown(prevShown => !prevShown)

    }

    function addIngredients(formData) {

        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredient => [...prevIngredient, newIngredient])



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
                {ingredients.length > 0 && <IngredientsList 
                    showRecipe={showRecipe}
                    ingredients={ingredients}

                />}

                {recipeShown && <ClaudeRecipe />}

            </main>

        </>
    )
}