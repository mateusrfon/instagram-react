import GenerateStories from "./GenerateStories";

export default function Stories() {
    return (
        <div class="stories-bar">
            <a href="#next"><ion-icon name="chevron-forward-circle-sharp" class="forward-icon desktop"></ion-icon></a>
            {stories.map(element => 
            <GenerateStories name={element.name} image={element.img} link={element.link}/>)}
        </div>
    );
}

const stories = [
    {img: "midia/github.png", name: "GitHub", link: "#github"},
    {img: "midia/pedraozinho.png", name: "pedraozinho", link: "#pedraozinho"},
    {img: "midia/bruna.png", name: "brunaham", link: "#brunaham"},
    {img: "midia/404.jpg", name: "er404", link: "#er404"},
    {img: "midia/pedrao.png", name: "pedraoSenior", link: "#pedraosenior"},
    {img: "midia/gabs.png", name: "gabs", link: "#gabs"},
    {img: "midia/slack.png", name: "slackBot", link: "#slackbot"},
    {img: "midia/olddog.jpeg", name: "xuin", link: "#xuin"}
];