import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
import EmployeeForm from './EmployeeForm';
import _ from 'lodash';
import Communications from 'react-native-communications';
import Confirm from './common/Confirm';


class EmployeeEdit extends Component {
    state= { showModal: false } 

    componentDidMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value })
        })
    }

    onButtonPress() {
     const { name, phone, shift } = this.props

     this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
 }

    onTextPress() {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is  ${shift}`)
    }
    onAccept() {
        const { uid } = this.props.employee
        
        this.props.employeeDelete({ uid })
    }

    onDecline() {
        this.setState({ showModal: false })
    }

    render() { 
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                    visible={this.state.showModal} >
                    Are you sure you want to fire them?
                </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift }
};


export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete }) (EmployeeEdit);