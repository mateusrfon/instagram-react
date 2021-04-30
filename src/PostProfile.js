import Icons from "./Icons";

export default function PostProfile(props) {
    return (
        <div class="post-head">
            <div class="post-profile">
                <a href="#"><img src={props.profileImage} alt="" class="profile-img-small"/></a>
                <a href="#"><span class="font500-14px c26 margin-left-15px">{props.profileName}</span></a>
            </div>
            <Icons name="ellipsis-horizontal-sharp" class="eh-icon c26"/>
        </div>
    );
}