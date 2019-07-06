// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateRoom = `subscription OnCreateRoom {
  onCreateRoom {
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
export const onUpdateRoom = `subscription OnUpdateRoom {
  onUpdateRoom {
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
export const onDeleteRoom = `subscription OnDeleteRoom {
  onDeleteRoom {
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
export const onCreateItem = `subscription OnCreateItem {
  onCreateItem {
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
export const onUpdateItem = `subscription OnUpdateItem {
  onUpdateItem {
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
export const onDeleteItem = `subscription OnDeleteItem {
  onDeleteItem {
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
export const onCreateResponse = `subscription OnCreateResponse {
  onCreateResponse {
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
export const onUpdateResponse = `subscription OnUpdateResponse {
  onUpdateResponse {
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
export const onDeleteResponse = `subscription OnDeleteResponse {
  onDeleteResponse {
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
