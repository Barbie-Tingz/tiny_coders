function VideoPage() {
    return(
        <div className="video_page">
                <h1>Videos</h1>
                <div className="video_grid">
                    <div className="video_card video_card_one">
                        <p><iframe width="560" height="315" src="https://www.youtube.com/embed/HwsbXlHYk2U?si=P_c7xBJB-e5HbKLe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe></p>
                    </div>
                    <div className="video_card video_card_two">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/86u5lPsL-Rg?si=DKGpYetRTpXgMaON" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>
                    </div>
                    <div className="video_card video_card_three">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/AuB4c2EU3dE?si=MLRQYnCy4RVpHt9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>
                    </div>
                    <div className="video_card video_card_four">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ADED8o-Vghg?si=-Ym_lRIEnsJFAO0P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>                
                    </div>
                </div>
        </div>
    )
}

export default VideoPage