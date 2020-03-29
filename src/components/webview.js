import React, { Component } from 'react';
import WebView from 'react-native-webview';

class WebViewComponent extends Component {

  componentDidMount() {
    this.props.navigation.setParams({
      title: this.props.title,
    })
  }

  render() {
    return (
      <WebView
        source={{ uri: this.props.url }}
      />
    );
  }
}

export default WebViewComponent;