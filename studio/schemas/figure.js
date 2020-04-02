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
      name: 'caption',
      title: 'Caption',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'isZoomable',
      title: 'Can be zoomed?',
      type: 'boolean',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'maxWidth',
      title: 'Max width',
      type: 'number',
      description: '(Optional) Set if the image on the page will not be big. Optimzes performance',
      options: {
        isHighlighted: true
      }
    }
  ],
  initialValue: {
    isZoomable: false
  }
}
