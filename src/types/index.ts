export type ContentType = {
  title: string
  description: string
  image: string
  price: number
  sku: string
  items: ContentItemsType[]
}

type ContentItemsType = {
  img: string
  title: string
  itemCount: string
}

export type ModalOptionsType = Partial<
  Omit<ContentType, 'price'> & {
    header: string
    price: string
  }
>
