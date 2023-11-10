import { RecipeCard } from "./RecipeCard";
import { Grid } from "@chakra-ui/react";
import { data } from "../utils/data.js";

export const RecipeList = ({ searchInput, setSelectedRecipe }) => {
    // object to hold matchingResults on recipa name (label)
    const matchingResults = data.hits.filter((element) => {
        function labelMatchesSearchInput() {
            return element.recipe.label
                .toLowerCase()
                .includes(searchInput.toString().toLowerCase());
        }

        function healthLabelMatchesSearchInput() {
            return element.recipe.healthLabels.some((label) => {
                return label
                    .toLowerCase()
                    .includes(searchInput.toString().toLowerCase());
            });
        }

        // If either one of them matches, we accept the result.
        return labelMatchesSearchInput() || healthLabelMatchesSearchInput();
    });

    return (
        <>
            <Grid
                templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                    xl: "repeat(4, 1fr)",
                    "2xl": "repeat(4, 1fr)",
                }}
                gap={8}
                marginY={20}
                marginX={{ base: "1rem" }}
            >
                {matchingResults.map((recipe) => (
                    <RecipeCard
                        setSelectedRecipe={setSelectedRecipe}
                        recipe={recipe}
                        key={recipe.recipe.label}
                    />
                ))}
            </Grid>
        </>
    );
};
