import fontSizeFormatter from './font-size-formatter'

describe('fontSizeFormatter()', function() {
  test('should return correct font size based on initials length', function() {
    expect(fontSizeFormatter({ initials: 'A', size: 48 })).toEqual(22)
    expect(fontSizeFormatter({ initials: 'AA', size: 48 })).toEqual(22)
    expect(fontSizeFormatter({ initials: 'AAA', size: 48 })).toEqual(15)
    expect(fontSizeFormatter({ initials: 'AAAA', size: 48 })).toEqual(11)
  })

  test('should return correct font size based on available size', function() {
    expect(fontSizeFormatter({ initials: 'AA', size: 24 })).toEqual(11)
    expect(fontSizeFormatter({ initials: 'AA', size: 48 })).toEqual(22)
    expect(fontSizeFormatter({ initials: 'AA', size: 96 })).toEqual(45)
  })

  test('should return early without expected types', function() {
    expect(fontSizeFormatter({ initials: 'AA' })).toEqual(undefined)
    expect(fontSizeFormatter({ size: 48 })).toEqual(undefined)
    expect(fontSizeFormatter({ initials: 48, size: 48 })).toEqual(undefined)
    expect(fontSizeFormatter({ initials: 'AA', size: 'AA' })).toEqual(undefined)
  })
})
