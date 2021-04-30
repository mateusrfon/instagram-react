import UserProfile from "./UserProfile";
import Sugestions from "./Sugestions";
import Disclaimer from "./Disclaimer";

export default function SideBar() {
    return (
        <div class="side-bar">
            <UserProfile userName="mateusrfon" userFullName="Mateus Fonseca" userImage="midia/mateusrfon.jpeg" userLink="https://www.instagram.com/mateusrfon/"/>
            {sugestions.map(e => <Sugestions userName={e.userName} userImage={e.userImage} follow={e.follow} />)}
            <Disclaimer/>
        </div>
    );
}

const sugestions = [
    {userName: "facebook", userImage: "midia/Facebook-share-icon.png", follow: true},
    {userName: "anonymous", userImage: "midia/anonymous.png", follow: true},
    {userName: "ang", userImage: "midia/ang.jpg", follow: true},
    {userName: "harry_2001", userImage: "midia/hp.jpg", follow: true},
    {userName: "gatinea", userImage: "midia/catphone.jfif", follow: true}
];