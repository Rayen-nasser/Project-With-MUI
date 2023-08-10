import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react'
import styled from '@emotion/styled';
import  EmojeIcon  from '@mui/icons-material/EmojiEmotions';
import CollectionsIcon from '@mui/icons-material/Collections';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyleModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: 20,
})

const Add = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Tooltip title="Add" sx={{position:"fixed",bottom:20,left:{xs:"calc(50% - 25px)",md:30}}}>
                <Fab color="primary" aria-label="add">
                    <AddIcon onClick={()=>{ setOpen(true)}}/>
                </Fab>
            </Tooltip>
            <StyleModal
                open={open}
                onClose={()=>{ setOpen(false)}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                    <Typography variant='h6' textAlign={'center'} color={'gray'}>
                        Create post
                    </Typography>
                    <UserBox>
                        <Avatar sx={{width: 30,height: 30}}/>
                        <Typography fontWeight={500} variant='span'>Rayen </Typography>
                    </UserBox>
                    <TextField
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        sx={{width:"100%"}}
                        placeholder="What's on your mind ?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojeIcon color='primary'/>
                        <CollectionsIcon color='secondray'/>
                        <VideoCameraBackIcon color='success'/>
                        <PersonAddIcon color='error'/>
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}>
                            <DateRangeIcon/>
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyleModal>
        </>
    )
}

export default Add
