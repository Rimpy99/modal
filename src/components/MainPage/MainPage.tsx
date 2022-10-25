import { useState } from 'react';
import { Button, Dialog, DialogContent, DialogContentText, DialogActions } from '@mui/material';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const Container = styled('div')`
    display: flex;
    justify-content: center;
    padding: 50px;
`;

const CustomizedBtn = styled(Button)`
    background-color: #20b2aa;

    :hover {
        background-color: #21d1c7; 
    }
`;

const MainPage = () => {
    const [open, setOpen] = useState<boolean>(false);

    return(
        <Container>
            <CustomizedBtn variant='contained' color="primary" onClick={() => setOpen(true)}>Open next page</CustomizedBtn>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to leave this page?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Link to="/nextPage">
                        <Button>Open next page</Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </Container>
    )
};

export default MainPage;