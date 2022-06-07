import React, { useCallback, useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import type { Content } from 'types'
import useIsMobile from 'hooks/useIsMobile'
import ListItems from 'components/ListItems'

import useModal from 'hooks/useModal'
import { ModalOverlay } from 'components/Modal'

const StyledCard = styled(Card)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 12px;
  transition: all 0.2s ease;
  margin-inline: auto;
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
          <CardMedia
            component="img"
            src={content.image as string}
            alt={content.image as string}
            sx={{
              maxWidth: '600px',
              borderRadius: 2,
            }}
          />
          <Box
            sx={{
              marginLeft: isMobile ? 0 : 4,
              maxWidth: isMobile ? '100%' : '50%',
            }}
          >
            <Typography variant="h4">{content.title}</Typography>
            {/* <Stack direction="row" sx={{ marginBottom: 2 }}>
              <Chip
                variant="outlined"
                sx={{ marginRight: 1 }}
                label={content.category}
                size="small"
              />
              <Chip
                color="warning"
                label={`SKU# ${content.sku}`}
                size="small"
              />
            </Stack> */}
            <Typography variant="h6">{content.description}</Typography>
          </Box>
        </CardContent>
      </StyledCard>
    )
  }

  return (
    <StyledCard>
      <CardMedia
        component="img"
        image={content.image as string}
        sx={{ maxHeight: '280px', minHeight: '280px', objectFit: 'cover' }}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6">{content.title}</Typography>
        <Typography variant="subtitle2" color="info.main">
          {content.description}
        </Typography>
      </CardContent>
      <CardContent
        sx={{
          backgroundColor: '#c46300',
          p: 1,
          '&:last-child': { pb: 1 },
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

const WithModal = ({ content, variant }: { content: any; variant?: any }) => {
  const [modal, setModal] = useState<React.ReactNode>()
  const { setModalOpen } = useModal(modal)

  const handleModal = useCallback(
    (node: React.ReactNode) => {
      setModal(node)
      setModalOpen()
    },
    [setModalOpen]
  )

  return (
    <div
      onClick={() =>
        handleModal(
          <ModalOverlay component={<ListItems items={content.items} />} />
        )
      }
    >
      <CustomCard content={content} variant={variant} />
    </div>
  )
}

export default React.memo(WithModal)
