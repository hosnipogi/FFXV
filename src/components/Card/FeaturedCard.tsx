import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
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
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          height: isMobile ? '100%' : '500px',
        }}
      >
        <Box
          sx={{
            width: isMobile ? '100%' : '60%',
            height: 'min(100%, 500px)',
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
              transition: 'all 0.2s ease',
              '&:hover': {
                filter: 'brightness(85%)',
              },
            }}
          />
        </Box>
        <Box
          sx={{
            pl: 4,
            width: isMobile ? '100%' : '40%',
          }}
        >
          <Box mb={2} sx={{ textAlign: isMobile ? 'center' : 'left' }}>
            <Typography component="h4" variant="h6" fontWeight={500}>
              {content.title}
            </Typography>
            <Typography component="h6" variant="subtitle1" color="#ccc">
              {content.description}
            </Typography>
          </Box>
          {!isMobile && (
            <Box height="100%">
              <AutoSizer>
                {({ height, width }) => {
                  return (
                    <FixedSizeList
                      height={height - 50}
                      width={width}
                      itemSize={80}
                      itemCount={content.items.length}
                      itemData={content.items}
                    >
                      {(props) => {
                        const { style, index, data } = props
                        const item = data[index]
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
          )}
        </Box>
      </CardContent>
    </StyledCard>
  )
}

export default FeaturedCard
