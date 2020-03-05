const fontSizeFormatter = ({ initials, size }) => {
  if (typeof initials !== 'string' || typeof size !== 'number') return
  const initialsLength = initials.length > 1 ? initials.length : 2
  return Math.floor((size * 0.95) / initialsLength)
}

export default fontSizeFormatter
