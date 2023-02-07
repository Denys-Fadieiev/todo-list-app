import React from "react";
import { Field } from "formik";


const Input = (props) => {
	const { name, styles, ...restProps } = props;
	const { wrapperInputAddTodo, inputAddTodo, error } = styles;
	return (
		<Field name={name} >
			{({ field, form: { errors, touched }, meta }) => {

				return (
					<label className={wrapperInputAddTodo}>
						<input 
              {...restProps}
              {...field}
							className={inputAddTodo}
            />
						{meta.error && meta.touched && (
							<div className={error}>{meta.error}</div>
						)}
					</label>
				);
			}}
		</Field>
	);
};

export default Input;
