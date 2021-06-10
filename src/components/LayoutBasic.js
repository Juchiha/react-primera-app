import React, { Children } from 'react';

export default function LayoutBasic(props){
    const {children} = props;
    return (
        <div>
            <div>Parte de arriba</div>
            <div>{children}</div>
            <footer>
                Copialo
            </footer>
        </div>
    );
}