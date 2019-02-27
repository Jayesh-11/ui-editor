// Libraries.

import React, {Component} from "react";
import ReactDOM from "react-dom";

// Dependencies.
import style from "./Index/index.css";

// Components.

import Elements from "./Elements/Elements";
import Preview from "@ui-editor/preview";


import InputComponent from "./mock/InputComponent";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: []
        }
    }

    updatePreview(element) {
        let components = this.state.components;
        components.push(element)
        this.setState({
            components
        });
    }

    render(){
        return (
            <div className={style.showBackground}>
                <Elements createMode={false} onPublish={this.updatePreview.bind(this)}/>
                <Preview components={this.state.components}/>
            </div>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById("index"));