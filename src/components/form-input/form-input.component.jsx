import { FormInputLabel, GroupStyle, InputStyle } from "./form-input.styles";



const FormInput = ({ label, ...otherProps }) => {
  return (
    <GroupStyle>
      <InputStyle {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={otherProps.value.length} >
            {label}
        </FormInputLabel>
      )}
    </GroupStyle>
  );
}

export default FormInput;