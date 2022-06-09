import React from 'react'
import Box from '@mui/material/Stack'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Typography from '@mui/material/Typography'
import { styled } from "@mui/material/styles";
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import type { ModalOptionsType } from 'types'

type Props = {
  children: React.ReactNode
  open: boolean
  modalOptions?: ModalOptionsType
  setModalClose: () => void
}

const StyledDialog = styled(Dialog)<{ bgimage?: string }>`
  backdrop-filter: blur(4px) brightness(0.6);
  & .MuiDialog-paperScrollPaper {
    border-radius: 18px;
    background-image: url('${({ bgimage }) => bgimage}');
    background-position: center;
    background-size: cover;
    max-height: 82vh;
  }
`

const ModalHeader = styled(Box)`
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
  const { title, bgimage } = modalOptions
  return (
    <StyledDialog
      open={open}
      onClose={setModalClose}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      bgimage={bgimage}
    >
      <ModalHeader>
        <Typography variant="h6" sx={{ fontWeight: 700, maxWidth: '75%' }}>
          {title}
        </Typography>
        <Box>
          <IconButton aria-label="Close" onClick={setModalClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </ModalHeader>
      <DialogContent sx={{ backdropFilter: 'contrast(0.5) brightness(0.3)' }}>
        {children}
      </DialogContent>
    </StyledDialog>
  )
}

export default ModalComponent
