import { lazy, LazyExoticComponent } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route{
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    main: string;
}

const LazyLayout = lazy(()=> import(/* webpackChunckName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout') );


export const routes: Route[] = [
    {
        to: '/lazylayout/',
        path: '/lazylayout/*',
        Component: LazyLayout,
        main: 'LazyLayout'
    },
    {
        to: '/nolazy',
        path: 'nolazy',
        Component: NoLazy,
        main: 'NoLazy'
    }
];