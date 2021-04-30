export default function UserProfile(props) {
    return (
        <>
            <a href={props.userLink}><img src={props.userImage} alt="" class="profile-img"/></a>
            <div class="profile">
                <a href={props.userLink}><p class="font500-14px">{props.userName}</p></a>
                <p class="font300-14px">{props.userFullName}</p>
            </div>
            <div class="sfy">
                <p class="font500-12px c8e">Sugestões para você</p>
                <a href="#"><p class="font500-12px c26">Ver tudo</p></a>
            </div>
        </>
    );
}