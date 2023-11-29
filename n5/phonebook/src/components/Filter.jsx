const Filter = ({handleFilter}) => {
    return (<div>
        <p>Find contact by name</p>
         <input  type="text"
            
            onChange={handleFilter} />
        </div>
    )
}

export default Filter;