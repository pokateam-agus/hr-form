import InputLabel from '@mui/material/InputLabel'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Select, { SelectChangeEvent } from '@mui/material/Select/Select'
import MenuItem from '@mui/material/MenuItem/MenuItem'
import Box from '@mui/material/Box/Box'
import FormControl from '@mui/material/FormControl'

interface DropdownProps {
  label: string
  options: { id: number; value: string; relatedAgency?: string }[]
  value: string
  name:string
  setValue: (e: SelectChangeEvent<string>) => void 
}

 export const theme = createTheme({
  palette: {
    primary: {
      main: '#9c843c',
      light: '#9c843c',
      dark: '#9c843c',
      contrastText: '#fff',
    },
  },
})

export const DropdownComponent = (props: DropdownProps): JSX.Element => {
  const { label, options, value, name, setValue } = props

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
            {options.map((option) => (
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
