import ShowChallenge from "@shared/Challenges/ShowChallenge";
import { type Challenge } from "@gql/graphql";

type Props = {
  src: Challenge[];
};

const List = (props: Props) => {
  const { src } = props;

  return (
    <div className="flex flex-wrap justify-center md:justify-center lg:justify-around">
      {src.map((element, index) => (
        <ShowChallenge src={element} key={index} />
      ))}
    </div>
  );
};

export default List;
