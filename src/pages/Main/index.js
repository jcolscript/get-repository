import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Form, SubmitButton, List } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  handleInputChange = (e) => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { data } = await api.get(`/repos/${this.state.newRepo}`);
    const repository = {
      id: data.id,
      name: data.name,
      full_name: data.full_name,
    };

    this.setState({
      repositories: [...this.state.repositories, repository],
      newRepo: '',
      loading: false,
    });
  };
  render() {
    const { newRepo, loading } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={newRepo}
            onChange={this.handleInputChange}
            placeholder="Adicionar repositório"
          />
          <SubmitButton loading={loading ? 1 : 0}>
            {loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaPlus color="#fff" size={14} />
            )}
          </SubmitButton>
        </Form>
        <List>
          {this.state.repositories.map((repository) => (
            <li key={repository.id}>
              <span>{repository.full_name}</span>
              <a href="#">Detalhes</a>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
