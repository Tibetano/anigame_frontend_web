import Content from './content/Content';

const EventSchedule = () => {
    return(
        <div className='flex flex-col items-center'>

            <strong className='font-chakraPetch font-semibold text-4xl m-16 text-gray-900'>Atividades do Evento</strong>

            <Content type={0} title='Atração' buttonLabel='VER ATRAÇÕES' 
            text='Lorem ipsum dolor blkjasdffghjg fhjsdfg sdfgsdfgs dfgsdfgs dfgsdfgsd fgsdfgdsf gtyuityui asdfsalkjdfh jklsdf sadf sadffghjgh jkhgjkghj kghjkg hjkghjkgh jkhjkhg jkghj kghjkty uityui sadjfg hjfgh jgfjhgfh jfghjgf hjfghj gfhjt yuit yuityui tyuityu ityuit yuityuityuityuityuityuityuityui gghjfghjfgjhfgjhgfhjgfhjfghjghfgjhf ghjfghfgjhfgjhfghjfgsdfjgjsasdfasdfasdfasdfasdfsdfgsdfgs dfgjdsfjgsdjkfhgkjlsdhfjkglhsdkjlfhgskdljfhgkjlsd hfjgklshdfkljgh hj.'
            />

            <Content type={1} title='Concursos' buttonLabel='VER CONCURSOS' 
            text='Lorem ipsum dolor blkjasdffghjg fhjsdfg sdfgsdfgs dfgsdfgs dfgsdfgsd fgsdfgdsf gtyuityui asdfsalkjdfh jklsdf sadf sadffghjgh jkhgjkghj kghjkg hjkghjkgh jkhjkhg jkghj kghjkty uityui sadjfg hjfgh jgfjhgfh jfghjgf hjfghj gfhjt yuit yuityui tyuityu ityuit yuityuityuityuityuityuityuityui gghjfghjfgjhfgjhgfhjgfhjfghjghfgjhf ghjfghfgjhfgjhfghjfgsdfjgjsasdfasdfasdfasdfasdfsdfgsdfgs dfgjdsfjgsdjkfhgkjlsdhfjkglhsdkjlfhgskdljfhgkjlsd hfjgklshdfkljgh hj.'
            />

            <Content type={0} title='Feira Geek' buttonLabel='VER STANDS' 
            text='Lorem ipsum dolor blkjasdffghjg fhjsdfg sdfgsdfgs dfgsdfgs dfgsdfgsd fgsdfgdsf gtyuityui asdfsalkjdfh jklsdf sadf sadffghjgh jkhgjkghj kghjkg hjkghjkgh jkhjkhg jkghj kghjkty uityui sadjfg hjfgh jgfjhgfh jfghjgf hjfghj gfhjt yuit yuityui tyuityu ityuit yuityuityuityuityuityuityuityui gghjfghjfgjhfgjhgfhjgfhjfghjghfgjhf ghjfghfgjhfgjhfghjfgsdfjgjsasdfasdfasdfasdfasdfsdfgsdfgs dfgjdsfjgsdjkfhgkjlsdhfjkglhsdkjlfhgskdljfhgkjlsd hfjgklshdfkljgh hj.'
            />
        </div>
    );
}

export default EventSchedule;