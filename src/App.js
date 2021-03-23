import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Dice from "./components/dice"
import Input from "./components/input"
import Results from "./components/results"
import Rolling from "./components/rolling"
import "./style/styleDice.scss"
function App() {
	const [elementGroup, setElementGroup] = useState([])
	const [element, setElement] = useState({})
	const [elementValue, setElementValue] = useState("")
	return (
		<div>
			<div className="selectContainer">
				<Input
					elementGroup={elementGroup}
					setElementGroup={setElementGroup}
					setElement={setElement}
					setElementValue={setElementValue}
					elementValue={elementValue}
					element={element}
				/>
				<div className="setUp">
					<Dice
						elementGroup={elementGroup}
						setElementGroup={setElementGroup}
						element={element}
						setElementValue={setElementValue}
					/>

					<Rolling elementGroup={elementGroup} />
				</div>
			</div>
			<Results />
		</div>
	)
}

export default App
