import { Component } from 'react'
import '@antmjs/vantui/lib/index.css';
import './app.less'
import 'taro-ui/dist/style/index.scss' 

class App extends Component {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}


export default App
