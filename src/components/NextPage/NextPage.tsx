import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px;
`;

const green = "#016e0e";
const hoverGreen = "#027810";

const NextPage = () => {

    return(
        <Container>
            <Link to="/">
                <Button 
                    variant='contained' 
                    sx={{
                        backgroundColor: green,
                        '&:hover': {
                            backgroundColor: hoverGreen,
                        }
                    }}
                >
                    Return to main page
                </Button>
            </Link>
        </Container>
    )
};

export default NextPage;