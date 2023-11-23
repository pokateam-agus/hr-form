import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface TextAreaComponentProps {
  label: string;
  value: string;
  name: string;
  setValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export const TextAreaComponent = ({
  label,
  value,
  name,
  setValue,
}: TextAreaComponentProps): JSX.Element => {
  return (
    <Box>
      <TextField
        fullWidth
        className="min-w-[50vw]"
        variant="outlined"
        label={label}
        value={value}
        name={name}
        onChange={setValue}
        multiline
        rows={4}
      />
    </Box>
  );
};
