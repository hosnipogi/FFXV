import React, { createContext, useState } from 'react'
import ModalComponent from 'components/Modal'
import { ModalOptionsType } from 'types'

type Props = {
  children: React.ReactNode
}

interface IModalContext {
  setModalClose: () => void
  setModalOpen: () => void
  setModalNode: (node: React.ReactNode) => void
  setModalOptions: ({}: ModalOptionsType) => void
}

export const ModalContext = createContext<IModalContext>(undefined)

export const ModalProvider: React.FC<Props> = ({ children }) => {
  const [modalNode, setModalNode] = useState<React.ReactNode>()
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState<ModalOptionsType>({})

  const setModalClose = () => {
    setOpen(false)
  }

  const setModalOpen = () => {
    setOpen(true)
  }

  const setModalOptions: IModalContext['setModalOptions'] = (options) => {
    setOptions(options)
  }

  return (
    <ModalContext.Provider
      value={{ setModalClose, setModalOpen, setModalNode, setModalOptions }}
    >
      {children}
      <ModalComponent
        open={open}
        setModalClose={setModalClose}
        modalOptions={options}
      >
        {React.isValidElement(modalNode) && React.cloneElement(modalNode)}
      </ModalComponent>
    </ModalContext.Provider>
  )
}
