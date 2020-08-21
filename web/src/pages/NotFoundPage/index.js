import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import PageNotFound from '../../assets/images/travolta-crunched.gif';

import './styles.css';

function NotFoundPage() {
    return (
        <div id="not-found-container">

            <main>
                <strong> 404 </strong>
                <p> Página não encontrada </p>

                <Link className="back" to="/">
                    <FaArrowLeft className="back-icon" />
                    Voltar
                </Link>

            </main>

            <footer>
                <img src={PageNotFound} alt="Página não encontrada" />
            </footer>
        </div >
    );
}

export default NotFoundPage;