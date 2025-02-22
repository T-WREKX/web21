function ListGroup()
{
let items =['one ','two','three','four','five','six','seven']
    return (<ul className="list-group">
            <h1>List Name</h1>
            {items.length === 0 && <p>No item found</p>}
            {items.map((item, index) => <li className="l-i-g" key={item} onClick={()=>console.log(item, index)}> {item} </li>)}
            </ul>);
}
export default ListGroup;