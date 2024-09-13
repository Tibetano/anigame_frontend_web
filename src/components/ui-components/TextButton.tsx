import { useState } from "react";

type Btype={
    name:string
}

const TextButton = ({name}:Btype) => {

    const [isHovered,setIsHovered] = useState<Boolean>(false);

    return (
        <a href="" style={{
            fontSize: '1.125rem',
            lineHeight:'1.75rem',
            color: isHovered ? "rgb(51 65 85)" : "",
            backgroundImage: isHovered ? "linear-gradient(to right, #3498db 4px, transparent 4px)" : "",
            backgroundRepeat: "no-repeat",
            backgroundSize: "2px 100%",
            paddingLeft: "15px",
            //backgroundColor: isHovered ? "rgba(240,240,240,0.5)" : "rgba(245,245,245,0.5)",
            transition: 'color 0.5s ease',
            transitionDuration: '500ms'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>{name}</a>
    )
}

export default TextButton;