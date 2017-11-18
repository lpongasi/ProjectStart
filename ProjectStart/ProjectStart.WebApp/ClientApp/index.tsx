import Main from './main';

Main();

if ((module as any).hot) {
    (module as any).hot.accept();
}