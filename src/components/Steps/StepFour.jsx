import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

//MILES

function StepFour() {
const history = useHistory();

const miles = useSelector(store => store.miles)
const dispatch = useDispatch();

const setMiles = () => {
    const action = { type: 'SET_MILES', payload: event.target.value }
    dispatch(action);
}

const nextPage = (event) => {
    event.preventDefault();
    console.log(`Miles completed: ${miles}`)
    if (miles.length > 0 ){
        history.push('/review');
    } else {
        alert('Please add miles.')
    }
}


return (

    <>
    <h3>Step Four</h3>
    <h4> Please enter miles completed for activity</h4>
    <form onSubmit={nextPage}>
    <input value={miles} onChange={setMiles} type="number" />
    <input type="submit" />
    </form>
    </>

)

}
export default StepFour;