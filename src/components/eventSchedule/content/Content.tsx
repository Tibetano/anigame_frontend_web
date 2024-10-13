import CommonButton from "../../ui-components/CommonButton/CommonButton";
import LeftIlustration from "../ilustration/LeftIlustration";
import RightIlustration from "../ilustration/RightIlustration";
import { Container } from "./styles";

type params = {
    type: number,
    title:string,
    buttonLabel:string,
    text:string
}

const Content = ({title,buttonLabel,text,type}:params) => {
    return (
        <Container className={type===0?"bg-white":"bg-black"}>
            {type===0 && (
                <>
                    <div className='left_ilustration'>
                        <LeftIlustration name={title} />
                    </div>
                
                    <div className="left_description">
                        <strong className="text-3xl text-lime-400 font-chakraPetch font-semibold pt-20 pb-8">{title}</strong>
                        <p className='font-inter text-base text-wrap text-neutral-600'>
                            {text}   
                        </p>
                        <div className="left_button">
                            <CommonButton name={buttonLabel} css='bg-black font-lato font-bold text-xs text-white hover:bg-lime-400 border-2 border-black px-8 py-3 mt-10 mb-20'/>
                        </div>
                    </div>
                </>
            )}

            {type===1 && (
                <>
                    <div className="right_description">
                            <strong className="text-3xl text-lime-400 font-chakraPetch font-semibold pt-20 pb-8">{title}</strong>  
                            <p className='font-inter text-base text-wrap text-white'>
                                {text}   
                            </p>
                            <div className="right_button">
                                <CommonButton name={buttonLabel} css='bg-lime-400 text-white hover:bg-black px-8 py-3 mt-10 mb-20 font-lato font-bold text-xs transition duration-500'/>
                            </div>
                    </div>

                    <div className='right_ilustration'>
                        <RightIlustration name={title} />
                    </div>
                </>
            )}
        </Container>
    );
}

export default Content;