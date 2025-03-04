import styled from 'styled-components'
import { Box } from 'rebass/styled-components'

const Card = styled(Box)<{ width?: string; padding?: string; border?: string; borderRadius?: string }>`
  width: ${({ width }) => width ?? '100%'};
  border-radius: 5px;
  padding: 3rem;
  padding-left: 0;
  padding-right: 0;
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
`
export default Card

export const LightCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.bg2};
  background-color: ${({ theme }) => theme.bg1};
`

export const LightGreyCard = styled(Card)`
  background-color: ${({ theme }) => theme.bg3};
`

export const GreyCard = styled(Card)`
  background-color: ${({ theme }) => 'rgba(32, 125, 255, 0.0)'};
`

export const DarkGreyCard = styled(Card)`
  background-color: ${({ theme }) => 'rgba(85, 61, 144, 0.0)'};
  min-height: 422px;
`

export const OutlineCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.bg3};
`

export const YellowCard = styled(Card)`
  background-color: rgba(243, 132, 30, 0.05);
  color: ${({ theme }) => theme.yellow3};
  font-weight: 500;
`

export const PinkCard = styled(Card)`
  background-color: rgba(255, 0, 122, 0.03);
  color: ${({ theme }) => theme.primary1};
  font-weight: 500;
`

export const BlueCard = styled(Card)`
  background-color: ${({ theme }) => theme.primary5};
  color: ${({ theme }) => theme.blue2};
  border-radius: 12px;
  width: fit-content;
`

export const ScrollableX = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const GreyBadge = styled(Card)`
  width: fit-content;
  border-radius: 8px;
  background: ${({ theme }) => 'rgba(32, 125, 255, 0.2)'};
  color: ${({ theme }) => theme.text1};
  padding: 4px 6px;
  font-weight: 400;
`
