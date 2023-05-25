import Image from "next/image";
import Link from "next/link";
import { type Challenge } from "@gql/graphql";

type Props = {
  src: Challenge;
};

const ShowChallenge = (props: Props) => {
  const { src } = props;

  return (
    <div className="mx-[10px] w-[100%] flex flex-col items-center justify-center lg:w-[45%] 2xl:w-[30%]">
      <div className="relative w-[400px] h-[300px]">
        <Image
          src={src.img || "https://picsum.photos/400/250"}
          alt="image"
          fill={true}
        />
      </div>
      <div className="w-[400px] h-[250px] mt-4">
        <p className="font-bold text-2xl">{src.challengeName}</p>
        <p className="line-clamp-3">{src.description}</p>
        <p>{src.endAt}</p>
        <p className="font-bold">{src.level}</p>
        {/* <Link href={`/challenge/${src.id}`}>
      <span className="text-blue-600">Voir plus</span>
    </Link> */}
      </div>
    </div >

  );
};

export default ShowChallenge;
