import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'

const ListItems = (props) => {
  const { title, itemCount, img } = props.item
  const listItemStyle =
    props.variant === 'small'
      ? {
          height: 30,
          width: 30,
        }
      : {}
  return (
    <ListItem sx={{ ...props.style, pl: 0 }} key={title} component="div">
      <ListItemAvatar sx={{ minWidth: props.variant === 'small' ? 42 : 56 }}>
        <Avatar alt={title} src={img} sx={listItemStyle} />
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={itemCount}
        primaryTypographyProps={{
          fontSize: props.variant === 'small' ? 12 : 'initial',
        }}
        secondaryTypographyProps={{
          fontSize: props.variant === 'small' ? 10 : 'initial',
        }}
      />
    </ListItem>
  )
}

export default ListItems
