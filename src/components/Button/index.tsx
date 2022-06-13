import { FaPlus } from 'react-icons/fa'
import * as S from './styles'

type ButtonProps = {
  title: string
  onClick: () => void
  iconAdd?: boolean
}

const Button = ({ title, onClick, iconAdd=false, ...props }: ButtonProps) => {
  return (
    <S.ContainerButton onClick={() => onClick()} {...props}>{title}{iconAdd && <FaPlus size="10px"/>}</S.ContainerButton>
  )
}

export default Button