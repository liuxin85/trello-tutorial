import { z } from "zod";
import { Board } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { CeateBoard } from "./schema";

export type InputType = z.infer<typeof CeateBoard>;
export type ReturnType = ActionState<InputType, Board>;
