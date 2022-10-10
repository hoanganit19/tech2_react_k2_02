import React, {Component} from "react";
import {ProviderContext} from "./ProviderState";

const getContext = (ParentComponent) => {
    return class extends Component{
        constructor(props){
            super(props);
        }
        
        render (){
            return (
                <ProviderContext.Consumer>
                    {
                        dataContext => <ParentComponent store={dataContext} {...this.props}/>
                    }
                </ProviderContext.Consumer>
            )
        }
    }
}

export default getContext;