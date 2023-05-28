import Image from 'next/image'
import React from 'react'

function ImageBlock({
  info,
  title,
  description,
  children,
  url,
}) {
  function handleClick() {
    if (typeof window !== 'undefined') {
      window.open(children.props.src, '_blank')
    } else {
      // código de fallback para ambientes que não suportam a API de navegador
    }
  }

  return (
    <div className="flex-1 grid md:gap-5 text-2xl w-fit h-fit">
      <div>{children}</div>
      <div className="flex flex-row md:flex-col-reverse gap-[20px] md:gap-0 items-center xl:min-w-[290px] my-5 text-black justify-center">
        <a href={url}>
        <Image
          src="/imgs/airbnb.svg"
          width={90}
          height={90}
          alt=""
          className="w-[150px] md:w-[125px] airBnb"
        />
        </a>
        <p className="text-2xl flex items-center text-[black]">{title}</p>
      </div>
    </div>
  )
}

export default ImageBlock
