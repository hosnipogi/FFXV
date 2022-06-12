import React, { createContext, useState, useCallback } from 'react'
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
  options: ModalOptionsType
}

export const ModalContext = createContext<IModalContext>(undefined)

export const ModalProvider: React.FC<Props> = ({ children }) => {
  const [modalNode, setModalNode] = useState<React.ReactNode>()
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState<ModalOptionsType>({})

  const setModalClose = useCallback(() => {
    setOpen(false)
    setTimeout(() => {
      setModalNode(null)
      setOptions({})
    }, 800)
  }, [])

  const setModalOpen = useCallback(() => {
    setOpen(true)
  }, [])

  const setModalOptions: IModalContext['setModalOptions'] = useCallback(
    (opts) => {
      setOptions(opts)
    },
    []
  )

  return (
    <ModalContext.Provider
      value={{
        setModalClose,
        setModalOpen,
        setModalNode,
        setModalOptions,
        options,
      }}
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
