import React from 'react'
import List, { ListProps } from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import type { ContentType } from 'types'

interface Props extends ListProps {
  items: ContentType['items']
}

const ListItems = (props: Props) => {
  const { items } = props
  return (
    <List {...props}>
      {items.map((item) => (
        <ListItem key={item.title} component={'div'}>
          <ListItemAvatar>
            <Avatar alt={item.title} src={item.img} />
          </ListItemAvatar>
          <ListItemText primary={item.title} secondary={item.itemCount} />
        </ListItem>
      ))}
    </List>
  )
}

export default ListItems
