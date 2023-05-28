'use client'
import { createContext, useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FaWhatsapp } from 'react-icons/fa'
import { WhatsAppButton } from 'react-whatsapp-button'

import Image from 'next/image'
import Head from 'next/head'

import { Inter } from 'next/font/google'
import Link from 'next/link'
import ImageBlock from './components/ImageBlock/ImageBlock'
import { CommentRating } from './components/CommentRating/CommentRating'

const inter = Inter({ subsets: ['latin'] })

import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdSmartphone } from 'react-icons/md'
import { MdMenu } from 'react-icons/md'
import {
  AiFillFacebook,
  AiFillHome,
  AiFillInstagram,
  AiFillMail,
  AiFillTwitterCircle,
} from 'react-icons/ai'
import Slider from './components/Slider/Slider'
import Swiper from 'swiper'
import ImageViewer from './components/ImageViewer/ImageViewer'
import Sidebar from './components/SideBar/SideBar'
import { useSidebar } from './hooks/useSidebar'
import { RxHamburgerMenu } from 'react-icons/rx'
import useScreenWidth from './hooks/useScreenWidth'
import { BsPersonVcardFill } from 'react-icons/bs'
import { ScrollAnimationOnTrigger } from './components/FrameMotion/FrameMotion'

export const menu = [
  { title: 'EVENTOS', href: 'eventos', offset: -100 },
  { title: 'RETIROS', href: 'retiros', offset: -100 },
  {
    title: 'HOSPEDAGEM',
    href: 'hospedagem',
    offset: -100,
    icon: '',
  },
  {
    title: 'DAY USE',
    href: 'dayUse',
    offset: -100,
  },
  {
    title: 'RESERVAR',
    href: 'https://linktr.ee/portalbeijaflor',
    offset: -100,
  },
]

export default function Home() {
  const [showNav, setShowNav] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const screenWidth = useScreenWidth()

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollPos = window.pageYOffset
        setShowNav(prevScrollPos > currentScrollPos)
        setPrevScrollPos(currentScrollPos)
      } else {
        // código de fallback para ambientes que não suportam a API de navegador
      }
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
    } else {
      // código de fallback para ambientes que não suportam a API de navegador
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos, showNav])

  const logo = '/public/imgs/Logos/1.png'

  const comments = [
    {
      description: `
      Eu, meu companheiro e meus 2 cachorros amamos o local, passamos a virada de ano e foi incrível. Exatamente o que esperávamos!
Inclusive ficamos imaginando como seria incrível morar nesse chalé…
Indico muito!
      `,
      stars: 5,
      authorName: 'Nicolly',
    },
    {
      description: `
      Camping e chalés. Estas são as opções para
      estadia neste agradável local bem próximo
      da natureza. Oferece piscinas com águas
      correntes e fácil acesso à cachoeira São
      Bento, onde é realizado o Campeonato
      Brasileiro de Polo Aquático em Águas
      Correntes. Oferece serviços de Arvorismo e
      Trilha suspensa pela localidade.
      `,
      stars: 4,
      authorName: 'Ivo P.',
    },
    {
      description: `
      O novo portal da chapada é um lugar de
      meditação e recolhimento no meio da
      Chapada Diamantina. Ainda estão em obras
      e algumas coisas por fazer. Mas o refeitório,
      o salão de convivência são incríveis. Tem
      um acesso a Cachoeira São Bento bem
      próximo, é fácil o acesso.
      `,
      stars: 5,
      authorName: 'Cláudia Q.',
    },
  ]

  const images = [
    {
      src: '/imgs/Slider/1.jpeg',
      link: '',
      alt: 'Imagem 1',
    },
    {
      src: '/imgs/Slider/2.jpeg',
      link: '',
      alt: 'Imagem 2',
    },
    {
      src: '/imgs/Slider/3.jpeg',
      link: '',
      alt: 'Imagem 3',
    },
    {
      src: '/imgs/Slider/4.jpeg',
      link: '',
      alt: 'Imagem 4',
    },
    {
      src: '/imgs/Slider/5.jpeg',
      link: '',
      alt: 'Imagem 5',
    },
    {
      src: '/imgs/Slider/6.jpeg',
      link: '',
      alt: 'Imagem 6',
    },
    {
      src: '/imgs/Slider/7.jpeg',
      link: '',
      alt: 'Imagem 7',
    },
    {
      src: '/imgs/Slider/8.jpeg',
      link: '',
      alt: 'Imagem 8',
    },
    {
      src: '/imgs/Slider/9.jpeg',
      link: '',
      alt: 'Imagem 9',
    },
    {
      src: '/imgs/Slider/10.jpeg',
      link: '',
      alt: 'Imagem 10',
    },
    {
      src: '/imgs/Slider/11.jpeg',
      link: '',
      alt: 'Imagem 11',
    },
    {
      src: '/imgs/Slider/12.jpeg',
      link: '',
      alt: 'Imagem 12',
    },
    {
      src: '/imgs/Slider/13.jpeg',
      link: '',
      alt: 'Imagem 13',
    },
    {
      src: '/imgs/Slider/14.jpeg',
      link: '',
      alt: 'Imagem 14',
    },
  ]

  const handleButtonClick = () => {
    const phoneNumber = '5548991814884'
    const message = encodeURIComponent('')
    if (typeof window !== 'undefined') {
      window.open(
        `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`,
        '_blank',
      )
    } else {
      // código de fallback para ambientes que não suportam a API de navegador
    }
  }

  const handleButtonClick2 = () => {
    const link = 'https://linktr.ee/portalbeijaflor'

    if (typeof window !== 'undefined') {
      window.open(link, '_blank')
    } else {
      // código de fallback para ambientes que não suportam a API de navegador
    }
  }

  const { isOpen, setIsOpen } = useSidebar()

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <main>
        <div className="fixed z-[99999] bottom-0 right-0 m-5 text-2xl">
          <button
            onClick={handleButtonClick}
            className="flex items-center gap-2 bg-green-500 text-white rounded-full py-4 px-4 mr-1 hover:bg-green-600  focus:ring-green-500 focus:ring-opacity-50 border-white"
          >
            <FaWhatsapp size={30} />
          </button>
        </div>
        <header>
          <div className="flex flex-col max-h-[90px] h-[100px]">
            <nav
              className={`flex-col fixed px-7 z-[999] w-full h-[90px] md:p-0 md:px-20 text-white bg-purple-800 flex justify-between items-center select-none ${
                showNav ? 'show-nav' : 'hide-nav'
              }`}
            >
              <div className="w-[100%]">
                <div className="flex items-center justify-center">
                  <div
                    to={'home'}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={0}
                    className="flex items-center w-full justify-between"
                  >
                    {screenWidth > 996 ? null : (
                      <button
                        onClick={() =>
                          handleToggleSidebar()
                        }
                      >
                        <MdMenu
                        size={35}
                        className='relative top-[-3px]'
                        />
                      </button>
                    )}

                    <div className="flex">
                      <Image
                        width={80}
                        height={80}
                        layout="fixed"
                        src="/imgs/Logos/7.png"
                        alt=""
                      />

                      <Image
                        width={120}
                        height={120}
                        layout="fixed"
                        src="/imgs/Logos/4.png"
                        alt=""
                        className="w-auto h-[100px]"
                      />
                    </div>
                    {screenWidth < 1000 ? null : (
                      <ul className="ml-[-188px] gap-6 md:flex flex-grow flex-wrap justify-center items-center text-[1.1rem]">
                        {menu.slice(0, -1).map(item => (
                          <li
                            key={item.title}
                            className=" cursor-pointer border-transparent border-b-2 hover:border-white transition-all"
                          >
                            <ScrollLink
                              key={item.href}
                              activeClass="font-bold"
                              to={item.href}
                              spy={true}
                              smooth={true}
                              duration={500}
                              offset={item.offset || 0}
                              className="cursor-pointer border-b-2 border-transparent"
                            >
                              <p className="menu">
                                {item.title}
                              </p>
                            </ScrollLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              <div className="relative top-[-50px] z-[99] mt-[90px] flex justify-center h-[300px]">
                {/* content */}
              </div>
            </nav>

            <div className="w-[100%]"></div>
          </div>
        </header>
        <div
          id="home"
          className="min-h-screen top-[-90px]  bg-no-repeat relative overflow-hidden"
        >
          <div className="">
            <Image
              className="h-[100vh] relative w-[auto] md:w-full md:max-w-none md:object-cover"
              src="/imgs/0novo-portal-da-chapada.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
            />
            <img
              className="top-[-50px] md:right-[-20vw] translate-y-[35%] md:translate-y-[25%] translate-x-[-74vw] sm:translate-x-[-200vw] md:translate-x-[0] min-h-[100vw] md:min-h-[auto] md:h-screen md:object-cover object-center min-h-[68vw] absolute top-[-46vw]  left-[-18vw] bottom-0 left-0 right-0 mx-auto max-h-full transform transition-all duration-300 h-[620px]"
              src="/imgs/bird-HD.png"
              alt=""
            />
          </div>
        </div>
        <div
          className="flex justify-center md:items-center text-primary"
          style={{
            backgroundImage: "url('/imgs/background1.png')",
          }}
        >
          <div className="md:pt-10 w-full xl:flex-nowrap flex-wrap flex justify-center items-center md:min-h-[300px]">
            <div className="w-full">
              <div className="md:mt-10 mt-0 flex flex-col justify-between md:px-[90px]">
                <h1 className="text-6xl mb-14 mx-5 md:mx-0">
                  <div>
                    <ScrollAnimationOnTrigger>
                      <div className="mt-10 mb-10 title">
                        Um santuário ecológico
                        <br />
                        preservado com o
                        <br />
                        cultivo do silêncio e do
                        <br />
                        bem estar
                        <br />
                      </div>
                      <ul className="text-2xl w-full md:w-[600px]">
                        <li>
                          Cachoeira São Bento, trilha
                          ecológica, Piscinas com água
                          corrente, espaço para retiros,
                          hospedaria, terapias, massagens e
                          Day Use.
                        </li>
                        <li>
                          <br />
                          Tudo isso em meio a mata nativa no
                          coração do Brasil, na Chapada dos
                          Veadeiros em Alto Paraíso de
                          Goiás.
                        </li>
                      </ul>
                    </ScrollAnimationOnTrigger>
                  </div>
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-between w-[100%] md:mr-[80px]">
              <ImageViewer>
                <img
                  src="/imgs/vista-aerea.jpg"
                  alt="Chapada dos Veadeiros - Alto Paraíso de Goiás"
                  className="w-full object-cover object-center object-cover object-center w-[90vw] h-full md:h-[30vw] cursor-pointer"
                />
              </ImageViewer>
              {/* <img
              src="/imgs/Logos/5.png"
              alt="Logo"
              className="mx-auto w-28"
            /> */}
            </div>
          </div>
        </div>
        <div className="grid gap-0">
          {/* <h1 className="my-5 text-5xl xl:text-5xl w-full md:w-[50vw] xl:w-[700px] mx-auto text-center text-primary">
            HOSPEDAGEM
          </h1>
          <div
            id="hospedagem"
            className="flex flex-wrap flex-col md:flex-row gap-5 justify-center mx-5"
          >
            <ImageBlock
              imageSrc={'/imgs/chale.jpg'}
              info={'Para até 3 pessoas'}
              title={'Chalé Superior'}
              description={'text'}
            >
              <ImageViewer>
                <img
                  src="/imgs/chale.jpg"
                  alt="Chapada dos Veadeiros - Alto Paraíso de Goiás"
                  className="w-full object-cover object-center object-cover object-center w-[100vw] h-[auto] min-h-[400px] max-h-[400px]    cursor-pointer"
                />
              </ImageViewer>
            </ImageBlock>

            <ImageBlock
              imageSrc={'/imgs/chale-2.jpg'}
              info={'Para até 3 pessoas'}
              title={'Chalé Superior'}
              description={'text'}
            >
              <ImageViewer>
                <img
                  src="/imgs/chale-2.jpg"
                  alt="Chapada dos Veadeiros - Alto Paraíso de Goiás"
                  className="w-full object-cover object-center object-cover object-center w-[100vw] h-[auto] min-h-[400px] max-h-[400px]    cursor-pointer"
                />
              </ImageViewer>
            </ImageBlock>

            <ImageBlock
              imageSrc={'/imgs/chale-3.jpg'}
              info={'Para até 3 pessoas'}
              title={'Chalé Superior'}
              description={'text'}
            >
              <ImageViewer>
                <img
                  src="/imgs/chale-3.jpg"
                  alt="Chapada dos Veadeiros - Alto Paraíso de Goiás"
                  className="w-full object-cover object-center object-cover object-center w-[100vw] h-[auto] min-h-[400px] max-h-[400px]    cursor-pointer"
                />
              </ImageViewer>
            </ImageBlock>
          </div> */}
          <div className="flex justify-center">
            <Image
              src="/imgs/Logos/5.png"
              width={125}
              height={125}
              alt=""
            />
          </div>

          <div>
            <div className="flex flex-col 2xl:flex-row 2xl:gap-[50px] bg-purple-800 px-5 xl:px-[90px] md:pt-10 2xl:py-10">
              <div className="w-[100%] flex flex-col justify-start">
                <h1
                  id="eventos"
                  className="text-5xl md:text-6xl text-white font-light my-10 md:my-0 title"
                >
                  Eventos
                </h1>
                <div className="w-full 2xl:w-3/4 max-w-[600px] md:max-w-[100%] text-2xl md:text-2xl text-white md:leading-[3rem]  indent-6">
                  Os eventos realizados aqui no Portal
                  Beija-Flor oferecem uma experiência única,
                  com uma variedade de atividades e
                  comodidades que garantem momentos
                  inesquecíveis. Está incluso o acesso às
                  piscinas, cachoeira, estrela, trilha
                  suspensa e jardins externos.
                  {/* <p>
                    A segurança interna é uma das
                    prioridades aqui no Portal Beija-Flor,
                    garantindo que os participantes se
                    sintam seguros e protegidos durante todo
                    o evento. Além disso, apoiamos
                    produtores locais, oferecendo alimentos
                    frescos e deliciosos para os
                    participantes desfrutarem, nossa
                    gastronomia é exclusivamente
                    VEGETARIANA.
                  </p> */}
                  {/* <p>
                    O serviço de limpeza durante o evento
                    garante que o espaço esteja sempre
                    organizado e higienizado para os
                    participantes aproveitarem ao máximo a
                    experiência. Com tudo isso incluso, os
                    eventos aqui no Portal Beija-Flor são
                    uma ótima opção para você que busca uma
                    experiência restaurativa em meio à
                    Chapada dos Veadeiros.
                  </p> */}
                </div>
                <div className="flex flex-col md:gap-5 md:mt-5 text-2xl md:text-2xl text-white mt-6">
                  <p className="font-bold">
                    4 Salões de práticas:
                  </p>
                  <ul className="flex flex-col md:gap-5">
                    <li>- Salão das Flores 600m²</li>
                    <li>- Salão Beija-Flor 340m²</li>
                    <li>- Salão da Mata 250m²</li>
                    <li>- Yoga Hall 90m²</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap flex-col gap-2 md:gap-0 2xl:gap-2 mt-7 md:mt-[0]">
                <img
                  src="/imgs/retiros.jpg"
                  alt=""
                  className="w-[100%] h-fit object-cover md:mb-0"
                />
                <div>
                  <img
                    src="/imgs/yoga.jpg"
                    alt=""
                    className="w-[100%] h-fit object-cover"
                  />
                  <div>
                    <p className="w-full md:mt-0 text-white text-2xl p-5">
                      Preços e disponibilidade de hospedagem
                      sob consulta.
                    </p>
                    <p className="w-full md:mt-0 text-white text-xl p-5 border-white border">
                      PARA EFETUAR A RESERVA DA DATA DEVE
                      SER PAGO O VALOR DE 30% DA LOCAÇÃO DO
                      ESPAÇO NO ATO DA RESERVA E O RESTANTE
                      10 DIAS ANTES DO EVENTO OU RETIRO.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="retiros">
            <div className="flex items-center p-5 xl:px-[90px] bg-purple-800 xl:min-h-[100vh] justify-center xl:pb-[200px]">
              <div className="flex flex-col md:flex-row 2xl:flex-wrap h-fit 2xl:justify-center mt-2 gap-10">
                <div className="order-2 md:order-1 h-full mb-8">
                  <img
                    className="h-full w-full md:w-[100%] bg-contain md:g-cover"
                    src="/imgs/cachoeira-sao-bento.jpg"
                    alt=""
                  />
                </div>
                <div className="order-1">
                  <div className="flex flex-col md:gap-[50px] text-white w-full xl:gap-10 title">
                    <h1 className="text-6xl title my-5 md:my-0">
                      Retiros
                    </h1>
                    <p className="text-2xl max-w-[600px] indent-6">
                      {`
                        O Portal Beija-Flor proporciona
                        retiros que acomodam até 55 pessoas,
                        incluindo um chalé superior, chalés
                        rústicos e glamping em tendas com
                        banheiro externo.
                      `}
                    </p>
                    <p className="text-2xl max-w-[600px] indent-6">
                      {`
                      Há quatro salões de
                      práticas e áreas exclusivas, com três
                      piscinas de água natural, o
                      restaurante, a cachoeira São Bento, a
                      trilha suspensa e os jardins. As
                      opções variadas proporcionam uma
                      experiência única de contato com a
                      natureza na região da Chapada dos
                      Veadeiros.
                    `}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="retiros-img">
            <div className="flex flex-wrap justify-center items-center text-6xl text-center">
              <Image
                src="/imgs/Logos/5.png"
                width={125}
                height={125}
                alt=""
                className="w-[90px] md:w-[125px]"
              />
              <h1 className="md:my-5 text-5xl xl:text-5xl w-full md:w-[50vw] text-center md:p-5 text-primary title">
                FOTOS
              </h1>
              <Image
                src="/imgs/Logos/5.png"
                width={125}
                height={125}
                alt=""
                className="transform scale-x-[-1] w-[90px] md:w-[125px]"
              />
            </div>
            <Slider images={images} />
          </div>
          <div id="hospedagem">
            <div className="flex flex-wrap justify-center items-center text-6xl text-center">
              <Image
                src="/imgs/Logos/5.png"
                width={125}
                height={125}
                alt=""
                className="w-[90px] md:w-[125px]"
              />
              <h1 className="md:my-5 text-5xl xl:text-5xl w-full md:w-[50vw] text-center md:p-5 text-primary title">
                HOSPEDAGEM
              </h1>
              <Image
                src="/imgs/Logos/5.png"
                width={125}
                height={125}
                alt=""
                className="transform scale-x-[-1] w-[90px] md:w-[125px]"
              />
            </div>
            <div>
              <div className="md:mx-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-items-center gap-x-1 gap-[5px] xl:gap-y-10">
                <div>
                  <img
                    className="w-full shadow-lg"
                    src="/imgs/imgBlock1.jpeg"
                    alt=""
                  />
                  <div className="p-5 flex justify-center items-center gap-5">
                    <p className="text-2xl">
                      Chalé Superior: Macela
                    </p>
                    <a href={'https://airbnb.com/h/macela'}>
                      <Image
                        src="/imgs/airbnb.svg"
                        width={90}
                        height={90}
                        alt=""
                        className="w-[150px] md:w-[125px] airBnb"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <img
                    className="w-full shadow-lg"
                    src="/imgs/imgBlock3.jpeg"
                    alt=""
                  />
                  <div className="p-5 flex items-center gap-5 justify-center">
                    <p className="text-2xl">
                      Chalé Rústico: Carcará
                    </p>
                    <a
                      href={
                        'https://airbnb.com/h/chalecarcara'
                      }
                    >
                      <Image
                        src="/imgs/airbnb.svg"
                        width={90}
                        height={90}
                        alt=""
                        className="w-[150px] md:w-[125px] airBnb"
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <img
                    className="w-full shadow-lg"
                    src="/imgs/imgBlock2.jpeg"
                    alt=""
                  />
                  <div className="p-5 flex items-center gap-5 justify-center">
                    <p className="text-2xl">
                      Chalé Rústico: Sabiá
                    </p>
                    <a
                      href={
                        'https://airbnb.com/h/sabiachale'
                      }
                    >
                      <Image
                        src="/imgs/airbnb.svg"
                        width={90}
                        height={90}
                        alt=""
                        className="w-[150px] md:w-[125px] airBnb"
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <img
                    className="w-full shadow-lg"
                    src="/imgs/imgBlock4.jpeg"
                    alt=""
                  />
                  <div className="p-5 flex items-center gap-5 justify-center">
                    <p className="text-2xl">
                      Tendas Beija-Flor
                    </p>
                    <a
                      href={
                        'https://www.airbnb.com/h/tendasbeijaflor'
                      }
                    >
                      <Image
                        src="/imgs/airbnb.svg"
                        width={90}
                        height={90}
                        alt=""
                        className="w-[150px] md:w-[125px] airBnb"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/** ASD */}
            </div>
          </div>
        </div>
        <div>
          <div
            id="dayUse"
            className="bg-purple-800 flex  flex-wrap min-h-[100vh] justify-center items-center px-[90px]"
            style={{
              // backgroundImage:
              //   'url(/imgs/bg-with-bird.png)',
              backgroundPosition: 'bottom',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className="flex flex-col md:flex-row mt-10 md:mt-0 gap-10 2xl:flex-wrap h-fit 2xl:justify-center">
              <div className="order-2 md:order-1 h-full mb-8">
                <div
                  className="h-[62vw] md:h-[500px] w-full md:w-[50vw] max-w-[719px] md:bg-contain bg-cover"
                  style={{
                    backgroundImage:
                      'url(/imgs/dayuse.png)',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></div>
              </div>
              <div className="order-1">
                <div className="flex flex-col text-white w-full gap-10 title min-w-[368px]">
                  <h1 className="text-6xl title">
                    Day Use
                  </h1>
                  <ScrollAnimationOnTrigger>
                    <p className="text-2xl max-w-[600px] indent-6">
                      {`
                        O Day Use é uma opção por
                        diária no Portal Beija-Flor, que
                        permite aos visitantes desfrutarem das
                        belezas naturais da região. Com um
                        valor acessível de R$60,00 para
                        turistas e R$40,00 para moradores, o
                        Day Use oferece diversas opções de
                        lazer, como o acesso à piscina,
                        trilhas para caminhada, áreas verdes
                        para piquenique, além de outras
                        atividades que variam conforme a
                        disponibilidade.
                      `}
                    </p>
                    <p className="text-2xl max-w-[600px] indent-6">
                      {`
                        A diária
                        permite a você aproveitar o Portal
                        Beija-Flor e seus arredores com
                        tranquilidade, sem se preocupar com
                        horários de entrada e saída. É uma
                        ótima opção para quem deseja passar um
                        dia agradável em contato com a
                        natureza e desfrutar das comodidades
                        oferecidas pelo local.
                        `}
                    </p>
                  </ScrollAnimationOnTrigger>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col text-[1.3rem] mt-10 gap-6 md:flex-row md:justify-center md:gap-12">
              <div className="flex flex-col items-center">
                <img
                  className="w-full w-[85vw] md:max-w-[400px] h-[fit-content]"
                  src="/imgs/cafe-prem-bistro-na-piscina.jpg"
                  alt=""
                />
                <button className="border-2 border-primary hover:bg-purple hover:text-white hover:border-purple transition-all mt-5 p-4 text-primary italic text-2xl m-5">
                  Alimentação Saudável
                </button>
              </div>
              <div className="flex flex-col gap-5 text-primary w-full md:w-[fit-content]">
                <ul className="w-[fit-content] md:text-2xl flex flex-col gap-2 m-8 md:m-0 text-[1.5rem]">
                  <li>- 3 Piscinas de água natural</li>
                  <li>- Bistrô</li>
                  <li>- Restaurante</li>
                  <li>- Cachoeira</li>
                  <li>- Trilha suspensa</li>
                  <li>- Jardins</li>
                </ul>
                <img
                  className="w-full h-auto md:max-w-[600px] h-[fit-content]"
                  src="/imgs/novo-portal-da-chapada-2.jpg"
                  alt=""
                />
                <button className="border-2 border-primary hover:bg-purple hover:text-white hover:border-purple transition-all mt-5 p-4 text-primary italic text-2xl m-5">
                  Piscinas Naturais
                </button>
              </div>
            </div> */}
        </div>
        {/* <div
          id="sobre-nos"
          style={{
            backgroundImage: `url('/imgs/Welcome_to.png')`,
          }}
          className="min-h-[800px] md:min-h-[100vh] flex flex-col justify-center items-center text-center gap-3 bg-cover text-white md:text-black md:p-5"
        >
          <div className="text-purple-600 py-7 p-3 md:p-7 m-2 flex flex-col gap-5 rounded-xl bg-white bg-opacity-90 xl:h-[400px] justify-center">
            <h1 className="text-5xl xl:text-5xl w-full md:w-[50vw] xl:w-[700px] mx-auto text-center">
              SOBRE NÓS
            </h1>
            <p className="text-2xl -tracking-tighter w-full xl:w-[850px] p[90px]-5">
              {`No coração de Alto Paraíso de Goiás, um dos principais municípios
          da Chapada dos Veadeiros, o Portal Beija-Flor possui uma
          localização excepcional, localizada no meio da natureza, em
          contato direto com a fauna e a flora.`}
            </p>
            <p className="text-2xl font-bold">
              Hospedagem-Eventos-Retiros
            </p>
          </div>
          <button
            className="bg-white hover:bg-purple hover:text-white transition-all p-2 w-[230px] text-primary font-bold -tracking-tighter text-xl"
            onClick={handleButtonClick2}
          >
            RESERVAR
          </button>
        </div> */}
        <div
          className="flex flex-col items-center bg-center bg-no-repeat bg-cover md:py-5"
          style={{
            backgroundImage: `url("")`,
          }}
        >
          <div
            className="bg-no-repeat bg-center w-full"
            style={{
              backgroundImage:
                "url('/imgs/background1.png')",
              backgroundPosition: 'revert',
            }}
          >
            <h1 className="my-5 text-5xl w-full md:w-[50vw] xl:w-[1000px] mx-auto text-center text-primary !leading-[60px] title">
              Depoimentos de clientes que se hospedaram
              conosco!
            </h1>
            <div className="flex gap-[18px] xl:gap-0 flex-wrap xl:h-full xl:justify-between md:my-[80px] text-primary mx-5 md:mx-[90px]">
              {comments.map(
                (
                  comment = {
                    description,
                    stars,
                    authorName,
                  },
                  index,
                ) => (
                  <CommentRating
                    key={index}
                    description={comment.description}
                    stars={comment.stars}
                    authorName={comment.authorName}
                  />
                ),
              )}
            </div>
          </div>
        </div>
        <footer className="text-primary">
          <div className="flex gap-0 xl:gap-10 justify-center pb-24 flex-col xl:flex-row mx-5">
            <div className="w-full xl:w-[450px]">
              <div className="text-md flex flex-col justify-center gap-7 border-0 xl:border-2 border-primary xl:p-5 xl:min-h-[450px]">
                <h3 className="mt-10 text-4xl text-center">
                  Localização
                </h3>
                <div className="flex gap-2 text-2xl">
                  <i>
                    <FaMapMarkerAlt />
                  </i>
                  <p>
                    Rodovia GO 239, km9 Cachoeira São Bento,
                    Chapada dos Veadeiros, Alto Paraíso de
                    Goiás, Goiás 73770-000 Brasil
                  </p>
                </div>
                <div className="flex gap-2 text-2xl">
                  <i>
                    <MdSmartphone className="relative top-1" />
                  </i>
                  <p>+55 (62) 99647-3788</p>
                </div>
                <div className="flex gap-2 text-2xl">
                  <i>
                    <MdSmartphone className="relative top-1" />
                  </i>
                  <p>+55 (48) 99181-4884</p>
                </div>
                <div className="flex gap-[9px] text-2xl break-words-anywhere">
                  <AiFillMail className="relative top-1" />
                  <p>atendimento@portalbeijaflor.com.br</p>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[450px]">
              <div className="text-md flex flex-col gap-7 border-0 xl:border-2 border-primary p-5 xl:min-h-[300px] text-xl justify-center">
                <h3 className="text-4xl text-center">
                  Horários
                </h3>
                <div className="flex justify-center">
                  <button
                    onClick={handleButtonClick2}
                    className="px-10 w-full md:w-[300px] py-2 hover:text-opacity-70 bg-transparent font-bold text-[0.8em] bg-primary text-primary transition-colors"
                  >
                    {'RESERVAR'}
                  </button>
                </div>
              </div>

              <div className="flex justify-center">
                {/* <img
                  src="/imgs/Logos/7.png"
                  alt=""
                  className="w-[auto] h-[200px]"
                /> */}
              </div>
            </div>
            <div className="w-full xl:w-[450px]">
              <div className="text-md flex flex-col gap-7 border-0 xl:border-2 border-primary p-5 xl:min-h-[450px] justify-center">
                <h3 className="text-4xl text-center">
                  Redes Sociais
                </h3>
                <div className="flex justify-center gap-3">
                  <a href="https://www.facebook.com/novoportaldobeijaflor/?locale=pt_BR">
                    <i>
                      <AiFillFacebook
                        size={38}
                        className="cursor-pointer"
                      />
                    </i>
                  </a>

                  <a href="https://www.instagram.com/portalbeijaflor/">
                    <i>
                      <AiFillInstagram
                        size={38}
                        className="cursor-pointer"
                      />
                    </i>
                  </a>
                </div>


                {/**
                 * <button className="border rounded-full p-2 hover:bg-white hover:text-black text-2xl">
                  <p>Siga nossas páginas</p>
                </button>
                */}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
