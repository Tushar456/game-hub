import useScreenShoots from '../hooks/useScreenShoots';
import { Image, SimpleGrid } from '@chakra-ui/react';

interface Props {
    gameId: number;
  }
  
  const GameScreenShot = ({ gameId }: Props) => {
    const { data, error, isLoading } = useScreenShoots(gameId);
  
    if (isLoading) return null;
  
    if (error) throw error;
  
   return (
    <SimpleGrid marginTop={2} columns={{base:1, md: 2}} spacing={2}>
       {data?.results.map(file => <Image key={file.id} src={file.image}></Image>)}
    </SimpleGrid>
   )
   
  };

export default GameScreenShot