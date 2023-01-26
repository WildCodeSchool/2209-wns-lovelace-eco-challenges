
type Props = {
    source: string,
    description: string,
    style: string,
};

const PngLogo = (props: Props) => {
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

export default PngLogo;