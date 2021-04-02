/** @jsx createElement */
import { render, createElement, Component } from "rax"
import './index.less';
import { withRouter } from 'rax-use-router';

interface PropsInfo {
}
interface StateInfo {
    


}


class AnimUI extends Component<PropsInfo, StateInfo> {
    private static inst: AnimUI
   
    constructor(props) {
        super(props);
       
    }

   

    render() {
        return (
            <div className="animui-box">
                <div className="animui-con">
                    <img className="animui-fruit1" src="https://gw.alicdn.com/imgextra/i3/O1CN01Ygmzgy1r2wL7Qrjje_!!6000000005574-2-tps-155-184.png"  />
                    <img className="animui-fruit2" src="https://gw.alicdn.com/imgextra/i2/O1CN01cDRBq21lnl8PcL3gz_!!6000000004864-2-tps-138-149.png"  />
                    <img className="animui-fruit3" src="https://img.alicdn.com/imgextra/i3/O1CN01eC80mX1oj7yV97eiJ_!!6000000005260-2-tps-128-144.png"  />
                    <img className="animui-fruit4" src="https://gw.alicdn.com/imgextra/i2/O1CN014RXhkJ1W2NvfH5d4L_!!6000000002730-2-tps-86-96.png"  />
                    <img className="animui-fruit5" src="https://gw.alicdn.com/imgextra/i1/O1CN01ogSVLy28uO1htSntR_!!6000000007992-2-tps-137-155.png"  />
                    <img className="animui-light" src="https://gw.alicdn.com/imgextra/i1/O1CN01FZZahE1i8agWReOZC_!!6000000004368-2-tps-987-1012.png" />
                </div>
            </div>
        );

    }
}

export default withRouter(AnimUI)