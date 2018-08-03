import React, { Component } from 'react'
import './Recipes.css'
import RecipeList from './RecipeList'
import AddRecipePopup from './AddRecipePopup'

class RecipesWrapper extends Component {

    constructor() {
        super()
        this.state = {
            recipes: [],
            ingredients: [],
            isPopupActive: false  
        }
    }

  render() {
    return (
      <div className="recipes-wrapper">
        <RecipeList list={this.state.recipes} />
        <AddRecipePopup isActive={this.state.isPopupActive}
                        addRecipe={this.addRecipe.bind(this)}
                        closePopup={this.closePopup.bind(this)}
                        recipesCount={this.state.recipes.length} />
        <div className="default-btn" onClick={this.showPopup.bind(this)}>
            Add recipe
        </div>
      </div>
    )
  }

  addRecipe(recipe) {
    console.log('adding recipe')

    let newState = {
      ...this.state,
      recipes: [
        ...this.state.recipes,
        recipe
      ]
    }
    this.setState(newState)
  }

  showPopup() {
    this.setState({
      ...this.state,
      isPopupActive: true
    })
  }

  closePopup() {
    this.setState({
      ...this.state,
      isPopupActive: false
    })
  }
  

}

export default RecipesWrapper
