import React from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import Spinner from './../../../components/UI/Spinner/Spinner';
import axios from './../../../axios-orders';
import Input from './../../../components/UI/Input/Input'
class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'gn werdna',
                address: {
                    street: 'test street',
                    country: 'vietnam'
                },
                email: 'test@test'
            },
            deliveryMethod: 'fastest'
        }
        console.log(order);
        axios.post('/orders.json', order)
            .then(res => {
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({
                    loading: false
                })
            });
    }

    render() {
        let form = (
            <form>
                <Input placeholder="Your Name" inputtype="input" name="name" type="text"/>
                <Input placeholder="Your Email" inputtype="input" name="email" type="email"/>
                <Input placeholder="Street" inputtype="input" name="street" type="text"/>
                <Input placeholder="Postal Code" inputtype="input" name="postal" type="text"/>
                <Button
                    btnType="Success"
                    clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData