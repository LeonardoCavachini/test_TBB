import * as styled from './styles';

export const Card = (props:any) => {
  const { name, alt, url } = props
  
  return (
      <styled.Main>
      <styled.Pic src={url} alt={alt}/>
      <styled.Title>{name}</styled.Title>
    </styled.Main>
  )
}