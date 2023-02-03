import type { CreateItemAttrs } from '$services/types';
import { client } from '../../redis/client';
import { serialize } from './serialize';
import { genId } from '../../utils/gen-id';
import { itemsKey } from '../../keys';
import { deserialize } from './deserialize';

export const getItem = async (id: string) => {
    const item = await client.hGetAll(itemsKey(id))
    if (Object.keys(item).length === 0) return null
    return deserialize(id, item)
};

export const getItems = async (ids: string[]) => {};

export const createItem = async (attrs: CreateItemAttrs, userId: string) => {
    const id = genId()
    const serialized = serialize(attrs)
    await client.hSet(itemsKey(id), serialized)
    return id
};
