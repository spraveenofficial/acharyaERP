import { Carousel } from "../../Components";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <Carousel />
        <p className="text-xl bg-red-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          euismod, nisl eget consectetur sagittis, nisl nisi consectetur nisi,
          euismod consectetur nisi nisi euismod.
        </p>
      </div>
    </div>
  );
};

export { Home };
