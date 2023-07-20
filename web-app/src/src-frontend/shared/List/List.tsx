import ShowChallenge from "@shared/Challenges/ShowChallenge";
import { type Challenge } from "@gql/graphql";

type Props = {
  src: Challenge[];
};

const List = (props: Props) => {
  const { src } = props;

  return (
    <>
      {src.map((element, index) => (
        <div className="m-5" key={index}>
          <ShowChallenge
            img={element.img || "https://picsum.photos/400/250"}
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
