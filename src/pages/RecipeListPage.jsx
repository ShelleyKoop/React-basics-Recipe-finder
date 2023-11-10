import { Box, Center, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { SearchInput } from "../components/ui/SearchInput.jsx";
import { RecipeList } from "../components/RecipeList.jsx";

export const RecipeListPage = ({ setSelectedRecipe }) => {
    const [searchInput, setSearchInput] = useState("");

    return (
        <Box minH="100vh" minW="100vw" bg="pink.100">
            <Center flexDir="column">
                <Heading as="h1" size="xl" my={4} color="pink.500">
                    Recipe Checker
                </Heading>

                <SearchInput setSearchInput={setSearchInput} />

                <RecipeList
                    searchInput={searchInput}
                    setSelectedRecipe={setSelectedRecipe}
                />
            </Center>
        </Box>
    );
};
