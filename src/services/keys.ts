export const pageCacheKey = (id: string) => `pagecache#${id}`

export const usersKey = (userId: string) => `users#${userId}`

export const sessionsKey = (sessionId: string) => `sessions#${sessionId}`

export const usernamesUniqueKey = () => 'usernames: unique'

export const userLikesKey = (userId: string) => `user:likes#${userId}`

export const usernamesKey = () => 'usernames'

// Items
export const itemsKey = (itemId: string) => `ìtems#${itemId}`
export const itemsByViewsKey = () => 'items:views'
export const itemsByEndingAtKey = () => 'items:endingAt'
export const itemsViewsKey = (itemId: string) => `items:views#${itemId}`
export const bidHistoryKey = (itemId: string) => `history#${itemId}`

