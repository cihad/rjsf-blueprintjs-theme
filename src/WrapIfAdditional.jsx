import React from "react"

import { utils } from "@rjsf/core"
// import { JSONSchema7 } from 'json-schema';
import { FormGroup, InputGroup } from "@blueprintjs/core"
import IconButton from "./IconButton"

const { ADDITIONAL_PROPERTY_FLAG } = utils

const WrapIfAdditional = (props) => {
	const {
		children,
		disabled,
		id,
		label,
		onDropPropertyClick,
		onKeyChange,
		readonly,
		required,
		schema,
		registry,
	} = props
	console.log("PROPS", props)
	const keyLabel = `${label} Key` // i18n ?
	const additional = schema.hasOwnProperty(ADDITIONAL_PROPERTY_FLAG)

	if (!additional) {
		return children
	}

	const handleBlur = ({ target }) => onKeyChange(target.value)

	return (
		<div style={{ display: "flex", gap: "1rem" }} key={`${id}-key`}>
			<div style={{ flex: 1 }}>
				<FormGroup
					required={required}
					disabled={disabled || readonly || required}
					label={keyLabel}
					labelFor={`${id}-key`}
					labelInfo={required && "(required)"}
				>
					<InputGroup
						id={`${id}-key`}
						name={`${id}-key`}
						defaultValue={label}
						placeholder="Placeholder text"
						disabled={disabled || readonly || required}
						onBlur={!readonly ? handleBlur : undefined}
					/>
				</FormGroup>
			</div>
			<div style={{ flex: 1 }}>{children}</div>
			<div>
				<IconButton
					block={true}
					className="w-100"
					variant="danger"
					icon="remove"
					tabIndex={-1}
					disabled={disabled || readonly}
					onClick={onDropPropertyClick(label)}
				/>
			</div>
		</div>
	)
}

export default WrapIfAdditional
