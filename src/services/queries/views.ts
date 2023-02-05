import { client } from "../redis";
import { itemsKey, itemsByViewsKey } from "../keys";

export const incrementView = async (itemId: string, userId: string) => {
    return Promise.all([
        client.hIncrBy(itemsKey(itemId), "views", 1),
        client.zIncrBy(itemsByViewsKey(), 1, itemId)
    ])
};
