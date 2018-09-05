import React from 'react';

import Comment from './Comment';

export default class Post extends React.Component {

    //método criado para criação de novos comentários para o usuário, passando a propriedade como parâmetro
    constructor(props) {
        super(props);

        //estado do campo
        this.state = {
            //comentários salvos como objetos
            comments: [],
            //novo comentário iniciado vazio
            newCommentText: ''
        }

        //utilização do bind para a utilização do this nas funções
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);

    }

    //função criada para o botão quando um input for preenchido, passando o evento como parâmetro
    handleSubmit(e) {
        //setando o estado passando todos os comentários prévios, e os novos
        this.setState({
            comments: [
                ...this.state.comments,
                { text: this.state.newCommentText }
            ]
        });

        //cada vez que um comentário for adicionado o campo de input é zerado
        this.setState({ newCommentText: '' });

        //previne o carregamento da página ao pressionar o botão com "submit"
        e.preventDefault();
    }

    //captura e salva o texto do input
    handleTextChange(e) {
        this.setState({ newCommentText: e.target.value })
    }

    //gero um map de todo input que for coletado
    render() {
        return (
            <div>
                <h2>{ this.props.title }</h2>
                <form onSubmit={this.handleSubmit} >
                    <input
                        value={this.state.newCommentText}
                        onChange={this.handleTextChange}
                    />
                    <button type="submit" >Comment</button>
                </form>
                { this.state.comments.map((comment, index) => {
                    return <Comment key={index} text={comment.text} />
                }) }
            </div>
        );
    }
}