import React, {Component} from 'react';
import WebView from 'react-native-webview';

class WebViewComponent extends Component {
  render() {
      console.log(this.props.url)
    return (
      <WebView
        source={{uri: this.props.url}}
      />
    );
  }
}

export default WebViewComponent;