import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;

`;
// const StyledHeaderContent = styled.div`
  
// `;
const StyledLogo = styled.div`
  position: fixed;
  top: 45px;
  left: 45px;
  z-index: 1802342098312;
`
const StyledHumberger = styled.div`
  position: fixed;
  top: 45px;
  right: 45px;
  z-index: 1802342098312;
`;
const Header = () => {
  return (
    <StyledHeader>
      {/* <StyledHeaderContent> */}
        <StyledLogo>
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 344.65 344.65"
            width={65}
            height={65}
            fill="var(--gold)"
          >
            <path
              class="cls-1"
              d="M280.33,107.28,108,279.61,280.33,451.94,452.66,279.61Zm-164,172.33,164-164,164,164-164,164Z"
              transform="translate(-108 -107.28)"
            />
            <path
              class="cls-1"
              d="M280.33,128.27,129,279.61,280.33,431,431.67,279.61Zm0,277.66L264.61,390.2l1-9.33L267,368.33l.57-5.19h23.59l.82,4.93L294,380l1.77,10.56Zm-6-108.11c2,8.54-5.54,15.05-5.39,23.27C263.89,311.76,271.16,305.31,274.29,297.82ZM284,291c8.33,14.67-8.4,26.32-5.14,40.47C267.37,316.27,284.66,304.88,284,291Zm3.1,38.89c-4.62-10,2.77-16.69,5.78-24.57C295.33,314.6,286.46,321.18,287.12,329.9ZM297,234.41H263.62l-24,106.6-60.41-60.42L281.31,178.53l100.1,100.1-61.07,61.06Zm25.82,116.66,72.45-72.44-114-114-116,116,71.76,71.76-1.91,8.45L154,279.61,280.33,153.29,406.65,279.61,325.1,361.16Z"
              transform="translate(-108 -107.28)"
            />
          </svg>
        </StyledLogo>
        <StyledHumberger>
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 10"
            width={48}
            height={48}
            fill="var(--gold)"
          >
            <rect width="15" height="2" />
            <rect y="4" width="15" height="2" />
            <rect y="8" width="15" height="2" />
          </svg>
        </StyledHumberger>
      {/* </StyledHeaderContent> */}
    </StyledHeader>
  );
};

export default Header;
