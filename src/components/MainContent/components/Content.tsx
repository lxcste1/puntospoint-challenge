import React from 'react'
import { useQuery } from 'react-query';

export default function Content() {
    const { data: changeView } = useQuery('changeView', () => 'graphic', {
        enabled:true,
    });

    return (
        <div>
            {changeView === 'graphic' ? <p>Gráfico</p> : <p>Pulso</p>}
        </div>
    )
}
