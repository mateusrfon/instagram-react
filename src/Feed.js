import Post from "./Post";

const posts = [
    {
        profileName: "xuin", profileImage: "midia/olddog.jpeg", postType: "video", 
        postContent: "midia/video", postLiker: "pedraozinho", postLikerImg: "midia/pedraozinho.png",
        postOtherLikes: "outras 53 pessoas", postComents: [
            {profile: "brunaham", coment: "muito tímido! ta precisando de soft skills hahaha"},
            {profile: "gabs", coment: "muito bom, bruninha! &#128514"}
        ]
    }
];

export default function Feed() {
    return (
        <>
            {posts.map(e => 
            <Post profileName={e.profileName} profileImage={e.profileImage} postType={e.postType}
            postContent={e.postContent} postLiker={e.postLiker} postLikerImg={e.postLikerImg}
            postOtherLikes={e.postOtherLikes} postComents={e.postComents}/>)
            }

            {/*<!--POST 2-->*/}
            <div class="feed-box">
                <div class="post-head">
                    <div class="post-profile">
                        <a href="#"><img src="midia/github.png" alt="" class="profile-img-small"/></a>
                        <a href="#"><span class="font500-14px c26 margin-left-15px">GitHub</span></a>
                    </div>
                    <a href="#"><ion-icon name="ellipsis-horizontal-sharp" class="eh-icon c26"></ion-icon></a>
                </div>
                <div class="post">
                    <img src="midia/catphone.jfif" alt=""/>
                </div>
                <div class="post-bottom-icons">
                    <div class="margin-left-18px">
                        <a href="#"><ion-icon name="heart-outline" class="post-icons black"></ion-icon></a>
                        <a href="#"><ion-icon name="chatbubble-outline" class="post-icons black"></ion-icon></a>
                        <a href="#"><ion-icon name="paper-plane-outline" class="post-icons black"></ion-icon></a>
                    </div>
                    <a href="#"><ion-icon name="bookmark-outline" class="post-icons black"></ion-icon></a>
                </div>
                {/*<!--Curtido por...-->*/}
                <div class="post-bottom">
                    <a href="#"><img src="midia/catphone.jfif" alt="" class="like-profile"/></a>
                    <span class="font300-14px-2">Curtido por</span><span class="font500-14px black"><a href="#">gatinea</a> e <a href="#">outros 91.753 gatos</a></span>
                </div>
                {/*<!--Coments-->*/}
                <div class="coments-box">
                    <div class="coments">
                        <span class="font500-14px black">gatuno</span><span class="font300-14px-2 black">miaaw miiaw, miiiaaw? &#128151</span>
                    </div>
                    <a href="#"><ion-icon name="heart-outline" class="coment-icon black"></ion-icon></a>
                </div>
                <div class="coments-box">
                    <div class="coments">
                        <span class="font500-14px black">gatotto</span><span class="font300-14px-2 black">MIAAAAAWWWW! &#128525</span>
                    </div>
                    <a href="#"><ion-icon name="heart-outline" class="coment-icon black"></ion-icon></a>
                </div>
                <div class="addcomment-box">
                    <a href="#"><ion-icon name="happy-outline" class="post-icons"></ion-icon></a>
                    <input type="coment" placeholder="Adicione um comentário..."/>
                    <span>Publicar</span>
                </div>
            </div>

            {/*<!--POST 3-->*/}
            <div class="feed-box">
                <div class="post-head">
                    <div class="post-profile">
                        <a href="#"><img src="midia/bruna.png" alt="" class="profile-img-small"/></a>
                        <a href="#"><span class="font500-14px c26 margin-left-15px">brunaham</span></a>
                    </div>
                    <a href="#"><ion-icon name="ellipsis-horizontal-sharp" class="eh-icon c26"></ion-icon></a>
                </div>
                <div class="post">
                    <img src="midia/bootcamp.png" alt=""/>
                    <a href="#next"><ion-icon name="chevron-forward-circle-sharp" class="forward-icon"></ion-icon></a>
                </div>
                <div class="post-bottom-icons">
                    <div class="margin-left-18px">
                        <a href="#"><ion-icon name="heart-outline" class="post-icons black"></ion-icon></a>
                        <a href="#"><ion-icon name="chatbubble-outline" class="post-icons black"></ion-icon></a>
                        <a href="#"><ion-icon name="paper-plane-outline" class="post-icons black"></ion-icon></a>
                    </div>
                    <a href="#"><ion-icon name="bookmark-outline" class="post-icons black"></ion-icon></a>
                </div>
                {/*<!--Curtido por...-->*/}
                <div class="post-bottom">
                    <a href="#"><img src="midia/Zoom-Logo.jpg" alt="" class="like-profile"/></a>
                    <span class="font300-14px-2">Curtido por</span><span class="font500-14px black"><a href="#">Zoom</a> e <a href="#">outras 999.999.999.999.999.999 pessoas</a></span>
                </div>
                {/*<!--Coments-->*/}
                <div class="coments-box">
                    <div class="coments">
                        <span class="font500-14px black">paçoca</span><span class="font300-14px-2 black">Essa turma é sensacional!!! &#128151</span>
                    </div>
                    <a href="#"><ion-icon name="heart-outline" class="coment-icon black"></ion-icon></a>
                </div>
                <div class="coments-box">
                    <div class="coments">
                        <span class="font500-14px black">soft-skills</span><span class="font300-14px-2 black">já amo! não fiquem com raiva quando eu fizer vcs chorarem &#128541</span>
                    </div>
                    <a href="#"><ion-icon name="heart-outline" class="coment-icon black"></ion-icon></a>
                </div>
                <div class="coments-box">
                    <div class="coments">
                        <span class="font500-14px black">hard-skills</span><span class="font300-14px-2 black">quando nós fizermos* heheh</span>
                    </div>
                    <a href="#"><ion-icon name="heart-outline" class="coment-icon black"></ion-icon></a>
                </div>
                <div class="addcomment-box">
                    <a href="#"><ion-icon name="happy-outline" class="post-icons"></ion-icon></a>
                    <input type="coment" placeholder="Adicione um comentário..."/>
                    <span>Publicar</span>
                </div>
            </div>
        </>
    );
}