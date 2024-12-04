import styled from "styled-components"
import { useDarkMode } from "../context/DarkModeContext"

const StyledLogo = styled.div`
  text-align: center;
`

const Img = styled.img`
  height: 12rem;
  width: auto;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isDarkMode ? "var(--color-brand-500)" : "transparent"};
`

function Logo() {
  const { isDarkMode } = useDarkMode()

  return (
    <StyledLogo>
      <Img src="/logo-light.png" alt="Logo" isDarkMode={isDarkMode} />
    </StyledLogo>
  )
}

export default Logo
