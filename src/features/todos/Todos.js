import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Confetti from "react-dom-confetti";
import TextField from '@mui/material/TextField';
import { addTodoEntry, removeEntry, toggleEntryDone } from './todosSlice';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const Todos = () => {
  const [newTodoEntry, setNewTodoEntry] = useState('');
  const { entries } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (newTodoEntry === '') {
      return;
    }

    dispatch(addTodoEntry(newTodoEntry));
    setNewTodoEntry('');
  }

  const todoItems = entries.map(({text, isDone}, index) =>
  // Entries have not got stable ID
    <section key={text}>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <List>
          <ListItem 
            secondaryAction={
              <>
              <IconButton 
                edge="end" 
                aria-label="done" 
                onClick={() => {
                  dispatch(toggleEntryDone(index));
                }}
              >
                <Confetti active={isDone} config={{ spread: 360 }} />
                <CheckCircleIcon color={isDone ? "disabled" : "success"} />
              </IconButton>

              <IconButton 
                edge="end" 
                aria-label="delete" 
                onClick={() => dispatch(removeEntry(index))}
              >
              <DeleteIcon color="action"/>
              </IconButton>
              </>
            }
          >
            <ListItemText primary={text} />
          </ListItem>
          <Divider />        
        </List>
      </Box>
    </section>
  );

  return(
    <>
      <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
        Be uppermost in your thoughts
      </Typography>

      <form onSubmit={onFormSubmit}>
        <TextField fullWidth label="What's on your mind?" id="What's on your mind?" 
        text="text"
        value={newTodoEntry}
        onChange={(e) => {
          setNewTodoEntry(e.target.value);
        }}
        aria-label="New todo entry"/>
      </form>
      
      {todoItems}
    </>
  );
}
