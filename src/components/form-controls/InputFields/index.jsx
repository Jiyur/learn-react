import { TextField } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const {form,name,disabled,label}=props
    return (
        <Controller
            control={form.control}
            name={name}
            disabled={disabled}
            render={({field, fieldState: {error}}) => (
                <TextField
                {...field}
                label={label}
                error={!!error}
                helperText={error?error.message:''}
                />
            )}
        
        />
    );
}

export default InputField;