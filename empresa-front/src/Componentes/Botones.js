import {Button} from 'react-bootstrap';
function Botones(props){
    return(
        <Button variant="primary" type="submit" className='mt-4'>
            {props.texto}
        </Button>
    )
}
export default Botones;