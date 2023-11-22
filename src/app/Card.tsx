import { FunctionComponent } from "react";
import { useAppDispatch, useAppSelector } from "../shared/hooks/hooks";
import { addItem, removeItem } from "../features/favorites.slice";

interface CardProps {
    data: object;
}

const Card: FunctionComponent<CardProps> = ({ data }) => {
    const dispatch = useAppDispatch();
    const list = useAppSelector((state) => state.favorites.list);

    const isExists = list.some((i) => i.id === data.id);

    // console.log(isExists);

    return (
        <div
            style={{
                border: "1px solid black",
                width: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: "20px",
                backgroundColor: "#eee",
            }}
        >
            <h3>{data.name}</h3>
            {!isExists ? (
                <button onClick={() => dispatch(addItem(data))}>
                    Add to fav
                </button>
            ) : (
                <button onClick={() => dispatch(removeItem(data))}>
                    Remove from fav
                </button>
            )}
        </div>
    );
};

export default Card;
