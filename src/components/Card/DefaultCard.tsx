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
          transition: 'all 0.2s ease',
          '&:hover': {
            filter: 'brightness(85%)',
          },
        }}
        alt={content.title}
      />
      <CardContent sx={{ minHeight: '120px' }}>
        <Box
          sx={{
            textAlign: 'center',
            boxShadow: '0px 18px 20px -18px #13375e',
            minHeight: 80,
          }}
        >
          <Typography component="h5" variant="subtitle1">
            {content.title}
          </Typography>
          <Typography component="h6" variant="subtitle2" color="info.main">
            {content.description}
          </Typography>
        </Box>
        <Box height={300}>
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
                  {(props) => {
                    const { style, index, data } = props
                    const item = data[index]
                    return (
                      <ListItems
                        item={item}
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
          color="yellow"
          fontWeight={700}
          sx={{ textShadow: '-1px 1px 2px #5a4300' }}
        >
          BUY - $ {content.price}
        </Typography>
      </CardContent>
    </StyledCard>
  )
}

export default DefaultCard
