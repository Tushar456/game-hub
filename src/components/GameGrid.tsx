import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import { GameQuery } from "../App";


interface Props {
  gameQuery: GameQuery
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
}
const GameGrid = ({gameQuery}: Props) => {
  const { data, isLoading, error } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer  key={skeleton}><GameCardSkeleton></GameCardSkeleton></GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}><GameCard game={game}></GameCard></GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
