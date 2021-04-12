import React, { useState } from 'react';
import RoomIcon from '@material-ui/icons/Room';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import pinnedNotes from './PinnedData';

const AllNotes = (props) => {

    const [display, setDisplay] = useState('block');

    const deleteNote = () => {
        setDisplay("none");
    }

    const addPin = () => {
        pinnedNotes.push({title: props.title, note: props.note});
    }

    return(
        <Card className={props.enterClassName} style={{width: '15rem', display: display, margin: '1.5%'}}> 
            <CardActions>    
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <Tooltip title="Pin">
                            <IconButton aria-label="pin" onClick={addPin}>
                                <RoomIcon onClick={props.changeValue} />
                            </IconButton>
                        </Tooltip>
                        <br />
                        <span>{props.title}</span>                        
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        <span>{props.note}</span>                        
                    </Typography>
                </CardContent>
            </CardActions>

            <CardActions>
                <Tooltip title="Delete">
                    <IconButton aria-label="delete" onClick={deleteNote}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    );
}

export default AllNotes;