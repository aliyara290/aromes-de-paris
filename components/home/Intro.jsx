import styled from "styled-components";

const StyledIntro = styled.section`
    width: 100%;
    height: 100vh;
`
const Intro = () => {
    return ( 
        <StyledIntro>
            <h1>Welcome to Aromas</h1>
        </StyledIntro>
     );
}
 
export default Intro;