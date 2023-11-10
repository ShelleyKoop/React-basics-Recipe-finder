import { useState } from "react";
import { data } from "../utils/data";
import { RecipeList } from "./RecipeList.jsx";

export const RecipeSearch = ({ setSelectedRecipe }) => {
    const [searchField, setSearchField] = useState("");

    // object to hold matchingResults on recipa name (label)
    const matchingResults = data.hits.filter((element) => {
        return element.recipe.label
            .toLowerCase()
            .includes(searchField.toLowerCase());
    });

    // object to hold health labels results
    const labels = data.hits.filter((element) => {
        return element.recipe.healthLabels.some((label) => {
            return label.toLowerCase().includes(searchField.toLowerCase());
        });
    });

    return (
        <>
            {/* Pass both matchingResults and labels as separate props */}
            <RecipeList
                setSelectedRecipe={setSelectedRecipe}
                matchingResults={matchingResults}
                labels={labels}
            />
        </>
    );
};
