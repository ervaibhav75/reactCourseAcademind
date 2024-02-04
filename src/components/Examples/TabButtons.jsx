export default function TabButtons({ children, onSelect, isActive, ...props})
{


    return(
        <li>
        <button onClick={onSelect} className={isActive? 'active': undefined} {...props}>
          {children}
        </button>
        </li>
    )
}