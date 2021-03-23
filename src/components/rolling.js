import {
	Button,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
} from "@material-ui/core"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"

const Rolling = ({ elementGroup }) => {
	const workingGroup = [...elementGroup]
	const handleChange = (event) => {
		setValue(event.target.value)
	}
	const [value, setValue] = React.useState("female")
	return (
		<div style={{ width: "20rem" }}>
			<h4>What do you want to do?</h4>
			<Row style={{ maxWidth: "20rem", margin: "auto" }}>
				<Col>
					<FormControl component="fieldset">
						<RadioGroup
							aria-label="gender"
							name="gender1"
							value={value}
							onChange={handleChange}
						>
							<FormControlLabel
								value="female"
								control={<Radio />}
								label="pick one"
							/>
							<FormControlLabel
								value="male"
								control={<Radio />}
								label="pick one and remove it"
							/>
							<FormControlLabel
								value="other"
								control={<Radio />}
								label="pick teams"
							/>
						</RadioGroup>
					</FormControl>
				</Col>

				<Button variant="contained" color="secondary">
					Roll
				</Button>
			</Row>
		</div>
	)
}

export default Rolling
