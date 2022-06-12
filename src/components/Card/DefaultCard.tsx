import React, { MouseEvent } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { StyledCard } from './styles'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList, areEqual } from 'react-window'
import { ListItems } from 'components/List'
import type { ContentType, RowProps } from 'types'

type Props = {
  content: ContentType
  handleBuy: (e: MouseEvent) => void
}

const DefaultCard = ({ content, handleBuy }: Props) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        image={content.image}
        sx={{
          maxHeight: '200px',
          minHeight: '200px',
          objectFit: 'cover',
          transition: 'filter 0.2s ease',
          '&:hover': {
            filter: 'brightness(85%)',
          },
        }}
        alt={content.title}
      />
      <CardContent sx={{ height: 400 }}>
        <Box
          sx={{
            textAlign: 'center',
            boxShadow: '0px 18px 20px -18px #13375e',
            height: '20%',
          }}
        >
          <Typography component="h5" variant="subtitle2">
            {content.title}
          </Typography>
          <Typography component="h6" variant="caption" color="info.main">
            {content.description}
          </Typography>
        </Box>
        <Box height="80%">
          <AutoSizer>
            {({ height, width }) => {
              return (
                <FixedSizeList
                  height={height}
                  width={width}
                  itemSize={60}
                  itemCount={content.items.length}
                  itemData={content.items}
                >
                  {RowsMemoized}
                </FixedSizeList>
              )
            }}
          </AutoSizer>
        </Box>
      </CardContent>
      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
        <Button
          onClick={handleBuy}
          sx={{
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            width: '100%',
            backgroundImage:
              'linear-gradient(180deg, #ffd775 12.02%, #feb528 54.17%, #f7811e 130.17%)',
            p: '16px 8px',
            webkitTransition: 'background-image 0.2s ease-in-out',
            transition: 'background-image 0.2s ease-in-out',
            color: '#333',
            fontWeight: 700,
            fontSize: '14px',
            '&:hover': {
              backgroundImage:
                'linear-gradient(270deg, #ffd775 12.02%, #feb528 54.17%, #f7811e 130.17%)',
            },
          }}
        >
          USD {content.price.toPrecision(4)}
        </Button>
      </CardContent>
    </StyledCard>
  )
}

const RowsMemoized = React.memo<RowProps>((props) => {
  const { style, index, data } = props
  const item = data[index]
  const title =
    item.title.length > 70 ? `${item.title.substring(0, 70)}...` : item.title
  return (
    <ListItems
      item={{ ...item, title }}
      style={style}
      key={index}
      variant="small"
    />
  )
}, areEqual)

RowsMemoized.displayName = 'DefaultCardListRows'

export default DefaultCard
