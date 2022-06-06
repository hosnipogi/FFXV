import React from 'react'
import { useContext } from 'react'
import { ModalContext } from 'providers/modalProvider'

const useModal = (node?: React.ReactNode) => {
  const { setModalClose, setModalOpen, setModalNode } = useContext(ModalContext)
  React.useEffect(() => {
    if (node) {
      setModalNode(node)
    }
  }, [node, setModalNode])

  return { setModalClose, setModalOpen }
}

export default useModal
