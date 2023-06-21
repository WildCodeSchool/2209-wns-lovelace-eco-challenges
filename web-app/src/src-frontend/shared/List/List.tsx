import ShowChallenge from "@shared/Challenges/ShowChallenge";
import { type Challenge } from "@gql/graphql";

type Props = {
  src: Challenge[];
};

const List = (props: Props) => {
  const { src } = props;
  const { challengeName, description, img, endAt, level, id } = src;

  return (
    <>
      {src.map((element, index) => (
        <div key={index}>
          <ShowChallenge
            img={element.img}
            challengeName={element.challengeName}
            description={element.description}
            endAt={element.endAt}
            level={element.level}
          />
        </div>
      ))}
    </>
  );
};

export default List;
