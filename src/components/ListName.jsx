function ListName({ listName, listImg, onSelect, isSelected }) {
    return (
        <li
            className={`flex cursor-pointer gap-2 items-center p-2 rounded ${isSelected ? "bg-neutral-500 text-white" : "bg-neutral-800 text-neutral-50"}`}
            onClick={() => onSelect(listName)}
        >
            <img src={`src/img/${listImg}`} alt="list icon" className="w-8" />
            {listName}
        </li>
    )
}

export default ListName
