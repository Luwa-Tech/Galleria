const ImageCard = (props) => {
    return (
        <div className="w-[10rem] md:w-[12rem] h-[13rem] md:h-[16rem]">
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