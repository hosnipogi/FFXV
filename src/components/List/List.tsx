import React from 'react'
import List, { ListProps } from '@mui/material/List'
import ListItems from './ListItems'
import type { ContentType } from 'types'

interface Props extends ListProps {
  items: ContentType['items']
}

const ListComponent = (props: Props) => {
  const { items } = props
  return (
    <List {...props}>
      {items.map((item) => (
        <ListItems key={item.title} item={item} />
      ))}
    </List>
  )
}

export default ListComponent
