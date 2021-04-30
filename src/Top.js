import Icons from "./Icons";

export default function Top() {
    return (
        <div class="top-bar">
            <div class="top-content">
                <div class="top-logos">
                    <Icons name="logo-instagram" class="insta-icon" link="#insta"/>
                    <div class="border desktop"></div>
                    <a href="#"><img src="midia/logo.png" alt=""/></a>
                    <Icons name="paper-plane-outline" class="msg-icon mobile" link="msg"/>
                </div>
                <input type="pesquisa" placeholder="Pesquisar" class="desktop" />
                <div class="top-icons">
                    {desktopIcons.map(e => <Icons name={e.name} class={e.class + " desktop"} link={e.link}/>)}
                </div>
            </div>
        </div>
    );
}

const desktopIcons = [
    {name: "paper-plane-outline", class:"msg-icon", link: "#msg"},
    {name: "compass-outline", class: "compass-icon", link: "#"},
    {name: "heart-outline", class: "heart-icon", link: "#recent"},
    {name: "person-outline", class: "profile-icon", link: "#profile"}    
];