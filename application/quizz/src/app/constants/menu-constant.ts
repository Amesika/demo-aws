export const MENUS = [
    {
        label: 'Sujet',
        icon: 'pi pi-fw pi-book',
        routerLinks: ['/sujet']
    },
    {
        label: 'Score',
        icon: 'pi pi-fw pi-chart-line',
        routerLinks: ['/score'],
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
        routerLinks: ['/score'],
    },
    {
        label: 'Profile',
        icon: 'pi pi-user',
        routerLinks: ['/utilisateur'],
    },
    {
        separator:true
    },
    {
        label: 'Déconnexion',
        icon: 'pi pi-sign-out',
    }
]