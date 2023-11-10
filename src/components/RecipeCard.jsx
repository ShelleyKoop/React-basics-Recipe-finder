import {
    Card,
    Heading,
    CardBody,
    Image,
    Stack,
    Text,
    Tag,
    Badge,
    Box,
} from "@chakra-ui/react";
import { useState } from "react";

export const RecipeCard = ({ recipe, setSelectedRecipe }) => {
    const { mealType, label, dietLabels, healthLabels, dishType, cautions } =
        recipe.recipe;

    const hasVegan = healthLabels.includes("Vegan");
    const hasVegetarian = healthLabels.includes("Vegetarian");
    const isVeganOrVegetarian = hasVegan || hasVegetarian;

    return (
        <Card
            maxW="sm"
            variant="outline"
            boxShadow="dark-lg"
            bg="white"
            onClick={() => setSelectedRecipe(recipe)}
            cursor="pointer"
            _hover={{ transform: "scale(1.05)" }}
        >
            <CardBody>
                <Image
                    h={"300px"}
                    w={"100%"}
                    src={recipe.recipe.image}
                    alt="Recipe Image"
                    borderRadius="lg"
                    objectFit="cover"
                    overflow="hidden"
                />
                <Stack mt="6" spacing="1" textAlign="center">
                    {mealType && (
                        <Box p="1" rounded="md">
                            <Text
                                textTransform="uppercase"
                                color="grey"
                                fontWeight="bold"
                            >
                                {mealType}
                            </Text>
                        </Box>
                    )}
                    {label && <Heading size="md">{label}</Heading>}
                    {isVeganOrVegetarian && (
                        <Box direction={["column", "row"]}>
                            {hasVegan && (
                                <Badge mr={1} colorScheme="purple">
                                    VEGAN
                                </Badge>
                            )}
                            {hasVegetarian && (
                                <Badge mr={1} colorScheme="purple">
                                    VEGETARIAN
                                </Badge>
                            )}
                        </Box>
                    )}
                    {dietLabels.length > 0 && (
                        <Box direction={["column", "row"]}>
                            {dietLabels.map((dietLabel) => (
                                <Badge
                                    key={dietLabel}
                                    colorScheme="green"
                                    mr={2}
                                >
                                    {dietLabel}
                                </Badge>
                            ))}
                        </Box>
                    )}
                    {dishType.length > 0 && (
                        <Box>
                            Dish:
                            <Text
                                as="span"
                                css={{
                                    "&:first-letter": {
                                        textTransform: "uppercase",
                                    },
                                    fontWeight: "bold",
                                    display: "inline",
                                }}
                                ml="1"
                            >
                                {dishType}
                            </Text>
                        </Box>
                    )}
                    {cautions.length > 0 && (
                        <>
                            <Text>Cautions:</Text>
                            <Box direction={["column", "row"]}>
                                {cautions.map((cautionLabel) => (
                                    <Badge
                                        key={cautionLabel}
                                        mr={1}
                                        colorScheme="red"
                                    >
                                        {cautionLabel}
                                    </Badge>
                                ))}
                            </Box>
                        </>
                    )}
                </Stack>
            </CardBody>
        </Card>
    );
};
