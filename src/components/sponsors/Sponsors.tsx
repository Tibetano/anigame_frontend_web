import Sponsor from "./Sponsor";

const Sponsors = ()=>{
    return (
    <div className="flex flex-col items-center bg-black">
        <strong className="text-white font-chakraPetch font-bold text-3xl py-8">Patrocinadores</strong>
        <div className="flex">
            <Sponsor image="img1" name="Patrocinador1" role="rgb(230,70,10)"/>
            <Sponsor image="img2" name="Patrocinador2" role="gray"/>
            <Sponsor image="img3" name="Patrocinador3" role="yellow"/>
            <Sponsor image="img4" name="Patrocinador4" role="gray"/>
            <Sponsor image="img5" name="Patrocinador5" role="rgb(230,70,10)"/>
        </div>
    </div>
    );
};

export default Sponsors;
