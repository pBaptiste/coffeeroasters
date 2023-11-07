import React from 'react'
import Link from 'next/link'

type Props = {
  text: string;
  link: string;

}

const ActionLink = ({ text, link }: Props) => {
  return (
    <Link className='px-[31px] pt-[15px] pb-4 bg-darkCyan hover:bg-[#66D2CF] transition-colors duration-300 text-lightCream text-[1.125rem] leading-[1.563rem] serif-1 rounded-md' href={link}>{text}</Link>
  )
}

export default ActionLink