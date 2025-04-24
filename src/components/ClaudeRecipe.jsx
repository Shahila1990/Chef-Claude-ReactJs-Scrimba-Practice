import ReactMarkdown from "react-markdown"

export default function ClaudeRecipe(props){
    return(
        <>
            <section className="suggested-recipe-container" aria-live="polite">
                <h2>Chef Claude Recommends:</h2>
                {props.loading ? (
                    <div className="spinner-container">
                        <div className="spinner"></div>
                    </div>
                ) : (
                    <ReactMarkdown>{props.recipe}</ReactMarkdown>
                )}
            </section>
        </>
    )
}