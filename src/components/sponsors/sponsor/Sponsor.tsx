import {/*useState,*/useRef} from 'react'
//sponsor deve ter um grau, que pode ser gold, silver ou bronze para que ele possa ser estilizado de acordo com esse grau.

import { GiQueenCrown } from "react-icons/gi";
import StyledSponsor from './styles';

import SponsorImg from "../../../assets/sponsor.png"

/*

bronze
silver
gold

*/


/*
type SponsorType = {
    name:string,
    image?:string,
    role?:string
};

type ImageDimensions={
    w:number,
    h:number
};

const Sponsor = ({name,image,role}:SponsorType)=>{

    const [dimensions,setDimensions] = useState<ImageDimensions>({w:146,h:154});
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
        <div className="relative text-white m-10 bg-cyan-800">
            
            <div style={{
                position:"absolute",
                top:60,
                left:-8,
                width:dimensions.w,
                height:dimensions.h,
                border: "2px solid rgba(170, 230, 17, 1)"
            }}></div>

            <div className='flex flex-col items-center'>
                <img src="" alt={image} onLoad={handleImageLoad} ref={imgRef} style={{
                    width:130,
                    height:130,

                    border: "4px solid rgba(51, 51, 51, 1)",
                    position: "relative",
                    backgroundColor: "rgba(32, 32, 32, 1)"
                }}/>
                <GiQueenCrown size={40} title='patrocinador gold' color={role} className='mt-2'/>
                <p className='font-chakraPetch text-xl'>{name}</p>
            </div>
            
        </div>
    );
};*/


type SponsorType = {
    name:string,
    image?:string,
    role?:string
};
/*
type ImageDimensions={
    w:number,
    h:number
};
*/
const Sponsor = ({ /*image,*/ name, role }:SponsorType) => {
    
    //const [dimensions,setDimensions] = useState<ImageDimensions>({w:146,h:154});
    const imgRef = useRef<HTMLImageElement>(null);

    /*const handleImageLoad = () => {
        if (imgRef.current) {
            setDimensions({
            w: imgRef.current.naturalWidth,
            h: imgRef.current.naturalHeight
          });
        }
      };*/

    return (

        <StyledSponsor>

            <div className='sponsor-container'>

                <div className='sponsorLogo'>
                    <img src={SponsorImg} alt={name} onLoad={()=>{}/*handleImageLoad*/} ref={imgRef}/>
                </div>

                <div className='sponsorRole'>
                    <GiQueenCrown size={40} title='patrocinador gold' color={role}/>
                </div>

                <p className='sponsorName'>{name}</p>

                <div className='border-container'>

                </div>

            </div>

        </StyledSponsor>

    );
  };




export default Sponsor;