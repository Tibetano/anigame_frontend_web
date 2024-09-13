import Logo from '../../assets/banner.jpeg'

const MainBanner = ()=>{
    return (
        <div className="bg-black">
            <img className='block w-full h-auto' src={Logo} alt="Logo do evento" title="Logo do evento" />
        </div>
    );
};

export default MainBanner;