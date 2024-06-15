export default function Banner({ backgroundImage, children }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="dark"></div>
      {children}
    </div>
  )
}
