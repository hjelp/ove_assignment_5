
import "./Translation.css"





function TranslationBox(props: any) {

    let showInstructions = false

    const lengthBefore = props.letter.length
    const lengthAfter = props.letter.replace(/[^a-zA-Z\s]/g, "").length
    if (lengthBefore > lengthAfter) showInstructions = true
    else showInstructions = false

    const myString = props.letter.replace(/[^a-zA-Z]/g, "")

    return (<>
        {showInstructions ? <p>Can only translate [a-zA-Z]+</p> : <p></p>}
        <div className="ContainerBox">
            {myString.split("").map((char: string, index: number) => <img key={index} src={"/all_signs/" + char + ".png"} alt={char + "_sign"} />)}
        </div>
    </>)
}

export default TranslationBox;