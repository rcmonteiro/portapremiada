interface Card {
  color: string,
  children: any
}

const Card = (props: Card) => {
  return (
    <div className={`
      bg-${props.color}
      w-52
      h-52
      text-white
      p-4
    `}>
      {props.children}
    </div>
  )
}
export default Card