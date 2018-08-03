import React, { Component } from 'react'
import './Recipes.css'
import RecipeList from './RecipeList'
import AddRecipePopup from './AddRecipePopup'
import RecipePopup from './RecipePopup';

class RecipesWrapper extends Component {

    constructor() {
        super()
        this.state = {
            recipes: [],
            isPopupActive: false  
        }
    }

    componentDidMount() {
      this.checkForRecipes()
    }

 

  render() {
    return (
      <div className="recipes-wrapper">
        <h1 className="app-heading">Recipes</h1>
        <RecipeList list={this.state.recipes} deleteRecipe={this.deleteRecipe.bind(this)} onPopupSubmit={this.editRecipe.bind(this)} />

        {this.state.isPopupActive ? <RecipePopup title="Add recipe"
                                                 onPopupSubmit={this.addRecipe.bind(this)}
                                                 onPopupClose={this.closePopup.bind(this)}
                                                 submitButtonText="Add"
                                                 closeButtonText="Close" /> : null}

        <div className="default-btn" onClick={this.showPopup.bind(this)}>
            Add recipe
        </div>
      </div>
    )
  }

  updateLocalStorage() {
    localStorage.setItem('recipes', JSON.stringify(this.state.recipes))
  }

  editRecipe(index, recipe) {
    let newState = {
      ...this.state
    }
    newState.recipes[index] = recipe
    this.setState(newState, () => {
      this.updateLocalStorage()
    })
  }

  addRecipe(recipe) {

    let newState = {
      ...this.state,
      recipes: [
        ...this.state.recipes,
        recipe
      ]
    }
    this.setState(newState, () => {
      this.updateLocalStorage()
      this.closePopup()
    })
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
  
  checkForRecipes() {
    if ( localStorage.getItem('recipes') ) {
      let newState = {
        ...this.state,
        recipes: JSON.parse(localStorage.getItem('recipes'))
      }
      this.setState(newState)
    }
  }

  deleteRecipe(index) {
    let newState = {
      ...this.state,
      recipes: this.state.recipes.filter((item, key) => key !== index)
    }
    this.setState(newState, () => {
      this.updateLocalStorage()
    })
  }

}

export default RecipesWrapper
