export default function PostContent(props) {
    let content = '';
    if (props.postType === "video") {
        content = (
            <video class="vid" autoplay muted>
                <source src={props.postContent+".mp4"} type="video/mp4"/>
                <source src={props.postContent+".ogv"} type="video/ogv"/>
                Seu navegador não suporta vídeos.
            </video>
        );
    } else {
        content = <img src={props.postContent} alt=""/>;
    }

    return (
        <div class="post">
            {content}
        </div>
    );
}