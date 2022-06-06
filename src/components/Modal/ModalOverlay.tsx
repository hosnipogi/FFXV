import Container from '@mui/material/Container'
import styled from '@emotion/styled'
import useModal from 'hooks/useModal'

type Props = {
  component: React.ReactNode
}

const StyledContainer = styled(Container)`
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
`

const ModalOverlay: React.FC<Props> = ({ component }) => {
  const { setModalClose } = useModal()
  return <StyledContainer onClick={setModalClose}>{component}</StyledContainer>
}

export default ModalOverlay
