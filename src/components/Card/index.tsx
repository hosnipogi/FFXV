import React, { useCallback, useState } from 'react'
import Checkout from 'components/Checkout'
import FeaturedCard from './FeaturedCard'
import DefaultCard from './DefaultCard'
import type { Content } from 'types'
import { List } from 'components/List'
import useModal from 'hooks/useModal'

type Props = {
  content: Content
  variant?: 'featured' | 'default'
}

const CustomCard: React.FC<Props> = ({ content, variant = 'default' }) => {
  const [modal, setModal] = useState<React.ReactNode>()
  const { setModalOpen, setModalOptions } = useModal(modal)

  const handleBuy = (e, { dataTitle, dataPrice, dataDescription }) => {
    e.stopPropagation()
    setModal(
      <Checkout
        dataTitle={dataTitle}
        dataDescription={dataDescription}
        dataPrice={dataPrice}
      />
    )
    setModalOptions({
      title: 'Checkout',
      dataTitle,
      dataPrice,
      dataDescription,
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
          dataTitle: content.title,
          dataPrice: content.price,
          dataDescription: content.description,
        })
      }
    />
  )
}

type WithModalProps = {
  content: any
  variant?: any
}

const WithModal: React.FC<WithModalProps> = ({ content, variant }) => {
  const [modal, setModal] = useState<React.ReactNode>()
  const { setModalOpen, setModalOptions } = useModal(modal)

  const handleModal = useCallback(
    (node: React.ReactNode) => {
      const { title, image } = content
      setModal(node)
      setModalOptions({ title, bgimage: image })
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
