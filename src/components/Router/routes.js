import Nyheder from '../Pages/Nyheder/Nyheder';
import Nyhed from '../Pages/Nyheder/Nyhed/Nyhed';
import Login from '../Pages/Login/Login';
import Camps from '../Pages/Camps/Camps';
import Camp from '../Pages/Camps/Camp/Camp';
import Program from '../Pages/Events/Program';
import Praktisk from '../Pages/Praktisk/Praktisk';
import Arkiv from '../Pages/Nyheder/Arkiv';
import Lineup from '../Pages/Events/Line-up';
import Billet from '../Pages/Billet/Billet';
import Buy from '../Pages/Billet/Buy/Buy';
import Artist from '../Pages/Events/Artist/Artist';


/**
 * Array til at styre routes med
 * @name String Navn som bliver vist i navbar
 * @path String Sti
 * @exact Bool Grad af match
 * @display Bool Angiver om punktet skal vises i navbar
 * @component Object Komponent som skal afvikles 
 */

const routes = [
{
    name: 'NYHEDER',
    path: '/',
    exact: true,
    component: Nyheder
},
{
    name: 'EVENTS',
    path: '/Line-up',
    exact: true,
    display:true,
    component: Lineup
},
{
    name: 'CAMPS',
    path: '/camps',
    exact: true,
    component: Camps
},
{
    name: 'PRAKTISK INFO',
    path: '/praktisk-info',
    exact: true,
    component: Praktisk
},
{
    name: 'LOGIN',
    path: '/login',
    exact: true,
    display: true,
    component: Login
    },
    {
        name: 'ARKIV',
        path: '/arkiv',
        exact: false,
        display: false,
        component: Arkiv
    },
    {
        name: 'LINE-UP',
        path: '/line-up',
        exact: false,
        display: false,
        component: Lineup
    },
    {
        name: 'BILLET',
        path: '/billet',
        exact: false,
        display: false,
        component: Billet
    },
    {
        // Bruges til at vise detaljer ud fra et GET param med id
        name: 'Artist page',
        path: '/artist',
        exact: false,
        display: false,
        component: Artist
    },
    {
        // Bruges til at vise detaljer ud fra et GET param med id
        name: 'Camp page',
        path: '/camp',
        exact: false,
        display: false,
        component: Camp
    },
    {
        // Bruges til at vise detaljer ud fra et GET param med id
        name: 'Nyhed page',
        path: '/nyhed',
        exact: false,
        display: false,
        component: Nyhed
    },
    {
    name: 'Program page',
    path: '/Program',
    exact: false,
    display: false,
    component: Program
},
    {
        // Bruges til at vise detaljer ud fra et GET param med id
        name: 'Buy page',
        path: '/buy',
        exact: false,
        display: false,
        component: Buy
    }
];

export default routes;