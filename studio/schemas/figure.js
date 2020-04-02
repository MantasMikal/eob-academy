export default {
  name: 'figure',
  title: 'Figure',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      title: 'Alternative text (for screen readers)',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'isZoomable',
      title: 'Can be zoomed?',
      type: 'boolean'
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      options: {
        isHighlighted: true
      }
    }
  ]
}
