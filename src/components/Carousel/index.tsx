import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Card from 'components/Card'

type Props = {
  contents: any[]
}

const CarouselComponent: React.FC<Props> = ({ contents }) => {
  return (
    <Carousel>
      {contents.map((content, index) => (
        <Card content={content} variant="featured" key={index} />
      ))}
    </Carousel>
  )
}

export default CarouselComponent
