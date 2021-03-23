import React from "react"
import { Container, Form, Row } from "react-bootstrap"
import { Button, TextField } from "@material-ui/core"

const Input = ({
	elementGroup,
	setElementGroup,
	setElement,
	elementValue,
	setElementValue,
	element,
}) => {
	const elementChangeHandler = (e) => {
		setElementValue(e.target.value)
		setElement({
			text: e.target.value,
			id: Math.random() * 1000,
		})
	}
	const submitNewElementHandler = (e) => {
		e.preventDefault()
		setElementGroup([...elementGroup, element])
		setElementValue("")
	}
	return (
		<Container>
			<Form
				className="inputForm"
				onSubmit={submitNewElementHandler}
			>
				<Form.Group controlId="formBasicEmail">
					<Row>
						<h5>
							Add new elements to randomly select from!
						</h5>
					</Row>
					<Row>
						<TextField
							required={true}
							label="new element"
							variant="outlined"
							value={elementValue}
							onChange={elementChangeHandler}
						/>
						<Button
							type="submit"
							variant="contained"
							color="secondary"
						>
							Add new
						</Button>
					</Row>
				</Form.Group>
			</Form>
		</Container>
	)
}

export default Input
