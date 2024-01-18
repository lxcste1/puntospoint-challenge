import React from 'react'
import { useQuery } from 'react-query';
import Graphic from './Graphic/Graphic';

export default function Content() {
    const { data: changeView } = useQuery('changeView', () => 'graphic', {
        enabled:true,
    });

    return (
        <div>
            {changeView === 'graphic' ? <Graphic /> : <p>Pulso</p>}
        </div>
    )
}
