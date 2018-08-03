import React, { Component } from 'react'
import RecipeListItem from './RecipeListItem'

class RecipeList extends Component {


  render() {
    return (
      <div className="recipe-list">
        {this.props.list.length > 0 ? this.renderRecipes() : this.renderNoRecipes()}
      </div>
    )
  }

  renderRecipes() {
      return this.props.list.map((item, key) => {
        return <RecipeListItem data={item} key={key} index={key} deleteRecipe={this.props.deleteRecipe} onPopupSubmit={this.props.onPopupSubmit} />
    })
  }

  renderNoRecipes() {
    return <div className="message">You have no recipes added. Click 'Add Recipe' below to get started!</div>
  }


  

}

export default RecipeList
