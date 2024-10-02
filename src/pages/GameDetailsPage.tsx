import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { GridItem, Heading,SimpleGrid,Spinner} from "@chakra-ui/react";
import ExpandableState from "../components/ExpandableState";
import GameAttribute from "../components/GameAttribute";
import GameTrailer from "../components/GameTrailer";
import GameScreenShot from "../components/GameScreenShot";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner></Spinner>;
  if (error || !game) throw error;
  return (
    <SimpleGrid columns={{base:1, md:2}} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableState>{game.description_raw}</ExpandableState>
        <GameAttribute game={game}></GameAttribute>
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} ></GameTrailer>
        <GameScreenShot gameId={game.id}></GameScreenShot>
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
