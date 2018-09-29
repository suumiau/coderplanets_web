import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const TitlesWrapper = styled.div`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
`
export const LanguageDot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin-right: 8px;
  background-color: #f4e068;
`
export const LanguagePopover = styled.div`
  color: ${theme('thread.articleTitle')};
  padding: 5px 10px;
  font-size: 1rem;
  font-weight: bold;
`
export const TitleLink = styled.a`
  color: ${theme('banner.title')};
  transition: color 0.2s;
  &:hover {
    color: ${theme('banner.title')};
    text-decoration: underline;
    cursor: pointer;
  }
`
export const CountsWrapper = styled.div`
  display: flex;
`
export const CountItem = styled.a`
  display: flex;
  align-items: center;

  color: ${theme('banner.title')};
  transition: color 0.2s;
  &:hover {
    color: ${theme('banner.title')};
    text-decoration: underline;
    cursor: pointer;
  }
`
export const CountIcon = styled(Img)`
  fill: ${theme('banner.title')};
  width: 15px;
  height: 15px;
  margin-right: 4px;
  margin-top: -3px;
  display: block;
`
export const StarIcon = styled(CountIcon)`
  margin-top: -4px;
`
export const CountDivider = styled(CountIcon)`
  margin-left: 4px;
  margin-right: 4px;
`
export const CountText = styled.div`
  font-size: 0.9rem;
  color: ${theme('banner.title')};
  margin-right: 2px;
`
