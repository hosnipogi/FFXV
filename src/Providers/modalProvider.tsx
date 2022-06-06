import React, { createContext, useState } from 'react'
import ModalComponent from 'components/Modal'

type Props = {
  children: React.ReactNode
}

interface IModalContext {
  setModalClose: () => void
  setModalOpen: () => void
  setModalNode: (node: React.ReactNode) => void
}

export const ModalContext = createContext<IModalContext>(undefined)

export const ModalProvider: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [modalNode, setModalNode] = useState<React.ReactNode>()

  const setModalClose = () => {
    setOpen(false)
  }

  const setModalOpen = () => {
    setOpen(true)
  }

  return (
    <ModalContext.Provider
      value={{ setModalClose, setModalOpen, setModalNode }}
    >
      {children}
      <ModalComponent open={open} setModalClose={setModalClose}>
        {React.isValidElement(modalNode) && React.cloneElement(modalNode)}
      </ModalComponent>
    </ModalContext.Provider>
  )
}
