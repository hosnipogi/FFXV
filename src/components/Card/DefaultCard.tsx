import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { StyledCard } from './styles'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList } from 'react-window'
import { ListItems } from 'components/List'

const DefaultCard = ({
  content,
  handleBuy,
}: {
  content: any
  handleBuy: (e: any) => void
}) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        image={content.image as string}
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
                >
                  {(props) => {
                    const { style, index } = props
                    const item = content.items[index]
                    const title =
                      item.title.length > 70
                        ? `${item.title.substring(0, 70)}...`
                        : item.title
                    return (
                      <ListItems
                        item={{ ...item, title }}
                        style={style}
                        key={index}
                        variant="small"
                      />
                    )
                  }}
                </FixedSizeList>
              )
            }}
          </AutoSizer>
        </Box>
      </CardContent>
      <CardContent
        onClick={handleBuy}
        sx={{
          backgroundImage:
            'linear-gradient(144.7deg, rgb(240, 211, 135) -10.98%, rgb(205, 155, 26) 113.17%)',
          p: '16px 8px',
          '-webkit-transition': 'background-image 0.2s ease-in-out',
          transition: 'background-image 0.2s ease-in-out',
          '&:hover': {
            backgroundImage:
              'linear-gradient(320.7deg, rgb(240, 211, 135) -10.98%, rgb(205, 155, 26) 113.17%)',
          },
          '&:last-child': { pb: '16px' },
        }}
      >
        <Typography
          variant="subtitle2"
          textAlign="center"
          color="#333"
          fontWeight={700}
        >
          USD {content.price}
        </Typography>
      </CardContent>
    </StyledCard>
  )
}

export default DefaultCard
