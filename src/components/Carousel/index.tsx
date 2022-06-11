import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Card from 'components/Card'
import type { ContentType } from 'types'

type Props = {
  contents: ContentType[]
}

const CarouselComponent: React.FC<Props> = ({ contents }) => {
  return (
    <Carousel animation="slide" autoPlay>
      {contents.slice(6, 12).map((content, index) => (
        <Card content={content} variant="featured" key={index} />
      ))}
    </Carousel>
  )
}

export default CarouselComponent
