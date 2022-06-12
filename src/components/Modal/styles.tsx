import Dialog from '@mui/material/Dialog'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

export const StyledDialog = styled(Dialog)<{ image?: string }>`
  backdrop-filter: blur(4px) brightness(0.6);
  & .MuiDialog-paperScrollPaper {
    border-radius: 18px;
    background-image: url('${({ image }) => image}');
    background-position: center;
    background-size: cover;
    max-height: 82vh;
    width: min(85%, 600px);
  }
`

export const ModalHeader = styled(Stack)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.default};
  box-shadow: inset 0 14px 16px -4px #173c63, 0 8px 14px 7px #000;
  padding: 12px 16px 12px 32px;
`

export const BuyButtonStyle = {
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderBottomLeftRadius: 18,
  borderBottomRightRadius: 18,
  width: '100%',
  backgroundImage:
    'linear-gradient(180deg, #ffd775 12.02%, #feb528 54.17%, #f7811e 130.17%)',
  p: '16px 8px',
  webkitTransition: 'background-image 0.2s ease-in-out',
  transition: 'background-image 0.2s ease-in-out',
  color: '#333',
  fontWeight: 700,
  fontSize: '14px',
  '&:hover': {
    backgroundImage:
      'linear-gradient(270deg, #ffd775 12.02%, #feb528 54.17%, #f7811e 130.17%)',
  },
}
