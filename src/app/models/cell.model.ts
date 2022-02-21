import { Color } from "./color.model";
import { Status } from "./status.model";

export interface Cell {
    color: Color;
    status: Status;
}