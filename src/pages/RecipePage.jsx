import {
    Container,
    Grid,
    Box,
    Flex,
    Button,
    Image,
    Card,
    CardBody,
    Stack,
    Heading,
    Text,
    Tag,
    Badge,
    Spacer,
    HStack,
    GridItem,
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";

export const RecipePage = ({ selectedRecipe, setSelectedRecipe }) => {
    const recipe = selectedRecipe;

    const nutritionsToShow = [
        "ENERC_KCAL",
        "CHOCDF",
        "PROCNT",
        "FAT",
        "CHOLE",
        "NA",
    ];

    return (
        <>
            <Box bg="pink.100">
                <Container
                    maxW={{ base: "20em", md: "35em", xl: "50em" }}
                    centerContent
                >
                    <Flex py="2rem" justifyContent={"center"}>
                        <Card
                            variant="outline"
                            bg="white"
                            cursor="pointer"
                            overflow="hidden"
                            alt={recipe.recipe.label}
                        >
                            <CardBody>
                                <Image
                                    w={"100%"}
                                    maxH={{
                                        base: "12em",
                                        md: "20em",
                                        xl: "25em",
                                    }}
                                    src={recipe.recipe.image}
                                    alt=""
                                    borderRadius="lg"
                                    objectFit="cover"
                                    overflow="hidden"
                                />
                                <Stack mt="6" spacing="3"></Stack>
                                <Stack>
                                    <Grid
                                        templateColumns="repeat(2, 1fr)"
                                        gap={8}
                                    >
                                        <Box>
                                            <Text
                                                textTransform="uppercase"
                                                color="grey"
                                                fontWeight="bold"
                                                fontSize="12"
                                            >
                                                {recipe.recipe.mealType}
                                            </Text>

                                            <Heading size="md">
                                                {recipe.recipe.label}
                                            </Heading>

                                            <Text>
                                                Dish type:{" "}
                                                <strong>
                                                    {recipe.recipe.dishType[0]}
                                                </strong>
                                            </Text>

                                            <Text mb={3}>
                                                {recipe.recipe.totalTime >
                                                    0 && (
                                                    <span>
                                                        Total cooking time:{" "}
                                                        <strong>
                                                            {
                                                                recipe.recipe
                                                                    .totalTime
                                                            }{" "}
                                                            min.
                                                        </strong>
                                                        <br />
                                                    </span>
                                                )}
                                                Servings:{" "}
                                                <strong>
                                                    {recipe.recipe.yield}
                                                </strong>
                                            </Text>

                                            <strong>Ingredients: </strong>
                                            <ul
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                {recipe.recipe.ingredientLines.map(
                                                    (ingredient, index) => (
                                                        <li key={index}>
                                                            {ingredient}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </Box>
                                        <Box
                                            direction={["column", "row"]}
                                            maxW="90%"
                                        >
                                            <Text fontWeight="bold">
                                                Health labels:
                                            </Text>
                                            {recipe.recipe.healthLabels.map(
                                                (healthLabel) =>
                                                    healthLabel ? (
                                                        <Badge
                                                            key={healthLabel}
                                                            mr={1}
                                                            colorScheme="purple"
                                                        >
                                                            {healthLabel}
                                                        </Badge>
                                                    ) : null
                                            )}
                                            <Spacer my={3} />
                                            <Text fontWeight="bold">Diet:</Text>
                                            {recipe.recipe.dietLabels.map(
                                                (dietLabel) =>
                                                    dietLabel ? (
                                                        <Badge
                                                            key={dietLabel}
                                                            colorScheme="green"
                                                            mr={2}
                                                        >
                                                            {dietLabel}
                                                        </Badge>
                                                    ) : null
                                            )}
                                            <Spacer my={3} />
                                            <Text fontWeight="bold">
                                                Cautions:
                                            </Text>
                                            {recipe.recipe.cautions.map(
                                                (cautionLabel) =>
                                                    cautionLabel ? (
                                                        <Badge
                                                            key={cautionLabel}
                                                            colorScheme="red"
                                                            mr={2}
                                                        >
                                                            {cautionLabel}
                                                        </Badge>
                                                    ) : null
                                            )}

                                            <Text
                                                fontWeight="bold"
                                                textTransform="uppercase"
                                                mt={4}
                                            >
                                                Total nutrients
                                            </Text>

                                            <Grid
                                                templateColumns="repeat(4, 1fr)"
                                                gap={6}
                                            >
                                                {nutritionsToShow.map(
                                                    (nutrition) => (
                                                        <GridItem
                                                            mr={2}
                                                            key={nutrition}
                                                        >
                                                            <Text fontSize="10">
                                                                {Math.round(
                                                                    recipe
                                                                        .recipe
                                                                        .totalNutrients[
                                                                        nutrition
                                                                    ].quantity
                                                                )}
                                                                {recipe.recipe
                                                                    .totalNutrients[
                                                                    nutrition
                                                                ].unit == "g" ||
                                                                recipe.recipe
                                                                    .totalNutrients[
                                                                    nutrition
                                                                ].unit == "mg"
                                                                    ? " " +
                                                                      recipe
                                                                          .recipe
                                                                          .totalNutrients[
                                                                          nutrition
                                                                      ].unit
                                                                    : ""}
                                                            </Text>
                                                            <Text
                                                                textTransform="uppercase"
                                                                fontSize="10"
                                                                fontWeight="bold"
                                                                color="gray.600"
                                                            >
                                                                {
                                                                    recipe
                                                                        .recipe
                                                                        .totalNutrients[
                                                                        nutrition
                                                                    ].label
                                                                }
                                                            </Text>
                                                        </GridItem>
                                                    )
                                                )}
                                            </Grid>
                                        </Box>
                                        <Spacer />
                                    </Grid>
                                </Stack>
                            </CardBody>
                        </Card>
                    </Flex>
                </Container>

                <HStack
                    justify={"right"}
                    pr={{ base: "1rem" }}
                    pb={{ base: "1rem" }}
                    position={"sticky"}
                    bottom={0}
                >
                    <Button
                        w="fit-content"
                        variant="outline"
                        colorScheme="teal"
                        onClick={() => setSelectedRecipe()}
                        leftIcon={<ArrowLeftIcon />}
                    >
                        Back
                    </Button>
                </HStack>
            </Box>
        </>
    );
};
