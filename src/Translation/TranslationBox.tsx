
import "./TranslationBox.css"


function TranslationBox(props: any) {
    console.log(props.letter)
    const myString = props.letter.replace(/[^a-zA-Z]/g, "")
    if (myString.length > 60) {
        alert("Max 60 chars!")
    }

    return (<>
        <div className="ContainerBox">
            {myString.split("").map((char: string, index:number) => <img key = {index}  src={"/all_signs/" + char + ".png"} alt={char + "_sign"} />)}
        </div>
    </>)
}

export default TranslationBox;