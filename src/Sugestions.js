export default function Sugestions(props) {
    const follow = props.follow ? 'Segue você' : 'Não segue você';
    return (
        <div class="suggestion">
            <div class="flex">
                <a href="#"><img src={props.userImage} alt={props.userName} class="profile-img-small"/></a>
                <div class="info">
                    <a href="#" class="underline"><p class="font500-14px c26">{props.userName}</p></a>
                    <p class="font400-12px c8e">{follow}</p>
                </div>
            </div>
            <a href="#"><p class="font500-12px c-babyblue">Seguir</p></a>
        </div>
    );
}