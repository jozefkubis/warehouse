import styled from "styled-components"

const TagWrapper = styled.span`
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: var(--border-radius-lg);
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  background-color: ${(props) =>
    props.$type === "silver"
      ? "var(--color-grey-300)"
      : props.$type === "green"
      ? "var(--color-green-100)"
      : props.$type === "yellow"
      ? "var(--color-yellow-100)"
      : "var(--color-grey-200)"};
  color: ${(props) =>
    props.$type === "silver"
      ? "var(--color-grey-800)"
      : props.$type === "green"
      ? "var(--color-green-700)"
      : props.$type === "yellow"
      ? "var(--color-yellow-700)"
      : "var(--color-grey-700)"};
`

function Tag({ $type, children }) {
  return <TagWrapper $type={$type}>{children}</TagWrapper>
}

export default Tag
