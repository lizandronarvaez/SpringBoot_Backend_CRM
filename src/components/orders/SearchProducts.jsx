import React from "react";

export const SearchProducts = ({ buscarProducto, valorInput }) => {
    return (
        <form onSubmit={buscarProducto}>
            <legend>Busca los productos para crear un pedido</legend>
            <div className="campo">
                <label>Productos:</label>
                <input type="text" placeholder="Nombre Productos" name="productos" onChange={valorInput} />
            </div>
            <input type="submit" className="btn btn-azul btn-block" value="Buscar producto" />
        </form>
    );
};