import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'

const ListItems = ({ items }) => {
  return (
    <List>
      {items.map((item: any) => (
        <ListItem key={item.title}>
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
