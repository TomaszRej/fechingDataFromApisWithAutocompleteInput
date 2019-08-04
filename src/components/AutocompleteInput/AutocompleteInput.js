import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Downshift from 'downshift';
import {makeStyles} from '@material-ui/core/styles/index';
import TextField from '@material-ui/core/TextField/index';
import Paper from '@material-ui/core/Paper/index';
import MenuItem from '@material-ui/core/MenuItem/index';
import Grid from '@material-ui/core/Grid/index';
import {suggestions} from "../../const";
import  { useStyles} from "./AutocompleteInputStyle";





export default function AutocompleteInput({getSelectedCity, selectedItem}) {
  const classes = useStyles();


  const onChange = (city) => {
    if (typeof getSelectedCity === "function") {
      getSelectedCity(city)
    }
  };

  return (
    <Grid item md="6" lg="6">
      <Downshift
        onChange={onChange}
        selectedItem={selectedItem}
      >
        {({
            getInputProps,
            getItemProps,
            getLabelProps,
            getMenuProps,
            highlightedIndex,
            inputValue,
            isOpen,
            selectedItem,
            onChange,
            onSelect
          }) => {
          const {onBlur, onFocus, ...inputProps} = getInputProps({
            placeholder: 'Search for a country',
          });

          return (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                label: 'Country',
                InputLabelProps: getLabelProps({shrink: true}),
                InputProps: {onBlur, onFocus, onChange, onSelect},
                inputProps,
              })}

              <div {...getMenuProps()}>
                {isOpen ? (
                  <Paper className={classes.paper} square>
                    {getSuggestions(inputValue).map((suggestion, index) =>
                      renderSuggestion({
                        suggestion,
                        index,
                        itemProps: getItemProps({item: suggestion.label}),
                        highlightedIndex,
                        selectedItem,
                      }),
                    )}
                  </Paper>
                ) : null}
              </div>
            </div>
          );
        }}
      </Downshift>
    </Grid>


  );
}


// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     height: 250,
//   },
//   container: {
//     flexGrow: 1,
//     position: 'relative',
//   },
//   paper: {
//     position: 'absolute',
//     zIndex: 1,
//     marginTop: theme.spacing(1),
//     left: 0,
//     right: 0,
//   },
//   chip: {
//     margin: theme.spacing(0.5, 0.25),
//   },
//   inputRoot: {
//     flexWrap: 'wrap',
//   },
//   inputInput: {
//     width: 'auto',
//     flexGrow: 1,
//   },
//   divider: {
//     height: theme.spacing(2),
//   },
// }));



function renderInput(inputProps) {
  const {InputProps, classes, ref, ...other} = inputProps;

  return (
    <TextField
      InputProps={{

        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput,
        },
        ...InputProps,
      }}
      {...other}


    />
  );
}

renderInput.propTypes = {
  classes: PropTypes.object.isRequired,
  InputProps: PropTypes.object,
};

function renderSuggestion(suggestionProps) {
  const {suggestion, index, itemProps, highlightedIndex, selectedItem} = suggestionProps;
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
}

renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.number]).isRequired,
  index: PropTypes.number.isRequired,
  itemProps: PropTypes.object.isRequired,
  selectedItem: PropTypes.string.isRequired,
  suggestion: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }).isRequired,
};

function getSuggestions(value, {showEmpty = false} = {}) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0 && !showEmpty
    ? []
    : suggestions.filter(suggestion => {
      const keep =
        count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

      if (keep) {
        count += 1;
      }

      return keep;
    });
}
