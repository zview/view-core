//--------------------------------------------------------------------------

//
import './style/index.scss';

//--------------------------------------------------------------------------

//
import VueI18n from 'vue-i18n';
import zhCNLocale from './lang/zh_CN';
import zhTWLocale from './lang/zh_TW';
import enUSLocale from './lang/en_US';

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
import capitalize from './filter/capitalize';
import viewsubstr from './filter/viewsubstr';

//--------------------------------------------------------------------------

//
let pkg = require('../package.json');
//
const _VERSION = pkg.version;

//
const is_ios = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent)
};

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
    ButtonBar,
    Tabs,
    TabsStriped,
    //
    Content,
    Header,
    Footer,
    SubHeader,
    SubFooter,

    //Other
    Editor,


    install(Vue, options) {

        //Options
        let cfg_debug   = options.debug;
        let cfg_lang    = options.lang;
        let cfg_locales = options.locales;

        //Debug
        Vue.config.debug = cfg_debug===true;
        if(Vue.config.debug) {
            console.log('View (' + _VERSION + ') install : ' + JSON.stringify(options));
        }

        //Lang
        Vue.use(VueI18n);
        Vue.config.lang = cfg_lang?cfg_lang:'zh-CN';

        //Locale
        const zhCNMergeLocale = cfg_locales['zh-CN']?Object.assign(zhCNLocale, cfg_locales['zh-CN']):zhCNLocale;
        const zhTWMergeLocale = cfg_locales['zh-TW']?Object.assign(zhTWLocale, cfg_locales['zh-TW']):zhTWLocale;
        const enUSMergeLocale = cfg_locales['en-US']?Object.assign(enUSLocale, cfg_locales['en-US']):enUSLocale;
        Vue.locale('zh-CN', zhCNMergeLocale, null);
        Vue.locale('zh-TW', zhTWMergeLocale, null);
        Vue.locale('en-US', enUSMergeLocale, null);


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
        Vue.component('Page', Page); //配合Navbar,Tabbar使用
        Vue.component('ButtonBar', ButtonBar);
        Vue.component('Tabs', Tabs);
        Vue.component('TabsStriped', TabsStriped);

        //
        Vue.component('Content', Content);
        Vue.component('Header', Header);
        Vue.component('Footer', Footer);
        Vue.component('SubHeader', SubHeader);
        Vue.component('SubFooter', SubFooter);


        //Other
        Vue.component('Editor', Editor);


        //Directive
        Vue.directive("drag", dragable);
        Vue.directive("focus", focusable);
        // Vue.directive("gesture", focusable);


        //Filter
        Vue.filter('formatdate', formatdate);
        Vue.filter('formattime', formattime);
        Vue.filter('capitalize', capitalize);
        Vue.filter('viewsubstr', viewsubstr);


        //Global
        Vue.prototype.$version  = _VERSION;
        Vue.prototype.$set_locale = function (locale) {
            Vue.config.lang = locale;
        };
        Vue.prototype.$set_debug = function (debug) {
            Vue.config.debug = debug;
        };
        Vue.prototype.$info    = function (...message) {
            if(!message) return;
            let len = message.length;
            if(Vue.config.debug) {
                if(len==1)
                    console.log('View(' + _VERSION + '): ', message[0]);
                else
                    console.log('View(' + _VERSION + '): ', message);
            }
        };
        Vue.prototype.$error    = function (...message) {
            if(!message) return;
            let len = message.length;
            if(Vue.config.debug) {
                if(len==1)
                    console.error('View(' + _VERSION + '): ', message[0]);
                else
                    console.error('View(' + _VERSION + '): ', message);
            }
        };


        //Service
        Vue.prototype.$service  = Service;



        //Begin: 一些兼容性代码

        //iOS系统中激活:active状态
        document.body.addEventListener('touchstart', function () {});

        // for iOS 10, users can now pinch-to-zoom even when a website sets user-scalable=no in the viewport.
        document.documentElement.addEventListener('touchstart', (e) => {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        }, false);

        // iOS Safari - Disable double click to zoom
        if (is_ios()) {
            let lastTouchEnd = 0;
            document.documentElement.addEventListener('touchend', (e) => {
                let now = (new Date()).getTime();
                if (now - lastTouchEnd < 300) {
                    e.preventDefault();
                }
                lastTouchEnd = now;
            }, false);
        }

        //End: 一些兼容性代码
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
export { ButtonBar };
export { Tabs };
export { TabsStriped };
export { Content };
export { Header };
export { Footer };
export { SubHeader };
export { SubFooter };

//Other
export { Editor };

//--------------------------------------------------------------------------
