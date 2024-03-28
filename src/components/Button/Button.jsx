import { FiEdit, FiTrash2, FiFolderPlus  } from "react-icons/fi";

const Button = ({handleClick, text, className, type})=>{
    return (
        <button className={className} onClick={handleClick}>{
            type === 'edit' ? <FiEdit/> : type === 'delete' ? <FiTrash2/> : type === 'create' ? <FiFolderPlus/> : text
        }</button>
    )
}
export default Button