const historyItem = (props: { text: string, index: number, onSelect : (index: number) => void  }) => {
  
  return <li onClick={ () => props.onSelect(props.index)}>{props.text}</li>;
};


export default historyItem;

