import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface InputComponentProps {
  label: string;
  value: string;
  name: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputComponent = (props: InputComponentProps): JSX.Element => {
  const { label, value, setValue, name } = props;
  return (
    <Box>
      <TextField
        required
        fullWidth
        variant="outlined"
        label={label}
        value={value}
        onChange={setValue}
        name={name}
      />
    </Box>
  );
};
