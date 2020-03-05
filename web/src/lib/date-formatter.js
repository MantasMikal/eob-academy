import { format as formatFn, parseISO } from 'date-fns'

const formats = {
  LT: 'p',
  LTS: 'pp',
  L: 'd MMM yyyy',
  LL: 'd MMMM yyyy',
  LLL: 'd MMMM yyyy p',
  LLLL: 'iiii d MMMM yyyy p',
  ISO: `yyyy-MM-dd'T'HH:mm:ss'Z'`
}

const dateFormatter = (date, format = 'LLL') => {
  if (!date) return ''
  const parsedDate = typeof date === 'string' ? parseISO(date) : date
  return formatFn(parsedDate, `${formats[format]}`)
}

export default dateFormatter
