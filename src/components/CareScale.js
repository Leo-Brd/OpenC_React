import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div onClick= {() => clickSunWater(scaleValue, careType)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

function clickSunWater(scaleValue, careType) {

	let mot = ""
	switch(scaleValue) {
		case 1:
			mot = "peu"
			break;
		case 2:
			mot = "modérement"
			break;
		case 3:
			mot = "beaucoup"
			break;
		default:
			mot = ""
	}

	let mot_2 = ""
	switch(careType) {
		case "light":
			mot_2 = "de lumière"
			break;
		case "water":
			mot_2 = "d'arrosage"
			break;
		default:
			mot_2 = ""
	}

    alert(`Ce produit requiert ${mot} ${mot_2}`)
}

export default CareScale