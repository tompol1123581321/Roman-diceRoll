import React, { useState } from "react"
import {
	Button,
	Container,
	ListGroup,
	ListGroupItem,
} from "react-bootstrap"
import "../style/styleDice.scss"

const Dice = ({
	elementGroup,
	setElementGroup,
	setElementValue,
}) => {
	const [showElements, setShowElements] = useState(false)
	const deleteElement = (oneElement) => {
		const newElementGroup = elementGroup.filter(
			(el) => el.id !== oneElement.id
		)
		setElementGroup(newElementGroup)
	}
	const [showHide, setShowHide] = useState(true)
	return (
		<div style={{ width: "20rem" }}>
			<h6>Your element group contains</h6>
			<h4>{elementGroup.length} elements</h4>
			<Button
				onClick={() => {
					setShowElements(!showElements)
					setShowHide(!showHide)
				}}
				variant="primary"
			>
				{showHide === true ? (
					<h5>Show elements</h5>
				) : (
					<h5>Hide elements</h5>
				)}
			</Button>
			{showElements && (
				<ListGroup>
					{elementGroup.map((oneElement) => (
						<ListGroupItem
							key={Math.random() * 1000}
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								maxWidth: "20rem",
							}}
						>
							{oneElement.text}
							<div>
								<Button
									variant="secondary"
									onClick={() => {
										setElementValue(oneElement.text)
										deleteElement(oneElement)
									}}
								>
									<i className="fas fa-cog"></i>
								</Button>
								<Button
									onClick={() => {
										deleteElement(oneElement)
									}}
									variant="danger"
								>
									<i className="fas fa-trash"></i>
								</Button>
							</div>
						</ListGroupItem>
					))}
				</ListGroup>
			)}
		</div>
	)
}

export default Dice
