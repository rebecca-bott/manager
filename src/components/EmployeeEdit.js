import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave } from '../actions';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
import EmployeeForm from './EmployeeForm';
import _ from 'lodash';
import Communications from 'react-native-communications';


class EmployeeEdit extends Component {
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
                    <Button>
                        Fire
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift }
};


export default connect(mapStateToProps, { employeeUpdate, employeeSave }) (EmployeeEdit);