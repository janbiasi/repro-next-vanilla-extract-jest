import { recipe } from "@vanilla-extract/recipes";

export const buttonStyle = recipe({
    base: {
        display: "flex",
        backgroundColor: "white",
        color: "black",
    },
    variants: {
        type: {
            primary: {
                backgroundColor: 'pink'
            }
        }
    }
});
