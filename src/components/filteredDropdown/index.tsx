import InputLabel from '@mui/material/InputLabel'
import { ThemeProvider } from '@mui/material/styles'
import Select, { SelectChangeEvent } from '@mui/material/Select/Select'
import MenuItem from '@mui/material/MenuItem/MenuItem'
import Box from '@mui/material/Box/Box'
import FormControl from '@mui/material/FormControl'
import { useEffect, useState } from 'react'
import { theme } from '../dropdown'

interface DropdownProps {
  label: string;
  options: { id: number; value: string; relatedTo?: string }[];
  value: string;
  name:string
  setValue: (e: SelectChangeEvent<string>) => void 
  filterValue?: string; 
}

export const FilteredDropdownComponent = (props: DropdownProps): JSX.Element => {
  const { label, options, value, name, setValue, filterValue } = props;

  const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    if (filterValue) {
      const filtered = options.filter(option => option.relatedTo === filterValue);
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions(options);
    }
  }, [filterValue, options]);

  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <Box>
          <InputLabel>{label}</InputLabel>
          <Select
            color="primary"
            fullWidth
            label={label}
            value={value}
            onChange={setValue}
            name={name}
          >
            {filteredOptions.map((option) => (
              <MenuItem key={option.id} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </FormControl>
    </ThemeProvider>
  )
}
