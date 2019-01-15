import React from 'react'
import { Text, View } from 'react-native'
import PostService from '../../services/Post'
import ErrorScreen from '../Error'

class AboutScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: [],
      isLoading: true
    }
  }

  componentDidMount () {
    PostService.getAll(this.dataDidLoad, this.dataDidLerror)
  }

  dataDidLoad = (data) => {
    console.log(data);
    this.setState({ data, isLoading: false })
  }

  dataDidError = () => {
    this.setState({ data: <ErrorScreen />, isLoading: false })
  }

  render () {
    return (this.state.isLoading) ? (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center' }}>Loadings ...</Text>
      </View>
    ) : (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center' }}>{ JSON.stringify(this.state.data) }</Text>
      </View>
    )
  }
}

export default AboutScreen
