import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { StyledCard } from './styles'
import useIsMobile from 'hooks/useIsMobile'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList } from 'react-window'
import { ListItems } from 'components/List'

const FeaturedCard = ({ content }: { content: any }) => {
  const isMobile = useIsMobile()

  return (
    <StyledCard>
      {!isMobile ? (
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'row',
            height: '500px',
          }}
        >
          <Box
            sx={{
              width: '60%',
              height: '100%',
            }}
          >
            <CardMedia
              component="img"
              src={content.image as string}
              alt={content.image as string}
              sx={{
                width: '100%',
                height: '100%',
                borderRadius: 3,
                transition: 'filter 0.2s ease',
                objectFit: 'cover',
                '&:hover': {
                  filter: 'brightness(85%)',
                },
              }}
            />
          </Box>
          <Box
            sx={{
              pl: 4,
              width: '40%',
            }}
          >
            <Box
              sx={{
                textAlign: 'center',
                display: 'flex',
                alignContent: 'center',
                flexDirection: 'column',
                height: '25%',
                justifyContent: 'center',
              }}
            >
              <Typography component="h4" variant="h6" fontWeight={500}>
                {content.title}
              </Typography>
              <Typography component="h6" variant="subtitle2" color="#ccc">
                {content.description}
              </Typography>
              <Typography component="h6" variant="subtitle1" color="gold">
                USD {content.price} - SKU-{content.sku}
              </Typography>
            </Box>
            <Divider />
            <Box height={`75%`}>
              <AutoSizer>
                {({ height, width }) => {
                  return (
                    <FixedSizeList
                      height={height}
                      width={width}
                      itemSize={74}
                      itemCount={content.items.length}
                      overscan={4}
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
                          />
                        )
                      }}
                    </FixedSizeList>
                  )
                }}
              </AutoSizer>
            </Box>
          </Box>
        </CardContent>
      ) : (
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '500px',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '70%',
            }}
          >
            <CardMedia
              component="img"
              src={content.image as string}
              alt={content.image as string}
              sx={{
                width: '100%',
                height: '100%',
                borderRadius: 3,
                transition: 'filter 0.2s ease',
                objectFit: 'cover',
                '&:hover': {
                  filter: 'brightness(85%)',
                },
              }}
            />
          </Box>
          <Box
            sx={{
              textAlign: 'center',
              display: 'flex',
              alignContent: 'center',
              flexDirection: 'column',
              height: '30%',
              justifyContent: 'center',
            }}
          >
            <Typography component="h4" variant="h6" fontWeight={500}>
              {content.title}
            </Typography>
            <Typography component="h6" variant="subtitle1" color="#ccc">
              {content.description}
            </Typography>
            <Typography component="h6" variant="subtitle1" color="gold">
              USD {content.price} - SKU-{content.sku}
            </Typography>
          </Box>
        </CardContent>
      )}
    </StyledCard>
  )
}

export default FeaturedCard
