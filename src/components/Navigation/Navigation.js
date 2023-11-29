import './Navigation.css'

export function Navigation(props) {
    return (
        <button className="navigation" type="button" onClick={props.onMenu}></button>
    )
}