type Props = {
  source: string;
  description: string;
  css?: string;
};

const Image = (props: Props) => {
  const { source, description, css } = props;

  return (
    <div className={css}>
      <img src={source} alt={description} />
    </div>
  );
};

export default Image;
