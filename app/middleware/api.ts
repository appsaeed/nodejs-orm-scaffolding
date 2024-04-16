import { apiSend } from "../base/helpers";
import { Next, Req, Res } from "../base/types/types";

export default function (req: Req, res: Res, next: Next) {
    if (req.url.includes("/api")) {
        return apiSend(res, 'status', 404)
    }
    return next();
}