import * as styled from './styles';
import SearchIcon from '../../assets/search.svg';

export const Header = ({
  onChange,
}: {
  onChange: React.ChangeEventHandler;
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
      <img src={SearchIcon} />
    </styled.searchIcon>
    <styled.InputField onChange={onChange} placeholder='Busque aqui...' />
    </>
  )
}