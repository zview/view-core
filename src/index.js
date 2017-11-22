//--------------------------------------------------------------------------

//
import './style/index.scss';

//--------------------------------------------------------------------------

//
import Vue from 'vue';

//--------------------------------------------------------------------------

//Basic
import Icon from './component/icon';
import Button from './component/button';

//View
import Alert from './component/alert';
import Badge from './component/badge';
import Progress from './component/progress';

//Form
import Input from './component/input';
import Radio from './component/radio';
import Check from './component/check';
import Toggle from './component/toggle';
import Select from './component/select';
import Slider from './component/slider';
import Search from './component/search';
import Upload from './component/upload';
import Form from './component/form';

//Layout
import { List, Item } from './component/list';
import { Row, Col } from './component/grid';

//Navigation
import { Navbar } from './component/navbar';
import { Tabbar } from './component/tabbar';
import { Page, Content, Header, Footer, SubHeader, SubFooter } from './component/container';
import { Tabs, TabsStriped } from './component/tabs';
import ButtonBar from './component/buttonbar';

//Other
import Editor from './component/editor';

//Service
import Service from './service';

//Directive
import dragable from './directive/dragable';
import focusable from './directive/focusable';

//Filter
import formatdate from './filter/formatdate';
import formattime from './filter/formattime';

//--------------------------------------------------------------------------

//
var pkg = require('../package.json');
//
const _VERSION = pkg.version;

//--------------------------------------------------------------------------

//
const View = {

    //Basic
    Icon,
    Button,

    //View
    Alert,
    Badge,
    Progress,

    //Layout
    List,
    Item,
    Row,
    Col,

    //Form
    Input,
    Radio,
    Check,
    Toggle,
    Select,
    Slider,
    Search,
    Upload,
    Form,

    //Navigation
    Navbar,
    Tabbar,
    Page,
    Content,
    Header,
    Footer,
    SubHeader,
    SubFooter,
    ButtonBar,
    Tabs,
    TabsStriped,

    //Other
    Editor,


    install(Vue, options) {

        //
        console.log('view (' + _VERSION + ') install : ' + JSON.stringify(options));

        //Basic
        Vue.component('Icon', Icon);
        Vue.component('Button', Button);


        //View
        Vue.component('Alert', Alert);
        Vue.component('Badge', Badge);
        Vue.component('Progress', Progress);


        //Layout
        Vue.component('List', List);
        Vue.component('Item', Item);
        Vue.component('Row', Row);
        Vue.component('Col', Col);


        //Form
        Vue.component('Input', Input);
        Vue.component('Radio', Radio);
        Vue.component('Check', Check);
        Vue.component('Toggle', Toggle);
        Vue.component('Select', Select);
        Vue.component('Slider', Slider);
        Vue.component('Search', Search);
        Vue.component('Upload', Upload);
        Vue.component('Form', Form);


        //Navigation
        Vue.component('Navbar', Navbar);
        Vue.component('Tabbar', Tabbar);
        Vue.component('Page', Page);
        Vue.component('Content', Content);
        Vue.component('Header', Header);
        Vue.component('Footer', Footer);
        Vue.component('SubHeader', SubHeader);
        Vue.component('SubFooter', SubFooter);
        Vue.component('ButtonBar', ButtonBar);
        Vue.component('Tabs', Tabs);
        Vue.component('TabsStriped', TabsStriped);


        //Other
        Vue.component('Editor', Editor);


        //Directive
        Vue.directive("drag", dragable);
        Vue.directive("focus", focusable);
        // Vue.directive("gesture", focusable);


        //Filter
        Vue.filter('formatdate', formatdate);
        Vue.filter('formattime', formattime);


        //Service
        Vue.prototype.$version  = _VERSION;
        Vue.prototype.$debug    = false;
        Vue.prototype.$alert    = function (message) {
            console.log('----' + message);
        };
        Vue.prototype.$service  = Service;

        //
        //iOS系统中激活:active状态
        document.body.addEventListener('touchstart', function () {});
    }
};

//--------------------------------------------------------------------------

// AutoInstall
if (typeof exports === 'object') {
    module.exports = View;
}
else if (typeof define === 'function' && define.amd) {
    define([], function() {
        return View;
    })
}
else if (typeof window !== 'undefined' && window.Vue) {
    window.$View = View;
    window.Vue.use(View);
}

//--------------------------------------------------------------------------

// DefaultExport
export default View;

//--------------------------------------------------------------------------

//Basic
export { Icon };
export { Button };

//View
export { Alert };
export { Badge };
export { Progress };

//Layout
export { List };
export { Item };
export { Row };
export { Col };

//Form
export { Input };
export { Radio };
export { Check };
export { Toggle };
export { Select };
export { Slider };
export { Search };
export { Upload };
export { Form };

//Navigation
export { Navbar };
export { Tabbar };
export { Page };
export { Content };
export { Header };
export { Footer };
export { SubHeader };
export { SubFooter };
export { ButtonBar };
export { Tabs };
export { TabsStriped };

//Other
export { Editor };

//--------------------------------------------------------------------------
