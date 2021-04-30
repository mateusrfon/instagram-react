import Icons from "./Icons"

export default function PostAddComent() {
    return (
        <div class="addcomment-box">
            <Icons name="happy-outline" class="post-icons"/>
            <input type="coment" placeholder="Adicione um comentário..."/>
            <span>Publicar</span>
        </div>
    );
}