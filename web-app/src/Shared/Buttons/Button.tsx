const Button = (props: any) => {
  const { name, type, icon = null } = props;

  return (
    <button className={type}>
      {name}
      {icon ?? <i>{icon}</i>}
    </button>
  );
};

export default Button;
