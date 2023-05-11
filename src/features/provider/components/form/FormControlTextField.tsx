import { KeyboardEvent } from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import { Controller, useFormContext, ControllerProps, FieldValues, FieldError } from 'react-hook-form';
import _ from 'lodash';

type Props<T> = Omit<ControllerProps<T>, 'render'> &
  TextFieldProps & {
    triggerPressEnterSubmit?: boolean;
    onChangeText?: (e) => void;
  };

export const FormControlTextField = <T extends FieldValues>({
  name,
  defaultValue,
  rules,
  triggerPressEnterSubmit = false,
  onChangeText,
  ...props
}: Props<T>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();
  const error = _.get(errors, name) as FieldError;

  const onKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && !triggerPressEnterSubmit) {
      event.preventDefault();
    }

    props.onKeyPress && props.onKeyPress(event);
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { onBlur, onChange, ...fields } }) => (
        <TextField
          variant="outlined"
          onBlur={(e) => {
            onBlur();
            props?.onBlur && props?.onBlur(e);
          }}
          onChange={(e) => {
            onChange(e);
            onChangeText?.(e);
          }}
          {...props}
          {...fields}
          error={!!error}
          helperText={error?.message ?? ''}
          onKeyPress={onKeyPress}
        />
      )}
    />
  );
};
