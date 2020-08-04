import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function CategoriaCategoria() {
	return (
		<PageDefault>
			<h1>Cadastro de Categoria</h1>

			<Link to="/cadastro/video">
				Cadastrar vídeo
			</Link>
		</PageDefault>
	);
}

export default CategoriaCategoria;