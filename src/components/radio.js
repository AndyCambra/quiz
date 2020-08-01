import React from 'react';
import { RadioGroup, FormControl, FormControlLabel, Radio as RadioInput } from '@material-ui/core';

const Radio = ({ options, changeQuestion }) => {
    const [value, setValue] = React.useState(null);
    const handleChange = (event) => {
        setValue(event.target.value);
        setValue(null);
        changeQuestion(event.target.value);
    }
    console.log(options);
    return (
        <>
            <FormControl component="fieldset">
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={e => handleChange(e)}>
                    {options.map(option => (
                        <FormControlLabel key={option.value} value={option.value} control={<RadioInput />} label={option.label} />
                    ))}
                </RadioGroup>
            </FormControl>
        </>
    )
}





export default Radio;