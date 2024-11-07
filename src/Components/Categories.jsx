import React from 'react'
export class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key:"all",
                    name:"All of this bullshit"
                },
                {
                    key:"Children",
                    name:"Children"
                },
                {
                    key:"Drivers",
                    name:"Drivers"
                },
                {
                    key:"Cool guys",
                    name:"Cool guys"
                },
                {
                    key:"Pacanchiki",
                    name:"Pacanchiki"
                },
                {
                    key:"Devchonkas for kazakh's pie",
                    name:"Devchonkas for kazakh's pie"
                },
                
            ]
        }
    }
    render() {
        return(
            <div className = "categories">
                {this.state.categories.map(el => (
                        <div key = {el.id} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }

}

export default Categories