import { useDrag } from "react-dnd"

const ImageCard = (props) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "IMAGE",
        item: {id: props?.id},
        // collect: (monitor) => ({
        //     isDragging: monitor.isDragging()
        // })
    }))
    return (
        <div ref={drag}  className={`w-[10rem] md:w-[12rem] h-[13rem] cursor-grab md:h-[16rem] ${isDragging ? "opacity-[0.5]" : "opacity-1"}`}>
                <div className="flex items-center justify-center"> 
                    <img className="w-[10rem] h-[13rem] md:w-[18rem] md:h-[15rem]" src={props?.image} />
                </div>
                <div className="flex mt-2 gap-2">
                    
                    {
                        props?.tag?.map(tags => {
                            return (
                                <p key={tags} className="text-[.6rem] md:text-[.8rem] px-1 rounded-[.2rem] py-1 bg-slate-400 text-[#111827] font-bold leading-normal mb-2">{tags}</p>
                            )
                        })
                    }
            
                </div>
        </div>
    )
}

export default ImageCard