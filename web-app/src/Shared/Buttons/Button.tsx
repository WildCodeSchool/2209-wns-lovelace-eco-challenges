const Button = (props: any) => {
    const { name } = props;

    return (
        <button className="button">
            { name }
        </button>
    )

};

export default Button;