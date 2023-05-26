import Image from "next/image";

type Props = {
  img: string
  challengeName: string
  description: string
  endAt: string
  level: string
};

const ShowChallenge = (props: Props) => {
  const { img, challengeName, description, endAt, level } = props;

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="mx-auto w-[400px]">
        <div className="relative w-full h-[300px]">
          <Image
            src={img || "https://picsum.photos/400/250"}
            alt="image"
            fill={true}
          />
        </div>
        <div className="w-full mt-4">
          <p className="font-bold text-2xl text-center">{challengeName}</p>
          <p className="text-center">{description}</p>
          <p className="text-center">{endAt}</p>
          <p className="font-bold text-center">{level}</p>
        </div>
      </div>
    </div>

  );
};
export default ShowChallenge;
