import _ from 'lodash';
import {View, FlatList} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeeFetch();

  }

  renderItem({ item }) {
     return <ListItem employee={item} />
  }

  render() {
    return (
      <View>
      <FlatList
        data={this.props.employee}
        keyExtractor={(item) => item.key} renderItem={this.renderItem}
      />
      </View>
    );
  }
}

const mapStateToProps = state => {
 
  const employee = _.map(state.employee, (val, uid) => {
    return { ...val, uid};
  })
 return {employee}

}
export default connect(mapStateToProps, { employeeFetch })(EmployeeList);