import Post from "./Post";

export default function Feed() {
    return (
        <>
            {posts.map(e => 
            <Post profileName={e.profileName} profileImage={e.profileImage} postType={e.postType}
            postContent={e.postContent} postLiker={e.postLiker} postLikerImg={e.postLikerImg}
            postOtherLikes={e.postOtherLikes} postComents={e.postComents}/>)
            }
        </>
    );
}

const posts = [
    {
        profileName: "xuin", profileImage: "midia/olddog.jpeg", postType: "video", 
        postContent: "midia/video", postLiker: "pedraozinho", postLikerImg: "midia/pedraozinho.png",
        postOtherLikes: "outras 53 pessoas", postComents: [
            {profile: "brunaham", coment: "muito tímido! ta precisando de soft skills hahaha"},
            {profile: "gabs", coment: "muito bom, bruninha! &#128514"}
        ]
    },
    {
        profileName: "GitHub", profileImage: "midia/github.png", postType: "imagem", 
        postContent: "midia/catphone.jfif", postLiker: "gatinea", postLikerImg: "midia/catphone.jfif",
        postOtherLikes: "outros 91.753 gatos", postComents: [
            {profile: "gatuno", coment: "miaaw miiaw, miiiaaw? &#128151"},
            {profile: "gatotto", coment: "MIAAAAAWWWW! &#128525"}
        ]
    },
    {
        profileName: "brunaham", profileImage: "midia/bruna.png", postType: "imagem", 
        postContent: "midia/bootcamp.png", postLiker: "Zoom", postLikerImg: "midia/Zoom-Logo.jpg",
        postOtherLikes: "outras 999.999.999.999.999.999 pessoas", postComents: [
            {profile: "paçoca", coment: "Essa turma é sensacional!!! &#128151"},
            {profile: "soft-skills", coment: "já amo! não fiquem com raiva quando eu fizer vcs chorarem &#128541"}
        ]
    }
];