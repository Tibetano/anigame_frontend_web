import Ilustration from '../ilustration/Ilustration';
import RightIlustration from '../ilustration/RightIlustration';
import CommonButton from '../ui-components/CommonButton';

const EventSchedule = () => {
    return(
        <div className='flex flex-col items-center'>

            <strong className='font-chakraPetch font-semibold text-4xl m-16 text-gray-900'>Atividades do Evento</strong>

            <div className='flex justify-center bg-white px-56'>
                <div className='pt-10 pb-20 pl-56 pr-10 w-1/2'>
                    <Ilustration name='Atração' />
                </div>
                <div className="flex flex-col pr-56 pl-10 w-1/2">
                    <strong className="text-3xl text-lime-400 font-chakraPetch font-semibold pt-20 pb-8">Atração</strong>
                    <p className='font-inter text-base text-wrap text-neutral-600'>
                        Lorem ipsum dolor blkjasdffghjgfhjsdfgsdfgsdfgs dfgsdfgsdfgsdfgsd fgsdfgdsfgtyuityui
                        asdfsalkjdfh jklsdf sadf sadffghjghjkhgjkghjkghjkghjkghjkgh jkhjkhgjkghjkghjktyuityui
                        sadjfghjfghjgfjhgfhjfghjgf hjfghjgfhjtyuityuityuityuityuityuit yuityuityuityuityuityuityuityui
                        gghjfghjfgjhfgjhgfhjgfhjfghjghfgjhf ghjfghfgjhfgjhfghjfgsdfjgjsasdfasdfasdfasdfasdfsdfgsdfgs dfgjdsfjgsdjkfhgkjlsdhfjkglhsdkjlfhgskdljfhgkjlsd hfjgklshdfkljgh
                        hj.   
                    </p>
                    <div className="mt-10 mb-20">
                        <CommonButton name='VER ATRAÇÕES' css='bg-black font-lato font-bold text-xs text-white hover:bg-lime-400 border-2 border-black px-8 py-3 mt-10 mb-20'/>
                    </div>
                </div>
            </div>

            <div className='flex justify-center bg-black px-56'>
                <div className="flex flex-col pr-10 pl-56 w-1/2">
                    <strong className="text-3xl text-lime-400 font-chakraPetch font-semibold pt-20 pb-8">Concursos</strong>
                    <p className='font-inter text-base text-wrap text-white'>
                        Lorem ipsum dolor blkjasdffghjgfhjsdfgsdfgsdfgs dfgsdfgsdfgsdfgsd fgsdfgdsfgtyuityui
                        asdfsalkjdfh jklsdf sadf sadffghjghjkhgjkghjkghjkghjkghjkgh jkhjkhgjkghjkghjktyuityui
                        sadjfghjfghjgfjhgfhjfghjgf hjfghjgfhjtyuityuityuityuityuityuit yuityuityuityuityuityuityuityui
                        gghjfghjfgjhfgjhgfhjgfhjfghjghfgjhf ghjfghfgjhfgjhfghjfgsdfjgjsasdfasdfasdfasdfasdfsdfgsdfgs dfgjdsfjgsdjkfhgkjlsdhfjkglhsdkjlfhgskdljfhgkjlsd hfjgklshdfkljgh
                        hj.
                    </p>
                    <div className="mt-10 mb-20">
                        <CommonButton name='VER CONCURSOS' css='bg-lime-400 text-white hover:bg-black px-8 py-3 mt-10 mb-20 font-lato font-bold text-xs transition duration-500'/>
                    </div>
                </div>
                <div className='pt-10 pb-20 pl-10 pr-56 w-1/2'>
                    <RightIlustration name='Concursos' />
                </div>
            </div>

            <div className='flex justify-center bg-white px-56'>
                <div className='pt-10 pb-20 pl-56 pr-10 w-1/2'>
                    <Ilustration name='Feira Geek'/>
                </div>
                <div className="flex flex-col pr-56 pl-10 w-1/2">
                    <strong className="text-3xl text-lime-400 font-chakraPetch font-semibold pt-20 pb-8">Feira Geek</strong>
                    <p className='font-inter text-base text-wrap text-neutral-600'>
                        Lorem ipsum dolor blkjasdffghjgfhjsdfgsdfgsdfgs dfgsdfgsdfgsdfgsd fgsdfgdsfgtyuityui
                        asdfsalkjdfh jklsdf sadf sadffghjghjkhgjkghjkghjkghjkghjkgh jkhjkhgjkghjkghjktyuityui
                        sadjfghjfghjgfjhgfhjfghjgf hjfghjgfhjtyuityuityuityuityuityuit yuityuityuityuityuityuityuityui
                        gghjfghjfgjhfgjhgfhjgfhjfghjghfgjhf ghjfghfgjhfgjhfghjfgsdfjgjsasdfasdfasdfasdfasdfsdfgsdfgs dfgjdsfjgsdjkfhgkjlsdhfjkglhsdkjlfhgskdljfhgkjlsd hfjgklshdfkljgh
                        hj.
                    </p>
                    <div className="mt-10 mb-20">
                        <CommonButton name='VER STANDS' css='bg-black hover:bg-lime-400 text-white border-2 border-black px-8 py-3 mt-10 mb-20 font-lato font-bold text-xs transition duration-500'/>
                    </div>
                </div>
            </div>
    </div>
    );
}

export default EventSchedule;