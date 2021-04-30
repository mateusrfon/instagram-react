import Icons from "./Icons";

export default function PostBottomIcons() {
    const bottomIcons = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];
    return (
        <div class="post-bottom-icons">
            <div class="margin-left-18px">
                {bottomIcons.map(e => <Icons name={e.name} class="post-icons black"/>)}
            </div>
            <Icons name="bookmark-outline" class="post-icons black"/>
        </div>
    );
}