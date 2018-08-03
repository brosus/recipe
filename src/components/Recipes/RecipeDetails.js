import React, { Component } from 'react'


class RecipeDetails extends Component {

  render() {

    return (
      <div className="recipe-details">
        <div className="recipe-details-heading">
            Ingredients
        </div>
        <div className="recipe-details-ingredients">
            {this.props.list.length > 0 ? this.renderIngredients() : this.renderNoIngredients()}
        </div>
        <div className="recipe-details-actions">
            <div className="default-btn bland-btn" onClick={this.props.editRecipe}>
              Edit
            </div>
            <div className="default-btn warning-btn" onClick={this.deleteRecipe.bind(this, this.props.index)}>
              Delete
            </div>
        </div>
      </div>
    )
  }

  renderIngredients() {
    if ( this.props.list ) {
      return this.props.list.map((item, key) => {
        return <div className="recipe-details-ingredients-item" key={key}>
                {item}
               </div>
      })
    }
    
  }
  renderNoIngredients() {
    return <div className="message">
            This recipe has no ingredients. Click 'Edit' to add a few!
           </div>
  }

  deleteRecipe(index) {
    this.props.deleteRecipe(index)
  }

}

export default RecipeDetails
