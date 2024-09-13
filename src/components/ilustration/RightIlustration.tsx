import {useState, useRef} from 'react'
import Img from '../../assets/example.png';

type ImageDimensions={
    w:number,
    h:number
};

type params={
    name:string
};

const RightIlustration = ({name}:params) => {

    const [dimensions,setDimensions] = useState<ImageDimensions>({w:0,h:0});
    const imgRef = useRef<HTMLImageElement>(null);
    
    const handleImageLoad = () => {
        if (imgRef.current) {
            setDimensions({
            w: imgRef.current.naturalWidth,
            h: imgRef.current.naturalHeight
          });
        }
      };

    return (
        <div className='relative'>
            <div
                style={{
                width: `${dimensions.w}px`,
                height: `${dimensions.h+50}px`, 
                border: '2px solid rgba(224, 43, 32, 1)',
                marginTop: '10px',
                marginLeft: '10px',
                position: 'absolute',
                top: '60px', // Desloca 60px abaixo da imagem original
                left: '40px', // Desloca 60px à direita da imagem original
                }}
            />
            <div className='flex flex-col items-end'>
                <div>
                    <img onLoad={handleImageLoad} src={Img} ref={imgRef} alt="" 
                        style={{ 
                            position: 'relative', 
                            border: '5px solid rgba(100, 100, 100, 1)' 
                        }}
                    />
                </div>
                
                <div className='flex justify-start mt-8 mr-52 relative'>
                    <p className='font-chakraPetch font-semibold text-4xl text-white'>{name}</p>
                </div>
                
            </div>
            
        </div>
    );
}

export default RightIlustration;
