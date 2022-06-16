import { Box } from "@chakra-ui/react";
import { Carousel, CategoryCard } from "../../Components";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <Carousel />
        <Box width="100%">
          <CategoryCard />
        </Box>
      </div>
    </div>
  );
};

export { Home };
