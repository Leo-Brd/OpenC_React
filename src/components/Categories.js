import { plantList } from '../datas/plantList'

function Categories({ category, changeCategory }) {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    return (
        <div id='lmj-categories-select'>
            <select 
                onChange={(event) => changeCategory(event.target.value)}
                value = {category}
            >

                <option value='all'>Tous</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}

		    </select>

            <button onClick={() => changeCategory('all')}>Reinitialiser</button>

        </div>
    )
}

export default Categories