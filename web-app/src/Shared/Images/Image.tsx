type Props = {
  source?: string|null;
};

const Image = (props: Props) => {
  const { source } = props;

  return (
    <div className="image">
      <img className="image-image" src={source !== null ? source : "https://picsum.photos/200"} alt="alt"/>
    </div>
  );
};

export default Image;
