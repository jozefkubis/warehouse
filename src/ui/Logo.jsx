import styled from "styled-components"
import { useDarkMode } from "../context/DarkModeContext"

const StyledLogo = styled.div`
  text-align: center;
`

const Img = styled.img`
  height: 12rem;
  width: auto;
  border-radius: 50%;
  background-color: transparent;

  &.dark-mode {
    background-color: var(--color-brand-500);
  }
`

function Logo() {
  const { isDarkMode } = useDarkMode()

  return (
    <StyledLogo>
      <Img
        src={isDarkMode ? "/logo-light.png" : "/logo-light.png"}
        alt="Logo"
        className={isDarkMode ? "dark-mode" : ""}
      />
    </StyledLogo>
  )
}

export default Logo
