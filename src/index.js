//--------------------------------------------------------------------------

//
import './style/index.scss';

//--------------------------------------------------------------------------

// VueI18n
import VueI18n from 'vue-i18n';
import zhCNLocale from './lang/zh_CN';
import zhTWLocale from './lang/zh_TW';
import enUSLocale from './lang/en_US';

// VueScroller & VSwipe
import VueScroller from 'vue-scroller';
import VSwipe from 'vswipe';

//--------------------------------------------------------------------------

//Basic
import Icon from './component/icon';
import Button from './component/button';
import { LinerLeft, LinerRight, LinerTop, LinerBottom } from './component/liner';

//View
import Badge from './component/badge';
import Progress from './component/progress';
import { Condition, ConditionItem, DropdownCondition } from './component/condition';
import Stars from './component/stars';

//Form
import Input from './component/input';
import Radio from './component/radio';
import { Check, CheckItem } from './component/check';
import Toggle from './component/toggle';
import { Select, VSelect } from './component/select';
import Slider from './component/slider';
import Cascade from './component/cascade';
import Search from './component/search';
import DatePicker from './component/datepicker';
import RegionPicker from './component/regionpicker';
import Upload from './component/upload';
import Form from './component/form';

//Layout
import { List, Item } from './component/list';
import { Row, Col } from './component/grid';
import Cells from './component/cells';
import { Panel, Card } from './component/panel';
import { Accordion, AccordionItem } from './component/accordion';
import { Swiper, SwiperItem } from './component/swiper';
import Scroller from './component/scroller';
import Scalable from './component/scalable';

//Navigation
import Navbar from './component/navbar';
import Tabbar from './component/tabbar';
import { Page, Content, Header, Footer, SubHeader, SubFooter } from './component/container';
import Tabs from './component/tabs';
import ActionBar from './component/actionbar';
import ButtonBar from './component/buttonbar';

//Other
import Editor from './component/editor';

//Service
import Service from './service';
import LocalStorage from './util/common-locs';
import SessionStorage from './util/common-sess';
import $backdrop from './service/backdrop';
import { $loading, $toast } from './service/loading';
import $actionsheet from './service/actionsheet';
import $cascadepanel from './service/cascadepanel';
import $sidebar from './service/sidebar';
import $dialog from './service/dialog';
import $popup from './service/popup';
import $modal from './service/modal';

//Directive
import dragable from './directive/dragable';
import focusable from './directive/focusable';

//Filter
import formatdate from './filter/formatdate';
import formattime from './filter/formattime';
import formatdatetime from './filter/formatdatetime';
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
    LinerLeft,
    LinerRight,
    LinerTop,
    LinerBottom,

    //View
    Badge,
    Progress,
    Condition,
    ConditionItem,
    DropdownCondition,
    Stars,

    //Layout
    List,
    Item,
    Row,
    Col,
    Cells,
    Panel,
    Card,
    Accordion,
    AccordionItem,
    Swiper,
    SwiperItem,
    Scroller,
    Scalable,

    //Form
    Input,
    Radio,
    Check,
    CheckItem,
    Toggle,
    Select,
    VSelect,
    Slider,
    Search,
    Cascade,
    DatePicker,
    RegionPicker,
    Upload,
    Form,

    //Navigation
    Navbar,
    Tabbar,
    Page,
    ActionBar,
    ButtonBar,
    Tabs,
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

        //
        Vue.use(VueScroller);
        Vue.use(VSwipe);

        //Basic
        Vue.component('Icon', Icon);
        Vue.component('Button', Button);
        Vue.component('LinerLeft', LinerLeft);
        Vue.component('LinerRight', LinerRight);
        Vue.component('LinerTop', LinerTop);
        Vue.component('LinerBottom', LinerBottom);


        //View
        Vue.component('Badge', Badge);
        Vue.component('Progress', Progress);
        Vue.component('Condition', Condition);
        Vue.component('ConditionItem', ConditionItem);
        Vue.component('DropdownCondition', DropdownCondition);
        Vue.component('Stars', Stars);


        //Layout
        Vue.component('List', List);
        Vue.component('Item', Item);
        Vue.component('Row', Row);
        Vue.component('Col', Col);
        Vue.component('Cells', Cells);
        Vue.component('Panel', Panel);
        Vue.component('Card', Card);
        Vue.component('Accordion', Accordion);
        Vue.component('AccordionItem', AccordionItem);
        Vue.component('Swiper', Swiper);
        Vue.component('SwiperItem', SwiperItem);
        Vue.component('Scroller', Scroller);
        Vue.component('Scalable', Scalable);


        //Form
        Vue.component('Input', Input);
        Vue.component('Radio', Radio);
        Vue.component('Check', Check);
        Vue.component('CheckItem', CheckItem);
        Vue.component('Toggle', Toggle);
        Vue.component('Select', Select);
        Vue.component('VSelect', VSelect);
        Vue.component('Slider', Slider);
        Vue.component('Search', Search);
        Vue.component('Cascade', Cascade);
        Vue.component('DatePicker', DatePicker);
        Vue.component('RegionPicker', RegionPicker);
        Vue.component('Upload', Upload);
        Vue.component('Form', Form);


        //Navigation
        Vue.component('Navbar', Navbar);
        Vue.component('Tabbar', Tabbar);
        Vue.component('Page', Page); //Page,Navbar,Tabbar配合使用
        //
        Vue.component('ActionBar', ActionBar);
        Vue.component('ButtonBar', ButtonBar);
        Vue.component('Tabs', Tabs);
        //
        Vue.component('Content', Content);
        Vue.component('Header', Header);
        Vue.component('Footer', Footer);
        Vue.component('SubHeader', SubHeader);
        Vue.component('SubFooter', SubFooter); //Content,Header,Footer配合使用


        //Other
        Vue.component('Editor', Editor);


        //Directive
        Vue.directive("drag", dragable);
        Vue.directive("focus", focusable);


        //Filter
        Vue.filter('formatdate', formatdate);
        Vue.filter('formattime', formattime);
        Vue.filter('formatdatetime', formatdatetime);
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

        //
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
        Vue.prototype.$service      = Service;
        Vue.prototype.$storagel     = LocalStorage;
        Vue.prototype.$storages     = SessionStorage;
        Vue.prototype.$backdrop     = $backdrop;
        Vue.prototype.$loading      = $loading;
        Vue.prototype.$toast        = $toast;
        Vue.prototype.$cascadepanel = $cascadepanel;
        Vue.prototype.$actionsheet  = $actionsheet;
        Vue.prototype.$sidebar      = $sidebar;
        Vue.prototype.$dialog       = $dialog;
        Vue.prototype.$popup        = $popup;
        Vue.prototype.$modal        = $modal;


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
export { LinerLeft };
export { LinerRight };
export { LinerTop };
export { LinerBottom };

//View
export { Badge };
export { Progress };
export { Condition };
export { ConditionItem };
export { DropdownCondition };
export { Stars };

//Layout
export { List };
export { Item };
export { Row };
export { Col };
export { Cells };
export { Panel };
export { Card };
export { Accordion };
export { AccordionItem };
export { Swiper };
export { SwiperItem };
export { Scroller };
export { Scalable };

//Form
export { Input };
export { Radio };
export { Check };
export { CheckItem };
export { Toggle };
export { Select };
export { VSelect };
export { Slider };
export { Search };
export { Cascade };
export { DatePicker };
export { RegionPicker };
export { Upload };
export { Form };

//Navigation
export { Navbar };
export { Tabbar };
export { Page };
export { ActionBar };
export { ButtonBar };
export { Tabs };
export { Content };
export { Header };
export { Footer };
export { SubHeader };
export { SubFooter };

//Other
export { Editor };

//--------------------------------------------------------------------------
