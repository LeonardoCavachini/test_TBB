import * as styled from './styles';
import SearchIcon from '../../assets/search.svg';


export const Header = ({
  onChange,
  onClick,
  open,
  setOpen,
  children
}: {
  onChange: React.ChangeEventHandler;
  onClick: React.ImgHTMLAttributes<HTMLImageElement>["onClick"];
  open: any;
  setOpen: any;
  children: any
}) => {
  return (
    <>
      <styled.StyledBurger props={open}>
        <styled.IconClose onClick={() => setOpen(false)}/>
        {children}
      </styled.StyledBurger>
      <styled.Main>
      
      <styled.BurguerIcon onClick={() => setOpen(true)}/>
      
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