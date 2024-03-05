import DoorSkeleton from "@/app/_ui/skeletons/DoorSkeleton"

const Loading = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-2 self-stretch justify-around">
        <DoorSkeleton/> 
        <DoorSkeleton/>
        <DoorSkeleton/>
      </div>
      <div className="bg-slate-400 w-10 h-4 py-1 rounded-md">asdasd</div>
    </> 
  )
}
export default Loading