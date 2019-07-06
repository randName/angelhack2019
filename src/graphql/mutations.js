// eslint-disable
// this is an auto generated file. This will be overwritten

export const createRoom = `mutation CreateRoom($input: CreateRoomInput!) {
  createRoom(input: $input) {
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
export const updateRoom = `mutation UpdateRoom($input: UpdateRoomInput!) {
  updateRoom(input: $input) {
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
export const deleteRoom = `mutation DeleteRoom($input: DeleteRoomInput!) {
  deleteRoom(input: $input) {
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
export const createItem = `mutation CreateItem($input: CreateItemInput!) {
  createItem(input: $input) {
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
export const updateItem = `mutation UpdateItem($input: UpdateItemInput!) {
  updateItem(input: $input) {
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
export const deleteItem = `mutation DeleteItem($input: DeleteItemInput!) {
  deleteItem(input: $input) {
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
export const createResponse = `mutation CreateResponse($input: CreateResponseInput!) {
  createResponse(input: $input) {
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
export const updateResponse = `mutation UpdateResponse($input: UpdateResponseInput!) {
  updateResponse(input: $input) {
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
export const deleteResponse = `mutation DeleteResponse($input: DeleteResponseInput!) {
  deleteResponse(input: $input) {
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
