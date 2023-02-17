import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css'
function Nav ({onSearch}) {
    return (
        <div className={style.nav}>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav;