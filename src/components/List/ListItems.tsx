import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import type { ContentItemsType } from 'types'

type Props = {
  item: ContentItemsType
  variant?: 'small'
  style?: any
}

const ListItems = ({ item, variant, style }: Props) => {
  const { title, itemCount, img } = item
  const listItemStyle =
    variant === 'small'
      ? {
          height: 30,
          width: 30,
        }
      : {}
  return (
    <ListItem sx={{ pl: 0 }} style={style} key={title} component="div">
      <ListItemAvatar sx={{ minWidth: variant === 'small' ? 42 : 56 }}>
        <Avatar alt={title} src={img} sx={listItemStyle} />
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={itemCount}
        primaryTypographyProps={{
          fontSize: variant === 'small' ? 12 : 'initial',
        }}
        secondaryTypographyProps={{
          fontSize: variant === 'small' ? 10 : 'initial',
        }}
      />
    </ListItem>
  )
}

export default ListItems
