import * as types from '../actions/types'


export default function ( state = {}, action ) {
  switch (action.type) {
    case types.SEARCH:
      return {}  
    default:
      return {}
  }
}