function VideoPage() {
    return(
        <div className="tc-page">
            <div className="tc-page-hero">
                <div className="tc-unique-eyebrow">SEE US IN ACTION</div>
                <div className="finger-paint font-md">Videos</div>
            </div>

            <div className="tc-video-grid">
                <div className="tc-video-card sky-cyan">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/HwsbXlHYk2U?si=P_c7xBJB-e5HbKLe" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>
                </div>
                <div className="tc-video-card blue">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/86u5lPsL-Rg?si=DKGpYetRTpXgMaON" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>
                </div>
                <div className="tc-video-card pink">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/AuB4c2EU3dE?si=MLRQYnCy4RVpHt9o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>
                </div>
                <div className="tc-video-card lavender">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ADED8o-Vghg?si=-Ym_lRIEnsJFAO0P" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default VideoPage