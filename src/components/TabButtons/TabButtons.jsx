export default function TabButtons({ children, onSelect, isActive}){


    return(
        <li>
        <button onClick={onSelect} className={isActive? 'active': undefined}>
          {children}
        </button>
        </li>
    )
}