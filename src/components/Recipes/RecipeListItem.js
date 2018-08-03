import React, { Component } from 'react'
import RecipeDetails from './RecipeDetails'
import RecipePopup from './RecipePopup'

const initialState = {
    showDetails: false,
    editMode: false
}

class RecipeListItem extends Component {

    constructor() {
        super()
        this.state = initialState
    }

    componentWillUnmount() {
        this.setState(initialState)
    }


  render() {
      let activeClass = this.state.showDetails ? 'active' : ''
    return (
            <div className={"recipe-list-item " + activeClass}>
                <div className="recipe-list-item-name" onClick={this.toggleDetails.bind(this)}>
                    {this.props.data.name}
                </div>
                {this.state.showDetails ? this.renderDetails() : null }
                {this.state.editMode ? this.renderPopup() : null}
            </div>
    )
  }

  renderPopup() {
      return <RecipePopup title="Edit recipe" 
                          data={this.props.data}
                          isActive={this.state.editMode}
                          onPopupSubmit={this.props.onPopupSubmit}
                          onPopupClose={this.hidePopup.bind(this)}
                          index={this.props.index}
                          submitButtonText="Save"
                          closeButtonText="Close" 
                          afterSubmitCallback={this.hidePopup.bind(this)} />
  }

  renderDetails() {
    return <RecipeDetails list={this.props.data.ingredients} 
                          index={this.props.index} 
                          deleteRecipe={this.props.deleteRecipe}
                          editRecipe={this.showPopup.bind(this)} />
  }

  toggleDetails() {
    let newState = {
        ...this.state,
        showDetails: !this.state.showDetails
    }
    this.setState(newState)
  }

  showPopup() {
      let newState = {
          ...this.state,
          editMode: true
      }
      this.setState(newState)
  }

  hidePopup() {
    let newState = {
        ...this.state,
        editMode: false
    }
    this.setState(newState)
  }   
  
  showDetails() {
    let newState = {
        ...this.state,
        showDetails: true
    }
    this.setState(newState)
  }

  hideDetails() {
    let newState = {
        ...this.state,
        showDetails: false
    }
    this.setState(newState)
  }

}

export default RecipeListItem
