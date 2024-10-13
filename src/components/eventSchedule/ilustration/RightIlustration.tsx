import {useRef} from 'react'
import Img from '../../../assets/example.png';
import { Container } from './RigthStyles';

type params={
    name:string
};

const RightIlustration = ({name}:params) => {

    const imgRef = useRef<HTMLImageElement>(null);
   
    return (
        <Container>
                <div className='a'>
                    <p className='font-chakraPetch font-semibold text-4xl text-white'>{name}</p>
                </div>

                <img src={Img} ref={imgRef} alt=""/>
        </Container>
    );
}

export default RightIlustration;
