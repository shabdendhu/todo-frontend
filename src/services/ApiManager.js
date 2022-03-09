/*eslint-disable*/
import React, { Component } from 'react'
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Slide,
} from '@material-ui/core'
import { CheckCircle, Close, Error } from '@material-ui/icons'
import CONST from './constants'
// const { enqueueSnackbar, closeSnackbar } = useSnackbar()

export class ApiManager extends Component {
  // constructor(props) {
  //     console.log(props)
  //     this.state = {
  //         header: props
  //     }
  //     super(props);
  //     this.props = props
  //     console.log(this.state)
  // }
  static myInstance = null
  static getInstance() {
    return new ApiManager()
  }
  async request(api, type, data, id) {
    let options = type => {
      console.log(type)
      console.log(data)

      switch (type) {
        case 'get':
          return {
            method: CONST.METHOD.GET,
          }
        case 'post':
          return {
            method: CONST.METHOD.POST,
            headers: CONST.HEADER,
            body: data,
          }
        case 'delete':
          return {
            method: CONST.METHOD.DELETE,
            headers: CONST.HEADER,
          }
        case 'update':
          return {
            method: CONST.METHOD.PUT,
            headers: CONST.HEADER,
            body: data,
          }

        default:
          return {}
      }
    }
    const url = CONST.API_URL + api + (id ? id : '')
    return fetch(url, options(type))
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response)
        }
        return response.json()
      })
      .then(json => {
        console.log(json)
        if (json.data) {
          if (json.data.length == undefined) {
            return [json.data]
          } else {
            json.data.map(key => {
              //Adding key
              key.key = key.id
            })
          }

          // this.openNotificationWithIcon('success', 'Success', json.message)

          return json.data
        } else {
          return []
        }
      })
      .catch(error => {
        console.log(error.message)

        return []
        // this.handleError(error);
      })
  }

  handleResponseError(response) {
    // this.openNotificationWithIcon('error', 'Failed', response.status)
    throw new Error('HTTP error, status = ' + response.status)
  }

  handleError(error) {
    // this.openNotificationWithIcon('error', 'Failed', error.message)
    console.log(error.message)
  }
}
export default ApiManager
