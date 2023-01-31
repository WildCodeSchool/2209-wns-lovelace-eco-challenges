
type Props = {
    source: string,
    description: string,
    style?: string,
};

const Image = (props: Props) => {
    const {
        source,
        description,
        style,
    } = props;

    return (
        <div className={style}>
            <img src={source} alt={description} />
        </div>
    );   
};

export default Image;