type Props = {
  source?: string|null;
};

const Image = (props: Props) => {
  const { source } = props;

  return (
    <div className="w-full">
      <img className="h-60
        sm:h-72
        md:h-32
        lg:h-44
        xl:h-64
        object-cover
        w-full
        object-bottom" src={source !== null ? source : "https://picsum.photos/200"} alt="alt"/>
    </div>
  );
};

export default Image;
