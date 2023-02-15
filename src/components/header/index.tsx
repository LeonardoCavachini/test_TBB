import * as styled from './styles';
import SearchIcon from '../../assets/search.svg';

export const Header = ({
  onChange,
  onClick
}: {
  onChange: React.ChangeEventHandler;
  onClick: React.ImgHTMLAttributes<HTMLImageElement>["onClick"]
}) => {
  return (
    <>
      <styled.Main>
      <styled.BurguerIcon />
      <styled.IconBox>
        <styled.CartIcon />
        <styled.UserIcon />
      </styled.IconBox>
    </styled.Main>
    <styled.searchIcon>
      <img src={SearchIcon} onClick={onClick}/>
    </styled.searchIcon>
    <styled.InputField onChange={onChange} placeholder='Busque aqui...' />
    </>
  )
}