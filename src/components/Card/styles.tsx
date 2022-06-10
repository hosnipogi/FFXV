import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'

export const StyledCard = styled(Card)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 12px;
  transition: filter 0.2s ease;
  margin-inline: auto;
  border: 1px solid ${({ theme }) => theme.palette.border.default};
  box-shadow: 0px 0px 10px 0px hsl(242deg 7% 20%);
  background-image: none;
  cursor: pointer;
`
