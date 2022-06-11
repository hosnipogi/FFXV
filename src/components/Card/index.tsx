import React, { MouseEvent, useCallback, useState } from 'react'
// import Box from '@mui/material/Box'
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

  const handleBuy = (
    e: MouseEvent,
    {
      title,
      price,
      description,
      image,
      sku,
    }: Omit<ContentType, 'items' | 'price'> & { price: string }
  ) => {
    e.stopPropagation()
    setModal(
      <Checkout
        dataTitle={title}
        dataDescription={description}
        dataPrice={price}
        dataImage={image}
        dataSku={sku}
      />
    )
    setModalOptions({
      header: 'Checkout',
      title,
      price,
      image,
      sku,
      description,
    })
    setModalOpen()
  }

  if (variant === 'featured') {
    return <FeaturedCard content={content} />
  }

  return (
    <DefaultCard
      content={content}
      handleBuy={(e) =>
        handleBuy(e, {
          title: content.title,
          price: content.price.toPrecision(4),
          description: content.description,
          image: content.image,
          sku: content.sku,
        })
      }
    />
  )
}

const WithModal: React.FC<Props> = ({ content, variant }) => {
  const [modal, setModal] = useState<React.ReactNode>()
  const { setModalOpen, setModalOptions } = useModal(modal)

  const handleModal = useCallback(
    (node: React.ReactNode) => {
      setModal(node)
      setModalOptions({
        ...content,
        price: content.price.toPrecision(4),
        header: content.title,
      })
      setModalOpen()
    },
    [setModalOpen, setModalOptions, content]
  )

  return (
    <div onClick={() => handleModal(<List items={content.items} />)}>
      <CustomCard content={content} variant={variant} />
    </div>
  )
}

export default React.memo(WithModal)
