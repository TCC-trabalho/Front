import { Controller, FieldValues } from "react-hook-form";
import {
  MenuItem,
  Select as MuiSelect,
  Typography,
  Stack,
  SelectChangeEvent,
} from "@mui/material";
import { SelectProps } from "./Select.type";

export const Select = <TFieldValues extends FieldValues>({
  control,
  name,
  label,
  options,
  tamanho = "sm",
  placeholder,
  ...props
}: SelectProps<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <Stack position="relative">
            {label && (
              <Typography
                variant="subtitle1"
                color="#05334A"
                fontWeight={500}
                mb={0.5}
              >
                {label}
              </Typography>
            )}

            <MuiSelect
              {...field}
              id={name}
              size="small"
              displayEmpty
              fullWidth
              value={field.value || ""}
              error={!!error}
              onChange={(e: SelectChangeEvent<unknown>) => field.onChange(e.target.value)}
              renderValue={(selected) =>
                selected ? options.find((opt) => opt.value === selected)?.label : placeholder
              }
              sx={{
                borderRadius: 2,
                border: `1px solid ${error ? "#A91208" : "#064B72"}`,
                backgroundColor: "#fff",
                padding:
                  tamanho === "sm"
                    ? "2px 10px"
                    : "5px 16px",
                fontSize: tamanho === "sm" ? 14 : 16,
              }}
              {...props}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </MuiSelect>

            <Typography variant="body2" color="#A91208" mt={0.5}>
              {error?.message || " "}
            </Typography>
          </Stack>
        );
      }}
    />
  );
};
