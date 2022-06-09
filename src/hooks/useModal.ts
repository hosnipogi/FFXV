import {useEffect} from 'react'
import { useContext } from 'react'
import { ModalContext } from 'providers/modalProvider'

const useModal = (node?: React.ReactNode) => {
  const { setModalClose, setModalOpen, setModalNode, setModalOptions } = useContext(ModalContext)
  useEffect(() => {
    if (node) {
      setModalNode(node)
    }
  }, [node, setModalNode])

  return { setModalClose, setModalOpen, setModalOptions }
}

export default useModal
