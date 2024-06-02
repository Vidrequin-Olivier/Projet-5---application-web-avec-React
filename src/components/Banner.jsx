export default function Banner({ backgroundImage, opacity, boxShadow, marginBottom, children }) {
  return (
    <div className="banner" style={{ 
      backgroundImage: `url(${backgroundImage})`,
      boxShadow: {boxShadow},
      marginBottom: `clamp(${marginBottom})`
    }}>
      <div className="dark" style={{ opacity: opacity }}></div>
      {children}
    </div>
  );
}
