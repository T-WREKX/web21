function ListGroup()
{
  const items =['one ','two','three','four','five','six','seven']
    return (<ul className="list-group">
            <h1>List Name</h1>
    {items.map(item => <li>{item} </li>)}
  </ul>);
}
export default ListGroup;