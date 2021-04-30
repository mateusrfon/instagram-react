export default function GenerateStories(props) {
    return (
        <div class="storie">
            <a href={props.link}>
                <div class="storie-img">
                    <img src={props.image} alt="" class={"profile-img"} />
                </div>
                <p class="storie-font">{props.name}</p>
            </a>                
    </div>
    );
}