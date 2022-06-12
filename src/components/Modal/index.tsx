import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import useModal from 'hooks/useModal'
import Checkout from 'components/Checkout'

import type { ModalOptionsType } from 'types'

type Props = {
  children: React.ReactNode
  open: boolean
  modalOptions?: ModalOptionsType
  setModalClose: () => void
}

const StyledDialog = styled(Dialog)<{ image?: string }>`
  backdrop-filter: blur(4px) brightness(0.6);
  & .MuiDialog-paperScrollPaper {
    border-radius: 18px;
    background-image: url('${({ image }) => image}');
    background-position: center;
    background-size: cover;
    max-height: 82vh;
  }
`

const ModalHeader = styled(Stack)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.default};
  box-shadow: inset 0 14px 16px -4px #173c63, 0 8px 14px 7px #000;
  padding: 12px 16px 12px 32px;
`

const ModalComponent: React.FC<Props> = ({
  children,
  open,
  setModalClose,
  modalOptions,
}) => {
  const { title, image, header, price, sku, description } = modalOptions
  const [modal, setModal] = useState<React.ReactNode>()
  const { setModalOptions, setModalOpen } = useModal(modal)

  const handleCheckout = () => {
    setModalOptions({
      header: 'Checkout',
      title,
      price,
      image,
      sku,
      description,
    })
    setModal(
      <Checkout
        dataTitle={title}
        dataDescription={description}
        dataPrice={price}
        dataImage={image}
        dataSku={sku}
      />
    )
    setModalOpen()
  }

  return (
    <StyledDialog
      open={open}
      onClose={setModalClose}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      image={header === 'Checkout' ? null : image}
    >
      <ModalHeader>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 700, maxWidth: '75%' }}
        >
          {header} :: SKU-{sku}
        </Typography>
        <IconButton aria-label="Close" onClick={setModalClose}>
          <CloseIcon />
        </IconButton>
      </ModalHeader>
      <DialogContent sx={{ backdropFilter: 'contrast(0.5) brightness(0.3)' }}>
        {children}
      </DialogContent>
      {header !== 'Checkout' && (
        <DialogActions sx={{ p: 0 }}>
          <Button
            sx={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomLeftRadius: 18,
              borderBottomRightRadius: 18,
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
            onClick={() => handleCheckout()}
          >
            USD {price}
          </Button>
        </DialogActions>
      )}
    </StyledDialog>
  )
}

export default ModalComponent
