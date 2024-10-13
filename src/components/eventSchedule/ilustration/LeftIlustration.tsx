import {useRef} from 'react'
import Img from '../../../assets/example.png';
import { Container } from './LeftStyles';

type params={
    name:string
};

const LeftIlustration = ({name}:params) => {

    const imgRef = useRef<HTMLImageElement>(null);
    
    return (
        <Container>
            <div className='a'>
                <strong className='font-chakraPetch font-semibold text-4xl text-gray-700 mr-16 mb-8'>{name}</strong>
            </div>
            
            <img src={Img} ref={imgRef} alt=""/>
        </Container>
    );
}

export default LeftIlustration;
