import React, { Component } from 'react';
import { render } from '@testing-library/react';
import { connect } from "react-redux";
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from "../actions";

import { Header } from './header/Header';
import { LeftMenu } from './leftMenu/LeftMenu';
import { TopMenu } from './topMenu/TopMenu';
import Container from './container/Container';
import styles from './App.module.css'
import '../style/header.css';

class App extends Component {

  onDragEnd = (result) => {

    const { destination, source, draggableId } = result;

    if (!destination) {

      return;

    }

    this.props.dispatch(
      sort(

        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId

      )
    )

  };

  render() {

    const { lists } = this.props;

    return (

      <DragDropContext onDragEnd={this.onDragEnd}>
        <Header></Header>

        <LeftMenu style={{ float: "left" }}></LeftMenu>
        <div className="App" style={{ display: "grid" }}>

          {/* style={{ backgroundColor: "#f5f5f5", height: "760px", paddingLeft: "241px" }} */}

          <div style={{ paddingLeft: "6px", backgroundColor: "#f5f5f5", width: "100%", height: "100%" }}>
            <TopMenu></TopMenu>

            {lists.map(list => (
              <Container listID={list.id} key={list.id} text={list.title} cards={list.cards} image={list.image} totalPoint={list.totalPoint} />
            ))}

          </div>


        </div>

      </DragDropContext >
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App)
