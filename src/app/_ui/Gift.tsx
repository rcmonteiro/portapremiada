const Gift = (props: any) => {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center">
      <div className="w-12 h-3 bg-green-400"></div>
      <div className="w-10 h-7 bg-green-500"></div>
      <div className="w-2 h-10 bg-red-500 absolute top-0"></div>
      <div className="w-10 h-2 bg-red-500 absolute"></div>
    </div>
  )
}
export default Gift