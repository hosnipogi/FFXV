import React, { MouseEvent, useCallback, useState } from 'react'
import Checkout from 'components/Checkout'
import FeaturedCard from './FeaturedCard'
import DefaultCard from './DefaultCard'
import type { ContentType } from 'types'
import { List } from 'components/List'
import useModal from 'hooks/useModal'

type Props = {
  content: ContentType
  variant?: 'featured' | 'default'
}

const CustomCard: React.FC<Props> = ({ content, variant = 'default' }) => {
  const [modal, setModal] = useState<React.ReactNode>()
  const { setModalOpen, setModalOptions } = useModal(modal)

  const handleBuy = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation()
      const { title, price, image, sku, description } = content

      setModal(
        <Checkout
          dataTitle={title}
          dataDescription={description}
          dataPrice={price.toPrecision(4)}
          dataImage={image}
          dataSku={sku}
        />
      )
      setModalOptions({
        header: 'Checkout',
        title,
        price: price.toPrecision(4),
        image,
        sku,
        description,
        orderCompleted: false,
      })
      setModalOpen()
    },
    [content, setModalOpen, setModalOptions]
  )

  if (variant === 'featured') {
    return <FeaturedCard content={content} />
  }

  return <DefaultCard content={content} handleBuy={handleBuy} />
}

const WithModal: React.FC<Props> = ({ content, variant }) => {
  const [modal, setModal] = useState<React.ReactNode>()
  const { setModalOpen, setModalOptions } = useModal(modal)

  const handleModal = useCallback(() => {
    setModal(<List items={content.items} />)
    setModalOptions({
      ...content,
      price: content.price.toPrecision(4),
      header: content.title,
    })
    setModalOpen()
  }, [setModalOpen, setModalOptions, content])

  return (
    <div onClick={handleModal}>
      <CustomCard content={content} variant={variant} />
    </div>
  )
}

export default React.memo(WithModal)
