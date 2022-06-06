import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Image from 'components/Image'
import type { Content } from 'types'
import useIsMobile from 'hooks/useIsMobile'

const StyledCard = styled(Card)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 12px;
  transition: all 0.2s ease;
  &:hover {
    filter: brightness(88%);
  }
`

type Props = {
  content: Content
  variant?: 'featured' | 'default'
}

const CustomCard: React.FC<Props> = ({ content, variant = 'default' }) => {
  const isMobile = useIsMobile()
  if (variant === 'featured') {
    return (
      <StyledCard>
        <CardContent
          sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}
        >
          {content.image && (
            <Image width="100%" height="100%" src={content.image} alt="any" />
          )}
          <Box
            sx={{
              marginLeft: isMobile ? 0 : 4,
              maxWidth: isMobile ? '100%' : '50%',
            }}
          >
            <Typography variant="h4">{content.title}</Typography>
            <Stack direction="row" sx={{ marginBottom: 2 }}>
              <Chip
                variant="outlined"
                sx={{ marginRight: 1 }}
                label={content.date}
                size="small"
              />
              <Chip
                color="warning"
                label={`SKU# ${content.sku}`}
                size="small"
              />
            </Stack>
            <Typography variant="h6">{content.body}</Typography>
          </Box>
        </CardContent>
      </StyledCard>
    )
  }

  return (
    <StyledCard>
      <CardContent>
        {content.image && (
          <Image
            width="100%"
            height="100%"
            radius={2}
            src={content.image}
            alt="any"
          />
        )}
        <Typography>{content.title}</Typography>
        <Typography>{content.date}</Typography>
        <Typography>{content.body}</Typography>
      </CardContent>
    </StyledCard>
  )
}

export default CustomCard
