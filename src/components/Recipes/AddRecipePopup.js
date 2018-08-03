import React, { Component } from 'react'

const initialState = {
    recipe: {
      name: '',
      ingredients: ''
    }
}

class AddRecipePopup extends Component {

  constructor() {
      super()
      this.state = initialState
  }

  componentWillUnmount() {
      this.setState(initialState)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      if ( prevProps.recipesCount != this.props.recipesCount ) {
          this.props.closePopup()
      }
  }

  render() {

    let popupClass = this.props.isActive ? 'show' : ''

    return (
      <div className={"add-recipe-popup " + popupClass}>
        <div className="add-recipe-popup-box">
            <div className="form-group">
                <label>Recipe name:</label>
                <input type="text" name="name" onChange={this.handleInputChange.bind(this)} placeholder="Tomato sauce"  />
            </div>
            <div className="form-group">
                <label>Ingredients:</label>
                <input type="text" name="ingredients" onChange={this.handleInputChange.bind(this)} placeholder="tomatoes, cottage cheese, onions..."  />
            </div>
            <div className="default-btn" onClick={this.addRecipe.bind(this)}>
                Add
            </div>
            <div className="default-btn" onClick={this.props.closePopup}>
                Close
            </div>
        </div>  
      </div>
    )
  }

  validateInputs() {
      console.log('validating inputs')
  }

  handleInputChange(e) {

    let inputName = e.target.name
    let inputValue = e.target.value

   if ( inputName == 'ingredients' ) {
    inputValue = inputValue.split(',')
   } 

    let newState = {
        ...this.state,
        recipe: {
            ...this.state.recipe,
            [inputName] : inputValue
        }
    }
    this.setState(newState)
  }

  addRecipe() {
      
    this.props.addRecipe(this.state.recipe)
    
  }


  

}

export default AddRecipePopup
