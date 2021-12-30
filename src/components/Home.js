import AddNote from './AddNote';

export const Home = (props) => {
    return (

        <div className='container'>
            <AddNote showAlert={props.showAlert} />

        </div>
    )
}
