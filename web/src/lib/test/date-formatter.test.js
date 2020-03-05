import dateFormatter from '../date-formatter'

describe('dateFormatter', function() {
  test('should return empty string if no date passed', function() {
    expect(dateFormatter()).toEqual('')
  })

  test('should return expected default format', function() {
    expect(dateFormatter(new Date('2020-01-01'))).toEqual(
      '1 January 2020 12:00 AM'
    )
  })

  test('should return expected defined format', function() {
    expect(dateFormatter(new Date('2020-01-01'), 'LT')).toEqual('12:00 AM')
    expect(dateFormatter(new Date('2020-01-01'), 'LTS')).toEqual('12:00:00 AM')
    expect(dateFormatter(new Date('2020-01-01'), 'L')).toEqual('1 Jan 2020')
    expect(dateFormatter(new Date('2020-01-01'), 'LL')).toEqual(
      '1 January 2020'
    )
    expect(dateFormatter(new Date('2020-01-01'), 'LLL')).toEqual(
      '1 January 2020 12:00 AM'
    )
    expect(dateFormatter(new Date('2020-01-01'), 'LLLL')).toEqual(
      'Wednesday 1 January 2020 12:00 AM'
    )
    expect(dateFormatter(new Date('2020-01-01'), 'ISO')).toEqual(
      '2020-01-01T00:00:00Z'
    )
  })
})
