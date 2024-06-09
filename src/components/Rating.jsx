// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faEnvelope} />

function Star({ filled }) {
  return <span className="ratingStar" style={{ color: filled ? 'var(--main-text-color)' : '#E3E3E3' }}>★</span>
  // return <span style={{ color: filled ? 'var(--main-text-color)' : '#E3E3E3' }}>{element}</span>
}

export default function Rating({ rating }) {
  const stars = Array.from({ length: 5 }, (v, i) => i < rating)

  return <div>
    {stars.map((filled, index) => (
      <Star key={index} filled={filled} />
    ))}
  </div>
}