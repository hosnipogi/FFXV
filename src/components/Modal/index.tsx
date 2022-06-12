import React, { useState } from 'react'
import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import useModal from 'hooks/useModal'
import Checkout from 'components/Checkout'
import { StyledDialog, ModalHeader, BuyButtonStyle } from './styles'

import type { ModalOptionsType } from 'types'

type Props = {
  children: React.ReactNode
  open: boolean
  modalOptions?: ModalOptionsType
  setModalClose: () => void
}

const ModalComponent: React.FC<Props> = ({
  children,
  open,
  setModalClose,
  modalOptions,
}) => {
  const { title, image, header, price, sku, description } = modalOptions
  const [modal, setModal] = useState<React.ReactNode>()
  const { setModalOptions } = useModal(modal)

  const handleBuy = () => {
    setModalOptions({
      header: 'Checkout',
      title,
      price,
      image,
      sku,
      description,
      orderCompleted: false,
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
  }

  return (
    <StyledDialog
      open={open}
      onClose={setModalClose}
      image={header === 'Checkout' ? null : image}
    >
      <ModalHeader>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 700, maxWidth: '75%' }}
        >
          {header} : :{' '}
          <Typography component="span" variant="subtitle1" color="gold">
            SKU-{sku}
          </Typography>
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
          <Button sx={BuyButtonStyle} onClick={handleBuy}>
            USD {price}
          </Button>
        </DialogActions>
      )}
    </StyledDialog>
  )
}

export default ModalComponent
