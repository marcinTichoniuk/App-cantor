import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Section } from '../../components/global/Sections/Sections';
import { Title, SubTitle } from '../../components/global/Titles/Titles';
import { Container } from '../../components/global/Container/Container';
import { Input } from '../../components/global/Input/Input';
import Headline from '../../components/local/Headline/HeadlineStyled';
import Form from '../../components/local/Form/FormStyled';
import TransactionList from '../../components/local/TransactionList/TransactionListStyled';
import TransactionResults from '../../components/local/TransactionResults/TransactionResultsStyled';

import * as transactionActions from './store/actions/transactionActions';


class Home extends Component {
  state = {
    plnInput: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    }, this.changePLN)
  }

  changePLN = () => {
    const { defineConverter, changeConverter, transactions } = this.props;
    let { plnInput } = this.state;
    if (plnInput === '' || isNaN(plnInput) || plnInput < 0) {
      transactions.length > 0 ? changeConverter(0) : defineConverter(0);
    } else {
      plnInput = parseFloat(plnInput);
      transactions.length > 0 ? changeConverter(plnInput) : defineConverter(plnInput);
    }
  }


  render() {
    const { converter, transactions, addTransaction, removeTransaction } = this.props;
    const { plnInput } = this.state;

    const sumAll = transactions.reduce((acc, curr) => acc + curr.plnValue, 0);
    const topTransaction = transactions.reduce((acc, curr) => acc.plnValue > curr.plnValue ? acc : curr, {});

    return (
      <Section>
        <Title>Welcome to cantor</Title>
        <Container>
          <SubTitle>Define converter</SubTitle>
          <Input type="number" placeholder="Define PLN" name="plnInput" value={plnInput} onChange={this.handleChange} />
          <Headline converter={converter} />
        </Container>
        <Form addTransaction={addTransaction} converter={converter} />
        <Section result="true">
          <Title up>transactions</Title>
          <TransactionList transactions={transactions} removeTransaction={removeTransaction} />
          <TransactionResults sumAll={sumAll} topTransaction={topTransaction} />
        </Section>
      </Section>
    )
  }
}

const mapStateToProps = state => ({
  transactions: state.cantor.transactions,
  converter: state.cantor.converter
});

const mapDispatchToProps = dispatch => ({
  addTransaction: (name, euroValue, converter) => dispatch(transactionActions.add(name, euroValue, converter)),
  removeTransaction: id => dispatch(transactionActions.remove(id)),
  defineConverter: converter => dispatch(transactionActions.defineConverter(converter)),
  changeConverter: newConverter => dispatch(transactionActions.changeConverter(newConverter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);