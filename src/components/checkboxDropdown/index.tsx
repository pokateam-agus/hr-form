import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Box from "@mui/material/Box/Box";
import FormControl from "@mui/material/FormControl";

import { createTheme, ThemeProvider } from "@mui/material/styles";

interface DropdownProps {
  label: string;
  options: { id: number; value: string }[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  name: string;
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#9c843c",
      light: "#9c843c",
      dark: "#9c843c",
      contrastText: "#fff",
    },
  },
});

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const CheckboxDropdownComponent = (
  props: DropdownProps
): JSX.Element => {
  const { label, options, name, value, setValue } = props;

  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <Box>
          <Autocomplete
            multiple
            fullWidth
            id={`checkboxes-${name}`}
            options={options}
            disableCloseOnSelect
            inputValue={value}
            limitTags={2}
            onInputChange={(event, newInputValue) => {
              setValue(newInputValue);
            }}
            getOptionLabel={(option) => option.value}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.value}
              </li>
            )}
            renderInput={(params) => <TextField {...params} label={label} />}
          />
        </Box>
      </FormControl>
    </ThemeProvider>
  );
};
