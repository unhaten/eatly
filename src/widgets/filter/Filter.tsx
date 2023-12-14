import { List, ListItem } from "@mui/material";

const Filter = () => {
    return (
        <List>
            {["pizza", "mexican", "donut", "ice", "asian"].map((item) => {
                return <ListItem>{item}</ListItem>;
            })}
        </List>
    );
};

export default Filter;
