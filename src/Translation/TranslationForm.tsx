
interface IProps {
    setLetter: React.Dispatch<React.SetStateAction<string>>,
    submitTranslationHandler: () => void
}

function TranslationForm({ setLetter, submitTranslationHandler }: IProps) {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLetter(e.target.value)
    }


    return (<>

        <form className="Form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" onChange={onChangeHandler} placeholder="Write something..."></input>
            <button type="submit" onClick={submitTranslationHandler}>Submit&rarr;</button>
        </form>
    </>)
}

export default TranslationForm;