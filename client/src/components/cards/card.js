import { useState } from "react"
import FormDialog from "../dialog/dialog"
import "./card.css"

export default function Card(props) {
    const [open, setOpen] = useState(false)

    const handleClickCard = () => {
        setOpen(true)
    }
    return (
        <>
            <FormDialog 
            key={props.id}
            open={open} 
            setOpen={setOpen} 
            name={props.name} 
            cost={props.cost} 
            category={props.category} 
            listCard={props.listCard} 
            setListCard={props.setListCard}
            id={props.id}
            />
            
            <div className="card--container" onClick={() => handleClickCard()}>
                <h1 className="card--title">{props.name}</h1>
                <p className="card--cost"> R$ {props.cost}</p>
                <p className="card--category">{props.category}</p>
            </div>
        </>
    )
}