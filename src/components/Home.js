import React, { Component } from 'react';
import TopicsList from './TopicsList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'  // do polaczenia componenta z jedna kolekcja czyli z 'topics' w bazie danych
import { compose } from 'redux' /// zeby sie polaczyc trzeba dodac drugi higher order component przez compoase

class Home extends Component {

  render() {
    const { topics } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m8 l6 offset-m2 offset-l3">
              <TopicsList topics={topics}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topics: state.firestore.ordered.topics
  }
}
///// standart 
///// export default connect(mapStateToProps)(Home) 

////dodanie drugiego higher order componentu rpzez compose i polaczenie z colecttion: topics  naszej bazie danych

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'topics' }
  ])
)(Home)