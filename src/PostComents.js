import Icons from "./Icons";

export default function PostComents(props) {
    return (
        <div class="coments-box">
            <div class="coments">
                <span class="font500-14px black">
                    {props.profile}
                </span>
                <span class="font300-14px-2 black">
                    {props.coment}
                </span>
            </div>
            <Icons name="heart-outline" class="coment-icon black"/>
        </div>
    );
}