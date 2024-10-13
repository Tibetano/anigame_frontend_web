import Sponsor from "./sponsor/Sponsor";
import StyledSponsors from "./styles";

const Sponsors = ()=>{
    return (
    <StyledSponsors>
        <strong className="title font-chakraPetch">Patrocinadores</strong>
        <div className="sponsorsList">
            <Sponsor image="img3" name="Patrocinador3" role="yellow"/>
            <Sponsor image="img2" name="Patrocinador2" role="gray"/>
            <Sponsor image="img4" name="Patrocinador4" role="gray"/>
            <Sponsor image="img1" name="Patrocinador1" role="rgb(230,70,10)"/>
            <Sponsor image="img5" name="Patrocinador5" role="rgb(230,70,10)"/>
        </div>
    </StyledSponsors>
    );
};

export default Sponsors;
