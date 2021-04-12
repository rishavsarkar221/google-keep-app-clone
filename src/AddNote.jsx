import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const AddNote = (props) => {
    return(
        <Card style={{width: '50%'}}> 
            <CardActions>     
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <textarea name="title" id="title" cols="30" rows="3" onChange={props.title} value={props.curTitle} placeholder="Title"></textarea>
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        <textarea name="title" id="title" cols="30" rows="3" onChange={props.note} value={props.curNote} placeholder="Take a note ..."></textarea>
                    </Typography>
                </CardContent>
            </CardActions>

            <CardActions>
                <Button size="small" color="primary" onClick={props.addNote}>add note</Button>
            </CardActions>

        </Card>
    );
}

export default AddNote;