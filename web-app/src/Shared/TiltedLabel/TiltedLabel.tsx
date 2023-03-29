type Prop = {
  children: string;
};
const TiltedLabel = ({ children } : Prop ) => {
  return (
    <p className="tilted-label">{children}</p>
  )
}

export default TiltedLabel