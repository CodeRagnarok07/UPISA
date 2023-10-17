import video from 'src/locale/video.json'



const VideCont = () => {

    const videoCode = video[localStorage.userlang]




    return (
        <div className="cont relative z-50 py-20">

            <iframe className="
            rounded-xl
            w-full
            h-[11.25rem] 
            sm:h-[16.25rem] 
            md:h-[25.25rem] 
            lg:h-[35.25rem] 
            xl:h-[43rem]             
            "
                // src="https://drive.google.com/file/d/1E5qbD3NhY2VYfUpk5ORbGm99cdGOCMWh/preview" 
                src={"https://www.youtube.com/embed/"+ videoCode + "?si=ZdouWTeVx-3i5Eg3&amp;controls=0"}
            
                >
            </iframe>


            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/ANVKiG0i8tQ?si=ZdouWTeVx-3i5Eg3&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

        </div>
    )
}

export default VideCont