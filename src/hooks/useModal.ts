import { useEffect } from 'react'
import { useContext } from 'react'
import { ModalContext } from 'providers/modalProvider'

const useModal = (node?: React.ReactNode) => {
  const {
    setModalClose,
    setModalOpen,
    setModalNode,
    setModalOptions,
    options,
  } = useContext(ModalContext)
  useEffect(() => {
    if (typeof node !== 'undefined') {
      setModalNode(node)
    }
  }, [node, setModalNode])

  return { setModalClose, setModalOpen, setModalOptions, options }
}

export default useModal
