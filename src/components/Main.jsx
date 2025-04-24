import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromMistral } from "../ai"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])


    const [recipe, setRecipe] = React.useState("")
    const [loading, setLoading] = React.useState(false)

    async function getRecipe() {
        setLoading(true)
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
        setLoading(false)

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
                    getRecipe={getRecipe}
                    ingredients={ingredients}

                />}

                {(loading || recipe) && <ClaudeRecipe recipe={recipe} loading={loading}/>}

            </main>

        </>
    )
}