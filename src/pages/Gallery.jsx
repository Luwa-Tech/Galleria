import useAuth from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { galleryImages } from "../data/images"
import ImageCard from "../component/ImageCard"
import { useState, useEffect } from "react"
import { CiSearch } from "react-icons/ci"

import { useDrop } from "react-dnd"

const Gallery = () => {
    const {user, signOutUser} = useAuth()
    const [searchQuery, setSearchQuery] = useState("")
    const [filteredImages, setFilteredImages] = useState([])
    const [images, setImages] = useState(galleryImages)
    const navigate = useNavigate()

    //handle when image is dropped
    const onImageDrop = (droppedImageId, newIndex) => {
        const droppedImageIndex = images.findIndex(image=> image.id === droppedImageId)
        const newImages= [...images]
        const [draggedImage] = newImages.splice(droppedImageIndex, 1)
        newImages.splice(newIndex, 0, draggedImage)
        setImages(newImages)
    }

    //drop function
    const [, drop] = useDrop(() => ({
        accept: "IMAGE",
        drop: (item) => {
            onImageDrop(item.id)
        }
    }))

    const searchQueryImages = () => {
        return galleryImages.filter(image => {
            return image.tag.some(tags => tags.toLowerCase().includes(searchQuery.toLowerCase()))
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(searchQuery === "") return
        const newFilteredImages = searchQueryImages()
        setFilteredImages(newFilteredImages)
        setSearchQuery("")
    }

    const logout = () => {
        signOutUser()
        navigate("/")
    }

    useEffect(() => {
        setFilteredImages(images)
    }, [images])

    return (
        <main>
            <section className="flex flex-col gap-4 items-center px-4 md:px-0 mt-4">
                <p className="font-roboto text-[1.2rem]">user: {user?.email}</p>
                <button className="px-6 py-2 rounded-[.2rem] bg-secondary-600 hover:bg-opacity-[0.6] text-primary-500" onClick={logout}>logout</button>
                
            </section>
            <section className="md:w-[30%] px-4 md:px-0 md:mx-auto my-[3rem]">
                <form onSubmit={handleSubmit} className="flex items-center justify-between px-[0.4rem] md:py-1 cursor-pointer md:column w-100% md:items-center md:gap-[1rem] bg-slate-200  md:pb-[0.2rem] rounded-[5px]">
                <input className="text-[.95rem] w-[100%] leading-[1.125rem] md:py-1 py-2 bg-transparent outline-none px-[.75rem]" type="text" placeholder="Search by tags.." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <button className="px-4 py-1 hover:bg-opacity-[0.7]">
                <CiSearch  className="w-[1.4rem] h-[1.4rem] md:w-[1.1rem] md:h-[1.1rem] text-buttonColor-400"/>
                </button>
                </form>
            </section>
            <section ref={drop} className="mx-auto w-[90%] grid grid-cols-2 md:grid-cols-4 md:gap-y-20 gap-y-24 gap-x-4 md:gap-x-8 md:w-[60%] md:mx-auto">
            {
                filteredImages.map(items => {
                    return (
                        
                        <ImageCard key={items.id} {...items}/>
                       
                    )
                })
            }
            </section>
        </main>
    )
}

export default Gallery