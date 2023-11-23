import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface InputComponentProps {
  label: string;
  value: string;
  name: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  referedValue?: string;
}

export const DynamicInputComponent = (
  props: InputComponentProps
): JSX.Element => {
  const { label, name, value, setValue, referedValue } = props;
  const handleDisabled = () => {
    if (referedValue == "yes") {
      return false;
    } else {
      return true;
    }
  };
  return (
    <Box>
      <TextField
        fullWidth
        variant="outlined"
        label={label}
        value={value}
        onChange={setValue}
        name={name}
        disabled={handleDisabled()}
      />
    </Box>
  );
};
