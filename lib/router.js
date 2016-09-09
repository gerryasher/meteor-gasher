Router.configure({
    layoutTemplate: 'main'
});

Router.route('/', {
    template: 'home',
    name: 'home'
});
Router.route('/about', {
    template: 'about',
    name: 'about'
});
Router.route('/links', {
    template: 'links',
    name: 'links'
});
Router.route('/blog', {
    template: 'blog',
    name: 'blog'
});
Router.route('/contact', {
    template: 'contact',
    name: 'contact'
});
Router.route('/skills', {
    template: 'skills',
    name: 'skills'
});

