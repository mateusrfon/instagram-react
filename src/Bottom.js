import Icons from "./Icons";

export default function Bottom() {
    return (
        <div class="bottom-bar">
            {icons.map(e => <Icons name={e} class="bottom-icons black" link="#"/>)}
        </div>
    );
}

const icons = [
    "home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"
];