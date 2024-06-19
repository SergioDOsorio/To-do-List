function ListName({ listName, listImg, onSelect, isSelected }) {
    return (
        <li
            className={`flex cursor-pointer gap-2 items-center p-2 rounded text-base ${isSelected && "bg-neutral-500 text-white"}`}
            onClick={() => onSelect(listName)}
        >
            <img src={listImg} alt="list icon" className="w-8" />
            {listName}
        </li>
    )
}

export default ListName
