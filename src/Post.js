import PostContent from "./PostContent";
import PostProfile from "./PostProfile";
import PostLikes from "./PostLikes";
import PostComents from "./PostComents";
import PostBottomIcons from "./PostBottomIcons";
import PostAddComent from "./PostAddComent";

export default function Post(props) {
    return (
        <div class="feed-box">
            <PostProfile profileImage={props.profileImage} profileName={props.profileName}/>
            <PostContent postType={props.postType} postContent={props.postContent}/>
            <PostBottomIcons/>
            <PostLikes postLiker={props.postLiker} postLikerImg={props.postLikerImg} postOtherLikes={props.postOtherLikes}/>
            {props.postComents.map(e => <PostComents profile={e.profile} coment={e.coment}/>)}
            <PostAddComent/>
        </div>
        
    );
}