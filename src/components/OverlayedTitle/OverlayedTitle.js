const OverlayedTitle = (props) => {

    return(
        <div className="container-overlayed-title">
            <div className="blockTitleOverlay">{props.children}</div>
            <div className="blockTitle">{props.children}</div>
        </div>
    )
}

export default OverlayedTitle