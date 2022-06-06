import React from 'react'
import Modal from '@mui/material/Modal'

type Props = {
  children: React.ReactNode
  open: boolean
  setModalClose: () => void
}

const ModalComponent: React.FC<Props> = ({ children, open, setModalClose }) => {
  return (
    <Modal
      open={open}
      onClose={setModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>{children}</>
    </Modal>
  )
}

export default ModalComponent
