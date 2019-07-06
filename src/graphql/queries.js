// eslint-disable
// this is an auto generated file. This will be overwritten

export const getRoom = `query GetRoom($id: ID!) {
  getRoom(id: $id) {
    id
    name
    items {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`
export const listRooms = `query ListRooms(
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      items {
        nextToken
      }
    }
    nextToken
  }
}
`
export const getItem = `query GetItem($id: ID!) {
  getItem(id: $id) {
    id
    content
    room {
      id
      name
      items {
        nextToken
      }
    }
    responses {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`
export const listItems = `query ListItems(
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      room {
        id
        name
      }
      responses {
        nextToken
      }
    }
    nextToken
  }
}
`
export const getResponse = `query GetResponse($id: ID!) {
  getResponse(id: $id) {
    id
    content
    item {
      id
      content
      room {
        id
        name
      }
      responses {
        nextToken
      }
    }
  }
}
`
export const listResponses = `query ListResponses(
  $filter: ModelResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  listResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      item {
        id
        content
      }
    }
    nextToken
  }
}
`
