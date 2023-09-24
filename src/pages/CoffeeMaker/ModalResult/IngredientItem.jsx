import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';

function IngredientItem({ title, src }) {
  return (
    <ListItem>
      <ListItemButton>
        <ListItemIcon>
          <img src={src} alt={title} width={50} />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
}

IngredientItem.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default IngredientItem;
