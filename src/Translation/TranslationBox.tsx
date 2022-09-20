
import "./Translation.css"


function TranslationBox(props: any) {
    const myString = props.letter.replace(/[^a-zA-Z]/g, "")

    return (<>
        <div className="ContainerBox">
            {myString.split("").map((char: string, index: number) => <img key={index} src={"/all_signs/" + char + ".png"} alt={char + "_sign"} />)}
        </div>
    </>)
}

export default TranslationBox;