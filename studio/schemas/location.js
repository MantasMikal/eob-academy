import { MdMyLocation } from 'react-icons/md'

export default {
  type: 'object',
  name: 'location',
  title: 'Location',
  icon: MdMyLocation,
  fields: [
    {
      type: 'number',
      name: 'lat',
      description: 'Tip: A quick way to find these -> https://www.latlong.net/',
      title: 'Latitude'
    },
    {
      type: 'number',
      name: 'lng',
      title: 'Longitude'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title = 'Untitled location' }) {
      return {
        title,
        media: MdMyLocation
      }
    }
  }
}
