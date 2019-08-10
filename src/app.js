import Taro, { Component } from "@tarojs/taro";
import http from "@/utils/http";
import Index from "./pages/index/index";
import "./style/style.scss";
import TaroSdk from "./utils/wxSdk";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  config = {
    // 用于指定小程序由哪些页面组成，每一项都对应一个页面的 路径 + 文件名 信息。文件名不需要写文件后缀，框架会自动去寻找对应位置的文件进行处理。
    pages: [
      // 数组的第一项代表小程序的初始页面（首页）
      "pages/index/index",
      "pages/detail/index",
      "pages/search/index",
      "pages/result/index"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#6190e8",
      navigationBarTitleText: "垃圾分类指南",
      navigationBarTextStyle: "white"
    }
  };

  componentWillMount() {
    http.login();
    TaroSdk.getBaiduToken();
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));
