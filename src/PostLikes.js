export default function PostLikes(props) {
    return (
        <div class="post-bottom">
            <a href="#"><img src={props.postLikerImg} alt="" class="like-profile"/></a>
            <span class="font300-14px-2">Curtido por</span>
            <span class="font500-14px black">
                <a href="#">{props.postLiker}</a>
                 e 
                <a href="#">{props.postOtherLikes}</a>
            </span>
        </div>
    );
}