import { HeaderContainer } from "./style";
import { NavLink, useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <h1 onClick={() => navigate('/home')}>Lacrei</h1>
      <nav>
        <NavLink to='/home' >Home</NavLink>
        <NavLink to='/pessoa-usuaria'>Pessoa Usuária</NavLink>
        <NavLink to='/profissional'>Profissional</NavLink>
      </nav>
    </HeaderContainer>
  )
}