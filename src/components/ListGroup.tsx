function ListGroup()
{
let items =['one ','two','three','four','five','six','seven']
items = ['three'];
    return (<ul className="list-group">
            <h1>List Name</h1>
            {items.length === 0 ? <p>No item found</p> : null}
            {items.map(item => <li key={item}> {item} </li>)}
            </ul>);
}
export default ListGroup;