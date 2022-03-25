export const MENUS = [
    {
        label: 'Sujet',
        icon: 'pi pi-fw pi-book',
        routerLink: '/sujet'
    },
    {
        label: 'Score',
        icon: 'pi pi-fw pi-chart-line',
        routerLink: '/score',
    }
]

export const USER_MENUS = [
    {
        label: 'Connexion',
        icon: 'pi pi-sign-in',
    }    ,
    {
        label: 'Score',
        icon: 'pi pi-fw pi-chart-line',
        routerLink: '/score',
    },
    {
        label: 'Profile',
        icon: 'pi pi-user',
        routerLink: '/utilisateur',
    },
    {
        separator:true
    },
    {
        label: 'Déconnexion',
        icon: 'pi pi-sign-out',
    }
]