import { Container } from "./styles";


const Content = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    );
};

export default Content;