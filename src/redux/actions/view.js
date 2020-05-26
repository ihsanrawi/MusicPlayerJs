import { PUSH_VIEW, POP_VIEW } from "../types";

export const pushView = (view) => ({ type: PUSH_VIEW, view });
export const popView = () => ({ type: POP_VIEW });
