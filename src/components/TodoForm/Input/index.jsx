import React from "react";
import { Field } from "formik";


const Input = (props) => {
	const { name, styles, ...restProps } = props;
	return (
		<Field name={name} >
			{({ field, form: { errors, touched }, meta }) => {


				return (
					<label >
						<input 
              {...restProps}
              {...field}
            />
						{meta.error && meta.touched && (
							<div >{meta.error}</div>
						)}
					</label>
				);
			}}
		</Field>
	);
};

export default Input;
