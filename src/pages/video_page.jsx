const videos = [
    { accent: "sky-cyan", src: "" },
    { accent: "blue", src: "" },
    { accent: "pink", src: "" },
    { accent: "lavender", src: "" },
]

function VideoPage() {
    return(
        <div className="tc-page">
            <div className="tc-page-hero">
                <div className="tc-unique-eyebrow">SEE US IN ACTION</div>
                <div className="finger-paint font-md">Videos</div>
            </div>

            <div className="tc-video-section">
                <div className="tc-video-grid">
                    {videos.map(({ accent, src }, i) => (
                        <div key={i} className={`tc-window ${accent}`}>
                            <div className="tc-window-main">
                                <div className="tc-window-titlebar">
                                    <span className="tc-window-dot"></span>
                                    <span className="tc-window-dot"></span>
                                    <span className="tc-window-dot"></span>
                                </div>
                                <div className="tc-window-body tc-video-window-body">
                                    <iframe
                                        width="560"
                                        height="315"
                                        src={src}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default VideoPage
