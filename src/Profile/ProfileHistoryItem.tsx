


const historyItem = (props: { text: string, index: number, onSelect : (index: number, event : React.MouseEvent<HTMLLIElement>) => void  }) => {
  
  return <li className="unselectedHistory" onClick={ (e) => props.onSelect(props.index, e)}>{props.text}</li>;
};


export default historyItem;

