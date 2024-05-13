import { ComponentProps } from "react";

interface NameCardProps extends ComponentProps <'strong'>{
  children: string
}

export function NameCard(props: NameCardProps){
  return (
    <strong { ...props } className='font-semibold'>
      {props.children}
    </strong>
)
}