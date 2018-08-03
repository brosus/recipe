import React, { Component } from 'react'

const initialState = {
    recipe: {
        name: '',
        ingredients: ''
    },
    validation: {
        name: {
            message: 'Your recipe name must have at least 3 characters.',
            passed: true
        },
        ingredients: {
            message: 'Your recipe must have at least 1 ingredient.',
            passed: true
        }
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

  componentDidMount() {
      if ( this.props.data ) {
        let { name, ingredients } = this.props.data

        let newState = {
            recipe: {
              name: name,
              ingredients: ingredients
            }
        }
        this.setState(newState, () => {
            console.log('new state: ', this.state)
        })
      }
      
  }

  render() {
      
    return (
      <div className="recipe-popup">
        <div className="recipe-popup-box">
            <div className="popup-heading">
                {this.props.title}
            </div>
            <div className="form-group">
                <label>Recipe name:</label>
                {!this.state.validation.name.passed 
                    ? <div className="validation-info">{this.state.validation.name.message}</div> 
                    : null}      
                <input type="text" name="name" value={this.state.recipe.name} onChange={this.handleInputChange.bind(this)} placeholder="Tomato sauce"  />
            </div>
            <div className="form-group">
                <label>Ingredients:</label>
                {!this.state.validation.ingredients.passed 
                    ? <div className="validation-info">{this.state.validation.ingredients.message}</div> 
                    : null} 
                <input type="text" name="ingredients" value={this.state.recipe.ingredients} onChange={this.handleInputChange.bind(this)} placeholder="tomatoes, cottage cheese, onions..."  />
            </div>
            <div className="default-btn" onClick={this.validateInputs.bind(this)}>
                {this.props.submitButtonText}
            </div>
            <div className="default-btn warning-btn" onClick={this.props.onPopupClose}>
                {this.props.closeButtonText}
            </div>
        </div>  
      </div>
    )
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
    this.setState(newState, () => {
        console.log('new state: ', this.state)
    })
  }

  validateInputs() {
      let newState = {...this.state}
      let { name, ingredients } = newState.validation
      if ( this.state.recipe.name.length < 3 ) {
        name.passed = false
      } else {
          name.passed = true
      }
      if ( this.state.recipe.ingredients.length < 1 ) {
        ingredients.passed = false        
      } else {
          ingredients.passed = true
      }
      this.setState(newState, () => {
          if ( ingredients.passed && name.passed ) {
              this.onSubmit()
          } 
      })
  }

  onSubmit() {
    if ( this.props.index > -1 ) {
        this.props.onPopupSubmit(this.props.index, {
            name: this.state.recipe.name,
            ingredients: this.state.recipe.ingredients
        })
    } else {
        this.props.onPopupSubmit({
            name: this.state.recipe.name,
            ingredients: this.state.recipe.ingredients
        })
    }
    if ( this.props.afterSubmitCallback ) {
        this.props.afterSubmitCallback()

    }
    
    
  }


  

}

export default AddRecipePopup
