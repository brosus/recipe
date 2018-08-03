import React, { Component } from 'react'

class RecipeList extends Component {


  render() {
    return (
      <div className="recipe-list">
        { this.props.list.map((item, key) => {
            return <div className="recipe-item" key={key}>
                        test
                   </div>
        }) }
      </div>
    )
  }


  

}

export default RecipeList
