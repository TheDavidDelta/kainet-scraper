import axios from "axios";
import UserAgent from "user-agents";

export default (
    url: string,
    data: {
        params: string,
        query?: string
    }
) => (
    axios.post(
        `https://music.youtube.com/youtubei/v1/${url}`,
        {
            context: {
                client: {
                    clientName: "WEB_REMIX",
                    clientVersion: "0.1"
                }
            },
            ...data
        },
        {
            headers: {
                "User-Agent": new UserAgent().toString(),
                Origin: "https://music.youtube.com",
                Referer: "music.youtube.com"
            }
        }
    )
);
