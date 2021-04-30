export default function Icons(props) {
    return (
        <a href={props.link}><ion-icon name={props.name} class={props.class}></ion-icon></a>
    );
}