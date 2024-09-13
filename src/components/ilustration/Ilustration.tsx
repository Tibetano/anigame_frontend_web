import {useState, useRef} from 'react'
import Img from '../../assets/example.png';

type ImageDimensions={
    w:number,
    h:number
};

type params={
    name:string
};

const Ilustration = ({name}:params) => {

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
                //border: '2px solid rgba(14, 165, 233, 1)',//borda azul
                marginTop: '10px',
                marginLeft: '10px',
                position: 'absolute',
                top: '60px', // Desloca 60px abaixo da imagem original
                left: '60px', // Desloca 60px à direita da imagem original
                }}
            />
            <div className='flex flex-col'>
                <div>
                    <img onLoad={handleImageLoad} src={Img} ref={imgRef} alt="" 
                        style={{ 
                            position: 'relative', 
                            border: '5px solid rgba(100, 100, 100, 1)' 
                        }}
                    />
                </div>
                
                <div className='flex justify-end mt-8 mr-32 relative'>
                    <strong className='font-chakraPetch font-semibold text-4xl text-gray-700'>{name}</strong>
                </div>
                
            </div>
            
        </div>
    );
}

export default Ilustration;
